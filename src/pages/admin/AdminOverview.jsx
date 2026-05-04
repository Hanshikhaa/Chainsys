import React, { useMemo, useState } from 'react';
import { useAppContext } from '../../context/useAppContext';
import { useOutletContext } from 'react-router-dom';
import { Activity, IndianRupee, TrendingUp, AlertTriangle, PackageSearch, ChevronLeft, ChevronRight } from 'lucide-react';

const AdminOverview = () => {
    const { orders, products } = useAppContext();
    const { isLight, textMain, textMuted, borderCol, bgMain } = useOutletContext();

    const [carouselIndex, setCarouselIndex] = useState(0);

    // Calculate Dashboard Metrics
    const metrics = useMemo(() => {
        let totalRevenue = 0;
        let totalCost = 0;
        let completedOrders = 0;

        orders.forEach(order => {
            completedOrders += 1;
            order.items.forEach(item => {
                totalRevenue += (item.price * item.quantity);
                const itemCost = item.cost || (item.price * 0.6); 
                totalCost += (itemCost * item.quantity);
            });
        });

        const totalProfit = totalRevenue - totalCost;
        const margin = totalRevenue > 0 ? ((totalProfit / totalRevenue) * 100).toFixed(1) : 0;
        const lowStockItems = products.filter(p => p.stock < (p.reorderLevel || 10));

        return { totalRevenue, totalProfit, margin, completedOrders, lowStockItems };
    }, [orders, products]);

    const recentOrders = [...orders].reverse().slice(0, 10); // Get more for carousel

    const StatCard = ({ title, value, subtext, icon, color1, color2 }) => {
        const gradient = `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`;
        
        return (
            <div style={{ 
                borderRadius: '20px', 
                padding: '1.5rem',
                color: '#ffffff',
                background: gradient,
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
                boxShadow: `0 10px 20px ${color1}33`,
                border: '1px solid rgba(255,255,255,0.1)'
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)'; e.currentTarget.style.boxShadow = `0 15px 30px ${color1}55`; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = `0 10px 20px ${color1}33`; }}
            >
                <div style={{ position: 'absolute', top: -15, right: -15, width: '100px', height: '100px', background: 'rgba(255,255,255,0.15)', borderRadius: '50%' }}></div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>
                    <div style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.2)', color: 'white', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                        {icon}
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: '800', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{title}</span>
                        <div style={{ fontSize: '2rem', fontWeight: '950', letterSpacing: '-0.5px', marginTop: '0.25rem' }}>
                            {value}
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.75rem', fontSize: '0.95rem', position: 'relative', zIndex: 1 }}>
                    <span style={{ background: 'rgba(255,255,255,0.25)', padding: '0.4rem 1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: '800' }}>
                        <TrendingUp size={16} /> {subtext}
                    </span>
                </div>
            </div>
        );
    };

    const nextOrder = () => setCarouselIndex(prev => Math.min(prev + 1, Math.max(0, recentOrders.length - 3)));
    const prevOrder = () => setCarouselIndex(prev => Math.max(prev - 1, 0));

    return (
        <div style={{ animation: 'fade-in 0.8s ease-out' }}>
            {/* Vibrant Metric Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <StatCard 
                    title="Total Revenue" 
                    value={`₹${metrics.totalRevenue.toLocaleString()}`} 
                    subtext="+14.2%" 
                    icon={<IndianRupee size={32} />} 
                    color1="#6366f1"
                    color2="#8b5cf6"
                />
                <StatCard 
                    title="Net Earnings" 
                    value={`₹${metrics.totalProfit.toLocaleString()}`} 
                    subtext="+9.7%" 
                    icon={<Activity size={32} />} 
                    color1="#10b981"
                    color2="#34d399"
                />
                <StatCard 
                    title="Efficiency" 
                    value={`${metrics.margin}%`} 
                    subtext="+2.4%" 
                    icon={<TrendingUp size={32} />} 
                    color1="#f59e0b"
                    color2="#fbbf24"
                />
            </div>

            {/* --- SMART AI ANALYTICS --- */}
            <div style={{ 
                borderRadius: '20px', 
                padding: '1.5rem', 
                marginBottom: '1.5rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                background: isLight ? '#ffffff' : '#0f172a',
                border: `1px solid ${isLight ? '#e2e8f0' : '#1e293b'}`,
                boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', left: 0, top: 0, width: '6px', height: '100%', background: 'linear-gradient(to bottom, #6366f1, #ec4899)' }} />
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ 
                        width: '50px', height: '50px', background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', 
                        color: 'white', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 8px 16px rgba(99,102,241,0.4)', flexShrink: 0
                    }}>
                        <Activity size={24} />
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '950', color: textMain, letterSpacing: '-0.5px' }}>Store Intelligence Alpha</h3>
                            <span style={{ background: '#e0e7ff', color: '#6366f1', padding: '0.2rem 0.6rem', borderRadius: '8px', fontSize: '0.65rem', fontWeight: '900', letterSpacing: '0.5px' }}>PREDICTIVE</span>
                        </div>
                        <p style={{ color: textMuted, fontSize: '0.9rem', fontWeight: '600', lineHeight: '1.4', maxWidth: '600px' }}>
                            Based on current traffic, we project a <span style={{ color: '#10b981', fontWeight: '900' }}>22% increase</span> in regional demand. Prepare inventory buffers for home furnishing categories.
                        </p>
                    </div>
                </div>
                <button style={{ 
                    padding: '0.8rem 1.5rem', borderRadius: '15px', border: 'none', 
                    background: 'linear-gradient(90deg, #6366f1, #a855f7)', color: 'white', 
                    fontWeight: '900', cursor: 'pointer', fontSize: '0.9rem',
                    boxShadow: '0 6px 15px rgba(99,102,241,0.3)', transition: 'all 0.3s'
                }}
                onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'}
                onMouseOut={e => e.currentTarget.style.transform = 'none'}
                >
                    Deploy Strategy
                </button>
            </div>

            {/* --- QUICK ACTION CENTER --- */}
            <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '950', color: textMain, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '6px', height: '18px', background: '#ec4899', borderRadius: '3px' }} />
                    Quick Action Modules
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                    {[
                        { label: 'Inventory Sync', color: '#6366f1', icon: <PackageSearch size={28} /> },
                        { label: 'Vendor Portal', color: '#10b981', icon: < IndianRupee size={28} /> },
                        { label: 'System Logs', color: '#f59e0b', icon: <Activity size={28} /> },
                        { label: 'Security Core', color: '#ec4899', icon: <TrendingUp size={28} /> }
                    ].map((action, i) => (
                        <button key={i} style={{ 
                            padding: '1.2rem', borderRadius: '20px', border: '1px solid rgba(150,150,150,0.1)',
                            background: isLight ? '#ffffff' : '#0f172a',
                            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem', 
                            cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)', color: textMain,
                            boxShadow: '0 6px 15px rgba(0,0,0,0.03)'
                        }}
                        onMouseOver={(e) => { 
                            e.currentTarget.style.transform = 'translateY(-6px)'; 
                            e.currentTarget.style.backgroundColor = action.color;
                            e.currentTarget.style.color = 'white';
                            e.currentTarget.style.boxShadow = `0 12px 24px ${action.color}44`;
                        }}
                        onMouseOut={(e) => { 
                            e.currentTarget.style.transform = 'none'; 
                            e.currentTarget.style.backgroundColor = isLight ? '#ffffff' : '#0f172a';
                            e.currentTarget.style.color = textMain;
                            e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.03)';
                        }}
                        >
                            <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: isLight ? '#f1f5f9' : 'rgba(255,255,255,0.05)', color: action.color, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }} className="action-icon">
                                {React.cloneElement(action.icon, { size: 20 })}
                            </div>
                            <span style={{ fontWeight: '900', fontSize: '0.95rem', letterSpacing: '-0.25px' }}>{action.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* LOWER GRID: TRANSACTIONS & ALERTS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ 
                    background: isLight ? '#ffffff' : '#0f172a', 
                    borderRadius: '25px', 
                    padding: '1.5rem',
                    border: `1px solid ${isLight ? '#e2e8f0' : '#1e293b'}`,
                    boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '950', color: textMain, letterSpacing: '-0.5px' }}>Active Transactions</h3>
                            <p style={{ color: textMuted, fontWeight: '700', fontSize: '0.8rem' }}>Real-time purchase streams</p>
                        </div>
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            <button onClick={prevOrder} disabled={carouselIndex === 0} style={{ width: '40px', height: '40px', borderRadius: '12px', background: isLight ? '#f3f4f6' : '#1e293b', border: 'none', color: textMain, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', opacity: carouselIndex === 0 ? 0.3 : 1 }}>
                                <ChevronLeft size={20} />
                            </button>
                            <button onClick={nextOrder} disabled={carouselIndex >= recentOrders.length - 3} style={{ width: '40px', height: '40px', borderRadius: '12px', background: isLight ? '#f3f4f6' : '#1e293b', border: 'none', color: textMain, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', opacity: carouselIndex >= recentOrders.length - 3 ? 0.3 : 1 }}>
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                    
                    <div style={{ overflow: 'hidden' }}>
                        <div style={{ 
                            display: 'flex', gap: '1rem', 
                            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                            transform: `translateX(calc(-${carouselIndex * 33.33}% - ${carouselIndex * 0.33}rem))`
                        }}>
                            {recentOrders.map(order => (
                                <div key={order.id} style={{ 
                                    minWidth: 'calc(33.33% - 0.66rem)', 
                                    borderRadius: '16px', 
                                    padding: '1rem', 
                                    background: isLight ? '#f8fafc' : 'rgba(255,255,255,0.02)',
                                    border: `1px solid ${isLight ? '#f1f5f9' : 'rgba(255,255,255,0.05)'}`,
                                    display: 'flex', flexDirection: 'column', gap: '0.5rem'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ fontSize: '0.75rem', fontWeight: '900', color: '#6366f1' }}>#{order.id.slice(-6)}</span>
                                        <span style={{ 
                                            padding: '0.2rem 0.5rem', borderRadius: '8px', fontSize: '0.65rem', fontWeight: '900',
                                            background: order.status === 'Pending' ? '#fef3c7' : '#d1fae5',
                                            color: order.status === 'Pending' ? '#92400e' : '#065f46'
                                        }}>{order.status.toUpperCase()}</span>
                                    </div>
                                    <div style={{ fontSize: '1.2rem', fontWeight: '950', color: textMain }}>₹{order.items.reduce((s,i)=>s+(i.price*i.quantity),0).toLocaleString()}</div>
                                    <div style={{ fontSize: '0.8rem', color: textMuted, fontWeight: '700' }}>{new Date(order.date).toLocaleDateString()}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ 
                    background: isLight ? '#ffffff' : '#0f172a', 
                    borderRadius: '25px', 
                    padding: '1.5rem',
                    border: `1px solid ${isLight ? '#e2e8f0' : '#1e293b'}`,
                    boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
                }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '950', color: textMain, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ width: '8px', height: '20px', background: '#ec4899', borderRadius: '4px' }} />
                        System Alerts
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {metrics.lowStockItems.slice(0, 5).map(item => (
                            <div key={item.id} style={{ 
                                padding: '1rem', borderRadius: '16px', 
                                background: 'rgba(236,72,153,0.05)', 
                                borderLeft: '4px solid #ec4899',
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                            }}>
                                <div>
                                    <div style={{ fontWeight: '900', color: textMain, fontSize: '0.95rem' }}>{item.name}</div>
                                    <div style={{ color: '#ec4899', fontWeight: '800', fontSize: '0.75rem', marginTop: '0.2rem' }}>RESTOCK REQUIRED</div>
                                </div>
                                <div style={{ fontWeight: '950', fontSize: '1.2rem', color: '#ec4899' }}>{item.stock}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>
                {`
                    @keyframes fade-in {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                `}
            </style>
        </div>
    );
};

export default AdminOverview;
