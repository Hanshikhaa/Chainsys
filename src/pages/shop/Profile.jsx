import React from 'react';
import { useAppContext } from '../../context/useAppContext';
import { User, Mail, Shield, Package, Settings, LogOut, ChevronRight, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { user, logout, orders, inquiries } = useAppContext();
    const myApplications = inquiries.filter(inq => inq.email === user?.email && inq.subject?.includes('[JOB APP]'));

    if (!user) {
        return (
            <div className="container section-padding animate-fade" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <User size={64} style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', opacity: 0.3 }} />
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Please sign in</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>You need to be logged in to view your profile.</p>
                <Link to="/login" className="btn">Sign In</Link>
            </div>
        );
    }

    const recentOrders = orders.slice(-3).reverse();

    return (
        <div className="container section-padding animate-fade" style={{ maxWidth: '1000px' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '3rem', letterSpacing: '-2px' }}>Account Overview</h1>

            <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '3rem' }}>
                {/* Profile Card */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div className="card animate-slide-up" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                        <div style={{
                            width: '100px',
                            height: '100px',
                            background: 'linear-gradient(135deg, var(--p-rose), var(--p-blue))',
                            borderRadius: '50%',
                            margin: '0 auto 1.5rem auto',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '2.5rem',
                            fontWeight: '900'
                        }}>
                            {user.name.charAt(0)}
                        </div>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{user.name}</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>{user.email}</p>

                        <div style={{ display: 'grid', gap: '0.75rem', textAlign: 'left' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem', background: 'var(--input-bg)', borderRadius: '12px', fontSize: '0.85rem' }}>
                                <Mail size={16} color="var(--primary-color)" />
                                <span>{user.email}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem', background: 'var(--input-bg)', borderRadius: '12px', fontSize: '0.85rem' }}>
                                <Shield size={16} color="var(--primary-color)" />
                                <span style={{ textTransform: 'capitalize' }}>{user.role} Account</span>
                            </div>
                        </div>
                    </div>

                    <button onClick={logout} className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', background: 'var(--pastel-rose-bg)', color: 'var(--pastel-rose-text)', border: 'none' }}>
                        <LogOut size={18} /> Sign Out
                    </button>
                </div>

                {/* Activity Sections */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {/* Career Applications Section */}
                    <div className="card animate-slide-up" style={{ animationDelay: '0.1s', border: '1px solid rgba(99, 102, 241, 0.2)', background: 'rgba(99, 102, 241, 0.02)' }}>
                        <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.25rem', color: '#6366f1' }}>
                                <Briefcase size={20} /> My Career Applications
                            </h3>
                            <span className="badge badge-pastel-rose" style={{ fontSize: '0.65rem' }}>BETA</span>
                        </div>

                        {myApplications.length > 0 ? (
                            <div style={{ display: 'grid', gap: '1rem' }}>
                                {myApplications.map(app => (
                                    <div key={app.id} style={{ padding: '1.5rem', background: 'var(--card-bg)', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
                                        <div className="flex-between" style={{ marginBottom: '1rem' }}>
                                            <div>
                                                <h4 style={{ fontWeight: '900', fontSize: '1rem', letterSpacing: '-0.5px' }}>{app.subject?.replace('[JOB APP]', '').trim() || 'Role Application'}</h4>
                                                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '700' }}>Applied: {app.date ? new Date(app.date).toLocaleDateString() : 'Recent'}</p>
                                            </div>
                                            <span style={{ 
                                                padding: '0.4rem 0.8rem', borderRadius: '10px', fontSize: '0.7rem', fontWeight: '950',
                                                background: app.status === 'Open' ? 'rgba(236, 72, 153, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                                                color: app.status === 'Open' ? '#ec4899' : '#6366f1'
                                            }}>{app.status.toUpperCase()}</span>
                                        </div>

                                        {app.replies && app.replies.length > 0 && (
                                            <div style={{ marginTop: '1.25rem', padding: '1.25rem', background: 'rgba(99, 102, 241, 0.05)', borderRadius: '15px', borderLeft: '3px solid #6366f1' }}>
                                                <p style={{ fontSize: '0.75rem', fontWeight: '900', color: '#6366f1', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Message from Admin</p>
                                                <p style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-main)', lineHeight: '1.5' }}>{app.replies[app.replies.length - 1].text}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '2rem', opacity: 0.5 }}>
                                <p style={{ fontSize: '0.9rem', fontWeight: '700' }}>No active applications found.</p>
                                <Link to="/contact" style={{ fontSize: '0.85rem', color: '#6366f1', textDecoration: 'none', fontWeight: '800', marginTop: '0.5rem', display: 'inline-block' }}>Explore Openings</Link>
                            </div>
                        )}
                    </div>

                    <div className="card animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.25rem' }}>
                                <Package size={20} color="var(--primary-color)" /> Recent Orders
                            </h3>
                            <Link to="/orders" style={{ fontSize: '0.85rem', color: 'var(--primary-color)', fontWeight: '700' }}>View All</Link>
                        </div>

                        {recentOrders.length > 0 ? (
                            <div style={{ display: 'grid', gap: '1rem' }}>
                                {recentOrders.map(order => (
                                    <Link key={order.id} to="/orders" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <div className="flex-between" style={{ padding: '1.25rem', background: 'var(--input-bg)', borderRadius: '16px', border: '1px solid var(--glass-border)', transition: 'transform 0.2s' }}>
                                            <div>
                                                <p style={{ fontWeight: '800', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{order.id}</p>
                                                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{new Date(order.date).toLocaleDateString()}</p>
                                            </div>
                                            <div style={{ textAlign: 'right' }}>
                                                <p style={{ fontWeight: '800', color: 'var(--primary-color)' }}>₹{order.items.reduce((sum, i) => sum + (i.price * i.quantity), 0).toLocaleString('en-IN')}</p>
                                                <span className="badge" style={{ fontSize: '0.65rem', marginTop: '0.25rem' }}>{order.status}</span>
                                            </div>
                                            <ChevronRight size={16} color="var(--text-muted)" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '2rem' }}>No orders placed yet.</p>
                        )}
                    </div>

                    <div className="card animate-slide-up" style={{ animationDelay: '0.3s' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.25rem', marginBottom: '1.5rem' }}>
                            <Settings size={20} color="var(--primary-color)" /> Security & Preferences
                        </h3>
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            <button className="btn btn-secondary" style={{ justifyContent: 'space-between', padding: '1rem 1.5rem' }}>
                                Change Password <ChevronRight size={16} />
                            </button>
                            <button className="btn btn-secondary" style={{ justifyContent: 'space-between', padding: '1rem 1.5rem' }}>
                                Privacy Settings <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
