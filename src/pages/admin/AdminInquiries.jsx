import React, { useState, useMemo } from 'react';
import { useAppContext } from '../../context/useAppContext';
import { useOutletContext } from 'react-router-dom';
import { MessageSquare, Calendar, User, Mail, Send, CheckCircle2, Trash2, Reply, ChevronDown, ChevronUp, Briefcase, Link as LinkIcon, Info, FileText } from 'lucide-react';

const AdminInquiries = () => {
    const { inquiries, replyToInquiry, deleteInquiry, showPopup } = useAppContext();
    const { isLight, textMain, textMuted, borderCol } = useOutletContext();
    const [replyText, setReplyText] = useState({});
    const [expandedInq, setExpandedInq] = useState(null);
    const [activeTab, setActiveTab] = useState('all'); // 'all', 'messages', 'careers'

    const filteredInquiries = useMemo(() => {
        if (activeTab === 'all') return inquiries;
        if (activeTab === 'careers') return inquiries.filter(inq => inq.subject?.includes('[JOB APP]'));
        if (activeTab === 'messages') return inquiries.filter(inq => !inq.subject?.includes('[JOB APP]'));
        return inquiries;
    }, [inquiries, activeTab]);

    const handleReply = (id) => {
        if (!replyText[id]?.trim()) return;
        replyToInquiry(id, replyText[id]);
        setReplyText({ ...replyText, [id]: '' });
        showPopup('Response Dispatched Successfully!', 'success');
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this entry?')) {
            deleteInquiry(id);
            showPopup('Entry Removed', 'info');
        }
    };

    const isJobApp = (subject) => subject?.includes('[JOB APP]');

    return (
        <div style={{ animation: 'fade-in 0.8s ease-out' }}>
            <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '950', color: textMain, letterSpacing: '-1.5px', marginBottom: '0.5rem' }}>
                        Inquiry Hub
                    </h2>
                    <p style={{ color: textMuted, fontSize: '1.2rem', fontWeight: '700' }}>
                        Manage global communications and recruitment streams
                    </p>
                </div>
                
                {/* Tab Filtering UI */}
                <div style={{ 
                    display: 'flex', background: isLight ? '#f1f5f9' : 'rgba(255,255,255,0.03)', 
                    padding: '0.5rem', borderRadius: '20px', border: `1px solid ${borderCol}`, gap: '0.5rem' 
                }}>
                    {[
                        { id: 'all', label: 'All Streams', icon: <Info size={16} /> },
                        { id: 'messages', label: 'Support', icon: <MessageSquare size={16} /> },
                        { id: 'careers', label: 'Job Applications', icon: <Briefcase size={16} /> }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            style={{
                                padding: '0.75rem 1.5rem', borderRadius: '14px', border: 'none',
                                background: activeTab === tab.id ? 'var(--primary-color)' : 'transparent',
                                color: activeTab === tab.id ? 'white' : textMuted,
                                fontWeight: '900', fontSize: '0.85rem', cursor: 'pointer',
                                transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '0.6rem'
                            }}
                        >
                            {tab.icon} {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            <div style={{ display: 'grid', gap: '2rem' }}>
                {filteredInquiries.length === 0 ? (
                    <div className="glass-panel" style={{ padding: '6rem', textAlign: 'center', borderRadius: '40px' }}>
                        {activeTab === 'careers' ? <Briefcase size={80} style={{ opacity: 0.1, marginBottom: '2rem' }} /> : <MessageSquare size={80} style={{ opacity: 0.1, marginBottom: '2rem' }} />}
                        <h3 style={{ fontSize: '1.8rem', fontWeight: '900', color: textMuted }}>No entries in this stream</h3>
                        <p style={{ color: textMuted, fontWeight: '600' }}>Everything is caught up.</p>
                    </div>
                ) : (
                    filteredInquiries.map((inq) => (
                        <div key={inq.id} className="glass-panel" style={{ 
                            borderRadius: '35px', 
                            overflow: 'hidden',
                            border: `1px solid ${isJobApp(inq.subject) ? '#6366f1' : (inq.status === 'Open' ? '#ec4899' : borderCol)}`,
                            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                            background: isJobApp(inq.subject) ? (isLight ? 'rgba(99, 102, 241, 0.02)' : 'rgba(99, 102, 241, 0.05)') : 'transparent'
                        }}>
                            {/* Header / Summary */}
                            <div 
                                onClick={() => setExpandedInq(expandedInq === inq.id ? null : inq.id)}
                                style={{ 
                                    padding: '2.5rem', 
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    background: expandedInq === inq.id ? (isLight ? '#f8fafc' : 'rgba(255,255,255,0.03)') : 'transparent'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                                    <div style={{ 
                                        width: '64px', height: '64px', borderRadius: '20px', 
                                        background: isJobApp(inq.subject) ? 'rgba(99, 102, 241, 0.1)' : (inq.status === 'Open' ? 'var(--p-bg-rose)' : 'var(--p-bg-sage)'),
                                        color: isJobApp(inq.subject) ? '#6366f1' : (inq.status === 'Open' ? 'var(--v-rose)' : 'var(--v-sage)'),
                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        {isJobApp(inq.subject) ? <Briefcase size={28} /> : <MessageSquare size={28} />}
                                    </div>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.4rem' }}>
                                            <h4 style={{ fontSize: '1.4rem', fontWeight: '900', color: textMain }}>
                                                {isJobApp(inq.subject) ? inq.subject.replace('[JOB APP]', '').trim() : inq.subject}
                                            </h4>
                                            {isJobApp(inq.subject) && (
                                                <span style={{ 
                                                    padding: '0.4rem 1rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '950',
                                                    background: '#e0e7ff', color: '#6366f1', border: '1px solid #c7d2fe'
                                                }}>RECRUITMENT</span>
                                            )}
                                            <span style={{ 
                                                padding: '0.4rem 1rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '950',
                                                background: inq.status === 'Open' ? '#fdf2f8' : '#ecfdf5',
                                                color: inq.status === 'Open' ? '#be185d' : '#047857',
                                                border: `1px solid ${inq.status === 'Open' ? '#fbcfe8' : '#a7f3d0'}`
                                            }}>{inq.status.toUpperCase()}</span>
                                        </div>
                                        <div style={{ display: 'flex', gap: '1.5rem', color: textMuted, fontSize: '0.9rem', fontWeight: '800' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><User size={14} /> {inq.name}</div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Mail size={14} /> {inq.email}</div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={14} /> {new Date(inq.date).toLocaleDateString()}</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); handleDelete(inq.id); }}
                                        style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '0.5rem' }}
                                    >
                                        <Trash2 size={24} />
                                    </button>
                                    {expandedInq === inq.id ? <ChevronUp size={28} color={textMuted} /> : <ChevronDown size={28} color={textMuted} />}
                                </div>
                            </div>

                            {/* Expanded Content */}
                            {expandedInq === inq.id && (
                                <div style={{ padding: '0 2.5rem 2.5rem 2.5rem', marginTop: '-0.5rem' }}>
                                    {isJobApp(inq.subject) ? (
                                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                                            {/* Experience Summary */}
                                            <div style={{ 
                                                padding: '2rem', 
                                                background: isLight ? 'rgba(99, 102, 241, 0.05)' : 'rgba(99, 102, 241, 0.1)', 
                                                borderRadius: '24px', 
                                                border: '1px solid rgba(99, 102, 241, 0.1)',
                                                fontSize: '1.1rem', lineHeight: '1.8', color: textMain, fontWeight: '600', whiteSpace: 'pre-wrap'
                                            }}>
                                                <div style={{ fontSize: '0.8rem', fontWeight: '900', color: '#6366f1', marginBottom: '1rem', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                    <Info size={14} /> CANDIDATE EXPERIENCE SUMMARY
                                                </div>
                                                {inq.message?.split('PORTFOLIO/RESUME LINK:')[0]?.replace('EXPERIENCE SUMMARY:', '')?.trim() || 'No experience summary provided.'}
                                            </div>

                                            {/* Attachments & Links */}
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                                {/* Portfolio Link Chip */}
                                                {(inq.message?.includes('PORTFOLIO/RESUME LINK:')) && (
                                                    <a href={inq.message?.split('PORTFOLIO/RESUME LINK:')[1]?.split('\n')[0]?.trim() || '#'} target="_blank" rel="noopener noreferrer" style={{
                                                        textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.5rem',
                                                        background: 'var(--card-bg)', border: `1px solid ${borderCol}`, borderRadius: '15px', color: textMain, fontWeight: '800', fontSize: '0.9rem', transition: 'all 0.3s'
                                                    }} onMouseOver={e => e.currentTarget.style.borderColor = 'var(--primary-color)'} onMouseOut={e => e.currentTarget.style.borderColor = borderCol}>
                                                        <LinkIcon size={18} color="#6366f1" /> View Portfolio / Personal Site
                                                    </a>
                                                )}

                                                {/* Resume File Chip */}
                                                {(inq.message?.includes('ATTACHED RESUME:')) && (
                                                    <div style={{
                                                        display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.5rem',
                                                        background: 'var(--card-bg)', border: '1px solid #6366f1', borderRadius: '15px', color: '#6366f1', fontWeight: '800', fontSize: '0.9rem'
                                                    }}>
                                                        <FileText size={18} /> RESUME: {inq.message?.split('ATTACHED RESUME:')[1]?.trim() || 'File Attachment'}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ) : (
                                        <div style={{ 
                                            padding: '2rem', 
                                            background: isLight ? '#f1f5f9' : '#1e293b', 
                                            borderRadius: '24px', 
                                            marginBottom: '2rem',
                                            fontSize: '1.1rem',
                                            lineHeight: '1.8',
                                            color: textMain,
                                            fontWeight: '600',
                                            whiteSpace: 'pre-wrap'
                                        }}>
                                            {inq.message}
                                        </div>
                                    )}

                                    {/* Conversation History */}
                                    {inq.replies && inq.replies.length > 0 && (
                                        <div style={{ marginBottom: '2rem' }}>
                                            <h5 style={{ fontWeight: '900', color: textMuted, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <Reply size={16} /> RESPONSE LOG
                                            </h5>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                                {inq.replies.map((reply, rIdx) => (
                                                    <div key={rIdx} style={{ 
                                                        alignSelf: 'flex-end', 
                                                        maxWidth: '80%', 
                                                        background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                                                        color: 'white',
                                                        padding: '1.5rem 2rem',
                                                        borderRadius: '24px 24px 4px 24px',
                                                        boxShadow: '0 10px 20px rgba(99,102,241,0.2)'
                                                    }}>
                                                        <div style={{ fontWeight: '600' }}>{reply.text}</div>
                                                        <div style={{ fontSize: '0.75rem', marginTop: '0.75rem', opacity: 0.8, fontWeight: '800' }}>
                                                            {reply.by} — {new Date(reply.date).toLocaleString()}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Reply Form */}
                                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-end' }}>
                                        <div style={{ flex: 1 }}>
                                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '900', color: textMuted, marginBottom: '0.75rem', letterSpacing: '1px' }}>DRAFT DISPATCH</label>
                                            <textarea 
                                                placeholder={isJobApp(inq.subject) ? "Draft recruitment response..." : "Compose your strategic response..."}
                                                value={replyText[inq.id] || ''}
                                                onChange={(e) => setReplyText({ ...replyText, [inq.id]: e.target.value })}
                                                style={{ 
                                                    width: '100%', padding: '1.5rem', borderRadius: '20px', 
                                                    background: isLight ? '#ffffff' : '#0f172a', border: `1px solid ${borderCol}`,
                                                    color: textMain, fontSize: '1rem', fontWeight: '700', outline: 'none',
                                                    minHeight: '120px', resize: 'vertical'
                                                }}
                                            />
                                        </div>
                                        <button 
                                            onClick={() => handleReply(inq.id)}
                                            disabled={!replyText[inq.id]?.trim()}
                                            style={{ 
                                                padding: '1.5rem 3rem', borderRadius: '20px', border: 'none', 
                                                background: isJobApp(inq.subject) ? 'linear-gradient(90deg, #6366f1, #a855f7)' : 'linear-gradient(90deg, #ec4899, #a855f7)', color: 'white', 
                                                fontWeight: '900', cursor: 'pointer', fontSize: '1.1rem',
                                                boxShadow: `0 10px 25px ${isJobApp(inq.subject) ? 'rgba(99,102,241,0.3)' : 'rgba(236,72,153,0.3)'}`, transition: 'all 0.3s',
                                                display: 'flex', alignItems: 'center', gap: '1rem',
                                                opacity: !replyText[inq.id]?.trim() ? 0.5 : 1
                                            }}
                                            onMouseOver={e => !(!replyText[inq.id]?.trim()) && (e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)')}
                                            onMouseOut={e => e.currentTarget.style.transform = 'none'}
                                        >
                                            {isJobApp(inq.subject) ? 'RESPOND TO CANDIDATE' : 'DISPATCH'} <Send size={22} />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AdminInquiries;
