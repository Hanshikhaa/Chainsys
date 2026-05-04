import React, { useState } from 'react';
import { useAppContext } from '../../context/useAppContext';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { PlusCircle, Package, Image as ImageIcon, Tag, IndianRupee } from 'lucide-react';
import { getSafeImageUrl, isImageUrl } from '../../utils/imageHandler';

const AdminDashboard = () => {
    const { user, categories, addProduct, showPopup } = useAppContext();
    const { isLight, textMain, textMuted, borderCol, bgMain } = useOutletContext();
    const navigate = useNavigate();

    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [useProxy, setUseProxy] = useState(true);

    const isPageUrl = (url) => {
        if (!url) return false;
        return url.includes('/products/') || url.includes('/p/') || !isImageUrl(url);
    };

    const [newProduct, setNewProduct] = useState({
        name: '',
        category: categories[0]?.name || '',
        subCategory: '',
        price: '',
        cost: '',
        stock: '',
        image: '',
        description: '',
        vendor: 'v_1'
    });

    if (!user || user.role !== 'admin') {
        return <div style={{ padding: '4rem', textAlign: 'center', color: '#e94560' }}>Access Denied. Admins only.</div>;
    }

    const handleChange = (e) => setNewProduct({ ...newProduct, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(newProduct);
        showPopup('SKU successfully deployed to the storefront cluster!', 'success');
        navigate('/admin/inventory');
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

    return (
        <div style={{ animation: 'fade-in 0.8s ease-out' }}>
            <header style={{ marginBottom: '1.5rem', padding: '0.2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                    <div style={{ width: '8px', height: '28px', background: 'linear-gradient(to bottom, #6366f1, #ec4899)', borderRadius: '4px' }} />
                    <h1 style={{ fontSize: '2rem', fontWeight: '950', letterSpacing: '-1px', color: textMain }}>Catalog Deployment</h1>
                </div>
                <p style={{ color: textMuted, fontSize: '0.95rem', fontWeight: '600', marginLeft: '1.5rem' }}>Provision and sync new SKU units to the global distribution layer.</p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
                {/* Product Form Card */}
                <div style={{ 
                    background: isLight ? '#ffffff' : '#0f172a', 
                    borderRadius: '25px', 
                    padding: '2rem',
                    border: `1px solid ${isLight ? '#e2e8f0' : '#1e293b'}`,
                    boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
                    position: 'relative'
                }}>
                    <h2 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.3rem', fontWeight: '950', color: textMain, letterSpacing: '-0.25px' }}>
                        <div style={{ padding: '0.8rem', background: 'rgba(99,102,241,0.1)', color: '#6366f1', borderRadius: '16px' }}>
                            <PlusCircle size={24} />
                        </div>
                        SKU Configuration
                    </h2>

                    <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div style={{ gridColumn: 'span 2' }}>
                            <label style={labelStyle}>Product Identifier Name</label>
                            <input 
                                type="text" name="name" value={newProduct.name} onChange={handleChange} required placeholder="Enterprise Level Title"
                                style={inputStyle} 
                                onFocus={(e) => { e.target.style.borderColor = '#6366f1'; e.target.style.boxShadow = '0 0 0 4px rgba(99,102,241,0.1)'; }}
                                onBlur={(e) => { e.target.style.borderColor = isLight ? '#e2e8f0' : '#1e293b'; e.target.style.boxShadow = 'none'; }}
                            />
                        </div>

                        <div>
                            <label style={labelStyle}>Primary Sector</label>
                            <div style={{ position: 'relative' }}>
                                <select name="category" value={newProduct.category} onChange={handleChange} style={{...inputStyle, appearance: 'none', cursor: 'pointer' }}>
                                    {categories.map(cat => <option key={cat.id} value={cat.name} style={{ background: isLight ? '#ffffff' : '#0f172a' }}>{cat.name.toUpperCase()}</option>)}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label style={labelStyle}>Distribution Region</label>
                            <input type="text" name="subCategory" value={newProduct.subCategory} onChange={handleChange} placeholder="Sub-sector definition" style={inputStyle} />
                        </div>

                        <div>
                            <label style={labelStyle}>Unit Valuation (₹)</label>
                            <input type="number" name="price" value={newProduct.price} onChange={handleChange} required style={inputStyle} />
                        </div>

                        <div>
                            <label style={labelStyle}>Acquisition Cost (₹)</label>
                            <input type="number" name="cost" value={newProduct.cost} onChange={handleChange} required style={inputStyle} />
                        </div>

                        <div style={{ gridColumn: 'span 2' }}>
                            <label style={labelStyle}>Initial Stock Allocation</label>
                            <input type="number" name="stock" value={newProduct.stock} onChange={handleChange} required style={inputStyle} />
                        </div>

                        <div style={{ gridColumn: 'span 2' }}>
                            <label style={{ ...labelStyle, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                Digital Asset URL
                                <span style={{ fontSize: '0.8rem', color: '#6366f1', background: 'rgba(99,102,241,0.1)', padding: '0.4rem 1rem', borderRadius: '12px', fontWeight: '900' }}>Direct image link preferred</span>
                            </label>
                            <input type="text" name="image" value={newProduct.image} onChange={(e) => { handleChange(e); setImageError(false); setImageLoaded(false); }} placeholder="https://cdn.bluvanta.com/assets/..." style={inputStyle} />
                        </div>

                        <div style={{ gridColumn: 'span 2' }}>
                            <label style={labelStyle}>Strategic Description</label>
                            <textarea name="description" value={newProduct.description} onChange={handleChange} rows="5" style={{...inputStyle, resize: 'none'}} />
                        </div>

                        <button type="submit" style={{ 
                            gridColumn: 'span 2', 
                            padding: '1rem', 
                            background: 'linear-gradient(90deg, #6366f1, #ec4899)', 
                            color: 'white', 
                            border: 'none', 
                            borderRadius: '16px', 
                            fontWeight: '950', 
                            fontSize: '1rem', 
                            marginTop: '1rem', 
                            cursor: 'pointer', 
                            boxShadow: '0 8px 20px rgba(99,102,241,0.3)',
                            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                            letterSpacing: '1px',
                            textTransform: 'uppercase'
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(99,102,241,0.5)'; }}
                        onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(99,102,241,0.3)'; }}
                        >
                            Commit to Storefront
                        </button>
                    </form>
                </div>

                {/* Live Visualization Card */}
                <div style={{ position: 'sticky', top: '100px', height: 'fit-content' }}>
                    <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '950', fontSize: '1.25rem', color: textMain }}>
                        <div style={{ width: '6px', height: '18px', background: '#ec4899', borderRadius: '3px' }} />
                        SKU Preview Pipeline
                    </h3>
                    
                    <div style={{ 
                        borderRadius: '25px', 
                        overflow: 'hidden', 
                        background: isLight ? '#ffffff' : '#0f172a', 
                        border: `1px solid ${isLight ? '#e2e8f0' : '#1e293b'}`,
                        boxShadow: '0 15px 30px rgba(0,0,0,0.05)'
                    }}>
                        <div style={{ height: '280px', background: isLight ? '#f8fafc' : 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                            {newProduct.image ? (
                                <>
                                    <img
                                        src={useProxy ? getSafeImageUrl(newProduct.image) : newProduct.image}
                                        alt="Preview"
                                        referrerPolicy="no-referrer"
                                        onLoad={() => setImageLoaded(true)}
                                        onError={() => setImageError(true)}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: imageError ? 'none' : 'block' }}
                                    />
                                    {imageError && (
                                        <div style={{ textAlign: 'center', padding: '2rem', color: '#ef4444', background: isLight ? '#fef2f2' : 'rgba(239, 68, 68, 0.1)', fontSize: '1rem', fontWeight: '800', borderRadius: '25px', margin: '2rem' }}>
                                            Digital asset render failed. Check security permissions.
                                            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                                                <button type="button" onClick={() => { setUseProxy(!useProxy); setImageError(false); }} style={{ flex: 1, padding: '0.8rem', background: 'transparent', color: '#ef4444', border: '2px solid #ef4444', borderRadius: '14px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: '900' }}>
                                                    {useProxy ? "Direct Mode" : "Proxy Mode"}
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </>
                            ) : <div style={{ color: textMuted, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                                <ImageIcon size={48} opacity={0.2} />
                                <span style={{ fontWeight: '800', fontSize: '0.9rem', opacity: 0.3 }}>Waiting for asset URL</span>
                            </div>}
                        </div>
                        
                        <div style={{ padding: '1.5rem' }}>
                            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
                                <span style={{ background: 'linear-gradient(90deg, #6366f1, #a855f7)', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '8px', fontSize: '0.7rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                    {newProduct.category || 'PENDING'}
                                </span>
                            </div>
                            <h4 style={{ fontSize: '1.4rem', fontWeight: '950', marginBottom: '1rem', color: textMain, lineHeight: '1.2', letterSpacing: '-0.25px' }}>
                                {newProduct.name || 'Untitled Component'}
                            </h4>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6366f1', fontWeight: '950', fontSize: '1.5rem', letterSpacing: '-0.5px' }}>
                                <IndianRupee size={24} strokeWidth={3} /> {Number(newProduct.price).toLocaleString() || '0'}
                            </div>
                        </div>
                    </div>
                    
                    <div style={{ 
                        marginTop: '1.5rem', 
                        padding: '1.2rem', 
                        background: '#e0e7ff', 
                        borderRadius: '20px', 
                        color: '#312e81', 
                        fontSize: '0.85rem', 
                        fontWeight: '800', 
                        display: 'flex', 
                        gap: '1rem', 
                        alignItems: 'center',
                        border: '1px solid #c7d2fe'
                    }}>
                        <div style={{ width: '36px', height: '36px', background: '#312e81', color: 'white', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <Tag size={18} /> 
                        </div>
                        Deployment to production clusters is near-instantaneous upon commitment.
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

export default AdminDashboard;
