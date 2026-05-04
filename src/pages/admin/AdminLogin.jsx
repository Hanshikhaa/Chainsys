import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../../context/useAppContext';
import { ShieldAlert, Mail, Lock, ChevronRight, Sun, Moon, Sparkles } from 'lucide-react';

const AdminLogin = () => {
    const { login, user, theme, toggleTheme, showPopup } = useAppContext();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/admin';

    // Restriction check: if already logged in as a non-admin, block access with the mandatory note
    if (user && user.role !== 'admin') {
        const isLight = theme === 'light';
        
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

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Updated credentials validation as requested
        if(formData.email === 'admin@bluvanta.com' && formData.password === 'admin123') {
            login(formData);
            navigate(from, { replace: true });
        } else {
            showPopup('Invalid Admin Credentials. Authentication sequence failed.', 'error');
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            background: 'var(--bg-color)',
            fontFamily: "var(--font-main)",
            position: 'relative',
            overflow: 'hidden'
        }} className="admin-mesh-bg">
            {/* INNNOVATIVE BACKGROUND ANIMATION ELEMENTS */}
            <div style={{
                position: 'absolute',
                width: '600px', height: '600px',
                background: 'radial-gradient(circle, rgba(78, 205, 196, 0.15) 0%, transparent 70%)',
                top: '-200px', right: '-100px',
                borderRadius: '50%',
                filter: 'blur(80px)',
                animation: 'float 10s infinite alternate'
            }} />
            <div style={{
                position: 'absolute',
                width: '500px', height: '500px',
                background: 'radial-gradient(circle, rgba(255, 95, 109, 0.1) 0%, transparent 70%)',
                bottom: '-150px', left: '-100px',
                borderRadius: '50%',
                filter: 'blur(100px)',
                animation: 'float 15s infinite alternate-reverse'
            }} />

            <div style={{
                width: '100%',
                maxWidth: '480px',
                position: 'relative',
                zIndex: 10
            }}>
                {/* FLOATING GLASS CARD */}
                <div style={{
                    padding: '2.5rem 2rem',
                    background: theme === 'light' 
                        ? 'rgba(255, 255, 255, 0.7)' 
                        : 'rgba(15, 23, 42, 0.6)',
                    backdropFilter: 'blur(30px) saturate(150%)',
                    borderRadius: '40px',
                    border: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.1)'}`,
                    boxShadow: '0 40px 100px rgba(0, 0, 0, 0.3)',
                    animation: 'innovativeEntry 1s cubic-bezier(0.2, 0.8, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Top Accent Line */}
                    <div style={{
                        position: 'absolute', top: 0, left: 0, width: '100%', height: '5px',
                        background: 'linear-gradient(90deg, #4ECDC4, #FFB86C, #FF79C6)',
                        opacity: 0.8
                    }} />

                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <div style={{ 
                            width: '50px', height: '50px', margin: '0 auto 1rem',
                            background: 'var(--primary-color)',
                            borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 10px 25px rgba(99, 102, 241, 0.4)',
                            transform: 'rotate(-5deg)'
                        }}>
                            <ShieldAlert size={28} color="white" />
                        </div>
                        <h1 style={{ 
                            fontSize: '2rem', fontWeight: '1000', 
                            color: theme === 'light' ? '#0f172a' : 'white',
                            letterSpacing: '-1.5px', marginBottom: '0.5rem',
                            fontFamily: "var(--font-accent)"
                        }}>
                            Admin Portal
                        </h1>
                        <p style={{ 
                            color: 'var(--text-muted)',
                            fontSize: '0.9rem', fontWeight: '600', letterSpacing: '0.5px'
                        }}>
                            Secure multi-factor initialization required.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ position: 'relative' }}>
                            <Mail size={18} style={{ 
                                position: 'absolute', left: '1.5rem', top: '50%', 
                                transform: 'translateY(-50%)', 
                                color: '#4ECDC4', opacity: 0.8
                            }} />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Administrative ID"
                                style={{
                                    width: '100%',
                                    padding: '1rem 1rem 1rem 3rem',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(78, 205, 196, 0.2)',
                                    background: theme === 'light' ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.05)',
                                    color: theme === 'light' ? '#0f172a' : 'white',
                                    fontSize: '0.9rem', fontWeight: '800', outline: 'none',
                                    transition: 'all 0.3s'
                                }}
                            />
                        </div>

                        <div style={{ position: 'relative' }}>
                            <Lock size={18} style={{ 
                                position: 'absolute', left: '1.5rem', top: '50%', 
                                transform: 'translateY(-50%)', 
                                color: '#4ECDC4', opacity: 0.8
                            }} />
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                placeholder="Verification Token"
                                style={{
                                    width: '100%',
                                    padding: '1rem 1rem 1rem 3rem',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(78, 205, 196, 0.2)',
                                    background: theme === 'light' ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.05)',
                                    color: theme === 'light' ? '#0f172a' : 'white',
                                    fontSize: '0.9rem', fontWeight: '800', outline: 'none',
                                    transition: 'all 0.3s',
                                    letterSpacing: '2px'
                                }}
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="btn-premium"
                            style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '16px',
                                fontSize: '1rem',
                                fontWeight: '1000',
                                cursor: 'pointer',
                                transition: 'all 0.5s var(--ease-smooth)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                boxShadow: '0 10px 20px rgba(16, 185, 129, 0.3)',
                                marginTop: '0.5rem',
                                fontFamily: "var(--font-accent)",
                                letterSpacing: '1px'
                            }}
                        >
                            Authorize Access <ChevronRight size={18} strokeWidth={3} />
                        </button>
                    </form>

                    <div style={{ 
                        display: 'flex', justifyContent: 'center', gap: '2rem', 
                        marginTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                        paddingTop: '1.5rem'
                    }}>
                        <button 
                            onClick={toggleTheme}
                            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--primary-color)' }}
                        >
                            {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
                        </button>
                        <button 
                            onClick={() => navigate('/login')}
                            style={{ 
                                background: 'transparent', border: 'none', cursor: 'pointer', 
                                color: 'var(--primary-color)', fontWeight: '1000', fontSize: '0.9rem', 
                                letterSpacing: '2px', fontFamily: "var(--font-accent)"
                            }}
                        >
                            PUBLIC_STORE
                        </button>
                    </div>
                </div>

                {/* INNOVATIVE BADGE */}
                <div style={{
                    marginTop: '2rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
                }}>
                    <Sparkles size={16} color="#4ECDC4" />
                    <span style={{ 
                        fontSize: '0.75rem', fontWeight: '900', color: theme === 'light' ? '#64748b' : 'rgba(255,255,255,0.5)',
                        letterSpacing: '2px', textTransform: 'uppercase'
                    }}>
                        Innovative Admin Gateway v2.0
                    </span>
                </div>
            </div>

            <style>
                {`
                    @keyframes innovativeEntry {
                        from { opacity: 0; transform: translateY(60px) scale(0.95); }
                        to { opacity: 1; transform: translateY(0) scale(1); }
                    }
                    @keyframes float {
                        from { transform: translateY(0) scale(1); }
                        to { transform: translateY(30px) scale(1.05); }
                    }
                    .btn-premium {
                        position: relative;
                        overflow: hidden;
                    }
                    .btn-premium::after {
                        content: '';
                        position: absolute;
                        top: -50%;
                        left: -50%;
                        width: 200%;
                        height: 200%;
                        background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
                        opacity: 0;
                        transition: opacity 0.6s ease;
                        pointer-events: none;
                    }
                    .btn-premium:hover::after {
                        opacity: 1;
                    }
                    input:focus {
                        border-color: var(--primary-color) !important;
                        background: ${theme === 'light' ? 'white' : 'rgba(255,255,255,0.1)'} !important;
                        box-shadow: 0 0 30px rgba(99, 102, 241, 0.2);
                        transform: translateY(-2px);
                    }
                    button:hover {
                        transform: translateY(-5px);
                    }
                `}
            </style>
        </div>
    );
};

export default AdminLogin;
