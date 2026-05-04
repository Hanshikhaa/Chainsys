import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    HelpCircle, Book, ShoppingBag, ShieldCheck, Settings, 
    ArrowRight, ChevronRight, User, MousePointer2, 
    CreditCard, Package, BarChart3, PlusCircle, 
    Truck, Heart, HelpCircle as HelpIcon, Search,
    Moon, Sun, LayoutDashboard, CloudUpload, Info
} from 'lucide-react';
import { useAppContext } from '../../context/useAppContext';

const AppHelp = () => {
    const { theme } = useAppContext();
    const isLight = theme === 'light';
    const [activeSection, setActiveSection] = useState('storefront');

    const sections = [
        { id: 'storefront', label: 'Storefront Guide', icon: <ShoppingBag size={20} /> },
        { id: 'admin', label: 'Admin Portal', icon: <LayoutDashboard size={20} /> },
        { id: 'system', label: 'System Features', icon: <Settings size={20} /> }
    ];

    const cardStyle = {
        background: isLight ? 'rgba(255, 255, 255, 0.7)' : 'rgba(30, 41, 59, 0.5)',
        backdropFilter: 'blur(16px)',
        border: `1px solid ${isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)'}`,
        borderRadius: '24px',
        padding: '2rem',
        boxShadow: isLight ? '0 10px 30px rgba(0,0,0,0.05)' : '0 10px 30px rgba(0,0,0,0.2)',
        marginBottom: '2rem'
    };

    const stepLabelStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        background: 'var(--primary-color)',
        color: 'white',
        padding: '0.25rem 0.75rem',
        borderRadius: '50px',
        fontSize: '0.75rem',
        fontWeight: '900',
        marginBottom: '1rem'
    };

    const redirectBtnStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        background: 'var(--primary-color)',
        color: 'white',
        padding: '0.75rem 1.5rem',
        borderRadius: '12px',
        textDecoration: 'none',
        fontWeight: '700',
        fontSize: '0.9rem',
        marginTop: '1.5rem',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)'
    };

    return (
        <div className="help-page container section-padding animate-fade-in" style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <div style={{ 
                    display: 'inline-flex', 
                    padding: '1.25rem', 
                    background: 'var(--p-lavender)', 
                    borderRadius: '24px', 
                    color: 'var(--primary-color)',
                    marginBottom: '1.5rem',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
                }}>
                    <HelpCircle size={48} />
                </div>
                <h1 style={{ fontSize: '3.5rem', fontWeight: '950', letterSpacing: '-2px', marginBottom: '1rem' }}>
                    Bluvanta <span style={{ color: 'var(--primary-color)' }}>Support Hub</span>
                </h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                    The complete interactive guide for mastering every corner of the Bluvanta ecosystem.
                </p>
            </div>

            {/* Section Switcher */}
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '1rem', 
                marginBottom: '3rem',
                flexWrap: 'wrap'
            }}>
                {sections.map(section => (
                    <button 
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '1rem 2rem',
                            borderRadius: '50px',
                            border: '1px solid',
                            borderColor: activeSection === section.id ? 'var(--primary-color)' : 'var(--glass-border)',
                            background: activeSection === section.id ? 'var(--primary-color)' : 'var(--card-bg)',
                            color: activeSection === section.id ? 'white' : 'var(--text-main)',
                            fontWeight: '800',
                            fontSize: '0.95rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            transform: activeSection === section.id ? 'scale(1.05)' : 'scale(1)',
                            boxShadow: activeSection === section.id ? '0 10px 20px rgba(37, 99, 235, 0.2)' : 'none'
                        }}
                    >
                        {section.icon}
                        {section.label}
                    </button>
                ))}
            </div>

            {/* CONTENT AREA */}
            <div className="help-content-grid">
                
                {activeSection === 'storefront' && (
                    <div className="section-storefront">
                        <div style={cardStyle}>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: '900', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <ShieldCheck color="var(--primary-color)" /> 1.1 Authentication & Profile
                            </h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                To enjoy the full benefits of Bluvanta, you should first identify yourself.
                            </p>
                            
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                <div style={{ padding: '1.25rem', background: 'var(--bg-color)', borderRadius: '16px', borderLeft: '4px solid var(--primary-color)' }}>
                                    <div style={stepLabelStyle}>STEP 01</div>
                                    <h4 style={{ fontWeight: '800', marginBottom: '0.5rem' }}>Identify</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Enter your mail ID and a password consisting of letters and numbers.</p>
                                </div>
                                <div style={{ padding: '1.25rem', background: 'var(--bg-color)', borderRadius: '16px', borderLeft: '4px solid #10b981' }}>
                                    <div style={{ ...stepLabelStyle, background: '#10b981' }}>STEP 02</div>
                                    <h4 style={{ fontWeight: '800', marginBottom: '0.5rem' }}>Register</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>New users can sign up instantly to create a local browser profile.</p>
                                </div>
                            </div>

                            <Link to="/login" style={redirectBtnStyle}>
                                Jump to Login Portal <ChevronRight size={18} />
                            </Link>
                        </div>

                        <div style={cardStyle}>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: '900', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Search color="var(--primary-color)" /> 1.2 Discovery & Products
                            </h2>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <li style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ width: '32px', height: '32px', background: 'var(--p-rose)', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', color: 'var(--primary-color)', fontSize: '0.8rem' }}>01</div>
                                    <div>
                                        <h4 style={{ fontWeight: '800' }}>Strategic Nav</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Use the "Three Lines" icon in the header to filter by departments like Fashion or Electronics.</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ width: '32px', height: '32px', background: 'var(--p-blue)', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', color: 'var(--v-blue)', fontSize: '0.8rem' }}>02</div>
                                    <div>
                                        <h4 style={{ fontWeight: '800' }}>Product Details</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Click any product image to see full specs and select sizes (XXS to XXL).</p>
                                    </div>
                                </li>
                            </ul>
                            <Link to="/products" style={redirectBtnStyle}>
                                Browse All Products <ChevronRight size={18} />
                            </Link>
                        </div>

                        <div style={cardStyle}>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: '900', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <PlusCircle color="#10b981" /> 1.4 How to Purchase
                            </h2>
                            <div style={{ background: isLight ? '#f8fafc' : 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '16px', marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                    <div style={{ flex: 1, minWidth: '150px' }}>
                                        <div style={{ color: 'var(--primary-color)', fontWeight: '900', marginBottom: '0.5rem' }}>1. Add</div>
                                        <p style={{ fontSize: '0.8rem' }}>Click "Add to Cart" on any product detail page.</p>
                                    </div>
                                    <ArrowRight size={16} style={{ marginTop: '0.5rem', opacity: 0.5 }} className="hide-mobile" />
                                    <div style={{ flex: 1, minWidth: '150px' }}>
                                        <div style={{ color: 'var(--primary-color)', fontWeight: '900', marginBottom: '0.5rem' }}>2. Bag</div>
                                        <p style={{ fontSize: '0.8rem' }}>Open the Cart icon in the header and check your items.</p>
                                    </div>
                                    <ArrowRight size={16} style={{ marginTop: '0.5rem', opacity: 0.5 }} className="hide-mobile" />
                                    <div style={{ flex: 1, minWidth: '150px' }}>
                                        <div style={{ color: 'var(--primary-color)', fontWeight: '900', marginBottom: '0.5rem' }}>3. Pay</div>
                                        <p style={{ fontSize: '0.8rem' }}>Fill in shipping info and confirm your order payment.</p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <Link to="/cart" style={redirectBtnStyle}>
                                    Open My Bag <ChevronRight size={18} />
                                </Link>
                                <Link to="/orders" style={{ ...redirectBtnStyle, background: 'var(--bg-color)', border: '1px solid var(--glass-border)', color: 'var(--text-main)', boxShadow: 'none' }}>
                                    Track My Orders <Package size={18} />
                                </Link>
                            </div>
                        </div>

                        <div style={cardStyle}>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: '900', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Package color="var(--p-blue)" /> 1.5 Careers & Recruitment
                            </h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                To apply for a job at Bluvanta, visit our integrated Careers Page within the Contact Hub. You can select roles, provide your experience summary, and upload your resume in PDF/DOCX format. Ensure your application is tagged properly for priority review.
                            </p>
                            <Link to="/contact" style={redirectBtnStyle}>
                                Apply for a Job <ChevronRight size={18} />
                            </Link>
                        </div>
                    </div>
                )}

                {activeSection === 'admin' && (
                    <div className="section-admin">
                        {/* Security Warning Banner */}
                        <div style={{
                            ...cardStyle,
                            background: 'rgba(239, 68, 68, 0.1)',
                            border: '1px solid rgba(239, 68, 68, 0.3)',
                            padding: '1.5rem',
                            marginBottom: '2rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.5rem'
                        }}>
                             <div style={{ 
                                padding: '1rem', 
                                background: 'rgba(239, 68, 68, 0.2)', 
                                borderRadius: '16px',
                                color: '#ef4444'
                            }}>
                                <ShieldCheck size={32} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '900', color: '#ef4444', marginBottom: '0.25rem' }}>Restricted Access Entry</h3>
                                <p style={{ fontSize: '0.9rem', color: isLight ? '#b91c1c' : '#fecaca', fontWeight: '700' }}>
                                    The Admin Portal is designated strictly for verified administrators. Regular user accounts are not permitted entry and will be automatically redirected.
                                </p>
                            </div>
                        </div>

                        <div style={cardStyle}>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: '900', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <LayoutDashboard color="var(--primary-color)" /> 2.1 Admin Command Center
                            </h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                                <div>
                                    <h4 style={{ fontWeight: '800', marginBottom: '1rem' }}>Global Monitoring</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                        Track live revenue, order volume, and customer growth via vibrant glass orbs. Use the pulsing "Cortex" banner at the top for real-time AI inventory insights.
                                    </p>
                                </div>
                                <div style={{ background: 'var(--bg-color)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                                    <h4 style={{ fontSize: '0.9rem', fontWeight: '800', marginBottom: '0.75rem' }}>Access Verification</h4>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Only authenticated admin sessions can decrypt the dashboard data streams.</p>
                                    <Link to="/admin-login" style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--primary-color)', fontWeight: '800', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                        Initialize Sec-Session <ChevronRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div style={cardStyle}>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: '900', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <PlusCircle color="#10b981" /> 2.3 Catalog Management
                            </h2>
                            <p style={{ color: 'var(--text-main)', fontWeight: '700', marginBottom: '1rem' }}>How to add new products:</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div style={{ padding: '0.5rem', background: 'var(--p-lavender)', borderRadius: '10px' }}><Info size={18} color="var(--primary-color)" /></div>
                                    <span style={{ fontSize: '0.95rem' }}>Input product name, category, and price.</span>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div style={{ padding: '0.5rem', background: 'var(--p-rose)', borderRadius: '10px' }}><ArrowRight size={18} color="var(--primary-color)" /></div>
                                    <span style={{ fontSize: '0.95rem' }}>Paste a direct image URL (jpg/png) to auto-attach assets.</span>
                                </div>
                            </div>
                            <Link to="/admin/catalog" style={redirectBtnStyle}>
                                Open Catalog Manager <ChevronRight size={18} />
                            </Link>
                        </div>

                        <div style={cardStyle}>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: '900', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <CloudUpload color="var(--v-blue)" /> 2.5 Knowledge Base
                            </h2>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                                Teach the Bluvanta AI by uploading .txt or .md documents in the dedicated dropzone.
                            </p>
                            <Link to="/admin/upload" style={{ ...redirectBtnStyle, background: 'var(--v-blue)' }}>
                                Go to Knowledge Upload <CloudUpload size={18} />
                            </Link>
                        </div>
                    </div>
                )}

                {activeSection === 'system' && (
                    <div className="section-system">
                        <div style={cardStyle}>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: '900', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Settings color="var(--primary-color)" /> Interactive Systems
                            </h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                        {isLight ? <Sun color="#f59e0b" /> : <Moon color="#6366f1" />}
                                        <h4 style={{ fontWeight: '800' }}>Theme Switching</h4>
                                    </div>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                        Use the Sun/Moon icon in the header to toggle between professional Light Mode and futuristic Dark Mode.
                                    </p>
                                </div>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                        <User color="var(--primary-color)" />
                                        <h4 style={{ fontWeight: '800' }}>Profile Controls</h4>
                                    </div>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                        View your security token, date joined, and account permissions in the specialized Profile portal.
                                    </p>
                                    <Link to="/profile" style={{ ...redirectBtnStyle, width: '100%', justifyContent: 'center' }}>
                                        View My Profile <User size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div style={{ ...cardStyle, background: 'linear-gradient(135deg, var(--p-rose), transparent)', border: '1px solid var(--p-rose)' }}>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: '900', marginBottom: '1rem' }}>Still need help?</h2>
                            <p style={{ marginBottom: '2rem' }}>Our decentralized support team is available for 1-on-1 assistance.</p>
                            <Link to="/contact" style={{ ...redirectBtnStyle, background: 'var(--text-main)', color: 'var(--card-bg)' }}>
                                Contact Support Team <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default AppHelp;
