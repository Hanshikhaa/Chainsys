import React, { useState, useEffect } from 'react';
import { INITIAL_CATEGORIES, INITIAL_PRODUCTS, INITIAL_VENDORS, DEFAULT_CART } from './data';
import { AppContext } from './useAppContext';

export const AppProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')) || null);
    
    const [cart, setCart] = useState(() => {
        const currentUser = JSON.parse(sessionStorage.getItem('user'));
        if (currentUser) {
            return JSON.parse(localStorage.getItem(`cart_${currentUser.email || currentUser.username}`)) || [];
        }
        return JSON.parse(localStorage.getItem('cart')) || DEFAULT_CART;
    });

    const [wishlist, setWishlist] = useState(() => {
        const currentUser = JSON.parse(sessionStorage.getItem('user'));
        if (currentUser) {
            return JSON.parse(localStorage.getItem(`wishlist_${currentUser.email || currentUser.username}`)) || [];
        }
        return JSON.parse(localStorage.getItem('wishlist')) || [];
    });
    const [products, setProducts] = useState(() => {
        try {
            const stored = localStorage.getItem('products_v10');
            if (!stored) return INITIAL_PRODUCTS;
            const storedProducts = JSON.parse(stored);
            // Keep ONLY user-added products from storage (starting with p_new_)
            // This ensures the base catalog from data.js takes precedence for updates
            const userProducts = (storedProducts || []).filter(p => String(p.id).startsWith('p_new_'));
            return [...INITIAL_PRODUCTS, ...userProducts];
        } catch (error) {
            console.error("Error loading products from storage:", error);
            return INITIAL_PRODUCTS;
        }
    });
    const [orders, setOrders] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('orders')) || [];
        } catch (e) { return []; }
    });
    const [vendors, setVendors] = useState(() => {
        try {
            const stored = localStorage.getItem('vendors_v1');
            if (stored) return JSON.parse(stored);
            return INITIAL_VENDORS;
        } catch (e) { return INITIAL_VENDORS; }
    });
    const [inventoryHistory, setInventoryHistory] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('inventoryHistory')) || [];
        } catch (e) { return []; }
    });
    const [inquiries, setInquiries] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('inquiries')) || [];
        } catch (e) { return []; }
    });
    const [feedbacks, setFeedbacks] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('feedbacks')) || [];
        } catch (e) { return []; }
    });
    const [notification, setNotification] = useState({ visible: false, message: '', type: 'info', onConfirm: null });

    const categories = INITIAL_CATEGORIES;

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => { 
        if (user) {
            localStorage.setItem(`cart_${user.email || user.username}`, JSON.stringify(cart)); 
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart, user]);
    useEffect(() => { localStorage.setItem('products_v10', JSON.stringify(products)); }, [products]);
    useEffect(() => { localStorage.setItem('orders', JSON.stringify(orders)); }, [orders]);
    useEffect(() => { localStorage.setItem('inventoryHistory', JSON.stringify(inventoryHistory)); }, [inventoryHistory]);
    useEffect(() => { localStorage.setItem('vendors_v1', JSON.stringify(vendors)); }, [vendors]);
    useEffect(() => { localStorage.setItem('inquiries', JSON.stringify(inquiries)); }, [inquiries]);
    useEffect(() => { localStorage.setItem('feedbacks', JSON.stringify(feedbacks)); }, [feedbacks]);
    useEffect(() => { 
        if (user) {
            localStorage.setItem(`wishlist_${user.email || user.username}`, JSON.stringify(wishlist)); 
        } else {
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        }
    }, [wishlist, user]);

    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

    const addToCart = (product) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        showPopup(`"${product.name}" successfully added to procurement cart!`, 'success');
    };

    const removeFromCart = (productId) => { setCart(prev => prev.filter(item => item.id !== productId)); };

    const updateQuantity = (productId, delta) => {
        setCart(prev => prev.map(item => {
            if (item.id === productId) {
                const newQty = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQty };
            }
            return item;
        }));
    };

    const clearCart = () => setCart([]);

    const addToWishlist = (product) => {
        setWishlist(prev => {
            if (prev.find(item => item.id === product.id)) return prev;
            return [...prev, product];
        });
        showPopup(`"${product.name}" successfully added to your wishlist!`, 'success');
    };

    const removeFromWishlist = (productId) => {
        setWishlist(prev => prev.filter(item => item.id !== productId));
    };

    const placeOrder = (orderDetails) => {
        const newOrder = {
            id: `ORD_${Date.now()}`,
            date: new Date().toISOString(),
            status: "Pending",
            ...orderDetails,
            items: [...cart]
        };
        setOrders(prev => [...prev, newOrder]);
        clearCart();
        return newOrder;
    };

    const processGRN = (orderId, itemsReceived) => {
        setProducts(prevProducts => prevProducts.map(prod => {
            const received = itemsReceived.find(item => item.productId === prod.id);
            if (received) {
                return { ...prod, stock: prod.stock + received.quantity };
            }
            return prod;
        }));

        const historyEntries = itemsReceived.map(item => ({
            date: new Date().toISOString(),
            productId: item.productId,
            change: item.quantity,
            type: "GRN",
            orderId: orderId
        }));
        setInventoryHistory(prev => [...prev, ...historyEntries]);

        setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: "Received" } : o));
    };

    const requestOrderReturn = (orderId, returnDetails) => {
        setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: "Return Requested", returnDetails } : o));
    };


    const login = (credentials) => {
        let userData = { ...credentials };
        // Admin simulation
        if (credentials.email === 'admin@bluvanta.com') {
            userData.role = 'admin';
            userData.name = 'System Administrator';
        } else {
            userData.role = 'user';
        }
        setUser(userData);
        sessionStorage.setItem('user', JSON.stringify(userData));

        // Load user specific data
        const userCart = JSON.parse(localStorage.getItem(`cart_${userData.email || userData.username}`)) || [];
        const userWishlist = JSON.parse(localStorage.getItem(`wishlist_${userData.email || userData.username}`)) || [];
        setCart(userCart);
        setWishlist(userWishlist);
    };

    const addProduct = (newProduct) => {
        const productWithId = {
            ...newProduct,
            id: `p_new_${Date.now()}`,
            stock: Number(newProduct.stock),
            price: Number(newProduct.price),
            cost: Number(newProduct.cost),
            reorderLevel: 10
        };
        const updatedProducts = [...products, productWithId];
        setProducts(updatedProducts);
        localStorage.setItem('products_v10', JSON.stringify(updatedProducts));
    };

    const addVendor = (newVendor) => {
        const vendorWithId = {
            ...newVendor,
            id: `v_new_${Date.now()}`,
        };
        const updatedVendors = [...vendors, vendorWithId];
        setVendors(updatedVendors);
        localStorage.setItem('vendors_v1', JSON.stringify(updatedVendors));
    };

    const logout = () => {
        setUser(null);
        sessionStorage.removeItem('user');
        setCart([]);
        setWishlist([]);
    };
    
    const addInquiry = (inquiry) => {
        setInquiries(prev => [{
            id: `INQ_${Date.now()}`,
            date: new Date().toISOString(),
            status: 'Open',
            replies: [],
             ...inquiry
        }, ...prev]);
    };

    const replyToInquiry = (inquiryId, replyText) => {
        setInquiries(prev => prev.map(inq => 
            inq.id === inquiryId 
                ? { 
                    ...inq, 
                    status: 'Responded', 
                    unreadByCandidate: true,
                    replies: [...inq.replies, { text: replyText, date: new Date().toISOString(), by: 'Admin' }] 
                  } 
                : inq
        ));
    };

    const acknowledgeResponse = (inquiryId) => {
        setInquiries(prev => prev.map(inq => 
            inq.id === inquiryId ? { ...inq, unreadByCandidate: false } : inq
        ));
    };

    const deleteInquiry = (id) => {
        setInquiries(prev => prev.filter(inq => inq.id !== id));
    };

    const addFeedback = (feedback) => {
        setFeedbacks(prev => [{
            id: `FB_${Date.now()}`,
            date: new Date().toISOString(),
            ...feedback
        }, ...prev]);
    };

    const deleteFeedback = (id) => {
        setFeedbacks(prev => prev.filter(fb => fb.id !== id));
    };

    const verifyFeedback = (id) => {
        setFeedbacks(prev => prev.map(fb => 
            fb.id === id ? { ...fb, verified: !fb.verified } : fb
        ));
    };

    const showPopup = (content, type = 'info', onConfirm = null, title = null, isOrder = false) => {
        if (typeof content === 'object' && content !== null) {
            setNotification({ visible: true, ...content });
        } else {
            setNotification({ visible: true, message: content, type, onConfirm, title, isOrder });
        }
    };

    const hidePopup = () => {
        setNotification(prev => ({ ...prev, visible: false }));
    };

    return (
        <AppContext.Provider value={{
            theme, toggleTheme,
            cart, addToCart, removeFromCart, updateQuantity, clearCart,
            wishlist, addToWishlist, removeFromWishlist,
            user, login, logout,
            products, categories, vendors, orders, inventoryHistory, inquiries, feedbacks,
            placeOrder, processGRN, requestOrderReturn, addProduct, addVendor, addInquiry, replyToInquiry, acknowledgeResponse, deleteInquiry,
            addFeedback, deleteFeedback, verifyFeedback,
            notification, showPopup, hidePopup
        }}>
            {children}
        </AppContext.Provider>
    );
};

