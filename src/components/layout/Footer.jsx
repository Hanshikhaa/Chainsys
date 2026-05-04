import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--card-bg)',
            borderTop: '1px solid var(--glass-border)',
            padding: '5rem 0 2rem 0',
            marginTop: '4rem'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '4rem',
                    marginBottom: '4rem'
                }}>
                    {/* Brand Section */}
                    <div>
                        <Link to="/" style={{
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '1.5rem'
                        }}>
                            <div style={{
                                width: '36px',
                                height: '36px',
                                background: 'linear-gradient(135deg, var(--p-rose), var(--p-blue))',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Briefcase size={20} color="white" fill="white" />
                            </div>
                            <span style={{
                                fontSize: '1.5rem',
                                fontWeight: '900',
                                color: 'var(--text-main)',
                                letterSpacing: '-1px',
                                fontFamily: 'var(--font-accent)'
                            }}>BLUVANTA</span>
                        </Link>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: '1.8' }}>
                            Redefining professional procurement with a touch of elegance. Bluvanta provides premium products for modern enterprises and creative studios.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" className="icon-btn-p" style={{ width: '40px', height: '40px' }}><Facebook size={18} /></a>
                            <a href="#" className="icon-btn-p" style={{ width: '40px', height: '40px' }}><Twitter size={18} /></a>
                            <a href="#" className="icon-btn-p" style={{ width: '40px', height: '40px' }}><Instagram size={18} /></a>
                            <a href="#" className="icon-btn-p" style={{ width: '40px', height: '40px' }}><Linkedin size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>Experience</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                            <li><Link to="/products" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem' }}>Shop All</Link></li>
                            <li><Link to="/products?category=Electronics" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem' }}>Premium Tech</Link></li>
                            <li><Link to="/about" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem' }}>Our Story</Link></li>
                            <li><Link to="/contact" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem' }}>Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>Corporate Office</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1.25rem' }}>
                            <li style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                <MapPin size={20} style={{ color: 'var(--primary-color)', flexShrink: 0 }} />
                                <span>Prestige Tech Park, Outer Ring Rd, Bengaluru, KA 560103</span>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                <Mail size={20} style={{ color: 'var(--primary-color)', flexShrink: 0 }} />
                                <span>concierge@bluvanta.com</span>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                <Phone size={20} style={{ color: 'var(--primary-color)', flexShrink: 0 }} />
                                <span>+91 80 4567 8901</span>
                            </li>
                        </ul>
                    </div>

                    {/* Brand Partners (Images) */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>Brand Partners</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div style={{ height: '80px', background: 'var(--p-rose)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" style={{ maxWidth: '100%', maxHeight: '100%', filter: 'grayscale(100%) opacity(0.5)' }} />
                            </div>
                            <div style={{ height: '80px', background: 'var(--p-blue)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" style={{ maxWidth: '100%', maxHeight: '100%', filter: 'grayscale(100%) opacity(0.5)' }} />
                            </div>
                            <div style={{ height: '80px', background: 'var(--p-sage)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" style={{ maxWidth: '100%', maxHeight: '100%', filter: 'grayscale(100%) opacity(0.5)' }} />
                            </div>
                            <div style={{ height: '80px', background: 'var(--p-cream)', borderRadius: '16px', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" style={{ maxWidth: '100%', maxHeight: '100%', filter: 'grayscale(100%) opacity(0.5)' }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid var(--glass-border)',
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    color: 'var(--text-muted)',
                    fontSize: '0.85rem'
                }}>
                    <p>© 2026 Bluvanta Global Ltd. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Cookie Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
