import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, ArrowRight, Star, ShoppingBag, Truck, ShieldCheck, Heart } from 'lucide-react';
import { useAppContext } from '../../context/useAppContext';
import { getSafeImageUrl } from '../../utils/imageHandler';

const Home = () => {
    const { user, categories, products, wishlist, addToWishlist, removeFromWishlist } = useAppContext();
    const scrollRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "Moody Pastel Collection",
            subtitle: "Sophisticated tones and airy fabrics for a professional edge.",
            image: "/hero/fashion.png",
            bg: "linear-gradient(135deg, var(--p-bg-rose), var(--bg-color))"
        },
        {
            title: "Serene Dark Living",
            subtitle: "Curated home assets designed for ultimate nocturnal tranquility.",
            image: "/hero/home.png",
            bg: "linear-gradient(135deg, var(--p-bg-blue), var(--bg-color))"
        },
        {
            title: "Elite Technology",
            subtitle: "Innovative gadgets that define your professional workspace.",
            image: "/hero/tech.png",
            bg: "linear-gradient(135deg, var(--p-bg-sage), var(--bg-color))"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    const trendingProducts = products.slice(0, 8);

    return (
        <div className="home-page animate-fade" style={{ background: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '4rem' }}>
            
            {/* Personalized Greeting */}
            {user && (
                <div className="container" style={{ padding: '1rem 2rem 0.5rem 2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '800' }}>
                        Welcome back, <span style={{ color: 'var(--primary-color)' }}>{user.name ? user.name.split(' ')[0] : (user.username || user.email || 'User')}</span>!
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Ready to discover something new today?</p>
                </div>
            )}

            {/* Soft Hero Slider */}
            <section style={{ padding: '0 2rem' }}>
                <div style={{
                    height: '400px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: '0 15px 30px rgba(0,0,0,0.05)'
                }}>
                    {slides.map((slide, index) => (
                        <div key={index} style={{
                            position: 'absolute',
                            inset: 0,
                            opacity: currentSlide === index ? 1 : 0,
                            transition: 'all 1.5s var(--ease-smooth)',
                            display: 'flex',
                            alignItems: 'center',
                            background: slide.bg
                        }}>
                            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2rem', alignItems: 'center' }}>
                                <div className="animate-slide-up">
                                    <span className="badge" style={{ marginBottom: '1rem', display: 'inline-block', background: 'var(--card-bg)', color: 'var(--primary-color)', border: '1px solid var(--glass-border)' }}>Limited Collection</span>
                                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: '1.1', color: 'var(--text-main)' }}>{slide.title}</h1>
                                    <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '500px' }}>{slide.subtitle}</p>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <button className="btn" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>Shop Now <ArrowRight size={16} /></button>
                                        <button className="btn btn-secondary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem', background: 'var(--card-bg)', border: '1px solid var(--glass-border)', color: 'var(--text-main)' }}>Explore Story</button>
                                    </div>
                                </div>
                                <div style={{ height: '320px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} className="animate-slide-up">
                                    <img src={slide.image} alt={slide.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Hero Indicators */}
                    <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '1rem' }}>
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentSlide(i)}
                                style={{
                                    width: currentSlide === i ? '40px' : '12px',
                                    height: '12px',
                                    borderRadius: '10px',
                                    border: 'none',
                                    background: currentSlide === i ? 'var(--primary-color)' : 'rgba(0,0,0,0.1)',
                                    cursor: 'pointer',
                                    transition: 'all 0.4s ease'
                                }}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Brand Partners Marquee */}
            <section style={{ padding: '4rem 0 0 0', overflow: 'hidden' }}>
                <div className="container" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <span style={{ color: 'var(--primary-color)', fontWeight: '800', letterSpacing: '2px', fontSize: '0.8rem' }}>TRUSTED BY GLOBAL LEADERS</span>
                </div>
                <div className="marquee-container" style={{ background: 'var(--p-bg-rose)' }}>
                    <div className="marquee-content reverse">
                        {[1, 2].map((loop) => (
                            <React.Fragment key={loop}>
                                {[
                                    { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
                                    { name: 'Google', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
                                    { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
                                    { name: 'Apple', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
                                    { name: 'Samsung', url: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
                                    { name: 'Sony', url: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg' },
                                    { name: 'Nike', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg' },
                                    { name: 'Adidas', url: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg' }
                                ].map((brand, bidx) => (
                                    <div key={bidx} style={{ 
                                        width: '140px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                                        padding: '1rem', background: 'white', borderRadius: '12px', margin: '0 0.5rem',
                                        boxShadow: '0 5px 15px rgba(0,0,0,0.03)', border: '1px solid var(--glass-border)'
                                    }}>
                                        <img src={brand.url} alt={brand.name} style={{ maxWidth: '80%', maxHeight: '60%', filter: 'grayscale(100%) opacity(0.6)' }} />
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* Infinite Marquee: Categories */}
            <section className="section-padding" style={{ overflow: 'hidden', background: 'var(--p-bg-blue)' }}>
                <div className="container" style={{ marginBottom: '2rem' }}>
                    <div>
                        <span style={{ color: 'var(--primary-color)', fontWeight: '800', letterSpacing: '2px', fontSize: '0.7rem' }}>CURATED SELECTION</span>
                        <h2 style={{ fontSize: '2.5rem', marginTop: '0.2rem', letterSpacing: '-1px' }}>Elegance in Every Segment</h2>
                    </div>
                </div>

                <div className="marquee-container">
                    <div className="marquee-content">
                        {[1, 2].map((loop) => (
                            <React.Fragment key={loop}>
                                {categories.map((cat, index) => (
                                    <div key={`${loop}-${index}`} className="marquee-card">
                                        <Link to={`/products?category=${cat.name}`} style={{ textDecoration: 'none' }}>
                                            <div className="card" style={{ height: '260px', position: 'relative', padding: 0, borderRadius: '20px' }}>
                                                <img src={cat.image} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                <div style={{
                                                    position: 'absolute',
                                                    inset: 0,
                                                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent 70%)',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'flex-end',
                                                    padding: '1.25rem'
                                                }}>
                                                    <h3 style={{ color: 'white', fontSize: '1.4rem', marginBottom: '0.2rem', fontWeight: '800' }}>{cat.name}</h3>
                                                    <div style={{ color: 'var(--primary-color)', fontWeight: '800', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                                        View <ArrowRight size={12} />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trending Pick Grid */}
            <section className="section-padding" style={{ background: 'var(--p-bg-lavender)' }}>
                <div className="container">
                    <div className="section-header" style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>The Season's Best</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Innovative designs chosen for their professional appeal.</p>
                    </div>

                    <div className="grid-auto-fit">
                    {trendingProducts.map(product => (
                        <div key={product.id} className="card product-card" style={{ padding: '0', borderRadius: '16px' }}>
                            <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                                <img src={getSafeImageUrl(product.image || product.images?.[0] || product.thumbnail)} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                                {wishlist.find(item => item.id === product.id) ? (
                                    <button onClick={() => removeFromWishlist(product.id)} className="heart-btn" style={{ color: '#be123c', width: '32px', height: '32px' }}><Heart size={14} fill="#be123c" /></button>
                                ) : (
                                    <button onClick={() => addToWishlist(product)} className="heart-btn" style={{ width: '32px', height: '32px' }}><Heart size={14} /></button>
                                )}
                            </div>
                            <div style={{ padding: '1.25rem' }}>
                                <div className="flex-between" style={{ marginBottom: '0.5rem' }}>
                                    <span style={{ fontSize: '0.7rem' }} className="badge badge-pastel-blue">{product.category}</span>
                                    <span style={{ fontWeight: '800', fontSize: '1rem', color: 'var(--primary-color)' }}>₹{product.price.toLocaleString('en-IN')}</span>
                                </div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>{product.name}</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }}>
                                    <div style={{ display: 'flex' }}>
                                        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill={i < 4 ? "#d4a373" : "none"} color="#d4a373" />)}
                                    </div>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>(42 Reviews)</span>
                                </div>
                                <Link to={`/products/${product.id}`} className="btn" style={{ width: '100%', justifyContent: 'center', padding: '0.6rem', fontSize: '0.9rem' }}>
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>

            {/* Trust Grid */}
            <section className="section-padding" style={{ background: 'var(--p-bg-sage)' }}>
                <div className="container">
                    <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '1.5rem',
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '24px',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.03)'
                }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ width: '48px', height: '48px', background: 'var(--pastel-rose-bg)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                            <Truck size={24} color="var(--pastel-rose-text)" />
                        </div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Priority Shipping</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Complimentary global logistics on orders over ₹10k.</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ width: '48px', height: '48px', background: 'var(--pastel-blue-bg)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                            <ShieldCheck size={24} color="var(--pastel-blue-text)" />
                        </div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Secure Checkout</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Enterprise-level encryption for every transaction.</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ width: '48px', height: '48px', background: 'var(--pastel-sage-bg)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                            <ShoppingBag size={24} color="var(--pastel-sage-text)" />
                        </div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Authentic Selection</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Guaranteed quality from verified global vendors.</p>
                    </div>
                </div>
                </div>
            </section>

            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                .heart-btn {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    width: 32px; height: 32px;
                    border-radius: 50%;
                    background: var(--dp-charcoal);
                    border: 1px solid var(--glass-border);
                    display: flex; align-items: center; justify-content: center;
                    cursor: pointer;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                    color: var(--text-muted);
                    transition: all 0.3s ease;
                }
                .heart-btn:hover { color: #be123c; transform: scale(1.1); }
                .product-card:hover img { transform: scale(1.1); }
            `}</style>
        </div>
    );
};

export default Home;
