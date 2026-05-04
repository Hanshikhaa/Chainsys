import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../context/useAppContext';
import { useNavigate } from 'react-router-dom';
import { CreditCard, ShieldCheck, MapPin } from 'lucide-react';

const Checkout = () => {
    const { cart, user, placeOrder, showPopup } = useAppContext();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ fullName: user?.name || '', address: '', paymentMethod: 'Card', coupon: '' });
    const [couponApplied, setCouponApplied] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (cart.length === 0 && !isSubmitting) {
            showPopup("Your procurement cart is empty. Please select at least one product before proceeding to checkout.", "error");
            navigate('/products');
        }
    }, [cart, navigate, showPopup, isSubmitting]);

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const tax = subtotal * 0.18;
    const shipping = subtotal > 5000 ? 0 : 150;
    const discount = couponApplied ? subtotal * 0.1 : 0;
    const total = subtotal + tax + shipping - discount;

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const order = placeOrder({ total, shippingDetails: formData });
        navigate(`/payment?orderId=${order.id}`);
    };

    const applyCoupon = () => {
        if (formData.coupon.toUpperCase() === 'BLUVANTA10') {
            setCouponApplied(true);
            showPopup("Coupon BLUVANTA10 applied! 10% discount added.", "success");
        } else {
            showPopup("Invalid Coupon Code. Please verify your corporate tokens.", "error");
        }
    };

    return (
        <div className="container section-padding">
            <h1 style={{ marginBottom: '2.5rem', fontSize: '2.5rem' }}>Checkout & Verification</h1>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '3rem' }} className="checkout-grid">
                <div style={{ display: 'grid', gap: '2rem' }}>
                    {/* Delivery Info */}
                    <div className="card" style={{ padding: '2rem' }}>
                        <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <MapPin size={22} color="var(--primary-blu)" /> Delivery Logistics
                        </h3>
                        <div style={{ display: 'grid', gap: '1.25rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <input type="text" placeholder="Full Name" required value={formData.fullName} onChange={e => setFormData({ ...formData, fullName: e.target.value })} style={inputStyle} />
                                <input type="email" placeholder="Business Email" required value={user?.email || ''} style={inputStyle} disabled />
                            </div>
                            <input type="text" placeholder="Detailed Address" required value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })} style={inputStyle} />
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                                <input type="text" placeholder="City" required style={inputStyle} />
                                <input type="text" placeholder="State" required style={inputStyle} />
                                <input type="text" placeholder="Pincode" required style={inputStyle} />
                            </div>
                        </div>
                    </div>

                    {/* Payment Modes */}
                    <div className="card" style={{ padding: '2rem' }}>
                        <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <CreditCard size={22} color="var(--primary-blu)" /> Strategic Payment Mode
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            {[
                                { id: 'Card', name: 'Credit / Debit Card', icon: <CreditCard size={18} /> },
                                { id: 'UPI', name: 'UPI / Digital Wallet', icon: <ShieldCheck size={18} /> },
                                { id: 'COD', name: 'Cash on Delivery', icon: <MapPin size={18} /> },
                                { id: 'NetBanking', name: 'Corporate Banking', icon: <ShieldCheck size={18} /> }
                            ].map(method => (
                                <div
                                    key={method.id}
                                    onClick={() => setFormData({ ...formData, paymentMethod: method.id })}
                                    style={{
                                        padding: '1rem',
                                        borderRadius: '12px',
                                        border: `2px solid ${formData.paymentMethod === method.id ? 'var(--primary-blu)' : 'var(--border-color)'}`,
                                        background: formData.paymentMethod === method.id ? 'var(--primary-blu-light)' : 'var(--glass-bg)',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    <div style={{ color: formData.paymentMethod === method.id ? 'var(--primary-blu)' : 'var(--text-muted)' }}>{method.icon}</div>
                                    <span style={{ fontSize: '0.9rem', fontWeight: '700', color: formData.paymentMethod === method.id ? 'var(--primary-blu)' : 'var(--text-main)' }}>{method.name}</span>
                                </div>
                            ))}
                        </div>
                        {formData.paymentMethod === 'Card' && (
                            <div style={{ marginTop: '1.5rem', display: 'grid', gap: '1rem' }}>
                                <input type="text" placeholder="Card Number" style={inputStyle} />
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <input type="text" placeholder="MM/YY" style={inputStyle} />
                                    <input type="password" placeholder="CVV" style={inputStyle} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Side Order Summary */}
                <div style={{ position: 'sticky', top: '100px', height: 'fit-content' }}>
                    <div className="card" style={{ padding: '2rem' }}>
                        <h3 style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>Order Summary</h3>

                        <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
                            <div className="flex-between" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}><span>Procurement Value</span><span>₹{subtotal.toLocaleString('en-IN')}</span></div>
                            <div className="flex-between" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}><span>Processing & Shipping</span><span>{shipping === 0 ? <span style={{ color: '#22c55e' }}>Complimentary</span> : `₹${shipping}`}</span></div>
                            <div className="flex-between" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}><span>Statutory GST (18%)</span><span>₹{tax.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span></div>
                            {couponApplied && (
                                <div className="flex-between" style={{ fontSize: '0.9rem', color: '#22c55e', fontWeight: '600' }}>
                                    <span>Corporate Discount (10%)</span>
                                    <span>-₹{discount.toLocaleString('en-IN')}</span>
                                </div>
                            )}
                        </div>

                        <div style={{ margin: '1rem 0' }}>
                            <p style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Coupon Assignment</p>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <input
                                    type="text"
                                    placeholder="Enter Coupon (e.g. BLUVANTA10)"
                                    value={formData.coupon}
                                    onChange={e => setFormData({ ...formData, coupon: e.target.value })}
                                    style={{ ...inputStyle, padding: '0.5rem 0.75rem', fontSize: '0.8rem', flex: 1 }}
                                />
                                <button type="button" onClick={applyCoupon} style={{ padding: '0 1rem', background: 'var(--primary-blu)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '700', fontSize: '0.8rem', cursor: 'pointer' }}>Apply</button>
                            </div>
                        </div>

                        <div className="flex-between" style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '2px solid var(--border-color)' }}>
                            <span style={{ fontSize: '1.25rem', fontWeight: '900' }}>Grand Total</span>
                            <span style={{ fontSize: '1.25rem', fontWeight: '900', color: 'var(--primary-blu)' }}>₹{total.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1.15rem', marginTop: '2rem', fontSize: '1rem', fontWeight: '800', letterSpacing: '0.5px' }}>
                            Finalize Order Placement
                        </button>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem', color: '#22c55e', fontSize: '0.85rem', fontWeight: '700' }}>
                            <ShieldCheck size={18} /> End-to-End Encrypted Transaction
                        </div>
                    </div>

                    <div style={{ marginTop: '1.5rem', background: 'var(--primary-blu-light)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--primary-blu-alpha)' }}>
                        <p style={{ fontSize: '0.8rem', color: 'var(--primary-blu)', fontWeight: '600', lineHeight: '1.4' }}>
                            <b>Professional Note:</b> Free standard shipping on orders over ₹5,000. Your order is eligible for Bluvanta's 24/7 Concierge Support.
                        </p>
                    </div>
                </div>
            </form>
            <style>{`
                @media (max-width: 1024px) {
                    .checkout-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </div>
    );
};

const inputStyle = {
    padding: '0.85rem 1rem',
    borderRadius: '10px',
    border: '1px solid var(--border-color)',
    background: 'var(--glass-bg)',
    color: 'var(--text-main)',
    width: '100%',
    outline: 'none',
    fontSize: '0.9rem',
    transition: 'border-color 0.2s'
};

export default Checkout;
