import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2, Sparkles, Check, ExternalLink, Plus, Cpu, Search, Zap, ChevronDown, ChevronUp, Trash2, Maximize2, Minimize2 } from 'lucide-react';
import { useAppContext } from '../../../context/useAppContext';

const STORAGE_KEY = 'bluvanta_chat_current';
const HISTORY_KEY = 'bluvanta_chat_history';

const ChatWidget = () => {
    const { theme } = useAppContext();
    const [isOpen, setIsOpen] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [messages, setMessages] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [
            { role: 'bot', content: 'Welcome back! I\'m your Bluvanta AI Assistant. How can I help you navigate our collections today?' }
        ];
    });
    const [history, setHistory] = useState(() => {
        const saved = localStorage.getItem(HISTORY_KEY);
        return saved ? JSON.parse(saved) : [];
    });
    const [showHistory, setShowHistory] = useState(false);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [loadingStep, setLoadingStep] = useState(0); // 0-4 for progress
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }, [messages]);

    useEffect(() => {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    }, [history]);

    // Auto-reset chat when opened - Requested by USER
    useEffect(() => {
        if (isOpen) {
            startNewChat();
        }
    }, [isOpen]);

    const startNewChat = () => {
        if (messages.length > 1) {
            const newHistoryItem = {
                id: Date.now(),
                timestamp: new Date().toLocaleString(),
                preview: messages[messages.length - 1].content.substring(0, 40) + '...',
                messages: [...messages]
            };
            setHistory(prev => [newHistoryItem, ...prev]);
        }
        setMessages([
            { role: 'bot', content: 'New session started. How can I assist you further?' }
        ]);
        setShowHistory(false);
    };

    const loadFromHistory = (session) => {
        setMessages(session.messages);
        setShowHistory(false);
    };

    const clearHistory = () => {
        setHistory([]);
        localStorage.removeItem(HISTORY_KEY);
    };

    const deleteHistoryItem = (id) => {
        setHistory(prev => prev.filter(item => item.id !== id));
    };

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMsg = { role: 'user', content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);
        setLoadingStep(1);

        // AI Logic continues below (Hard block removed as per USER request)

        const progressInterval = setInterval(() => {
            setLoadingStep(prev => (prev < 4 ? prev + 1 : prev));
        }, 1500);

        try {
            const apiKey = 'n66oj_YS61G6q7RmMosqITYFgUZNQv9hwgnOpGHM4EY';

            // Match the EXACT structure of AdminUpload.jsx which is confirmed working
            const formData = new FormData();
            formData.append('question', input);

            const response = await fetch('http://127.0.0.1:3030/autonomous/api/v1/prediction/pract', {
                method: 'POST',
                headers: {
                    'x-org-id': '30',
                    'x-user-id': '468',
                    'x-chainsys-id': 'ZGQ9ulB3bM9K',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: formData
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(JSON.stringify(errorData) || `Server responded with ${response.status}`);
            }

            const data = await response.json();
            console.log('Support Engine Success:', data);

            let botContent = data.response.text || data.response.answer || data.response.json?.answer || data.response.output || data.response.message;
            if (!botContent && data.response.json) {
                botContent = data.response.json.text || data.response.json.output || data.response.json.answer;
            }

            if (!botContent) {
                botContent = "I'm sorry, I couldn't reach the support engine. Please verify the knowledge base is active.";
            }

            // Clean response - Requested by USER to remove generic "Bluvanta App Assistant" disclaimer
            const cleanBotContent = String(botContent)
                .replace(/Sorry\.\.\.! Am the Bluvanta App Assistant \. You can ask me with the question you have related to Bluvanta\./gi, '')
                .trim();

            setMessages(prev => [...prev, { role: 'bot', content: cleanBotContent, showFlow: false }]);
        } catch (error) {
            console.error('Chat Error:', error);
            setMessages(prev => [...prev, { role: 'bot', content: 'Sorry, I\'m having trouble connecting right now. Please try again later.' }]);
        } finally {
            clearInterval(progressInterval);
            setIsLoading(false);
            setLoadingStep(0);
        }
    };

    const parseText = (text) => {
        if (!text) return null;
        const isLight = theme === 'light';
        let pText = text;
        const links = [];

        // 0. Handle Mandatory Restriction Note (High Impact Rendering)
        const noteRegex = /⚠️ Note: (.*)/g;
        pText = pText.replace(noteRegex, (match, noteText) => {
            const id = `__NTE_${links.length}__`;
            links.push(
                <div key={id} style={{ 
                    padding: '1.2rem', 
                    margin: '1rem 0', 
                    background: 'var(--p-bg-rose)', 
                    borderLeft: '5px solid #ef4444', 
                    borderRadius: '16px',
                    boxShadow: '0 8px 20px rgba(239, 68, 68, 0.08)',
                    animation: 'slideUp 0.3s ease'
                }}>
                    <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                        <div style={{ width: '24px', height: '24px', background: '#ef4444', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                            <span style={{ color: 'white', fontSize: '14px', fontWeight: '950' }}>!</span>
                        </div>
                        <div>
                            <span style={{ color: '#b91c1c', fontWeight: '950', fontSize: '0.95rem', display: 'block', marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Access Protocol Restricted</span>
                            <span style={{ fontSize: '0.92rem', color: 'var(--text-main)', lineHeight: '1.6', fontWeight: '600' }}>{noteText}</span>
                        </div>
                    </div>
                </div>
            );
            return id;
        });

        // 1. Handle Markdown Links: [Title](URL)
        const mdLinkRegex = /\[(.*?)\]\((.*?)\)/g;
        pText = pText.replace(mdLinkRegex, (match, title, url) => {
            const id = `__LNK_${links.length}__`;
            const isAdmin = url.toLowerCase().includes('admin');
            
            if (isAdmin) {
                links.push(
                    <div key={id} style={{ 
                        margin: '1.5rem 0',
                        padding: '2rem',
                        background: 'rgba(239, 68, 68, 0.08)',
                        borderLeft: '12px solid #ef4444',
                        borderRadius: '32px',
                        boxShadow: '0 25px 60px rgba(239, 68, 68, 0.18)',
                        animation: 'innovativeEntry 0.5s var(--ease-smooth)'
                    }}>
                        <div style={{ fontSize: '1.25rem', color: isLight ? '#b91c1c' : '#fca5a5', lineHeight: '1.6', fontWeight: '1000', marginBottom: '1.5rem' }}>
                            ⚠️ Note: This feature is restricted for regular users and accessible only to verified administrators.
                        </div>
                        <div style={{ 
                            padding: '1rem 1.4rem', 
                            background: isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)', 
                            borderRadius: '16px', 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center' 
                        }}>
                             <span style={{ 
                                color: '#0ea5e9', 
                                fontWeight: '1000', 
                                fontSize: '0.9rem', 
                                textDecoration: 'underline', 
                                opacity: 0.7, 
                                cursor: 'not-allowed',
                                fontFamily: 'var(--font-main)'
                            }}>
                                {title}
                            </span>
                            <span style={{ fontSize: '0.7rem', fontWeight: '1000', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px' }}>
                                UNCLICKABLE_REF
                            </span>
                        </div>
                    </div>
                );
            } else {
                links.push(
                    <a key={id} href={url.match(/^https?:\/\//i) ? url : `http://${url}`} target="_blank" rel="noopener noreferrer" style={{ color: '#0ea5e9', fontWeight: '800', textDecoration: 'underline' }}>
                        {title}
                    </a>
                );
            }
            return id;
        });

        // 2. Handle Raw URLs (including localhost)
        const urlRegex = /(https?:\/\/[^\s\)]+|localhost:\d+[^\s\)]*)/gi;
        pText = pText.replace(urlRegex, (match) => {
            const id = `__LNK_${links.length}__`;
            const isAdmin = match.toLowerCase().includes('admin');

            if (isAdmin) {
                 links.push(
                    <div key={id} style={{ 
                        margin: '1.5rem 0',
                        padding: '2rem',
                        background: 'rgba(239, 68, 68, 0.08)',
                        borderLeft: '12px solid #ef4444',
                        borderRadius: '32px',
                        boxShadow: '0 25px 60px rgba(239, 68, 68, 0.18)',
                        animation: 'innovativeEntry 0.5s var(--ease-smooth)'
                    }}>
                        <div style={{ fontSize: '1.25rem', color: isLight ? '#b91c1c' : '#fca5a5', lineHeight: '1.6', fontWeight: '1000', marginBottom: '1.5rem' }}>
                            ⚠️ Note: This feature is restricted for regular users and accessible only to verified administrators.
                        </div>
                        <div style={{ 
                            padding: '1rem 1.4rem', 
                            background: isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)', 
                            borderRadius: '16px', 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center' 
                        }}>
                             <span style={{ 
                                color: '#0ea5e9', 
                                fontWeight: '1000', 
                                fontSize: '0.9rem', 
                                textDecoration: 'underline', 
                                opacity: 0.7, 
                                cursor: 'not-allowed',
                                fontFamily: 'var(--font-main)'
                            }}>
                                {match}
                            </span>
                            <span style={{ fontSize: '0.7rem', fontWeight: '1000', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px' }}>
                                UNCLICKABLE_REF
                            </span>
                        </div>
                    </div>
                );
            } else {
                links.push(
                    <a key={id} href={match.match(/^https?:\/\//i) ? match : `http://${match}`} target="_blank" rel="noopener noreferrer" style={{ color: '#0ea5e9', fontWeight: '800', textDecoration: 'underline' }}>
                        {match}
                    </a>
                );
            }
            return id;
        });

        // 3. Handle Bold: **text**
        const boldRegex = /\*\*(.*?)\*\*/g;
        pText = pText.replace(boldRegex, (match, boldText) => {
            const id = `__BLD_${links.length}__`;
            links.push(<strong key={id} style={{ fontWeight: 800 }}>{boldText}</strong>);
            return id;
        });

        // Final assembly
        const parts = pText.split(/(__[A-Z]{3}_\d+__)/);
        return parts.map((part, i) => {
            const match = part.match(/__([A-Z]{3})_(\d+)__/);
            if (match) {
                return links[parseInt(match[2])];
            }
            return part;
        });
    };

    const renderBotMessage = (content) => {
        if (!content) return null;
        const lines = content.split('\n');
        const rendered = [];
        let inTable = false;
        let tableRows = [];

        lines.forEach((line, idx) => {
            const trimmed = line.trim();

            // Basic Table Detection
            if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
                inTable = true;
                const cells = trimmed.split('|').filter(c => c.trim() !== '' || trimmed.indexOf('||') !== -1);
                if (trimmed.includes('---')) return; // Skip separator line
                tableRows.push(cells);
                return;
            } else if (inTable) {
                // Render table
                rendered.push(
                    <div key={`table-${idx}`} style={{ overflowX: 'auto', marginBottom: '1.2rem', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                            <tbody>
                                {tableRows.map((row, ridx) => (
                                    <tr key={ridx} style={{ background: ridx === 0 ? '#f8fafc' : 'white', borderBottom: '1px solid #e2e8f0' }}>
                                        {row.map((cell, cidx) => (
                                            <td key={cidx} style={{ padding: '0.6rem', fontWeight: ridx === 0 ? '800' : '400', borderRight: '1px solid #e2e8f0' }}>
                                                {parseText(cell.trim())}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
                inTable = false;
                tableRows = [];
            }

            if (!trimmed) {
                rendered.push(<div key={idx} style={{ height: '0.8rem' }} />);
                return;
            }

            // Headers (e.g., "Answers:", "Navigation Steps:")
            if (trimmed.match(/^[A-Z][a-zA-Z\s,]+:$/) || (trimmed.startsWith('**') && trimmed.endsWith(':**'))) {
                rendered.push(
                    <h5 key={idx} style={{ margin: '1.2rem 0 0.6rem 0', fontSize: '0.95rem', fontWeight: '800', color: 'var(--text-main)' }}>
                        {parseText(trimmed)}
                    </h5>
                );
                return;
            }

            // Lists
            const numMatch = trimmed.match(/^(\d+\.)\s+(.*)/);
            if (numMatch) {
                rendered.push(
                    <div key={idx} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.6rem', paddingLeft: '0.5rem' }}>
                        <span style={{ fontWeight: '800', color: 'var(--text-main)', minWidth: '1.2rem' }}>{numMatch[1]}</span>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>{parseText(numMatch[2])}</div>
                    </div>
                );
                return;
            }

            const bulletMatch = trimmed.match(/^([•\-\*])\s+(.*)/);
            if (bulletMatch) {
                rendered.push(
                    <div key={idx} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.4rem', paddingLeft: '0.5rem' }}>
                        <span style={{ fontWeight: '800', color: '#22c55e' }}>•</span>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>{parseText(bulletMatch[2])}</div>
                    </div>
                );
                return;
            }

            // Paragraph
            rendered.push(
                <p key={idx} style={{ margin: '0 0 0.7rem 0', fontSize: '0.92rem', lineHeight: '1.6', color: 'var(--text-main)' }}>
                    {parseText(line)}
                </p>
            );
        });

        // Final table catch-all
        if (inTable && tableRows.length > 0) {
            rendered.push(
                <div key="final-table" style={{ overflowX: 'auto', marginBottom: '1.2rem', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                        <tbody>
                            {tableRows.map((row, ridx) => (
                                <tr key={ridx} style={{ background: ridx === 0 ? '#f8fafc' : 'white', borderBottom: '1px solid #e2e8f0' }}>
                                    {row.map((cell, cidx) => (
                                        <td key={cidx} style={{ padding: '0.6rem', fontWeight: ridx === 0 ? '800' : '400', borderRight: '1px solid #e2e8f0' }}>
                                            {parseText(cell.trim())}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }

        return rendered;
    };
    
    // Reasoning Progress Component
    const ReasoningProgress = ({ step }) => {
        const steps = [
            { id: 1, label: 'Accessing Bluvanta Cortex', icon: <Cpu size={14} /> },
            { id: 2, label: 'Indexing Shared Knowledge', icon: <Search size={14} /> },
            { id: 3, label: 'Analyzing Request Data', icon: <Zap size={14} /> },
            { id: 4, label: 'Synthesizing Response', icon: <Sparkles size={14} /> }
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {steps.map((s) => (
                    <div key={s.id} style={{ 
                        display: 'flex', alignItems: 'center', gap: '0.8rem',
                        opacity: step >= s.id ? 1 : 0.2,
                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        transform: step === s.id ? 'translateX(8px)' : 'none'
                    }}>
                        <div style={{ 
                            width: '28px', height: '28px', borderRadius: '10px',
                            background: step > s.id ? '#10b981' : (step === s.id ? 'linear-gradient(135deg, #ec4899, #a855f7)' : 'var(--p-bg-rose)'),
                            color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: step === s.id ? '0 8px 15px rgba(236, 72, 153, 0.2)' : 'none'
                        }}>
                            {step > s.id ? <Check size={16} strokeWidth={4} /> : s.icon}
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ 
                                fontSize: '0.85rem', fontWeight: '850', 
                                color: step === s.id ? 'var(--text-main)' : 'var(--text-muted)',
                                letterSpacing: '0.3px'
                            }}>
                                {s.label}
                            </div>
                        </div>
                        {step === s.id && (
                            <div style={{ display: 'flex', gap: '3px' }}>
                                <div className="dot-pulse" style={{ width: '4px', height: '4px', background: '#ec4899', borderRadius: '50%' }}></div>
                                <div className="dot-pulse" style={{ width: '4px', height: '4px', background: '#ec4899', borderRadius: '50%', animationDelay: '0.2s' }}></div>
                                <div className="dot-pulse" style={{ width: '4px', height: '4px', background: '#ec4899', borderRadius: '50%', animationDelay: '0.4s' }}></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div style={{ 
            position: 'fixed', 
            bottom: isFullScreen ? 0 : '2rem', 
            right: isFullScreen ? 0 : '2rem', 
            top: isFullScreen ? 0 : 'auto', 
            left: isFullScreen ? 0 : 'auto', 
            zIndex: 10000, 
            fontFamily: 'var(--font-main)',
            transition: 'all 0.4s var(--ease-smooth)',
            display: isFullScreen ? 'flex' : 'block',
            alignItems: 'center',
            justifyContent: 'center',
            background: isFullScreen ? 'rgba(0,0,0,0.4)' : 'transparent',
            backdropFilter: isFullScreen ? 'blur(10px)' : 'none'
        }}>
            {/* Chat Bubble */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    style={{
                        width: '74px', height: '74px', borderRadius: '28px',
                        background: isLoading ? 'var(--p-bg-rose)' : 'linear-gradient(135deg, #ec4899, #a855f7)', 
                        color: isLoading ? '#ec4899' : 'white', border: 'none',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer', boxShadow: '0 20px 40px rgba(236, 72, 153, 0.3)',
                        transition: 'all 0.4s var(--ease-smooth)', position: 'relative',
                        padding: 0
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
                >
                    {/* Circular Progress SVG */}
                    {isLoading && (
                        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                            <circle
                                cx="37" cy="37" r="33"
                                fill="transparent"
                                stroke="#ec4899"
                                strokeWidth="4"
                                strokeDasharray={`${(loadingStep / 4) * 207} 207`}
                                strokeLinecap="round"
                                style={{ transition: 'stroke-dasharray 0.5s ease' }}
                            />
                        </svg>
                    )}
                    
                    {isLoading ? (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', zIndex: 1 }}>
                            <Loader2 size={24} className="animate-spin" />
                            <span style={{ fontSize: '10px', fontWeight: '900' }}>{Math.round((loadingStep / 4) * 100)}%</span>
                        </div>
                    ) : (
                        <MessageCircle size={32} />
                    )}
                    
                    {!isLoading && (
                        <div style={{
                            position: 'absolute', top: '2px', right: '2px',
                            width: '20px', height: '20px', background: '#22c55e',
                            borderRadius: '50%', border: '4px solid var(--bg-color)'
                        }}></div>
                    )}
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div style={{
                    width: isFullScreen ? 'min(1100px, 92vw)' : 'min(620px, 95vw)', 
                    height: isFullScreen ? '86vh' : 'min(820px, 90vh)', 
                    background: 'var(--bg-color)', 
                    border: '1px solid var(--glass-border)', 
                    borderRadius: '32px',
                    boxShadow: '0 40px 80px rgba(0,0,0,0.18)',
                    display: 'flex', flexDirection: 'column', overflow: 'hidden',
                    animation: 'slideUp 0.4s var(--ease-smooth)',
                    position: 'relative'
                }}>
                    {/* Background Pastel Blur */}
                    <div style={{
                        position: 'absolute', inset: 0, zIndex: -1, opacity: 0.5,
                        background: `radial-gradient(circle at 0% 0%, var(--p-bg-rose) 0%, transparent 50%),
                                    radial-gradient(circle at 100% 100%, var(--p-bg-lavender) 0%, transparent 50%)`
                    }} />
                    {/* Header */}
                    <div style={{
                        padding: '1rem 1.5rem', 
                        background: 'linear-gradient(90deg, #a855f7, #ec4899)',
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        zIndex: 10
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{
                                width: '32px', height: '32px', borderRadius: '10px',
                                background: '#22c55e', display: 'flex', alignItems: 'center',
                                justifyContent: 'center', color: 'white'
                            }}>
                                <Bot size={18} />
                            </div>
                            <div>
                                <h4 style={{ margin: 0, fontSize: '0.9rem', fontWeight: '800', color: 'white' }}>Bluvanta AI</h4>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                    <div style={{ width: '5px', height: '5px', background: '#ffffff', borderRadius: '50%' }}></div>
                                    <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.7)', fontWeight: '600' }}>Active Now</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                            <button
                                onClick={() => setShowHistory(!showHistory)}
                                style={{ background: 'rgba(255,255,255,0.1)', border: 'none', cursor: 'pointer', color: 'white', padding: '0.4rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.7rem' }}
                                title="Chat History"
                            >
                                <Sparkles size={14} /> History
                            </button>
                            <button
                                onClick={startNewChat}
                                style={{ background: 'rgba(255,255,255,0.2)', border: 'none', cursor: 'pointer', color: 'white', padding: '0.4rem', borderRadius: '8px', display: 'flex', alignItems: 'center' }}
                                title="New Chat"
                            >
                                <Plus size={16} />
                            </button>
                            <button
                                onClick={() => setIsFullScreen(!isFullScreen)}
                                style={{ background: 'rgba(255,255,255,0.2)', border: 'none', cursor: 'pointer', color: 'white', padding: '0.4rem', borderRadius: '8px', display: 'flex', alignItems: 'center' }}
                                title={isFullScreen ? "Minimize" : "Full Screen"}
                            >
                                {isFullScreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                            </button>
                            <button
                                onClick={() => { setIsOpen(false); setIsFullScreen(false); }}
                                style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'white' }}
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </div>

                    {/* History View Overlay */}
                    {showHistory && (
                        <div style={{
                            position: 'absolute', inset: '60px 0 0 0', background: 'var(--bg-color)', zIndex: 100,
                            padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem',
                            animation: 'slideInRight 0.3s ease-out'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '800' }}>Saved Sessions</h3>
                                <button onClick={clearHistory} style={{ background: 'var(--p-bg-rose)', border: 'none', color: 'var(--v-rose)', padding: '0.4rem 0.8rem', borderRadius: '8px', fontSize: '0.75rem', fontWeight: '800', cursor: 'pointer' }}>Clear All</button>
                            </div>
                            <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }} className="no-scrollbar">
                                {history.length === 0 ? (
                                    <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
                                        <Bot size={40} style={{ opacity: 0.2, marginBottom: '1rem' }} />
                                        <p>No chat history yet.</p>
                                    </div>
                                ) : (
                                    history.map(session => (
                                        <div 
                                            key={session.id} 
                                            style={{
                                                padding: '1rem', background: 'var(--card-bg)', borderRadius: '16px', border: '1px solid var(--glass-border)',
                                                cursor: 'pointer', transition: 'all 0.3s ease', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                                            }}
                                            onMouseEnter={e => e.currentTarget.style.background = 'var(--p-bg-rose)'}
                                            onMouseLeave={e => e.currentTarget.style.background = 'var(--card-bg)'}
                                        >
                                            <div onClick={() => loadFromHistory(session)} style={{ flex: 1, paddingRight: '1rem' }}>
                                                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>{session.timestamp}</div>
                                                <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-main)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{session.preview}</div>
                                            </div>
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); deleteHistoryItem(session.id); }}
                                                style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '0.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                                                title="Delete Session"
                                                onMouseEnter={e => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)'}
                                                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    ))
                                )}
                            </div>
                            <button onClick={() => setShowHistory(false)} style={{ width: '100%', padding: '1rem', background: 'linear-gradient(90deg, #a855f7, #ec4899)', color: 'white', border: 'none', borderRadius: '14px', fontWeight: '800', cursor: 'pointer' }}>Back to Current Chat</button>
                        </div>
                    )}

                    {/* Messages Area */}
                    <div style={{
                        flex: 1, overflowY: 'auto', padding: '1.5rem',
                        display: 'flex', flexDirection: 'column', gap: '1.5rem'
                    }} className="no-scrollbar">
                        {messages.map((msg, i) => (
                            <div key={i} style={{
                                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                                maxWidth: '100%',
                                display: 'flex', flexDirection: 'column', gap: '0.4rem',
                                width: msg.role === 'user' ? 'auto' : '100%'
                            }}>
                                {msg.role === 'user' ? (
                                    <div style={{
                                        padding: '0.85rem 1.25rem', borderRadius: '20px 20px 4px 20px',
                                        background: 'linear-gradient(135deg, #ec4899, #fb7185)', color: 'white', fontSize: '0.95rem',
                                        boxShadow: '0 8px 20px rgba(236, 72, 153, 0.2)'
                                    }}>
                                        {msg.content}
                                    </div>
                                ) : (
                                    <div style={{
                                        background: 'var(--card-bg)', borderRadius: '14px', overflow: 'hidden',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid var(--glass-border)'
                                    }}>
                                        {/* Process Flow Bar - Collapsible Dropdown */}
                                        <div 
                                            onClick={() => {
                                                const newMessages = [...messages];
                                                newMessages[i].showFlow = !newMessages[i].showFlow;
                                                setMessages(newMessages);
                                            }}
                                            style={{
                                                background: msg.showFlow ? 'rgba(34, 197, 94, 0.08)' : 'var(--p-bg-sage)', 
                                                padding: '0.65rem 1.2rem',
                                                display: 'flex', alignItems: 'center', gap: '0.6rem',
                                                cursor: 'pointer', transition: 'all 0.3s ease',
                                                borderBottom: msg.showFlow ? '1px solid rgba(34, 197, 94, 0.2)' : 'none'
                                            }}
                                        >
                                            <div style={{
                                                width: '18px', height: '18px', background: 'var(--v-sage)',
                                                borderRadius: '50%', display: 'flex', alignItems: 'center',
                                                justifyContent: 'center', color: 'white'
                                            }}>
                                                <Check size={12} strokeWidth={4} />
                                            </div>
                                            <span style={{ color: 'var(--v-sage)', fontWeight: '800', fontSize: '0.8rem', letterSpacing: '0.5px', flex: 1 }}>Process Flow</span>
                                            {msg.showFlow ? <ChevronUp size={16} color="var(--v-sage)" /> : <ChevronDown size={16} color="var(--v-sage)" />}
                                        </div>
                                        
                                        {msg.showFlow && (
                                            <div style={{ padding: '1.25rem', background: '#fcfdfc', borderBottom: '1px solid var(--glass-border)', animation: 'slideDown 0.3s ease' }}>
                                                <ReasoningProgress step={5} />
                                            </div>
                                        )}

                                        <div style={{ padding: '1.25rem' }}>
                                            {renderBotMessage(msg.content)}
                                        </div>
                                    </div>
                                )}
                                <span style={{
                                    fontSize: '0.65rem', color: '#64748b',
                                    alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                                    fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px',
                                    padding: '0 0.5rem'
                                }}>
                                    {msg.role === 'user' ? 'You' : 'Assistant'}
                                </span>
                            </div>
                        ))}
                        {isLoading && (
                            <div style={{ alignSelf: 'flex-start', width: '100%', padding: '0 0.5rem' }}>
                                <div style={{ 
                                    background: 'var(--card-bg)', borderRadius: '24px', overflow: 'hidden',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)', border: '1px solid var(--glass-border)',
                                    animation: 'pulse-border 2s infinite'
                                }}>
                                    {/* Glass Header */}
                                    <div style={{ 
                                        padding: '0.8rem 1.5rem', 
                                        background: 'rgba(236, 72, 153, 0.05)', 
                                        borderBottom: '1px solid var(--glass-border)',
                                        display: 'flex', alignItems: 'center', gap: '0.75rem'
                                    }}>
                                        <Bot size={14} color="#ec4899" />
                                        <span style={{ fontSize: '0.75rem', fontWeight: '950', color: '#ec4899', letterSpacing: '1px' }}>SYSTEM REASONING</span>
                                    </div>
                                    <div style={{ padding: '1.5rem' }}>
                                        <ReasoningProgress step={loadingStep} />
                                    </div>
                                    <div style={{ 
                                        padding: '0.6rem 1.5rem', 
                                        background: 'var(--p-bg-rose)', 
                                        fontSize: '0.7rem', 
                                        fontWeight: '800', 
                                        color: 'var(--v-rose)',
                                        textAlign: 'center'
                                    }}>
                                        Connecting to High-Frequency Ingestion Cloud...
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form
                        onSubmit={handleSend}
                        style={{
                            padding: '1.25rem 1.5rem', background: 'var(--card-bg)',
                            borderTop: '1px solid var(--glass-border)', display: 'flex', gap: '0.75rem'
                        }}
                    >
                        <input
                            type="text" placeholder="Type your message..."
                            value={input} onChange={(e) => setInput(e.target.value)}
                            style={{
                                flex: 1, border: '1px solid var(--glass-border)', background: 'var(--bg-color)',
                                padding: '0.75rem 1.2rem', borderRadius: '12px', fontSize: '0.92rem',
                                outline: 'none', color: 'var(--text-main)'
                            }}
                        />
                        <button
                            type="submit" disabled={isLoading || !input.trim()}
                            style={{
                                width: '44px', height: '44px', borderRadius: '10px',
                                background: '#ec4899', color: 'white', border: 'none',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer', opacity: isLoading || !input.trim() ? 0.5 : 1
                            }}
                        >
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            )}

            <style>{`
                .animate-spin { animation: spin 1s linear infinite; }
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                .dot-pulse {
                    animation: dotPulse 1.5s infinite ease-in-out;
                }
                @keyframes dotPulse {
                    0%, 100% { opacity: 0.2; transform: scale(0.8); }
                    50% { opacity: 1; transform: scale(1.2); }
                }
                @keyframes slideDown {
                    from { max-height: 0; opacity: 0; }
                    to { max-height: 500px; opacity: 1; }
                }
                @keyframes pulse-border {
                    0% { border-color: var(--glass-border); }
                    50% { border-color: rgba(236, 72, 153, 0.4); }
                    100% { border-color: var(--glass-border); }
                }
                @keyframes innovativeEntry {
                    from { transform: scale(0.9) translateY(20px); opacity: 0; filter: blur(10px); }
                    to { transform: scale(1) translateY(0); opacity: 1; filter: blur(0); }
                }
            `}</style>
        </div>
    );
};

export default ChatWidget;
