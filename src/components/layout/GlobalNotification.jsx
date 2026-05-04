import React, { useEffect, useState } from 'react';
import { CheckCircle2, XCircle, AlertCircle, Sparkles } from 'lucide-react';
import { useAppContext } from '../../context/useAppContext';

const GlobalNotification = () => {
    const { notification, hidePopup, theme } = useAppContext();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (notification.visible) {
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => setIsVisible(false), 500); // Wait for exit animation
            return () => clearTimeout(timer);
        }
    }, [notification.visible]);

    if (!isVisible && !notification.visible) return null;

    const isLight = theme === 'light';
    
    // Icon mapping
    const Icon = {
        success: <CheckCircle2 size={64} color="#10b981" />,
        error: <XCircle size={64} color="#ef4444" />,
        info: <AlertCircle size={64} color="#6366f1" />
    }[notification.type || 'info'];

    const accentColor = {
        success: '#10b981',
        error: '#ef4444',
        info: '#6366f1'
    }[notification.type || 'info'];

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            background: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(10px)',
            opacity: notification.visible ? 1 : 0,
            transition: 'opacity 0.4s ease',
            pointerEvents: notification.visible ? 'auto' : 'none'
        }}>
            <div style={{
                background: isLight ? 'rgba(15, 23, 42, 0.4)' : 'rgba(255, 255, 255, 0.45)', // Slightly dark for readability
                backdropFilter: 'blur(40px) saturate(200%)',
                padding: '4rem 3rem',
                borderRadius: '48px',
                maxWidth: '500px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '2rem',
                border: `1px solid ${isLight ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.2)'}`,
                boxShadow: `0 50px 100px rgba(0,0,0,0.5), inset 0 0 0 1px ${isLight ? 'rgba(255,255,255,0.4)' : 'rgba(15, 23, 42, 0.1)'}`,
                transform: notification.visible ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(20px)',
                opacity: notification.visible ? 1 : 0,
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative'
            }}>
                {/* Decorative Elements */}
                <div style={{
                    position: 'absolute',
                    top: '-40px',
                    width: '80px',
                    height: '80px',
                    borderRadius: '24px',
                    background: isLight ? 'rgba(255, 255, 255, 0.8)' : 'rgba(15, 23, 42, 0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                    border: `1px solid ${isLight ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'}`
                }}>
                    {Icon}
                </div>

                <div style={{ marginTop: '2.5rem' }}>
                    <h2 style={{ 
                        fontSize: '2.5rem', 
                        fontWeight: '950', 
                        marginBottom: '1rem', 
                        color: isLight ? '#ffffff' : '#0f172a',
                        letterSpacing: '-1.5px',
                        textShadow: isLight ? '0 10px 20px rgba(0,0,0,0.2)' : 'none'
                    }}>
                        {notification.title || (notification.type === 'success' ? 'Confirmed!' : 'System Message')}
                    </h2>
                    <p style={{ 
                        fontSize: '1.2rem', 
                        fontWeight: '700', 
                        color: isLight ? 'rgba(255,255,255,0.9)' : 'rgba(15, 23, 42, 0.8)',
                        lineHeight: '1.6'
                    }}>
                        {notification.message}
                    </p>
                </div>

                <button 
                    onClick={() => {
                        notification.onConfirm?.();
                        hidePopup();
                    }}
                    style={{
                        padding: '1.25rem 3rem',
                        borderRadius: '20px',
                        background: isLight ? '#ffffff' : '#0f172a',
                        color: isLight ? '#0f172a' : '#ffffff',
                        border: 'none',
                        fontSize: '1.1rem',
                        fontWeight: '900',
                        cursor: 'pointer',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                    }}
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
                >
                   {notification.type === 'success' ? 'Continue' : 'Acknowledge'}
                </button>

                {notification.type === 'success' && notification.isOrder && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: accentColor, opacity: 0.8, fontSize: '0.9rem', fontWeight: '800' }}>
                        <Sparkles size={16} /> Order Pipeline Initialized
                    </div>
                )}
            </div>
        </div>
    );
};

export default GlobalNotification;
