import React, { useState } from 'react';
import { useAppContext } from '../../context/useAppContext';
import { useOutletContext } from 'react-router-dom';
import { BarChart3, AlertTriangle, CheckSquare, PackagePlus } from 'lucide-react';

const Inventory = () => {
    const { products, orders, processGRN, user, showPopup } = useAppContext();
    const isAdmin = user && user.role === 'admin';
    const [selectedOrder, setSelectedOrder] = useState('');
    const [grnItems, setGrnItems] = useState([]);

    // Check if we are inside the Outlet (Admin context). If not, fallback values.
    const outletContext = useOutletContext();
    const isLight = outletContext?.isLight ?? true;
    const textMain = outletContext?.textMain ?? '#1f2937';
    const textMuted = outletContext?.textMuted ?? '#6b7280';
    const borderCol = outletContext?.borderCol ?? '#e5e7eb';
    const bgMain = outletContext?.bgMain ?? '#ffffff';

    const pendingOrders = orders.filter(o => o.status === 'Pending');

    const handleOrderSelect = (e) => {
        const orderId = e.target.value;
        setSelectedOrder(orderId);
        const order = pendingOrders.find(o => o.id === orderId);
        if (order) setGrnItems(order.items.map(item => ({ productId: item.id, name: item.name, quantity: item.quantity })));
        else setGrnItems([]);
    };

    const submitGrn = () => {
        processGRN(selectedOrder, grnItems);
        showPopup('Intelligence Synchronized!', 'success');
        setSelectedOrder('');
        setGrnItems([]);
    };

    const renderAdminView = () => (
        <div style={{ animation: 'fade-in 0.8s ease-out' }}>
            <header style={{ marginBottom: '4rem', padding: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
                    <div style={{ width: '12px', height: '40px', background: 'linear-gradient(to bottom, #10b981, #3b82f6)', borderRadius: '6px' }} />
                    <h1 style={{ fontSize: '3rem', fontWeight: '950', letterSpacing: '-1.5px', color: textMain }}>Supply Intelligence</h1>
                </div>
                <p style={{ color: textMuted, fontSize: '1.2rem', fontWeight: '600', marginLeft: '2.25rem' }}>Real-time inventory orchestration and logistics processing.</p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '4rem' }}>
                {/* Live Stock Matrix */}
                <div style={{ 
                    background: isLight ? '#ffffff' : '#0f172a', 
                    borderRadius: '40px', 
                    padding: '3rem',
                    border: `1px solid ${isLight ? '#e2e8f0' : '#1e293b'}`,
                    boxShadow: '0 25px 60px rgba(0,0,0,0.05)'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: '950', display: 'flex', alignItems: 'center', gap: '1rem', color: textMain }}>
                            <div style={{ padding: '1rem', background: 'rgba(16,185,129,0.1)', color: '#10b981', borderRadius: '20px' }}>
                                <BarChart3 size={32} />
                            </div>
                            Live Stock Matrix
                        </h3>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: isLight ? '#f1f5f9' : 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '15px' }}>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                                <span style={{ fontSize: '0.85rem', fontWeight: '800', color: textMuted }}>OPTIMAL</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: isLight ? '#fef2f2' : 'rgba(244,63,94,0.05)', padding: '0.5rem 1rem', borderRadius: '15px' }}>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f43f5e' }} />
                                <span style={{ fontSize: '0.85rem', fontWeight: '800', color: textMuted }}>CRITICAL</span>
                            </div>
                        </div>
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 1.2rem', color: textMain }}>
                            <thead>
                                <tr style={{ color: textMuted, fontSize: '0.9rem', textTransform: 'uppercase' }}>
                                    <th style={{ padding: '0 1.5rem', textAlign: 'left', fontWeight: '900', letterSpacing: '1px' }}>Strategic Asset</th>
                                    <th style={{ padding: '0 1.5rem', textAlign: 'center', fontWeight: '900', letterSpacing: '1px' }}>Unit Count</th>
                                    <th style={{ padding: '0 1.5rem', textAlign: 'right', fontWeight: '900', letterSpacing: '1px' }}>Logistics Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(item => {
                                    const isLow = item.stock < (item.reorderLevel || 10);
                                    return (
                                        <tr key={item.id} style={{ 
                                            background: isLight ? '#f8fafc' : 'rgba(255,255,255,0.02)', 
                                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                            cursor: 'pointer'
                                        }} 
                                        onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.background = isLow ? 'rgba(244,63,94,0.05)' : 'rgba(16,185,129,0.05)'; }} 
                                        onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = isLight ? '#f8fafc' : 'rgba(255,255,255,0.02)'; }}
                                        >
                                            <td style={{ padding: '2rem 1.5rem', borderTopLeftRadius: '24px', borderBottomLeftRadius: '24px', fontWeight: '800', fontSize: '1.1rem' }}>
                                                {item.name}
                                            </td>
                                            <td style={{ padding: '2rem 1.5rem', textAlign: 'center', fontWeight: '950', fontSize: '1.6rem', color: isLow ? '#f43f5e' : textMain }}>
                                                {item.stock}
                                            </td>
                                            <td style={{ padding: '2rem 1.5rem', textAlign: 'right', borderTopRightRadius: '24px', borderBottomRightRadius: '24px' }}>
                                                <span style={{ 
                                                    padding: '0.6rem 1.2rem', 
                                                    borderRadius: '15px', 
                                                    fontSize: '0.85rem', 
                                                    fontWeight: '950',
                                                    letterSpacing: '0.5px',
                                                    background: isLow ? '#fef2f2' : '#ecfdf5',
                                                    color: isLow ? '#f43f5e' : '#10b981',
                                                    border: `1px solid ${isLow ? '#fee2e2' : '#d1fae5'}`
                                                }}>
                                                    {isLow ? 'RESTOCK REQUIRED' : 'STABLE SOURCING'}
                                                </span>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Goods Receipt Note (GRN) */}
                <div style={{ position: 'sticky', top: '120px', height: 'fit-content' }}>
                    <h3 style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: '950', fontSize: '1.6rem', color: textMain }}>
                        <div style={{ width: '8px', height: '24px', background: '#10b981', borderRadius: '4px' }} />
                        Consignment Ingestion
                    </h3>

                    <div style={{ 
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', 
                        borderRadius: '40px', 
                        padding: '3rem', 
                        color: 'white',
                        boxShadow: '0 30px 60px rgba(16,185,129,0.2)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ position: 'absolute', top: -40, right: -40, width: '200px', height: '200px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }} />
                        
                        <h3 style={{ fontSize: '1.8rem', fontWeight: '950', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem', position: 'relative', zIndex: 1 }}>
                            <CheckSquare size={32} /> Receiving Core
                        </h3>
                        
                        <div style={{ marginBottom: '2.5rem', position: 'relative', zIndex: 1 }}>
                            <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.9rem', fontWeight: '900', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '1px' }}>Active Manifest File</label>
                            <select onChange={handleOrderSelect} value={selectedOrder} style={{ width: '100%', padding: '1.2rem', borderRadius: '20px', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: 'white', appearance: 'none', cursor: 'pointer', outline: 'none', fontWeight: '800', fontSize: '1.1rem' }}>
                                <option value="" style={{ color: '#065f46' }}>-- SELECT MANIFEST --</option>
                                {pendingOrders.map(o => <option key={o.id} value={o.id} style={{ color: '#065f46' }}>MAN-{o.id.slice(-6).toUpperCase()} ({o.items.length} Units)</option>)}
                            </select>
                        </div>
                        
                        {grnItems.length > 0 && (
                            <div className="animate-slide-down" style={{ position: 'relative', zIndex: 1 }}>
                                <div style={{ 
                                    padding: '2.5rem', 
                                    background: 'rgba(255,255,255,0.1)', 
                                    borderRadius: '30px', 
                                    marginBottom: '2.5rem', 
                                    border: '1px solid rgba(255,255,255,0.2)'
                                }}>
                                    <div style={{ fontSize: '0.9rem', opacity: 0.9, marginBottom: '1.5rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1px' }}>Manifest Breakdown:</div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {grnItems.map((item, idx) => (
                                            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <span style={{ fontSize: '1.1rem', fontWeight: '800' }}>{item.name}</span>
                                                <span style={{ fontWeight: '950', fontSize: '1.4rem' }}>{item.quantity}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <button onClick={submitGrn} style={{ 
                                    width: '100%', 
                                    padding: '1.5rem', 
                                    background: '#ffffff', 
                                    color: '#065f46', 
                                    border: 'none', 
                                    borderRadius: '24px', 
                                    fontWeight: '950', 
                                    fontSize: '1.2rem',
                                    cursor: 'pointer', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    gap: '1rem', 
                                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                    boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                                    textTransform: 'uppercase'
                                }}
                                onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)'; e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.2)'; }}
                                onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)'; }}
                                >
                                    <PackagePlus size={24} strokeWidth={3} /> Synchronize Stock
                                </button>
                            </div>
                        )}
                    </div>
                    
                    <div style={{ 
                        marginTop: '3rem', 
                        padding: '2rem', 
                        background: '#d1fae5', 
                        borderRadius: '30px', 
                        color: '#064e3b', 
                        fontSize: '1rem', 
                        fontWeight: '800', 
                        display: 'flex', 
                        gap: '1.5rem', 
                        alignItems: 'center',
                        border: '1px solid #10b981'
                    }}>
                        <div style={{ width: '48px', height: '48px', background: '#064e3b', color: 'white', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <AlertTriangle size={24} /> 
                        </div>
                        Synchronizing stock will update global inventory counts instantly.
                    </div>
                </div>
            </div>

            <style>
                {`
                    @keyframes fade-in {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes slide-down {
                        from { opacity: 0; transform: translateY(-10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .animate-slide-down { animation: slide-down 0.4s ease-out forwards; }
                `}
            </style>
        </div>
    );

    return renderAdminView();
};

export default Inventory;
