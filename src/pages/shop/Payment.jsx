import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle, Loader2, ShieldCheck, ShoppingBag, MapPin, Calendar, ReceiptText, CreditCard } from 'lucide-react';
import { getSafeImageUrl } from '../../utils/imageHandler';
import { useAppContext } from '../../context/useAppContext';

const Payment = () => {
    const { orders, addFeedback, showPopup, theme } = useAppContext();
    const [status, setStatus] = useState('idle'); // idle -> processing -> success/failed
    const [isReviewing, setIsReviewing] = useState(true);
    const [showThankYou, setShowThankYou] = useState(false);
    const [feedbackData, setFeedbackData] = useState({ rating: 'Excellent', experience: '', thoughts: '' });
    const [selectedMethod, setSelectedMethod] = useState('');
    const [isChangingMethod, setIsChangingMethod] = useState(false);
    const [isFeedbackProvided, setIsFeedbackProvided] = useState(false);
    
    const location = useLocation();
    const navigate = useNavigate();
    const orderId = new URLSearchParams(location.search).get('orderId');
    const order = orders.find(o => o.id === orderId);

    useEffect(() => {
        if (!order && status === 'idle' && !showThankYou) {
            showPopup("Order details not found. Returning to procurement portal.", "error");
            navigate('/products');
        }
        if (order && !selectedMethod) {
            setSelectedMethod(order.shippingDetails?.paymentMethod || 'Card');
        }
    }, [order, status, showThankYou, navigate, showPopup, selectedMethod]);

    const handleFinalizePayment = () => {
        setIsReviewing(false);
        setStatus('processing');
        setTimeout(() => {
            setStatus(Math.random() > 0.05 ? 'success' : 'failed');
        }, 3000);
    };

    const handleFeedbackSubmit = (e) => {
        e.preventDefault();
        addFeedback({ ...feedbackData, orderId, paymentMethod: selectedMethod });
        setIsFeedbackProvided(true);
        setShowThankYou(true);
    };

    const handleSkipFeedback = () => {
        setShowThankYou(true);
    };

    if (!order && !showThankYou) return null;

    const isLight = theme === 'light';

    const paymentMethods = [
        { id: 'Card', name: 'Credit / Debit Card', icon: <CreditCard size={20} /> },
        { id: 'UPI', name: 'UPI / Digital Wallet', icon: <ShieldCheck size={20} /> },
        { id: 'COD', name: 'Cash on Delivery', icon: <MapPin size={20} /> },
        { id: 'NetBanking', name: 'Corporate Banking', icon: <ShieldCheck size={20} /> }
    ];

    const currentMethodIcon = paymentMethods.find(m => m.id === selectedMethod)?.icon || <CreditCard size={24} />;

    const subtotal = order.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const tax = subtotal * 0.18;
    const shipping = subtotal > 5000 ? 0 : 150;
    const total = order.total; // Use the total from the order object (already calculated including discounts)

    return (
        <div style={{ 
            minHeight: '100vh', 
            background: 'var(--bg-color)', 
            position: 'relative', 
            padding: '4rem 2rem',
            overflowX: 'hidden',
            color: 'var(--text-main)'
        }}>
            {/* Background Mesh */}
            <div style={{
                position: 'fixed', inset: 0, zIndex: 0, opacity: isLight ? 0.4 : 0.2,
                background: `radial-gradient(circle at 10% 10%, var(--p-bg-rose) 0%, transparent 40%),
                            radial-gradient(circle at 90% 90%, var(--p-bg-blue) 0%, transparent 40%)`,
                filter: 'blur(100px)'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1000px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem', alignItems: 'start' }}>
                    {/* Left side: Review or Status */}
                    <div style={{ display: 'grid', gap: '2rem' }}>
                        {isReviewing ? (
                            <div className="card" style={{ padding: '2.5rem', border: `1px solid ${isLight ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.1)'}`, background: 'var(--card-bg)', boxShadow: '0 40px 80px rgba(0,0,0,0.1)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                                    <h1 style={{ fontSize: '2.2rem', fontWeight: '950', letterSpacing: '-1.5px', margin: 0 }}>Procurement Review</h1>
                                    <span style={{ fontSize: '0.8rem', fontWeight: '800', opacity: 0.6, background: 'var(--input-bg)', padding: '0.4rem 0.8rem', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>#{orderId.slice(-8).toUpperCase()}</span>
                                </div>
                                
                                <div style={{ display: 'grid', gap: '2rem' }}>
                                    {/* Logistics & Payment Section */}
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                        <div style={{ borderLeft: '4px solid #6366f1', paddingLeft: '1rem' }}>
                                            <h4 style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Destination</h4>
                                            <p style={{ fontSize: '1rem', fontWeight: '800', margin: 0 }}>{order.shippingDetails.fullName}</p>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.4' }}>{order.shippingDetails.address}</p>
                                        </div>
                                        <div style={{ borderLeft: '4px solid #ec4899', paddingLeft: '1rem' }}>
                                            <h4 style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Payment Mode</h4>
                                            {isChangingMethod ? (
                                                <div style={{ display: 'grid', gap: '0.5rem' }}>
                                                    {paymentMethods.map(m => (
                                                        <div 
                                                            key={m.id} 
                                                            onClick={() => { setSelectedMethod(m.id); setIsChangingMethod(false); }}
                                                            style={{ 
                                                                display: 'flex', alignItems: 'center', gap: '0.5rem', 
                                                                padding: '0.4rem 0.75rem', borderRadius: '8px', 
                                                                background: selectedMethod === m.id ? 'var(--primary-blu-alpha)' : 'transparent',
                                                                border: `1px solid ${selectedMethod === m.id ? 'var(--primary-color)' : 'var(--glass-border)'}`,
                                                                cursor: 'pointer', fontSize: '0.8rem', fontWeight: '700'
                                                            }}
                                                        >
                                                            {m.icon} {m.name}
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                    <div>
                                                        <p style={{ fontSize: '1rem', fontWeight: '800', margin: 0 }}>{selectedMethod}</p>
                                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Verify choice</p>
                                                    </div>
                                                    <button 
                                                        onClick={() => setIsChangingMethod(true)}
                                                        style={{ background: 'none', color: '#6366f1', fontSize: '0.75rem', fontWeight: '900', cursor: 'pointer', padding: '0.5rem', borderRadius: '8px', border: '1px solid currentColor' }}
                                                    >
                                                        CHANGE
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Integrated Item Summary */}
                                    <div style={{ background: 'var(--input-bg)', padding: '1.5rem', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
                                        <h4 style={{ fontSize: '0.8rem', fontWeight: '900', marginBottom: '1rem', opacity: 0.7 }}>CURATION LIST</h4>
                                        <div style={{ display: 'grid', gap: '1rem', maxHeight: '180px', overflowY: 'auto', paddingRight: '0.5rem' }}>
                                            {order.items.map(item => (
                                                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
                                                    <span style={{ fontWeight: '700' }}>{item.quantity}x {item.name}</span>
                                                    <span style={{ fontWeight: '800', opacity: 0.8 }}>₹{(item.price * item.quantity).toLocaleString()}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px dashed var(--glass-border)', display: 'grid', gap: '0.5rem' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                                <span>Tax (GST 18%)</span><span>₹{tax.toLocaleString()}</span>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: '950', marginTop: '0.5rem' }}>
                                                <span>Total Payable</span><span style={{ color: '#6366f1' }}>₹{total.toLocaleString()}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button 
                                        onClick={handleFinalizePayment}
                                        className="btn btn-primary" 
                                        style={{ width: '100%', padding: '1.5rem', fontSize: '1.2rem', borderRadius: '20px', background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)' }}
                                    >
                                        VERIFY & FINALZE PAYMENT
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="card" style={{ padding: '4rem 3rem', background: 'var(--card-bg)', textAlign: 'center' }}>
                                <div style={{ marginBottom: '2.5rem' }}>
                                    <div style={{ 
                                        width: '80px', height: '80px', borderRadius: '24px', 
                                        background: status === 'processing' ? 'rgba(99, 102, 241, 0.1)' : (status === 'success' ? '#dcfce7' : '#fee2e2'),
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto'
                                    }}>
                                        {status === 'processing' ? <Loader2 className="spin" color="#6366f1" size={40} /> : 
                                         (status === 'success' ? <CheckCircle size={40} color="#16a34a" /> : <XCircle size={40} color="#dc2626" />)}
                                    </div>
                                    <h2 style={{ fontSize: '2rem', fontWeight: '950', marginBottom: '0.5rem' }}>
                                        {status === 'processing' ? 'Processing Transaction' : (status === 'success' ? 'Payment Captured' : 'Transaction Refused')}
                                    </h2>
                                    <p style={{ color: 'var(--text-muted)', fontWeight: '700' }}>
                                        {status === 'processing' ? 'Liaising with your financial institution...' : (status === 'success' ? 'Order confirmed and logistics initiated.' : 'Please verify your credentials or change mode.')}
                                    </p>
                                </div>

                                {status === 'processing' && (
                                    <div style={{ height: '8px', background: 'var(--input-bg)', borderRadius: '4px', overflow: 'hidden', maxWidth: '300px', margin: '0 auto' }}>
                                        <div style={{ height: '100%', width: '100%', background: 'linear-gradient(90deg, #6366f1, #ec4899)', animation: 'progressLoad 2s infinite' }} />
                                    </div>
                                )}

                                {status === 'failed' && (
                                    <button onClick={() => { setIsReviewing(true); setStatus('idle'); }} className="btn btn-primary" style={{ width: '100%', background: '#6366f1' }}>Return to Review</button>
                                )}
                            </div>
                        )}

                        {/* Security Badges */}
                        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', opacity: 0.6 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.7rem', fontWeight: '900', letterSpacing: '1px' }}>
                                <ShieldCheck size={14} /> PCI COMPLIANT
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.7rem', fontWeight: '900', letterSpacing: '1px' }}>
                                <ShoppingBag size={14} /> SECURE ASSETS
                            </div>
                        </div>
                    </div>

                    {/* Right Hand Side Summary (Persistent) */}
                    <div className="card" style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)' }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '950', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <ReceiptText size={20} color="#6366f1" /> Order Identity
                        </h3>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', padding: '1rem', borderRadius: '12px', background: 'var(--input-bg)', border: '1px solid var(--glass-border)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span>Identifier:</span><span style={{ fontWeight: '800', color: 'var(--text-main)' }}>{orderId.toUpperCase()}</span></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Timestamp:</span><span style={{ fontWeight: '800', color: 'var(--text-main)' }}>{new Date(order.date).toLocaleDateString()}</span></div>
                        </div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6', fontWeight: '500' }}>
                            This order is protected by Bluvanta's end-to-end encryption. Your data remains siloed and secure throughout the procurement lifecycle.
                        </p>
                    </div>
                </div>
            </div>

            {/* THE SUCCESS MODAL POPUP */}
            {status === 'success' && !showThankYou && (
                <div style={{ 
                    position: 'fixed', inset: 0, zIndex: 100, 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(15px)',
                    animation: 'fadeIn 0.3s ease-out'
                }}>
                    <div className="animate-scale" style={{ 
                        width: '95%', maxWidth: '600px', 
                        padding: '3rem', borderRadius: '40px',
                        background: 'var(--card-bg)', border: '1px solid #6366f1',
                        boxShadow: '0 50px 100px rgba(0,0,0,0.4)',
                        maxHeight: '90vh', overflowY: 'auto'
                    }}>
                        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                            <div style={{ 
                                width: '70px', height: '70px', background: '#dcfce7', borderRadius: '50%', 
                                display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto'
                            }}>
                                <CheckCircle size={40} color="#16a34a" />
                            </div>
                            <h2 style={{ fontSize: '2.4rem', fontWeight: '950', color: 'var(--text-main)', letterSpacing: '-1.5px', marginBottom: '0.5rem' }}>Order Captured</h2>
                            <p style={{ color: 'var(--text-muted)', fontWeight: '800', fontSize: '1rem' }}>
                                Your procurement token has been validated.
                            </p>
                        </div>

                        {/* Feedback Overlay */}
                        <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--glass-border)' }}>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: '950', marginBottom: '0.5rem' }}>System Experience</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2rem', fontWeight: '600' }}>Help us refine the Bluvanta ecosystem performance.</p>
                            
                            <form onSubmit={handleFeedbackSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                                    {['Poor', 'Average', 'Good', 'Excellent'].map(level => (
                                        <button
                                            key={level}
                                            type="button"
                                            onClick={() => setFeedbackData({ ...feedbackData, rating: level })}
                                            style={{
                                                padding: '0.75rem 0.25rem', borderRadius: '12px', fontSize: '0.7rem', fontWeight: '900', 
                                                border: `2px solid ${feedbackData.rating === level ? '#6366f1' : 'var(--glass-border)'}`,
                                                background: feedbackData.rating === level ? 'rgba(99, 102, 241, 0.1)' : 'var(--input-bg)',
                                                color: feedbackData.rating === level ? '#6366f1' : 'var(--text-main)',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {level}
                                        </button>
                                    ))}
                                </div>

                                <textarea
                                    required
                                    placeholder="Brief experience overview..."
                                    style={{ width: '100%', padding: '1rem', background: 'var(--input-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px', minHeight: '80px', fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-main)', outline: 'none' }}
                                    value={feedbackData.experience}
                                    onChange={e => setFeedbackData({ ...feedbackData, experience: e.target.value })}
                                />

                                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                                    <button type="submit" className="btn btn-primary" style={{ flex: 1.5, padding: '1.2rem', fontWeight: '950', fontSize: '1rem', background: '#6366f1', border: 'none' }}>DISPATCH FEEDBACK</button>
                                    <button type="button" onClick={handleSkipFeedback} className="btn" style={{ flex: 1, padding: '1.2rem', fontWeight: '900', background: 'transparent', border: '1px solid var(--glass-border)', color: 'var(--text-muted)', boxShadow: 'none' }}>SKIP</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* THANK YOU SCREEN (IF SKIPPED) */}
            {showThankYou && (
                <div style={{ 
                    position: 'fixed', inset: 0, zIndex: 101, 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(20px)',
                    animation: 'fadeIn 0.4s ease-out'
                }}>
                    <div className="animate-scale" style={{ textAlign: 'center', maxWidth: '500px', padding: '4rem', background: 'var(--card-bg)', borderRadius: '48px', border: '1px solid var(--glass-border)', boxShadow: '0 60px 120px rgba(0,0,0,0.5)' }}>
                        <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--primary-blu-alpha)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2.5rem auto' }}>
                            <ShoppingBag size={48} color="#6366f1" />
                        </div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '950', marginBottom: '1.5rem', letterSpacing: '-2px' }}>
                            {isFeedbackProvided ? 'Feedback Received!' : 'Thank You!'}
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', fontWeight: '700', lineHeight: '1.6', marginBottom: '3rem' }}>
                            {isFeedbackProvided && <span style={{ color: 'var(--primary-color)', display: 'block', marginBottom: '0.5rem' }}>Thank you for your valuable feedback!</span>}
                            Thank you for shopping with us...!! <br/>
                            Your order is now being processed by our logistics team. <br/>
                            We look forward to serving you again.
                        </p>
                        <button 
                            onClick={() => navigate('/products')}
                            className="btn btn-primary"
                            style={{ margin: '0 auto', padding: '1.25rem 3rem', background: 'linear-gradient(90deg, #6366f1, #a855f7)' }}
                        >
                            CONTINUE SHOPPING
                        </button>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } } 
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes progressLoad { 0% { transform: translateX(-100%); } 100% { transform: translateX(200%); } }
                @keyframes scaleIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
                .spin { animation: spin 1s linear infinite; }
                .animate-scale { animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
            `}</style>
        </div>
    );
};

export default Payment;
