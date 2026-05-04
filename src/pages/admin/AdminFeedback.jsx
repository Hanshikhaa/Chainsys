import React from 'react';
import { useAppContext } from '../../context/useAppContext';
import { useOutletContext } from 'react-router-dom';
import { Heart, Star, Calendar, MessageSquare, Trash2, ShoppingBag, CheckCircle2 } from 'lucide-react';

const AdminFeedback = () => {
    const { feedbacks, deleteFeedback, verifyFeedback, showPopup } = useAppContext();
    const { isLight, textMain, textMuted, borderCol } = useOutletContext();

    const handleDelete = (id) => {
        if (window.confirm('Remove this feedback entry?')) {
            deleteFeedback(id);
            showPopup('Feedback Entry Purged', 'info');
        }
    };

    const handleVerify = (id) => {
        verifyFeedback(id);
        const fb = feedbacks.find(f => f.id === id);
        showPopup(fb.verified ? 'Feedback Marked as Pending' : 'Feedback Verified Successfully', 'success');
    };

    const getRatingColor = (rating) => {
        switch (rating) {
            case 'Excellent': return '#10b981';
            case 'Good': return '#6366f1';
            case 'Average': return '#f59e0b';
            case 'Disappointing': return '#ef4444';
            default: return textMuted;
        }
    };

    return (
        <div style={{ animation: 'fade-in 0.8s ease-out' }}>
            <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '950', color: textMain, letterSpacing: '-1.5px', marginBottom: '0.5rem' }}>
                        Customer Sentiment
                    </h2>
                    <p style={{ color: textMuted, fontSize: '1.2rem', fontWeight: '700' }}>
                        Live stream of post-checkout satisfaction data
                    </p>
                </div>
                <div style={{ padding: '1rem 2rem', background: 'var(--primary-blu-alpha)', borderRadius: '20px', textAlign: 'right' }}>
                    <p style={{ fontSize: '0.8rem', fontWeight: '900', color: 'var(--primary-blu)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Total Feedbacks</p>
                    <p style={{ fontSize: '1.8rem', fontWeight: '950', color: textMain }}>{feedbacks.length}</p>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))', gap: '2rem' }}>
                {feedbacks.length === 0 ? (
                    <div className="glass-panel" style={{ gridColumn: '1/-1', padding: '6rem', textAlign: 'center', borderRadius: '40px' }}>
                        <Heart size={80} style={{ opacity: 0.1, marginBottom: '2rem' }} />
                        <h3 style={{ fontSize: '1.8rem', fontWeight: '900', color: textMuted }}>No Feedback Yet</h3>
                        <p style={{ color: textMuted, fontWeight: '600' }}>Your customers haven't shared their thoughts on the new flow yet.</p>
                    </div>
                ) : (
                    feedbacks.map((fb) => (
                        <div key={fb.id} className="glass-panel" style={{ 
                            borderRadius: '32px', 
                            padding: '2.5rem',
                            border: fb.verified ? '2px solid #10b981' : `1px solid ${borderCol}`,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            position: 'relative',
                            transition: 'all 0.3s ease',
                            background: fb.verified ? 'rgba(16, 185, 129, 0.03)' : 'var(--card-bg)'
                        }}
                        onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={e => e.currentTarget.style.transform = 'none'}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div style={{ display: 'flex', gap: '0.75rem' }}>
                                    <div style={{ 
                                        padding: '0.6rem 1.2rem', borderRadius: '14px', fontSize: '0.85rem', fontWeight: '900',
                                        background: `${getRatingColor(fb.rating)}15`,
                                        color: getRatingColor(fb.rating),
                                        display: 'flex', alignItems: 'center', gap: '0.5rem'
                                    }}>
                                        <Star size={14} fill={getRatingColor(fb.rating)} /> {fb.rating.toUpperCase()}
                                    </div>
                                    {fb.verified && (
                                        <div style={{ 
                                            padding: '0.6rem 1.2rem', borderRadius: '14px', fontSize: '0.85rem', fontWeight: '950',
                                            background: '#10b98115',
                                            color: '#10b981',
                                            display: 'flex', alignItems: 'center', gap: '0.4rem'
                                        }}>
                                            <CheckCircle2 size={14} /> VERIFIED
                                        </div>
                                    )}
                                </div>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <button 
                                        onClick={() => handleVerify(fb.id)}
                                        title={fb.verified ? "Mark as Pending" : "Verify Feedback"}
                                        style={{ background: 'transparent', border: 'none', color: fb.verified ? '#10b981' : textMuted, cursor: 'pointer', transition: 'color 0.3s' }}
                                    >
                                        <CheckCircle2 size={24} style={{ opacity: fb.verified ? 1 : 0.4 }} />
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(fb.id)}
                                        style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', opacity: 0.6 }}
                                    >
                                        <Trash2 size={24} />
                                    </button>
                                </div>
                            </div>

                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: textMuted, fontSize: '0.85rem', fontWeight: '800' }}>
                                    <ShoppingBag size={14} /> ORDER #{fb.orderId?.slice(-6).toUpperCase()}
                                </div>
                                
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <p style={{ fontSize: '0.82rem', fontWeight: '950', color: textMuted, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>App Experience</p>
                                    <p style={{ color: textMain, fontWeight: '800', fontSize: '1.1rem', lineHeight: '1.6' }}>"{fb.experience}"</p>
                                </div>

                                {fb.thoughts && (
                                    <div>
                                        <p style={{ fontSize: '0.82rem', fontWeight: '950', color: textMuted, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Strategic Thoughts</p>
                                        <p style={{ color: textMuted, fontWeight: '700', fontSize: '1rem', lineHeight: '1.6', fontStyle: 'italic' }}>"{fb.thoughts}"</p>
                                    </div>
                                )}
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: textMuted, fontSize: '0.8rem', fontWeight: '800', paddingTop: '1.5rem', borderTop: `1px solid ${borderCol}` }}>
                                <Calendar size={14} /> {new Date(fb.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AdminFeedback;
