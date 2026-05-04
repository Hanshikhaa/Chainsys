import React, { useState } from 'react';
import { useAppContext } from '../../context/useAppContext';
import { useOutletContext } from 'react-router-dom';
import { Users, Mail, ShieldCheck, PhoneCall, MapPin, PlusCircle, CheckCircle2 } from 'lucide-react';

const Vendors = () => {
    const { vendors, addVendor, user, showPopup } = useAppContext();
    const isAdmin = user && user.role === 'admin';

    const [showAddForm, setShowAddForm] = useState(false);
    const [newVendor, setNewVendor] = useState({
        name: '',
        category: '',
        contact: '',
        phone: '',
        address: ''
    });

    // Extract dynamic theme context based on AdminLayout. Fallback values for User Storefront.
    const outletContext = useOutletContext();
    const isLight = outletContext?.isLight ?? true;
    const textMain = outletContext?.textMain ?? '#1f2937';
    const textMuted = outletContext?.textMuted ?? '#6b7280';
    const borderCol = outletContext?.borderCol ?? '#e5e7eb';
    const bgMain = outletContext?.bgMain ?? '#ffffff';

    const handleChange = (e) => setNewVendor({ ...newVendor, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        addVendor(newVendor);
        setNewVendor({ name: '', category: '', contact: '', phone: '', address: '' });
        setShowAddForm(false);
        showPopup('Partner Registered Successfully!', 'success');
    };

    const inputStyle = {
        width: '100%', 
        padding: '1.2rem', 
        borderRadius: '20px', 
        border: `1px solid ${isLight ? '#e2e8f0' : '#1e293b'}`, 
        background: isLight ? '#ffffff' : '#0f172a', 
        color: textMain,
        outline: 'none',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        fontSize: '1rem',
        fontWeight: '600'
    };

    const labelStyle = {
        display: 'block', 
        marginBottom: '0.75rem', 
        fontWeight: '900', 
        fontSize: '0.9rem', 
        color: textMain,
        textTransform: 'uppercase',
        letterSpacing: '1px'
    };

    const renderAdminView = () => (
        <div style={{ animation: 'fade-in 0.8s ease-out' }}>
            <header style={{ marginBottom: '4rem', padding: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
                        <div style={{ width: '12px', height: '40px', background: 'linear-gradient(to bottom, #ec4899, #f59e0b)', borderRadius: '6px' }} />
                        <h1 style={{ fontSize: '3rem', fontWeight: '950', letterSpacing: '-1.5px', color: textMain }}>Supplier Ecosystem</h1>
                    </div>
                    <p style={{ color: textMuted, fontSize: '1.2rem', fontWeight: '600', marginLeft: '2.25rem' }}>Global partner network and distribution logistics layer.</p>
                </div>
                <button 
                    onClick={() => setShowAddForm(!showAddForm)}
                    style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '1rem', 
                        background: showAddForm ? (isLight ? '#f1f5f9' : '#1e293b') : 'linear-gradient(90deg, #ec4899, #f59e0b)', 
                        color: showAddForm ? textMain : 'white', 
                        border: 'none',
                        padding: '1.2rem 2.5rem', 
                        borderRadius: '24px', 
                        fontWeight: '950', 
                        cursor: 'pointer', 
                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        boxShadow: showAddForm ? 'none' : '0 15px 35px rgba(236,72,153,0.3)',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}
                    onMouseOver={(e) => { if(!showAddForm) { e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)'; e.currentTarget.style.boxShadow = '0 25px 50px rgba(236,72,153,0.5)'; } }}
                    onMouseOut={(e) => { if(!showAddForm) { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(236,72,153,0.3)'; } }}
                >
                    <PlusCircle size={28} style={{ transform: showAddForm ? 'rotate(45deg)' : 'none', transition: 'transform 0.4s' }} /> 
                    {showAddForm ? 'Close Portal' : 'Register Partner'}
                </button>
            </header>

            {showAddForm && (
                <div style={{ 
                    background: isLight ? '#ffffff' : '#0f172a', 
                    borderRadius: '40px', 
                    padding: '4rem', 
                    marginBottom: '5rem', 
                    animation: 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)', 
                    border: `1px solid ${isLight ? '#e2e8f0' : '#1e293b'}`,
                    boxShadow: '0 30px 70px rgba(0,0,0,0.08)' 
                }}>
                    <h2 style={{ marginBottom: '3.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '1.8rem', fontWeight: '950', color: textMain, letterSpacing: '-0.5px' }}>
                        <div style={{ padding: '1.2rem', background: 'rgba(236,72,153,0.1)', color: '#ec4899', borderRadius: '24px' }}>
                            <Users size={32} />
                        </div>
                        Partner Onboarding Pipeline
                    </h2>
                    <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
                        <div>
                            <label style={labelStyle}>Business Entity Name</label>
                            <input type="text" name="name" value={newVendor.name} onChange={handleChange} required placeholder="Global Core Logistics" style={inputStyle} />
                        </div>
                        <div>
                            <label style={labelStyle}>Sector Classification</label>
                            <input type="text" name="category" value={newVendor.category} onChange={handleChange} placeholder="e.g. Avionics, Raw Materials" required style={inputStyle} />
                        </div>
                        <div>
                            <label style={labelStyle}>Administrative Email</label>
                            <input type="email" name="contact" value={newVendor.contact} onChange={handleChange} required placeholder="ops@entity.host" style={inputStyle} />
                        </div>
                        <div>
                            <label style={labelStyle}>Direct Comms Line</label>
                            <input type="text" name="phone" value={newVendor.phone} onChange={handleChange} required placeholder="+ international code" style={inputStyle} />
                        </div>
                        <div style={{ gridColumn: 'span 2' }}>
                            <label style={labelStyle}>Strategic Headquarters</label>
                            <input type="text" name="address" value={newVendor.address} onChange={handleChange} required placeholder="Geospatial coordination address" style={inputStyle} />
                        </div>
                        <button type="submit" style={{ 
                            gridColumn: 'span 2', 
                            padding: '1.5rem', 
                            background: 'linear-gradient(90deg, #ec4899, #f59e0b)', 
                            color: 'white', 
                            border: 'none', 
                            borderRadius: '24px', 
                            fontWeight: '950', 
                            cursor: 'pointer', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            gap: '1rem', 
                            fontSize: '1.2rem', 
                            boxShadow: '0 15px 35px rgba(236,72,153,0.3)', 
                            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)'; e.currentTarget.style.boxShadow = '0 25px 50px rgba(236,72,153,0.5)'; }}
                        onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(236,72,153,0.3)'; }}
                        >
                            <CheckCircle2 size={24} strokeWidth={3} /> Synchronize Partnership
                        </button>
                    </form>
                </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))', gap: '3rem' }}>
                {vendors.map((vendor, idx) => {
                    const cardColors = ['#6366f1', '#ec4899', '#f59e0b', '#10b981', '#3b82f6'];
                    const activeColor = cardColors[idx % cardColors.length];

                    return (
                        <div key={vendor.id} style={{ 
                            background: isLight ? '#ffffff' : '#0f172a', 
                            border: `1px solid ${isLight ? '#e2e8f0' : '#1e293b'}`, 
                            borderRadius: '35px', 
                            padding: '3rem', 
                            position: 'relative',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.04)',
                            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                            cursor: 'default',
                            overflow: 'hidden'
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = `0 30px 60px ${activeColor}22`; e.currentTarget.style.borderTop = `8px solid ${activeColor}`; }}
                        onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.04)'; e.currentTarget.style.borderTop = `1px solid ${isLight ? '#e2e8f0' : '#1e293b'}`; }}
                        >
                            <div style={{ position: 'absolute', top: '2.5rem', right: '2.5rem' }}>
                                <span style={{ background: '#ecfdf5', color: '#10b981', padding: '0.5rem 1.25rem', borderRadius: '15px', fontSize: '0.8rem', fontWeight: '950', letterSpacing: '1px' }}>VERIFIED</span>
                            </div>
                            
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                                <div style={{ width: '80px', height: '80px', background: `${activeColor}15`, color: activeColor, borderRadius: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Users size={36} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '1.6rem', fontWeight: '950', color: textMain, letterSpacing: '-0.5px' }}>{vendor.name}</h3>
                                    <div style={{ color: activeColor, fontSize: '0.9rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.2rem' }}>{vendor.category || 'GLOBAL PARTNER'}</div>
                                </div>
                            </div>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: textMain, fontWeight: '750', fontSize: '1.1rem' }}>
                                    <Mail size={22} color={activeColor} /> {vendor.contact}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: textMain, fontWeight: '750', fontSize: '1.1rem' }}>
                                    <PhoneCall size={22} color={activeColor} /> {vendor.phone}
                                </div>
                                <div style={{ 
                                    display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.5rem', 
                                    background: isLight ? '#f8fafc' : 'rgba(255,255,255,0.02)', 
                                    borderRadius: '25px', border: `1px solid ${isLight ? '#e2e8f0' : '#1e293b'}` 
                                }}>
                                    <MapPin size={22} color={textMuted} style={{ marginTop: '0.2rem', flexShrink: 0 }} /> 
                                    <span style={{ lineHeight: '1.6', color: textMuted, fontSize: '1rem', fontWeight: '600' }}>{vendor.address}</span>
                                </div>
                            </div>
                            
                            <div style={{ marginTop: '2.5rem', paddingTop: '2.5rem', borderTop: `1px solid ${isLight ? '#f1f5f9' : '#1e293b'}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontWeight: '900', fontSize: '0.9rem' }}>
                                    <ShieldCheck size={20} /> ENCRYPTED PARTNERSHIP
                                </div>
                                <button style={{ background: 'none', border: 'none', color: activeColor, fontWeight: '950', cursor: 'pointer', fontSize: '0.9rem', letterSpacing: '0.5px' }}>VIEW ECOSYSTEM {'->'}</button>
                            </div>
                        </div>
                    )
                })}
            </div>

            <style>
                {`
                    @keyframes fade-in {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes slideUp {
                        from { opacity: 0; transform: translateY(30px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                `}
            </style>
        </div>
    );

    return renderAdminView();
};

export default Vendors;
