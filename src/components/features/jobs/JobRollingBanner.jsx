import React from 'react';
import { Briefcase, Zap, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const JobRollingBanner = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            background: 'linear-gradient(90deg, #6366f1, #a855f7, #ec4899, #6366f1)',
            backgroundSize: '300% 100%',
            animation: 'gradientFlow 8s linear infinite',
            padding: '0.75rem 0',
            position: 'relative',
            zIndex: 1000,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}
        onClick={() => navigate('/contact')}
        >
            <div style={{
                display: 'flex',
                whiteSpace: 'nowrap',
                animation: 'marquee 30s linear infinite',
                gap: '4rem',
                alignItems: 'center'
            }}>
                {[...Array(5)].map((_, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'white', fontWeight: '900', fontSize: '0.9rem', letterSpacing: '0.5px' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Briefcase size={18} /> WE ARE HIRING!
                        </span>
                        <span style={{ opacity: 0.8 }}>Join the Bluvanta ecosystem. Explore roles in AI, Logistics, and Global Trade.</span>
                        <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.25rem 0.75rem', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem' }}>
                            APPLY NOW <ArrowRight size={14} />
                        </span>
                        <Zap size={16} fill="white" />
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes gradientFlow {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </div>
    );
};

export default JobRollingBanner;
