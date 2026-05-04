import React, { useState } from 'react';
import { useAppContext } from '../../context/useAppContext';
import { Package, Clock, CheckCircle2, AlertCircle, Eye, ShoppingBag, MapPin, ReceiptText, RotateCcw, X } from 'lucide-react';
import { getSafeImageUrl } from '../../utils/imageHandler';

const Orders = () => {
    const { orders, requestOrderReturn, showPopup } = useAppContext();
    const [returnModalOpen, setReturnModalOpen] = useState(null);
    const [returnDetails, setReturnDetails] = useState({ reason: '', method: 'Refund', comments: '' });

    const handleReturnSubmit = () => {
        if (!returnDetails.reason) return;
        requestOrderReturn(returnModalOpen, returnDetails);
        showPopup(`Return requested for order #${returnModalOpen}. Our logistics team will contact you shortly.`, 'success');
        setReturnModalOpen(null);
        setReturnDetails({ reason: '', method: 'Refund', comments: '' });
    };


    const getStatusStyle = (status) => {
        switch (status) {
            case 'Received': return { color: '#22c55e', bg: '#f0fdf4', icon: <CheckCircle2 size={16} /> };
            case 'Return Requested': return { color: '#8b5cf6', bg: '#ede9fe', icon: <RotateCcw size={16} /> };
            case 'Pending': return { color: '#f59e0b', bg: '#fffbeb', icon: <Clock size={16} /> };
            default: return { color: '#64748b', bg: '#f8fafc', icon: <AlertCircle size={16} /> };
        }
    };

    return (
        <div className="container section-padding">
            <h1 style={{ marginBottom: '2.5rem' }}>Procurement Orders</h1>
            {orders.length === 0 ? (
                <div className="card" style={{ padding: '4rem', textAlign: 'center' }}><Package size={48} color="var(--text-muted)" style={{ opacity: 0.3 }} /><h3>No orders placed yet.</h3></div>
            ) : (
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                    {[...orders].reverse().map(order => {
                        const style = getStatusStyle(order.status);
                        return (
                            <div key={order.id} className="card" style={{ padding: '1.5rem' }}>
                                <div className="flex-between">
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem' }}>Order #{order.id}</h3>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{new Date(order.date).toLocaleDateString()} at {new Date(order.date).toLocaleTimeString()}</p>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                                        <div style={{ backgroundColor: style.bg, color: style.color, padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: '700' }}>
                                            <span style={{ fontSize: '0.7rem', opacity: 0.7, textTransform: 'uppercase' }}>Tracking:</span> {style.icon} {order.status}
                                        </div>
                                        {order.status === 'Received' && (
                                            <button onClick={() => setReturnModalOpen(order.id)} className="btn btn-outline" style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem' }}>
                                                <RotateCcw size={14} style={{ marginRight: '0.2rem' }} /> Return Order
                                            </button>
                                        )}
                                    </div>
                                </div>

                                <div style={{ marginTop: '1.5rem', padding: '1.25rem', background: 'var(--glass-bg)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                                        {order.items?.map(item => (
                                            <div key={item.id} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                                <div style={{ width: '40px', height: '40px', borderRadius: '6px', overflow: 'hidden' }}>
                                                    <img src={getSafeImageUrl(item.image)} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                </div>
                                                <div style={{ flex: 1, fontSize: '0.9rem' }}>
                                                    <span style={{ fontWeight: '600' }}>{item.name}</span>
                                                    <span style={{ color: 'var(--text-muted)', marginLeft: '0.5rem' }}>× {item.quantity}</span>
                                                </div>
                                                <span style={{ fontWeight: '700', fontSize: '0.9rem' }}>₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                            <MapPin size={14} /> {order.shippingDetails?.address}
                                        </div>
                                        <div style={{ fontSize: '1.1rem', fontWeight: '900', color: 'var(--primary-blu)' }}>
                                            Total: ₹{order.total?.toLocaleString('en-IN')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {returnModalOpen && (
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="card" style={{ padding: '2rem', width: '90%', maxWidth: '500px', backgroundColor: 'var(--bg-color)', overflowY: 'auto', maxHeight: '90vh' }}>
                        <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
                            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><RotateCcw size={24} color="var(--primary-color)" /> Return Order</h2>
                            <button onClick={() => setReturnModalOpen(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}><X size={24} /></button>
                        </div>
                        
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>Reason for Return <span style={{color: '#ef4444'}}>*</span></label>
                            <select 
                                value={returnDetails.reason}
                                onChange={(e) => setReturnDetails({...returnDetails, reason: e.target.value})}
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: 'var(--glass-bg)', color: 'var(--text-main)', fontSize: '0.95rem' }}
                            >
                                <option value="" disabled>Select a reason...</option>
                                <option value="Defective / Damaged">Defective / Damaged</option>
                                <option value="Wrong Item Received">Wrong Item Received</option>
                                <option value="No Longer Needed">No Longer Needed</option>
                                <option value="Item does not match description">Item does not match description</option>
                            </select>
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '600', fontSize: '0.9rem' }}>Return Method <span style={{color: '#ef4444'}}>*</span></label>
                            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', padding: '0.75rem 1rem', border: `1px solid ${returnDetails.method === 'Refund' ? 'var(--primary-color)' : 'var(--border-color)'}`, borderRadius: '8px', background: returnDetails.method === 'Refund' ? 'var(--p-blue)' : 'var(--glass-bg)', flex: 1, minWidth: '150px' }}>
                                    <input 
                                        type="radio" 
                                        name="returnMethod" 
                                        value="Refund" 
                                        checked={returnDetails.method === 'Refund'}
                                        onChange={(e) => setReturnDetails({...returnDetails, method: e.target.value})}
                                        style={{ accentColor: 'var(--primary-color)' }}
                                    /> <span style={{fontSize: '0.9rem'}}>Refund to Original Payment</span>
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', padding: '0.75rem 1rem', border: `1px solid ${returnDetails.method === 'Replacement' ? 'var(--primary-color)' : 'var(--border-color)'}`, borderRadius: '8px', background: returnDetails.method === 'Replacement' ? 'var(--p-blue)' : 'var(--glass-bg)', flex: 1, minWidth: '150px' }}>
                                    <input 
                                        type="radio" 
                                        name="returnMethod" 
                                        value="Replacement" 
                                        checked={returnDetails.method === 'Replacement'}
                                        onChange={(e) => setReturnDetails({...returnDetails, method: e.target.value})}
                                        style={{ accentColor: 'var(--primary-color)' }}
                                    /> <span style={{fontSize: '0.9rem'}}>Exact Replacement</span>
                                </label>
                            </div>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>Additional Comments <span style={{fontSize: '0.8rem', color: 'var(--text-muted)'}}>(Optional)</span></label>
                            <textarea 
                                value={returnDetails.comments}
                                onChange={(e) => setReturnDetails({...returnDetails, comments: e.target.value})}
                                rows="3"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: 'var(--glass-bg)', color: 'var(--text-main)', resize: 'vertical', fontSize: '0.95rem' }}
                                placeholder="Any context you'd like to add..."
                            ></textarea>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button onClick={() => setReturnModalOpen(null)} className="btn btn-outline" style={{ flex: 1, justifyContent: 'center' }}>Cancel</button>
                            <button 
                                onClick={handleReturnSubmit} 
                                className="btn btn-primary" 
                                style={{ flex: 1, justifyContent: 'center', opacity: !returnDetails.reason ? 0.5 : 1 }}
                                disabled={!returnDetails.reason}
                            >
                                Confirm Return
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Orders;
