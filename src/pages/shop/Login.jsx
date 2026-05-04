import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../../context/useAppContext';
import { LogIn, User, Mail, Lock, ShieldAlert, Sun, Moon, Phone, MapPin, AtSign } from 'lucide-react';

const Login = () => {
    const { login, user, theme, toggleTheme } = useAppContext();
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (user) {
            // If we are already logged in, redirect away from login page
            if (user.role === 'admin' && !from.startsWith('/admin')) {
                navigate('/admin', { replace: true });
            } else {
                navigate(from, { replace: true });
            }
        }
    }, [user, navigate, from]);

    const [isRegister, setIsRegister] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        address: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // The context login function handles role assignment automatically
        login(formData);
        // Navigation is handled by the useEffect above when 'user' state changes
    };

    return (
        <div className="login-container admin-mesh-bg animate-fade-in" style={{
            minHeight: '100vh', 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden',
            fontFamily: "var(--font-main)"
        }}>
            {/* Vibrant Animated Multi-Layer Overlay */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: theme === 'light' 
                    ? 'radial-gradient(circle at 10% 10%, rgba(99, 102, 241, 0.1), transparent 50%), radial-gradient(circle at 90% 90%, rgba(236, 72, 153, 0.1), transparent 50%)' 
                    : 'radial-gradient(circle at 15% 15%, rgba(129, 140, 248, 0.15), transparent 60%), radial-gradient(circle at 85% 85%, rgba(217, 70, 239, 0.1), transparent 60%)',
                zIndex: 0
            }} />

            <style>
                {`
                    @keyframes slideUp {
                        from { opacity: 0; transform: translateY(60px) scale(0.95); }
                        to { opacity: 1; transform: translateY(0) scale(1); }
                    }
                    @keyframes float {
                        0% { transform: translateY(0px) rotate(0deg); }
                        50% { transform: translateY(-20px) rotate(2deg); }
                        100% { transform: translateY(0px) rotate(0deg); }
                    }
                    .premium-card {
                        animation: slideUp 1.2s cubic-bezier(0.19, 1, 0.22, 1);
                        box-shadow: 0 40px 100px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.1);
                    }
                    .premium-card:hover {
                        transform: translateY(-8px);
                        box-shadow: 0 50px 120px rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.2);
                    }
                    .input-premium {
                        transition: all 0.4s var(--ease-smooth);
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        background: rgba(255, 255, 255, 0.03);
                        border-radius: 20px;
                    }
                    .input-premium:focus-within {
                        transform: scale(1.02);
                        background: rgba(255, 255, 255, 0.08) !important;
                        border-color: var(--primary-color);
                        box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
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
                    .floating-element {
                        animation: float 8s ease-in-out infinite;
                    }
                `}
            </style>

            <div className="premium-card" style={{
                width: '100%',
                maxWidth: '420px',
                padding: '2.5rem 2rem',
                borderRadius: '30px',
                background: theme === 'light' 
                    ? 'rgba(255, 255, 255, 0.65)' 
                    : 'rgba(15, 23, 42, 0.75)',
                backdropFilter: 'blur(50px) saturate(220%)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                position: 'relative',
                zIndex: 1,
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                overflow: 'hidden'
            }}>
                {/* Neon Accent Line */}
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #6366f1, #a855f7, #ec4899)'
                }} />

                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <div style={{ 
                        fontSize: '2.5rem', 
                        fontWeight: '1000', 
                        color: theme === 'light' ? '#0f172a' : 'white', 
                        letterSpacing: '-2px',
                        marginBottom: '0.2rem',
                        textShadow: '0 10px 20px rgba(0,0,0,0.1)',
                        fontFamily: "var(--font-accent)"
                    }}>
                        BLUVANTA 🔷
                    </div>
                    <div style={{ 
                        fontSize: '0.65rem',
                        fontWeight: '900',
                        color: 'var(--primary-color)',
                        letterSpacing: '4px',
                        textTransform: 'uppercase',
                        opacity: 0.8
                    }}>
                        Global Ecosystem
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <h1 style={{ 
                        fontSize: '1.6rem', 
                        fontWeight: '1000', 
                        marginBottom: '0.5rem',
                        color: theme === 'light' ? '#0f172a' : 'white',
                        lineHeight: 1,
                        fontFamily: "var(--font-accent)"
                    }}>
                        {isRegister ? 'Begin Integration' : 'Secure Access'}
                    </h1>
                    <p style={{ 
                        color: 'var(--text-muted)',
                        fontWeight: '600',
                        fontSize: '0.85rem'
                    }}>
                        {isRegister ? 'Join the world\'s most sophisticated supply network.' : 'Connect to your operational hub via our encrypted gateway.'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    <div className="input-premium" style={{ position: 'relative' }}>
                        <AtSign size={18} style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', color: '#6366f1' }} />
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            placeholder="Username"
                            style={{ 
                                width: '100%', 
                                padding: '1rem 1rem 1rem 3rem', 
                                borderRadius: '16px', 
                                border: '1px solid rgba(255,255,255,0.1)', 
                                background: 'rgba(255,255,255,0.05)', 
                                color: theme === 'light' ? '#0f172a' : 'white', 
                                fontSize: '0.9rem',
                                fontWeight: '700',
                                outline: 'none'
                            }}
                        />
                    </div>
                    
                    <div className="input-premium" style={{ position: 'relative' }}>
                        <Mail size={18} style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', color: '#6366f1' }} />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Email Address"
                            style={{ 
                                width: '100%', 
                                padding: '1rem 1rem 1rem 3rem', 
                                borderRadius: '16px', 
                                border: '1px solid rgba(255,255,255,0.1)', 
                                background: 'rgba(255,255,255,0.05)', 
                                color: theme === 'light' ? '#0f172a' : 'white', 
                                fontSize: '0.9rem',
                                fontWeight: '700',
                                outline: 'none'
                            }}
                        />
                    </div>

                    {isRegister && (
                        <>
                            <div className="input-premium" style={{ position: 'relative' }}>
                                <Phone size={18} style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', color: '#6366f1' }} />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="Phone Number"
                                    style={{ 
                                        width: '100%', 
                                        padding: '1.2rem 1.2rem 1.2rem 3.8rem', 
                                        borderRadius: '24px', 
                                        border: '1px solid rgba(255,255,255,0.1)', 
                                        background: 'rgba(255,255,255,0.05)', 
                                        color: theme === 'light' ? '#0f172a' : 'white', 
                                        fontSize: '1rem',
                                        fontWeight: '700',
                                        outline: 'none'
                                    }}
                                />
                            </div>

                            <div className="input-premium" style={{ position: 'relative' }}>
                                <MapPin size={18} style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', color: '#6366f1' }} />
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                    placeholder="Operational Address"
                                    style={{ 
                                        width: '100%', 
                                        padding: '1.2rem 1.2rem 1.2rem 3.8rem', 
                                        borderRadius: '24px', 
                                        border: '1px solid rgba(255,255,255,0.1)', 
                                        background: 'rgba(255,255,255,0.05)', 
                                        color: theme === 'light' ? '#0f172a' : 'white', 
                                        fontSize: '1rem',
                                        fontWeight: '700',
                                        outline: 'none'
                                    }}
                                />
                            </div>
                        </>
                    )}

                    <div className="input-premium" style={{ position: 'relative' }}>
                        <Lock size={18} style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', color: '#6366f1' }} />
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            placeholder="Security Credentials"
                            style={{ 
                                width: '100%', 
                                padding: '1rem 1rem 1rem 3rem', 
                                borderRadius: '16px', 
                                border: '1px solid rgba(255,255,255,0.1)', 
                                background: 'rgba(255,255,255,0.05)', 
                                color: theme === 'light' ? '#0f172a' : 'white', 
                                fontSize: '0.9rem',
                                fontWeight: '700',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="btn-premium"
                        style={{ 
                            width: '100%', 
                            padding: '1rem', 
                            fontSize: '1rem', 
                            fontWeight: '1000',
                            marginTop: '1rem', 
                            background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '16px',
                            cursor: 'pointer',
                            boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.75rem',
                            transition: 'all 0.5s var(--ease-smooth)',
                            letterSpacing: '1px',
                            fontFamily: "var(--font-accent)"
                        }}
                    >
                        INITIATE <LogIn size={18} strokeWidth={3} />
                    </button>
                </form>

                <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '600' }}>
                        {isRegister ? 'Already within the network?' : "New to the Bluvanta ecosystem?"} {' '}
                        <button
                            onClick={() => setIsRegister(!isRegister)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'var(--primary-color)',
                                fontWeight: '1000',
                                cursor: 'pointer',
                                fontSize: '0.85rem',
                                padding: '0.25rem 0.5rem',
                                textDecoration: 'none',
                                borderBottom: '2.5px solid var(--primary-color)',
                                fontFamily: "var(--font-accent)",
                                marginLeft: '0.5rem',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {isRegister ? 'SIGN IN' : 'SIGN UP'}
                        </button>
                    </p>
                    
                    <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '2rem', opacity: 0.9 }}>
                        <button 
                            onClick={toggleTheme}
                            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#6366f1' }}
                        >
                            {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
                        </button>
                        <button 
                            onClick={() => navigate('/admin-login')}
                            style={{ 
                                background: 'transparent', 
                                border: 'none', 
                                cursor: 'pointer', 
                                color: '#6366f1',
                                fontSize: '0.85rem',
                                fontWeight: '1000',
                                letterSpacing: '2px'
                            }}
                        >
                            ADMIN_PORTAL
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
