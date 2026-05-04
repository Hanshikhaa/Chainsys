import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useAppContext } from '../../context/useAppContext';
import { ShoppingCart, Eye, Filter, Heart, RotateCcw } from 'lucide-react';
import { getSafeImageUrl } from '../../utils/imageHandler';

const Products = () => {
    const { products, categories, vendors, addToCart, wishlist, addToWishlist, removeFromWishlist } = useAppContext();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const categoryFilter = params.get('category');
    const subCategoryFilter = params.get('subCategory');
    const subTypeFilter = params.get('subType');
    const tagFilter = params.get('tag');
    const searchFilter = params.get('search');

    let filteredProducts = [...products];

    if (categoryFilter) {
        filteredProducts = filteredProducts.filter(p => p.category === categoryFilter);
    }

    if (subCategoryFilter) {
        filteredProducts = filteredProducts.filter(p => p.subCategory === subCategoryFilter);
    }

    if (subTypeFilter) {
        filteredProducts = filteredProducts.filter(p => p.subType === subTypeFilter);
    }

    if (tagFilter === 'new') {
        filteredProducts = filteredProducts.filter(p => p.tags && p.tags.includes('new'));
    } else if (tagFilter === 'deals') {
        filteredProducts = filteredProducts.filter(p => p.tags && p.tags.includes('deals'));
        // If no explicit deals tag, show items under a threshold
        if (filteredProducts.length === 0) {
            filteredProducts = products.filter(p => p.price < 5000).slice(0, 20);
        }
    }

    if (searchFilter) {
        const query = searchFilter.toLowerCase();
        filteredProducts = filteredProducts.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            (p.subCategory && p.subCategory.toLowerCase().includes(query)) ||
            (p.subType && p.subType.toLowerCase().includes(query))
        );
    }

    return (
        <div>
            {/* Colorful Banner */}
            <div style={{ background: 'var(--p-blue)', padding: '4rem 0', marginBottom: '2rem', borderBottom: '1px solid var(--glass-border)' }}>
                <div className="container flex-between" style={{ alignItems: 'flex-end' }}>
                    <div>
                        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                            {categoryFilter ? categoryFilter : searchFilter ? `Search results for "${searchFilter}"` : 'All Products'}
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{filteredProducts.length} items found in inventory</p>
                    </div>
                <div className="flex-between" style={{ gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.6rem 1.25rem', background: 'white', border: '1px solid var(--p-blue)', borderRadius: '100px' }}>
                        <Filter size={16} color="var(--primary-color)" />
                        <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)' }}>Curation:</span>
                        <select
                            onChange={(e) => window.location.href = e.target.value === 'All' ? '/products' : `/products?category=${e.target.value}`}
                            value={categoryFilter || 'All'}
                            style={{ border: 'none', background: 'none', fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}
                        >
                            <option value="All">All Categories</option>
                            {categories.map(cat => <option key={cat.id} value={cat.name}>{cat.name}</option>)}
                        </select>
                    </div>
                </div>
            </div>
            </div>

            <div className="container" style={{ paddingBottom: '6rem' }}>
                <div className="grid-auto-fit">
                    {filteredProducts.length > 0 ? filteredProducts.map(product => (
                    <div key={product.id} className="card product-card">
                        <div style={{ position: 'relative', overflow: 'hidden' }}>
                            <img
                                src={getSafeImageUrl(product.image || product.images?.[0] || product.thumbnail)}
                                alt={product.name}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = `https://dummyjson.com/image/600x400?text=${encodeURIComponent(product.name)}`;
                                }}
                                style={{ width: '100%', height: '260px', objectFit: 'cover', transition: 'transform 0.5s' }}
                            />
                            <div className="product-actions">
                                <Link to={`/products/${product.id}`} className="action-btn"><Eye size={18} /></Link>
                                {wishlist.find(item => item.id === product.id) ? (
                                    <button onClick={() => removeFromWishlist(product.id)} className="action-btn" style={{ background: '#be123c' }}><Heart size={18} fill="white" /></button>
                                ) : (
                                    <button onClick={() => addToWishlist(product)} className="action-btn"><Heart size={18} /></button>
                                )}
                                <button onClick={() => addToCart(product)} className="action-btn"><ShoppingCart size={18} /></button>
                            </div>
                        </div>
                        <div style={{ padding: '1.25rem' }}>
                            <div className="flex-between" style={{ marginBottom: '0.5rem' }}>
                                <div style={{ display: 'flex', gap: '0.4rem' }}>
                                    <span className="badge badge-pastel-blue">{product.category}</span>
                                </div>
                                <span style={{ fontWeight: '800', fontSize: '1.25rem', color: 'var(--primary-color)' }}>₹{product.price.toLocaleString('en-IN')}</span>
                            </div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{product.name}</h3>
                            <div style={{ fontSize: '0.8rem', color: 'var(--primary-color)', fontWeight: '600', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span>Sold by: {vendors.find(v => v.id === product.vendor)?.name || 'Bluvanta Direct'}</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)' }}><RotateCcw size={14} /> 30 Days Return</span>
                            </div>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', height: '2.5rem' }}>
                                {product.description}
                            </p>
                            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '0.8rem', fontWeight: '600' }}>Stock: <span style={{ color: product.stock < product.reorderLevel ? '#ef4444' : '#22c55e' }}>{product.stock} units</span></span>
                                <Link to={`/products/${product.id}`} style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--primary-color)', textDecoration: 'none' }}>View Detail →</Link>
                            </div>
                        </div>
                    </div>
                )) : (
                    <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '5rem 0' }}>
                        <h3>No products found matching your criteria.</h3>
                    </div>
                )}
                </div>
            </div>

            <style>{`
                .product-card:hover img { transform: scale(1.1); }
                .product-actions {
                    position: absolute;
                    bottom: -50px;
                    left: 0;
                    right: 0;
                    background: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(10px);
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    padding: 0.75rem;
                    transition: bottom 0.3s var(--ease-smooth);
                }
                .product-card:hover .product-actions { bottom: 0; }
                .action-btn {
                    background: var(--primary-color);
                    color: white;
                    border: none;
                    width: 36px; height: 36px;
                    border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                    cursor: pointer;
                    transition: transform 0.2s;
                    text-decoration: none;
                }
                .action-btn:hover { 
                    transform: scale(1.1); 
                    background: var(--text-main); 
                    color: var(--card-bg); 
                }
            `}</style>
        </div>
    );
};

export default Products;
