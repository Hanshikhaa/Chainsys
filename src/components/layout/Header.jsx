import React, { useState } from 'react';
import { useAppContext } from '../../context/useAppContext';
import { ShoppingCart, Search, Moon, Sun, Package, LogOut, Menu, X, ChevronDown, User, Heart, Briefcase, Home, ShoppingBag, Info, LayoutDashboard, HelpCircle, MessageCircle, Tag, LayoutGrid, Boxes, Store, BookOpen, Percent } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const { theme, toggleTheme, cart, user, logout } = useAppContext();
    const [search, setSearch] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim()) navigate(`/products?search=${search}`);
    };

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <header className="header animate-fade" style={{
            position: 'sticky',
            top: '0',
            zIndex: 1000,
            padding: '1.25rem 2rem'
        }}>
            <div className="container" style={{
                background: 'var(--card-bg)',
                borderRadius: '100px',
                padding: '0.75rem 2.5rem',
                border: '1px solid var(--glass-border)',
                boxShadow: 'var(--card-shadow)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                {/* Brand Logo */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <Link to="/" style={{
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <div style={{
                            width: '42px',
                            height: '42px',
                            background: 'linear-gradient(135deg, var(--p-rose), var(--p-blue))',
                            borderRadius: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white'
                        }}>
                            <Briefcase size={22} color="white" fill="white" />
                        </div>
                        <span style={{
                            fontSize: '1.75rem',
                            fontWeight: '900',
                            color: 'var(--text-main)',
                            letterSpacing: '-1.5px',
                            fontFamily: 'var(--font-accent)'
                        }}>BLUVANTA</span>
                    </Link>

                    {/* Desktop Dropdown Navigation */}
                    <div className="hide-tablet" style={{ position: 'relative' }}>
                        <button
                            className={`nav-menu-toggle ${isMenuOpen ? 'is-active' : ''}`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                background: 'var(--card-bg)',
                                border: '1px solid var(--glass-border)',
                                padding: '0.65rem 1.5rem',
                                borderRadius: '50px',
                                color: 'var(--text-main)',
                                fontWeight: '800',
                                cursor: 'pointer',
                                transition: 'all 0.4s var(--ease-smooth)',
                                boxShadow: '0 8px 25px rgba(0,0,0,0.05)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div className="menu-icon-wrapper" style={{ width: '20px', height: '14px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <span className="menu-bar bar-1"></span>
                                <span className="menu-bar bar-2"></span>
                                <span className="menu-bar bar-3"></span>
                            </div>
                            <span style={{ fontSize: '0.9rem', letterSpacing: '0.5px' }}>EXPLORE</span>
                            <ChevronDown size={14} style={{ opacity: 0.6, transform: isMenuOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.4s' }} />
                        </button>

                        {isMenuOpen && (
                            <div className="nav-dropdown-content animate-slide-down">
                                {/* — SHOP — */}
                                <span className="dropdown-section-label">🛍️ Shop</span>
                                <Link to="/" onClick={() => setIsMenuOpen(false)} className="dropdown-link-p">
                                    <Home size={18} /> Home
                                </Link>
                                <Link to="/products" onClick={() => setIsMenuOpen(false)} className="dropdown-link-p">
                                    <ShoppingBag size={18} /> Shop All
                                </Link>
                                <Link to="/products?category=Electronics" onClick={() => setIsMenuOpen(false)} className="dropdown-link-p">
                                    <LayoutGrid size={18} /> Browse Categories
                                </Link>
                                <Link to="/products?sort=discount" onClick={() => setIsMenuOpen(false)} className="dropdown-link-p">
                                    <Percent size={18} /> Deals &amp; Offers
                                </Link>

                                {/* — ACCOUNT — */}
                                <span className="dropdown-section-label" style={{ marginTop: '0.5rem' }}>👤 Account</span>
                                <Link to="/wishlist" onClick={() => setIsMenuOpen(false)} className="dropdown-link-p">
                                    <Heart size={18} /> Wishlist
                                </Link>
                                <Link to="/orders" onClick={() => setIsMenuOpen(false)} className="dropdown-link-p">
                                    <Package size={18} /> Track Orders
                                </Link>
                                <Link to="/profile" onClick={() => setIsMenuOpen(false)} className="dropdown-link-p">
                                    <User size={18} /> My Account
                                </Link>

                                 {/* — INFO — */}
                                 <span className="dropdown-section-label" style={{ marginTop: '0.5rem' }}>ℹ️ Info</span>
                                 {user && user.role === 'admin' && (
                                     <>
                                         <Link to="/inventory" onClick={() => setIsMenuOpen(false)} className="dropdown-link-p">
                                             <Boxes size={18} /> Inventory
                                         </Link>
                                         <Link to="/vendors" onClick={() => setIsMenuOpen(false)} className="dropdown-link-p">
                                             <Store size={18} /> Vendors
                                         </Link>
                                     </>
                                 )}
                                 <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="dropdown-link-p">
                                     <Briefcase size={18} /> Careers
                                 </Link>
                                 <Link to="/about" onClick={() => setIsMenuOpen(false)} className="dropdown-link-p">
                                     <Info size={18} /> About Bluvanta
                                 </Link>


                                {/* — ADMIN (conditional) — */}
                                {user && user.role === 'admin' && (
                                    <Link to="/admin" onClick={() => setIsMenuOpen(false)} className="dropdown-link-p" style={{ borderTop: '1px solid var(--glass-border)', marginTop: '0.5rem', paddingTop: '0.75rem' }}>
                                        <LayoutDashboard size={18} /> Admin Console
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Spacer */}
                <div style={{ flex: 1 }}></div>

                {/* Quick Actions */}
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <form onSubmit={handleSearch} style={{ position: 'relative', marginRight: '0.5rem' }} className="hide-mobile">
                        <input
                            type="text"
                            placeholder="Discover something beautiful..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            style={{
                                background: 'var(--input-bg)',
                                border: '1px solid var(--glass-border)',
                                padding: '0.75rem 1.5rem 0.75rem 3rem',
                                borderRadius: '50px',
                                fontSize: '0.9rem',
                                width: '280px',
                                color: 'var(--text-main)'
                            }}
                        />
                        <Search size={18} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    </form>

                    <button onClick={toggleTheme} className="icon-btn-p">
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>

                    {(!user || user.role !== 'admin') && (
                        <>
                            <Link to={user ? "/wishlist" : "/login"} className="icon-btn-p hide-mobile">
                                <Heart size={20} />
                            </Link>

                            <Link to={user ? "/cart" : "/login"} className="icon-btn-p" style={{ position: 'relative' }}>
                                <ShoppingCart size={20} />
                                {cartCount > 0 && <span className="cart-bage-p">{cartCount}</span>}
                            </Link>
                        </>
                    )}

                    {user ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--card-bg)', padding: '0.3rem 0.3rem 0.3rem 1rem', borderRadius: '50px', border: '1px solid var(--glass-border)' }}>
                            <span style={{ fontWeight: '700', fontSize: '0.85rem' }}>{user.name ? user.name.split(' ')[0] : user.username}</span>
                            <button onClick={logout} className="icon-btn-p" style={{ background: 'var(--glass-bg)' }}><LogOut size={18} /></button>
                        </div>
                    ) : (
                        <Link to="/login" className="btn" style={{ padding: '0.65rem 1.75rem', fontSize: '0.9rem' }}>Sign In</Link>
                    )}
                </div>
            </div>

            <style>{`
                .nav-link-p {
                    text-decoration: none;
                    color: var(--text-main);
                    font-weight: 700;
                    font-size: 0.95rem;
                    transition: all 0.3s ease;
                    position: relative;
                }
                .nav-link-p:hover { color: var(--primary-color); }
                .nav-link-p::after {
                    content: "";
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    background: var(--primary-color);
                    transition: width 0.3s ease;
                }
                .nav-link-p:hover::after { width: 100%; }
                
                .icon-btn-p {
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    border: none;
                    background: transparent;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--text-main);
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-decoration: none;
                }
                .icon-btn-p:hover { background: rgba(255,255,255,0.05); color: var(--primary-color); }

                .nav-dropdown-content {
                    position: absolute;
                    top: calc(100% + 15px);
                    left: 0;
                    width: 260px;
                    background: var(--card-bg);
                    border: 1px solid var(--glass-border);
                    border-radius: 24px;
                    padding: 1rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.3);
                    z-index: 1200;
                    max-height: 80vh;
                    overflow-y: auto;
                }

                .dropdown-link-p {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 0.85rem 1.25rem;
                    border-radius: 12px;
                    text-decoration: none;
                    color: var(--text-main);
                    font-weight: 700;
                    font-size: 0.95rem;
                    transition: all 0.3s ease;
                }

                .dropdown-link-p:hover {
                    background: rgba(255,255,255,0.05);
                    color: var(--primary-color);
                    transform: translateX(5px);
                }

                .dropdown-link-p svg {
                    color: var(--primary-color);
                    opacity: 0.8;
                }
                
                .cart-bage-p {
                    position: absolute;
                    top: 2px;
                    right: 2px;
                    background: var(--primary-color);
                    color: #1a1a1c;
                    font-size: 0.65rem;
                    font-weight: 900;
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 2px solid white;
                }
                
                    .nav-menu-toggle:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 12px 30px rgba(0,0,0,0.08);
                        border-color: var(--primary-color);
                    }
                    .menu-icon-wrapper { transition: all 0.4s var(--ease-smooth); }
                    .menu-bar {
                        display: block;
                        width: 100%;
                        height: 2px;
                        background: var(--text-main);
                        border-radius: 2px;
                        transition: all 0.4s var(--ease-smooth);
                    }
                    .nav-menu-toggle.is-active .bar-1 { transform: translateY(6px) rotate(45deg); width: 100%; }
                    .nav-menu-toggle.is-active .bar-2 { opacity: 0; transform: translateX(-10px); }
                    .nav-menu-toggle.is-active .bar-3 { transform: translateY(-6px) rotate(-45deg); width: 100%; }
                    
                    @media (max-width: 1024px) {
                    .hide-tablet { display: none !important; }
                    .header { padding: 1rem !important; }
                }
                @media (max-width: 640px) {
                    .hide-mobile { display: none !important; }
                    .container { padding: 0.5rem 1.25rem !important; }
                }
            `}</style>
        </header>
    );
};

export default Header;
