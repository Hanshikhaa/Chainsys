import React from 'react';
import { useAppContext } from '../../context/useAppContext';
import { Link } from 'react-router-dom';
import { ShoppingCart, Trash2, Heart, ArrowLeft } from 'lucide-react';
import { getSafeImageUrl } from '../../utils/imageHandler';

const Wishlist = () => {
    const { wishlist, removeFromWishlist, addToCart } = useAppContext();

    if (wishlist.length === 0) {
        return (
            <div className="container section-padding animate-fade" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Heart size={64} style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', opacity: 0.3 }} />
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Your wishlist is empty</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '400px' }}>Save items you love to find them easily and move them to your cart when you're ready.</p>
                <Link to="/products" className="btn">Start Shopping</Link>
            </div>
        );
    }

    return (
        <div className="container section-padding animate-fade" style={{ minHeight: '80vh' }}>
            <div style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Link to="/products" className="icon-btn-p" style={{ background: 'var(--card-bg)', border: '1px solid var(--glass-border)' }}>
                    <ArrowLeft size={20} />
                </Link>
                <h1 style={{ fontSize: '3rem', letterSpacing: '-1.5px' }}>My Wishlist</h1>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {wishlist.map(product => (
                    <div key={product.id} className="card product-card animate-slide-up" style={{ padding: '0' }}>
                        <div style={{ height: '300px', overflow: 'hidden', position: 'relative' }}>
                            <img src={getSafeImageUrl(product.image || product.images?.[0] || product.thumbnail)} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <button
                                onClick={() => removeFromWishlist(product.id)}
                                className="heart-btn"
                                style={{ color: '#be123c', background: 'rgba(255,255,255,0.9)', border: 'none' }}
                            >
                                <Heart size={18} fill="#be123c" />
                            </button>
                        </div>
                        <div style={{ padding: '1.5rem' }}>
                            <span className="badge badge-pastel-blue" style={{ marginBottom: '0.5rem' }}>{product.category}</span>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{product.name}</h3>
                            <p style={{ color: 'var(--primary-color)', fontWeight: '800', fontSize: '1.2rem', marginBottom: '1.5rem' }}>₹{product.price.toLocaleString('en-IN')}</p>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <button
                                    onClick={() => {
                                        addToCart(product);
                                        removeFromWishlist(product.id);
                                    }}
                                    className="btn"
                                    style={{ flex: 1, justifyContent: 'center' }}
                                >
                                    <ShoppingCart size={18} /> Move to Cart
                                </button>
                                <button
                                    onClick={() => removeFromWishlist(product.id)}
                                    className="icon-btn-p"
                                    style={{ background: 'var(--pastel-rose-bg)', color: 'var(--pastel-rose-text)', width: '48px', height: '48px' }}
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
