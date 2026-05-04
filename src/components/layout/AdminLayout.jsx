import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Package, Boxes, Store, LogOut, ArrowLeft, Terminal, Sun, Moon, Bell, CheckCircle2, XCircle, MessageSquare, Heart } from 'lucide-react';
import { useAppContext } from '../../context/useAppContext';

const AdminLayout = () => {
    const { user, logout, theme, toggleTheme } = useAppContext();
    const navigate = useNavigate();

    if (!user || user.role !== 'admin') {
        return (
            <div style={{ 
                minHeight: '100vh', 
                background: isLight ? '#f8fafc' : '#020617',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4rem',
                textAlign: 'center',
                fontFamily: "'Inter', sans-serif"
            }}>
                <div style={{ 
                    fontSize: '1.8rem', 
                    fontWeight: '1000', 
                    color: isLight ? '#b91c1c' : '#f87171', 
                    maxWidth: '900px', 
                    lineHeight: '1.6',
                    marginBottom: '3rem'
                }}>
                    ⚠️ Note: This feature is restricted for regular users and accessible only to verified administrators.
                </div>
                <button 
                    onClick={() => navigate('/')}
                    style={{ 
                        padding: '1.2rem 2.5rem', 
                        background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '16px', 
                        cursor: 'pointer', 
                        fontSize: '1.1rem', 
                        fontWeight: '900',
                        boxShadow: '0 10px 20px rgba(99, 102, 241, 0.3)'
                    }}
                >
                    Return to Home
                </button>
            </div>
        );
    }
    const isLight = theme === 'light';
    const bgMain = isLight ? '#f8fafc' : '#0f172a';
    const textMain = isLight ? '#1e293b' : '#f8fafc';
    const textMuted = isLight ? '#64748b' : '#94a3b8';
    const borderCol = isLight ? '#e2e8f0' : '#1e293b';
    const sidebarBg = 'linear-gradient(135deg, var(--primary-color) 0%, var(--v-blue) 100%)'; // Attractive vibrant gradient
    const sidebarText = '#ffffff';
    const sidebarHover = 'rgba(255, 255, 255, 0.15)';
    const sidebarActive = 'rgba(255, 255, 255, 0.25)';

    const navItems = [
        { path: '/admin', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
        { path: '/admin/catalog', icon: <Package size={20} />, label: 'Catalog' },
        { path: '/admin/inquiries', icon: <MessageSquare size={20} />, label: 'Inquiries' },
        { path: '/admin/feedback', icon: <Heart size={20} />, label: 'Feedback' },
        { path: '/admin/inventory', icon: <Boxes size={20} />, label: 'Inventory' },
        { path: '/admin/vendors', icon: <Store size={20} />, label: 'Vendors' },
        { path: '/admin/upload', icon: <Package size={20} />, label: 'Upload' },
    ];

    const handleLogout = () => {
        logout();
        navigate('/');
    };



    return (
        <div className="admin-mesh-bg" style={{
            display: 'flex',
            minHeight: '100vh',
            color: textMain,
            fontFamily: "'Inter', sans-serif"
        }}>
            {/* VIBRANT PROFESSIONAL SIDEBAR */}
            <aside style={{
                width: '250px',
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                position: 'sticky',
                top: '0',
                height: '100vh',
                background: 'linear-gradient(180deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
                boxShadow: '10px 0 30px rgba(0,0,0,0.1)',
                zIndex: 100,
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
            }}>
                <div style={{ padding: '1.5rem 1.5rem', background: 'rgba(0,0,0,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                        <div style={{ 
                            width: '40px', height: '40px', background: 'white', borderRadius: '12px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                        }}>
                            <Terminal size={24} color="#6366f1" />
                        </div>
                        <span style={{ fontSize: '1.5rem', fontWeight: '950', letterSpacing: '-0.5px' }}>BLUVANTA</span>
                    </div>
                    <div style={{ fontSize: '0.8rem', opacity: 0.9, fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>Command Center</div>
                </div>

                <nav style={{ padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem', overflowY: 'auto', minHeight: 0 }}>
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === '/admin'}
                            style={({ isActive }) => ({
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '0.8rem 1rem',
                                borderRadius: '12px',
                                textDecoration: 'none',
                                color: '#ffffff',
                                fontWeight: isActive ? '900' : '600',
                                background: isActive ? 'rgba(255,255,255,0.2)' : 'transparent',
                                border: isActive ? '1px solid rgba(255,255,255,0.3)' : '1px solid transparent',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                boxShadow: isActive ? '0 5px 10px rgba(0,0,0,0.1)' : 'none',
                                flexShrink: 0
                            })}
                            onMouseOver={(e) => { 
                                if (!e.currentTarget.classList.contains('active')) { 
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.style.transform = 'translateX(5px)';
                                } 
                            }}
                            onMouseOut={(e) => { 
                                if (!e.currentTarget.classList.contains('active')) { 
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.transform = 'none';
                                } 
                            }}
                        >
                            {item.icon}
                            <span style={{ fontSize: '1rem' }}>{item.label}</span>
                        </NavLink>
                    ))}
                </nav>

                <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <button 
                        onClick={() => navigate('/')} 
                        style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#ffffff', cursor: 'pointer', borderRadius: '14px', fontWeight: '800', transition: 'all 0.3s' }}
                        onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; }}
                        onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
                    >
                        <ArrowLeft size={18} /> Store View
                    </button>
                    <button 
                        onClick={handleLogout} 
                        style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', padding: '1rem', background: '#ff4d4d', border: 'none', color: '#ffffff', cursor: 'pointer', borderRadius: '14px', fontWeight: '900', boxShadow: '0 8px 16px rgba(255, 77, 77, 0.3)', transition: 'all 0.3s' }}
                        onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.background = '#ff3333'; }}
                        onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = '#ff4d4d'; }}
                    >
                        <LogOut size={18} /> Disconnect
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: isLight ? '#f3f4f6' : '#020617' }}>
                {/* Top Header */}
                <header style={{ 
                    height: '70px', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 2rem',
                    background: isLight ? '#ffffff' : '#0f172a',
                    borderBottom: isLight ? '1px solid #e2e8f0' : '1px solid #1e293b',
                    zIndex: 90
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h2 style={{ fontSize: '1.3rem', fontWeight: '950', color: textMain, letterSpacing: '-0.25px', marginBottom: '0.1rem' }}>Management Dashboard</h2>
                        <p style={{ fontSize: '0.8rem', color: textMuted, fontWeight: '600' }}>Operations Control & System Intelligence</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <button 
                            onClick={toggleTheme}
                            style={{
                                background: isLight ? '#f1f5f9' : '#1e293b',
                                border: '1px solid rgba(150,150,150,0.1)',
                                width: '48px',
                                height: '48px',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: isLight ? '#475569' : '#ffffff',
                                cursor: 'pointer',
                                transition: 'all 0.3s'
                            }}
                            onMouseOver={(e) => { e.currentTarget.style.transform = 'rotate(15deg)'; }}
                            onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; }}
                        >
                            {isLight ? <Moon size={22} /> : <Sun size={22} />}
                        </button>
                        
                        <div style={{ position: 'relative' }}>
                            <button style={{
                                width: '48px', height: '48px', borderRadius: '16px', background: isLight ? '#f1f5f9' : '#1e293b',
                                border: 'none', color: isLight ? '#475569' : '#ffffff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Bell size={22} />
                            </button>
                            <div style={{ position: 'absolute', top: '10px', right: '10px', width: '10px', height: '10px', borderRadius: '50%', background: '#ff4d4d', border: `2px solid ${isLight ? '#ffffff' : '#0f172a'}` }} />
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.5rem 0.5rem 0.5rem 1.5rem', background: isLight ? '#f8fafc' : 'rgba(255,255,255,0.03)', borderRadius: '20px', border: `1px solid rgba(150,150,150,0.1)` }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                <span style={{ fontSize: '0.95rem', fontWeight: '800', color: textMain }}>Bluvanta Admin</span>
                                <span style={{ fontSize: '0.75rem', color: textMuted, fontWeight: '700' }}>System Administrator</span>
                            </div>
                            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '950', fontSize: '1.4rem', boxShadow: '0 8px 20px rgba(99, 102, 241, 0.4)' }}>
                                A
                            </div>
                        </div>
                    </div>
                </header>

                <main style={{ flex: 1, padding: '1.5rem 2rem', overflowY: 'auto' }}>
                    <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
                        <Outlet context={{ isLight, bgMain, textMain, textMuted, borderCol }} />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
