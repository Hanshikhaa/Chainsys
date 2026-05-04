import React from 'react';
import { useAppContext } from '../../context/useAppContext';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { getSafeImageUrl } from '../../utils/imageHandler';

const Cart = () => {
    const { cart, updateQuantity, removeFromCart } = useAppContext();
    const navigate = useNavigate();

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = subtotal > 500 ? 0 : 50;
    const total = subtotal + shipping;

    if (cart.length === 0) return (
        <div className="container section-padding text-center">
            <ShoppingBag size={80} color="var(--text-muted)" style={{ margin: '2rem 0', opacity: 0.3 }} />
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Your procurement cart is empty</h2>
            <Link to="/products" className="btn btn-primary" style={{ padding: '0.8rem 2.5rem' }}>Browse Products</Link>
        </div>
    );

    return (
        <div>
            {/* Colorful Banner */}
            <div style={{ background: 'var(--p-rose)', padding: '4rem 0', marginBottom: '2.5rem', borderBottom: '1px solid var(--glass-border)' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', margin: 0, color: 'var(--text-main)' }}>Procurement Cart</h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '0.5rem' }}>Review your selected items</p>
                </div>
            </div>
            
            <div className="container section-padding" style={{ paddingTop: '0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '2.5rem', alignItems: 'start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {cart.map(item => (
                        <div key={item.id} className="card" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                            <img src={getSafeImageUrl(item.image || item.images?.[0] || item.thumbnail)} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }} />
                            <div style={{ flex: 1 }}>
                                <div className="flex-between">
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{item.name}</h3>
                                    <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}><Trash2 size={18} /></button>
                                </div>
                                <div className="flex-between" style={{ alignItems: 'flex-end', marginTop: '1rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '0.25rem' }}>
                                        <button onClick={() => updateQuantity(item.id, -1)} className="qty-btn"><Minus size={14} /></button>
                                        <span style={{ fontWeight: '700' }}>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)} className="qty-btn"><Plus size={14} /></button>
                                    </div>
                                    <span style={{ fontWeight: '800', color: 'var(--primary-color)' }}>₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="card" style={{ padding: '2rem', position: 'sticky', top: '100px' }}>
                    <h3 style={{ marginBottom: '1.5rem' }}>Order Summary</h3>
                    <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div className="flex-between" style={{ color: 'var(--text-muted)' }}><span>Subtotal</span><span>₹{subtotal.toLocaleString('en-IN')}</span></div>
                        <div className="flex-between" style={{ color: 'var(--text-muted)' }}><span>GST (18%)</span><span>₹{(subtotal * 0.18).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span></div>
                        <div className="flex-between" style={{ color: 'var(--text-muted)' }}><span>Shipping</span><span>{shipping === 0 ? <span style={{ color: '#22c55e' }}>FREE</span> : `₹${shipping}`}</span></div>
                        <div style={{ margin: '0.5rem 0', padding: '0.75rem', background: 'var(--glass-bg)', borderRadius: '8px', border: '1px dashed var(--border-color)', display: 'flex', gap: '0.5rem' }}>
                            <input type="text" placeholder="Promo Code" style={{ background: 'none', border: 'none', padding: 0, fontSize: '0.85rem', flex: 1, outline: 'none' }} />
                            <button style={{ background: 'none', border: 'none', color: 'var(--primary-color)', fontWeight: '700', fontSize: '0.85rem', cursor: 'pointer' }}>Apply</button>
                        </div>
                    </div>
                    <div className="flex-between" style={{ marginBottom: '1.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
                        <span style={{ fontSize: '1.25rem', fontWeight: '800' }}>Grand Total</span>
                        <span style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-color)' }}>₹{(total + (subtotal * 0.18)).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                    </div>

                    <div style={{ padding: '1.25rem', background: 'var(--glass-bg)', borderRadius: '16px', border: '1px solid var(--glass-border)', marginBottom: '1.5rem' }}>
                        <div className="flex-between" style={{ marginBottom: '0.75rem' }}>
                            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Shipping To</h4>
                            <button style={{ color: 'var(--primary-color)', fontSize: '0.8rem', fontWeight: '800', border: 'none', background: 'none', cursor: 'pointer' }}>Edit</button>
                        </div>
                        <p style={{ fontSize: '0.9rem', fontWeight: '700', margin: 0 }}>Harsh Vardhan</p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.25rem 0 0 0' }}>Prestige Tech Park, Outer Ring Rd, Bengaluru, 560103</p>
                    </div>

                    <button onClick={() => navigate('/checkout')} className="btn btn-primary" style={{ width: '100%', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        Proceed to Checkout <ArrowRight size={20} />
                    </button>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '1rem' }}>
                        Secure professional-grade checkout process.
                    </p>
                </div>
            </div>
            </div>
            <style>{`.qty-btn { background: none; border: none; padding: 0.5rem; cursor: pointer; color: var(--text-main); }.text-center { text-align: center; }`}</style>
        </div>
    );
};

export default Cart;
