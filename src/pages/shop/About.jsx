import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Shield, Zap, Target } from 'lucide-react';

const About = () => {
    return (
        <div className="about-page animate-fade-in container section-padding">
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div id="meaning" className="glass-card" style={{ padding: '4rem', marginBottom: '3rem', background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05), transparent)', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '950', marginBottom: '2rem', letterSpacing: '-2px', lineHeight: '1' }}>Bluvanta – Professional Meaning</h1>
                    <p style={{ fontSize: '1.4rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '3rem', fontWeight: '500' }}>
                        Bluvanta represents a trusted and strategic business technology platform designed to deliver operational excellence and competitive advantage.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                        <div style={{ padding: '2rem', background: 'var(--pastel-blue-bg)', borderRadius: '24px', border: '1px solid var(--pastel-blue-text)', transition: 'transform 0.3s ease' }} className="card-hover">
                            <Shield size={40} color="var(--pastel-blue-text)" style={{ marginBottom: '1rem' }} />
                            <strong style={{ fontSize: '1.75rem', display: 'block', marginBottom: '0.75rem', color: 'var(--pastel-blue-text)' }}>“Blu”</strong>
                            <p style={{ color: 'var(--text-main)', fontWeight: '600', fontSize: '1.1rem' }}>Symbolizes trust, reliability, intelligence, and stability — qualities essential for enterprise solutions.</p>
                        </div>
                        <div style={{ padding: '2rem', background: 'var(--pastel-rose-bg)', borderRadius: '24px', border: '1px solid var(--pastel-rose-text)', transition: 'transform 0.3s ease' }} className="card-hover">
                            <Zap size={40} color="var(--pastel-rose-text)" style={{ marginBottom: '1rem' }} />
                            <strong style={{ fontSize: '1.75rem', display: 'block', marginBottom: '0.75rem', color: 'var(--pastel-rose-text)' }}>“Vanta”</strong>
                            <p style={{ color: 'var(--text-main)', fontWeight: '600', fontSize: '1.1rem' }}>Suggests advantage, forward vision, and strategic growth.</p>
                        </div>
                    </div>

                    <div style={{
                        padding: '3rem',
                        background: 'var(--glass-bg)',
                        borderRadius: '32px',
                        border: '1px solid var(--glass-border)',
                        boxShadow: 'var(--card-shadow)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <Target size={120} style={{ position: 'absolute', right: '-30px', bottom: '-30px', opacity: 0.05, color: 'var(--primary-color)' }} />
                        <p style={{ fontSize: '1.5rem', lineHeight: '1.6', color: 'var(--text-main)', fontWeight: '800', position: 'relative', zIndex: 1 }}>
                            Bluvanta signifies a secure, intelligent, and forward-thinking business management solution that empowers organizations to operate efficiently and grow strategically.
                        </p>
                    </div>

                    <div style={{ marginTop: '4rem' }}>
                        <Link to="/" className="btn" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>
                            Explore the Platform
                        </Link>
                    </div>
                </div>
            </div>

            <style>{`
                .card-hover:hover {
                    transform: translateY(-10px);
                }
                .about-page {
                    min-height: 80vh;
                    display: flex;
                    align-items: center;
                }
            `}</style>
        </div>
    );
};

export default About;
