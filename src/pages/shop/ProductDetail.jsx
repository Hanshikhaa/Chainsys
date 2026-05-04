import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppContext } from '../../context/useAppContext';
import { ShoppingCart, ArrowLeft, ShieldCheck, Truck, RefreshCw, Database, Star, RotateCcw } from 'lucide-react';
import { getSafeImageUrl } from '../../utils/imageHandler';

const ProductDetail = () => {
    const { id } = useParams();
    const { products, vendors, addToCart, user } = useAppContext();
    const product = products.find(p => p.id === id);
    const vendor = vendors.find(v => v.id === product?.vendor);

    // Safety check for HMR and potential missing properties
    const [selectedSize, setSelectedSize] = React.useState(() => {
        if (!product || !product.sizes || product.sizes.length === 0) return null;
        return product.sizes[Math.floor(product.sizes.length / 2)];
    });

    if (!product) return <div className="container section-padding">Product not found.</div>;

    return (
        <div className="container section-padding animate-fade">
            <Link to="/products" className="flex-between" style={{ width: 'fit-content', gap: '0.5rem', textDecoration: 'none', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                <ArrowLeft size={18} /> Back to Products
            </Link>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
                <div className="card" style={{ padding: '3rem', background: 'var(--card-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                        src={getSafeImageUrl(product.image || product.images?.[0] || product.thumbnail)}
                        alt={product.name}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://dummyjson.com/image/600x400?text=${encodeURIComponent(product.name)}`;
                        }}
                        style={{ width: '100%', height: 'auto', borderRadius: '24px', maxHeight: '500px', objectFit: 'contain' }}
                    />
                </div>

                <div className="product-info">
                    <span className="badge badge-pastel-blue" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>{product.category}</span>
                    <h1 className="text-soft-gradient" style={{ fontSize: '4rem', margin: '1.5rem 0 1rem 0', fontWeight: '950', lineHeight: 1.1 }}>{product.name}</h1>
                    <div style={{ fontSize: '1.1rem', color: 'var(--primary-color)', fontWeight: '700', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Star size={20} fill="var(--primary-color)" color="var(--primary-color)" /> Professional Choice • {vendor?.name || 'Bluvanta Direct'}
                    </div>

                    {user && user.role === 'admin' && vendor && (
                        <div className="card" style={{ padding: '1.5rem', marginBottom: '2rem', border: '1px solid var(--primary-color)', background: 'var(--pastel-blue-bg)' }}>
                            <h4 style={{ color: 'var(--pastel-blue-text)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Database size={18} /> Vendor Intelligence (Admin Only)
                            </h4>
                            <div style={{ fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', color: 'var(--text-main)' }}>
                                <p><strong>Address:</strong> {vendor.address}</p>
                                <p><strong>Contact:</strong> {vendor.contact}</p>
                                <p><strong>Phone:</strong> {vendor.phone}</p>
                            </div>
                        </div>
                    )}

                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', marginBottom: '2rem' }}>
                        <span style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary-color)' }}>₹{product.price?.toLocaleString('en-IN') || 'N/A'}</span>
                        {product.cost && <span style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>Cost Base: ₹{product.cost.toLocaleString('en-IN')}</span>}
                    </div>

                    {product.sizes && product.sizes.length > 0 && (
                        <div style={{ marginBottom: '2rem' }}>
                            <h4 style={{ fontSize: '0.9rem', marginBottom: '0.75rem', color: 'var(--text-muted)' }}>Select Size:</h4>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {product.sizes.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        style={{
                                            padding: '0.75rem 1.25rem',
                                            borderRadius: '10px',
                                            border: `2px solid ${selectedSize === size ? 'var(--primary-color)' : 'var(--glass-border)'}`,
                                            background: selectedSize === size ? 'var(--pastel-blue-bg)' : 'var(--card-bg)',
                                            color: selectedSize === size ? 'var(--pastel-blue-text)' : 'var(--text-main)',
                                            fontWeight: '800',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s',
                                            minWidth: '60px'
                                        }}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-main)', marginBottom: '2.5rem' }}>
                        {product.description}
                    </p>

                    <div className="inventory-status card" style={{ padding: '1.5rem', marginBottom: '2.5rem', borderLeft: `6px solid ${product.stock < (product.reorderLevel || 10) ? '#ef4444' : '#22c55e'}` }}>
                        <div className="flex-between" style={{ marginBottom: '0.5rem' }}>
                            <span style={{ fontWeight: '600' }}>Current Stock</span>
                            <span style={{ fontWeight: '700', fontSize: '1.2rem', color: product.stock < (product.reorderLevel || 10) ? '#ef4444' : '#22c55e' }}>{product.stock} Units</span>
                        </div>
                        <div className="flex-between">
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Reorder Level: {product.reorderLevel || 10} Units</span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
                        <button onClick={() => addToCart(product)} className="btn btn-primary" style={{ flex: 1, padding: '1.2rem', fontSize: '1.1rem', justifyContent: 'center' }}>
                            <ShoppingCart size={22} /> Add to Procurement Cart
                        </button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div className="trust-item"><ShieldCheck size={20} color="var(--primary-color)" /> <span>Enterprise Verified</span></div>
                        <div className="trust-item"><Truck size={20} color="var(--primary-color)" /> <span>Priority Logistics</span></div>
                        <div className="trust-item"><RefreshCw size={20} color="var(--primary-color)" /> <span>Auto-update Inventory</span></div>
                        <div className="trust-item"><RotateCcw size={20} color="var(--primary-color)" /> <span>30 Days Return Policy</span></div>
                    </div>
                </div>
            </div>

            <style>{`.trust-item { display: flex; align-items: center; gap: 0.75rem; color: var(--text-muted); font-size: 0.9rem; font-weight: 500; }`}</style>
        </div>
    );
};

export default ProductDetail;
