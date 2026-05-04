import React, { useState, useRef, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
    UploadCloud, FileText, CheckCircle2, XCircle, AlertCircle, 
    Loader, ShieldCheck, Database, Search, Zap, ArrowRight,
    FileCode, FileArchive, Layers
} from 'lucide-react';

const AdminUpload = () => {
    const { isLight, textMain, textMuted, bgMain, borderCol } = useOutletContext();
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState({ type: 'idle', message: '' }); 
    const [progress, setProgress] = useState(0);
    const [uploadStep, setUploadStep] = useState(0);
    const fileInputRef = useRef(null);

    const steps = [
        { id: 0, label: 'Reading Document', icon: <FileSearch size={18} /> },
        { id: 1, label: 'Validating Schema', icon: <ShieldCheck size={18} /> },
        { id: 2, label: 'Encoding Content', icon: <FileCode size={18} /> },
        { id: 3, label: 'Vector Indexing', icon: <Layers size={18} /> },
        { id: 4, label: 'Finalizing DB Sync', icon: <Database size={18} /> }
    ];

    const handleDragOver = (e) => {
        e.preventDefault();
        e.currentTarget.style.transform = 'scale(1.02)';
        e.currentTarget.style.borderColor = '#6366f1';
        e.currentTarget.style.background = isLight ? 'rgba(99, 102, 241, 0.05)' : 'rgba(99, 102, 241, 0.1)';
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.borderColor = borderCol;
        e.currentTarget.style.background = isLight ? 'rgba(255, 255, 255, 0.5)' : 'rgba(15, 23, 42, 0.5)';
    };

    const handleDrop = (e) => {
        e.preventDefault();
        handleDragLeave(e);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            setFile(e.dataTransfer.files[0]);
            setStatus({ type: 'idle', message: '' });
            setProgress(0);
            setUploadStep(0);
        }
    };

    const handleFileSelect = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
            setStatus({ type: 'idle', message: '' });
            setProgress(0);
            setUploadStep(0);
            e.target.value = '';
        }
    };

    const updateProgressDelayed = async (val, step, delay = 600) => {
        return new Promise(resolve => {
            setTimeout(() => {
                setProgress(val);
                setUploadStep(step);
                resolve();
            }, delay);
        });
    };

    const handleUploadClick = async () => {
        if (!file) {
            setStatus({ type: 'error', message: 'Please select a file to upload first.' });
            return;
        }

        setStatus({ type: 'uploading', message: 'Initializing Ingestion Pipeline...' });
        
        await updateProgressDelayed(15, 0);
        const isTextFile = file.name.match(/\.(txt|md|csv)$/i);

        const toBase64 = file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result.split(',')[1]);
            reader.onerror = error => reject(error);
        });

        const startUpload = async (content = null) => {
            const formData = new FormData();
            formData.append('files', file);
            
            const tagContent = isTextFile ? (content || "[Text Content]") : "[Binary Document Attached]";
            formData.append('question', `<doc name='${file.name}'>${tagContent}</doc>`);

            try {
                await updateProgressDelayed(35, 1);
                await updateProgressDelayed(55, 2);

                try {
                    const COUCH_URL = "https://192.168.57.254:5984";
                    const DB_NAME = "upload_app";
                    const USERNAME = "ruler";
                    const PASSWORD = "ruler";
                    const DOC_ID = `doc_${Date.now()}`;
                    const base64Data = await toBase64(file);

                    const couchDoc = {
                        _id: DOC_ID,
                        filename: file.name,
                        uploadDate: new Date().toISOString(),
                        _attachments: {
                            [file.name]: {
                                content_type: file.type || 'application/octet-stream',
                                data: base64Data
                            }
                        }
                    };

                    await fetch(`${COUCH_URL}/${DB_NAME}/${DOC_ID}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Basic ' + window.btoa(`${USERNAME}:${PASSWORD}`)
                        },
                        body: JSON.stringify(couchDoc)
                    });
                } catch (couchErr) {
                    console.error('CouchDB Upload Error:', couchErr);
                }
                
                const response = await fetch('http://localhost:3030/autonomous/api/v1/prediction/custom-attach', {
                    method: 'POST',
                    headers: {
                        'x-org-id': '30',
                        'x-user-id': '468',
                        'x-chainsys-id': 'ZGQ9ulB3bM9K',
                        'Authorization': 'Bearer n66oj_YS61G6q7RmMosqITYFgUZNQv9hwgnOpGHM4EY'
                    },
                    body: formData
                });

                await updateProgressDelayed(85, 3);
                const resultText = await response.text();
                console.log('Ingestion Response:', resultText);
                
                let isError = !response.ok;
                let feedbackMessage = '';
                
                try {
                    const parsed = JSON.parse(resultText);
                    const botResponse = (parsed.response && parsed.response.text) || parsed.text || parsed.message || resultText;
                    const hasSuccess = botResponse.includes('✅') || botResponse.toLowerCase().includes('success');
                    const hasFailure = botResponse.includes('❌') || botResponse.toLowerCase().includes('fail') || botResponse.toLowerCase().includes('error');

                    if (hasFailure || response.status >= 400) {
                        isError = true;
                        feedbackMessage = botResponse.split('❌')[1]?.trim() || botResponse;
                    } else if (hasSuccess) {
                        isError = false;
                        feedbackMessage = botResponse;
                    } else {
                        isError = !response.ok;
                        feedbackMessage = botResponse;
                    }
                } catch (e) {
                    isError = !response.ok || resultText.includes('❌');
                    feedbackMessage = resultText;
                }

                await updateProgressDelayed(100, 4);
                
                if (!isError) {
                    setStatus({ 
                        type: 'success', 
                        message: `The document "${file.name}" has been successfully indexed and synced to the knowledge base.` 
                    });
                    setFile(null);
                } else {
                    let detailedMsg = feedbackMessage || 'The backend failed to process the file.';
                    if (detailedMsg.toLowerCase().includes('api key') || detailedMsg.toLowerCase().includes('groq')) {
                        detailedMsg += "\n\nAuthentication failed. Ensure Groq API keys are configured in the Flowise dashboard.";
                    }
                    setStatus({ 
                        type: 'error', 
                        message: detailedMsg 
                    });
                }
            } catch (error) {
                console.error('Upload Error:', error);
                setProgress(100);
                setStatus({ type: 'error', message: 'Connection Error. The Flowise ingestion engine is currently unreachable.' });
            }
        };

        if (isTextFile) {
            const reader = new FileReader();
            reader.onload = (e) => startUpload(e.target.result);
            reader.onerror = () => {
                setProgress(100);
                setStatus({ type: 'error', message: 'Local File Access Error.' });
            };
            reader.readAsText(file);
        } else {
            startUpload();
        }
    };

    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '3rem', 
            padding: '2rem',
            maxWidth: '1100px', 
            margin: '0 auto', 
            animation: 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            minHeight: '100vh'
        }}>
            {/* Header Section */}
            <header style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <div style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.75rem', 
                    padding: '0.6rem 1.2rem', 
                    background: 'rgba(99, 102, 241, 0.1)', 
                    color: '#6366f1', 
                    borderRadius: '50px', 
                    fontSize: '0.85rem', 
                    fontWeight: '900', 
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '1.5rem'
                }}>
                    <Zap size={16} fill="currentColor" /> Knowledge Ingestion Alpha
                </div>
                <h1 style={{ 
                    fontSize: '3.5rem', 
                    fontWeight: '950', 
                    letterSpacing: '-2px', 
                    color: textMain, 
                    lineHeight: '1.1',
                    marginBottom: '1rem'
                }}>
                    Elevate Your AI's <span style={{ color: '#6366f1' }}>Intelligence</span>
                </h1>
                <p style={{ color: textMuted, fontSize: '1.25rem', fontWeight: '500', maxWidth: '600px', margin: '0 auto' }}>
                    Seamlessly sync datasets, documentation, and system logs into the Bluvanta vector cloud.
                </p>
            </header>

            {/* Main Interactive Zone */}
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: status.type === 'uploading' ? '1fr' : '1.5fr 1fr', 
                gap: '2.5rem',
                transition: 'all 0.5s ease'
            }}>
                
                {/* Left Side: Upload Area */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div 
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        style={{ 
                            background: isLight ? 'rgba(255, 255, 255, 0.5)' : 'rgba(15, 23, 42, 0.5)',
                            backdropFilter: 'blur(12px)',
                            borderRadius: '40px', 
                            border: `2px dashed ${borderCol}`,
                            padding: '6rem 3rem', 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            gap: '2rem',
                            textAlign: 'center',
                            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                            cursor: 'pointer',
                            minHeight: '400px',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.05)'
                        }}
                        onClick={() => status.type !== 'uploading' && fileInputRef.current?.click()}
                    >
                        <div style={{ 
                            padding: '2.5rem', 
                            background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', 
                            borderRadius: '32px', 
                            color: 'white',
                            boxShadow: '0 20px 40px rgba(99, 102, 241, 0.4)',
                            transform: 'translateY(0)',
                            transition: 'all 0.3s'
                        }} className="icon-pulse">
                            <UploadCloud size={64} strokeWidth={1.5} />
                        </div>
                        
                        <div>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: '950', color: textMain, marginBottom: '0.75rem' }}>
                                Drop your knowledge base here
                            </h3>
                            <p style={{ color: textMuted, fontWeight: '600', fontSize: '1.1rem' }}>
                                Supports legacy TXT, native DOCX, PDF, and structured CSV.
                            </p>
                        </div>

                        <div style={{ 
                            background: isLight ? '#f1f5f9' : 'rgba(255,255,255,0.05)', 
                            padding: '1rem 2rem', 
                            borderRadius: '20px', 
                            fontWeight: '900', 
                            fontSize: '0.9rem', 
                            color: '#6366f1',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                        }}>
                            <FileArchive size={20} /> MAX 25MB PER FILE
                        </div>

                        <input 
                            type="file" 
                            ref={fileInputRef} 
                            style={{ display: 'none' }} 
                            onChange={handleFileSelect}
                            accept=".txt,.csv,.md,.docx,.docz,.pdf"
                        />
                    </div>
                </div>

                {/* Right Side: Selection & Intelligence Preview */}
                {status.type !== 'uploading' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', animation: 'fadeInRight 0.6s ease-out' }}>
                        {file ? (
                            <div style={{ 
                                background: 'linear-gradient(135deg, #6366f1 0%, #4338ca 100%)',
                                borderRadius: '40px',
                                padding: '3rem',
                                color: 'white',
                                boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                                position: 'relative',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '2rem'
                            }}>
                                <div style={{ position: 'absolute', top: -40, right: -40, width: '200px', height: '200px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
                                
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
                                    <div style={{ background: 'rgba(255,255,255,0.2)', padding: '1.5rem', borderRadius: '24px' }}>
                                        <FileText size={32} />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.9rem', fontWeight: '800', opacity: 0.8, textTransform: 'uppercase' }}>Selected Dataset</div>
                                        <div style={{ fontSize: '1.6rem', fontWeight: '950', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{file.name}</div>
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', position: 'relative', zIndex: 1 }}>
                                    <div style={{ background: 'rgba(255,255,255,0.15)', padding: '1.2rem', borderRadius: '20px' }}>
                                        <div style={{ fontSize: '1.2rem', fontWeight: '950' }}>{(file.size / 1024).toFixed(1)} KB</div>
                                        <div style={{ fontSize: '0.75rem', fontWeight: '800', opacity: 0.7 }}>Payload Size</div>
                                    </div>
                                    <div style={{ background: 'rgba(255,255,255,0.15)', padding: '1.2rem', borderRadius: '20px' }}>
                                        <div style={{ fontSize: '1.2rem', fontWeight: '950' }}>{file.name.split('.').pop().toUpperCase()}</div>
                                        <div style={{ fontSize: '0.75rem', fontWeight: '800', opacity: 0.7 }}>File Format</div>
                                    </div>
                                </div>

                                <button 
                                    onClick={handleUploadClick}
                                    style={{ 
                                        padding: '1.5rem', 
                                        background: '#ffffff', 
                                        color: '#6366f1', 
                                        border: 'none', 
                                        borderRadius: '24px', 
                                        fontWeight: '950', 
                                        fontSize: '1.2rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '1rem',
                                        marginTop: '1rem',
                                        position: 'relative',
                                        zIndex: 1
                                    }}
                                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.03)'}
                                    onMouseOut={e => e.currentTarget.style.transform = 'none'}
                                >
                                    Initiate Attach <Zap size={20} fill="currentColor" />
                                </button>
                            </div>
                        ) : (
                            <div style={{ 
                                background: isLight ? 'rgba(255, 255, 255, 0.5)' : 'rgba(15, 23, 42, 0.5)',
                                backdropFilter: 'blur(12px)',
                                borderRadius: '40px',
                                padding: '3rem',
                                border: `1px solid ${borderCol}`,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '2rem'
                            }}>
                                <h4 style={{ fontSize: '1.4rem', fontWeight: '950', color: textMain }}>Upload Protocol</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    {[
                                        { label: 'Privacy Secured', text: 'End-to-end encryption for all data.', icon: <ShieldCheck size={20} color="#10b981" /> },
                                        { label: 'Vector Optimized', text: 'Content is chunked for modern LLMs.', icon: <Zap size={20} color="#f59e0b" /> },
                                        { label: 'Deep Search', text: 'Instantly searchable in the chat widget.', icon: <Search size={20} color="#ec4899" /> }
                                    ].map((item, i) => (
                                        <div key={i} style={{ display: 'flex', gap: '1.2rem' }}>
                                            <div style={{ padding: '0.8rem', background: isLight ? '#f1f5f9' : 'rgba(255,255,255,0.05)', borderRadius: '16px', height: 'fit-content' }}>
                                                {item.icon}
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: '900', color: textMain, fontSize: '1.05rem' }}>{item.label}</div>
                                                <div style={{ color: textMuted, fontWeight: '600', fontSize: '0.9rem' }}>{item.text}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Premium Upload Progress Overhaul */}
            {status.type === 'uploading' && (
                <div style={{ 
                    marginTop: '2rem',
                    background: isLight ? 'rgba(255, 255, 255, 0.5)' : 'rgba(15, 23, 42, 0.5)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '40px', 
                    padding: '4rem', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '3rem', 
                    border: `1px solid ${borderCol}`,
                    boxShadow: '0 40px 80px rgba(0,0,0,0.1)',
                    animation: 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#6366f1', fontWeight: '900', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>
                                <Loader size={20} className="spin-animation" /> System Processing
                            </div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '950', color: textMain, letterSpacing: '-1.5px' }}>{status.message}</h2>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '4rem', fontWeight: '950', color: '#6366f1', lineHeight: '1' }}>{progress}<span style={{ fontSize: '2rem', opacity: 0.5 }}>%</span></div>
                            <div style={{ fontWeight: '800', color: textMuted, marginTop: '0.5rem' }}>Optimizing Stream</div>
                        </div>
                    </div>

                    {/* Enhanced Step Progress */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: '24px', left: '10%', right: '10%', height: '4px', background: isLight ? '#e2e8f0' : '#334155', zIndex: 0 }}>
                            <div style={{ height: '100%', width: `${(uploadStep / 4) * 100}%`, background: '#6366f1', transition: 'width 0.5s ease', boxShadow: '0 0 15px rgba(99, 102, 241, 0.6)' }}></div>
                        </div>

                        {steps.map((step) => (
                            <div key={step.id} style={{ 
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'center', 
                                gap: '1rem', 
                                zIndex: 1,
                                opacity: uploadStep >= step.id ? 1 : 0.4,
                                transition: 'all 0.4s ease'
                            }}>
                                <div style={{ 
                                    width: '52px', 
                                    height: '52px', 
                                    borderRadius: '18px', 
                                    background: uploadStep === step.id ? '#6366f1' : (uploadStep > step.id ? '#10b981' : (isLight ? '#ffffff' : '#1e293b')),
                                    color: uploadStep >= step.id ? 'white' : textMuted,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: uploadStep === step.id ? '0 10px 20px rgba(99, 102, 241, 0.3)' : 'none',
                                    border: `2px solid ${uploadStep >= step.id ? 'transparent' : borderCol}`
                                }}>
                                    {uploadStep > step.id ? <CheckCircle2 size={24} /> : step.icon}
                                </div>
                                <span style={{ fontWeight: '900', fontSize: '0.8rem', color: uploadStep === step.id ? '#6366f1' : textMain, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{step.label}</span>
                            </div>
                        ))}
                    </div>

                    <div style={{ height: '16px', background: isLight ? '#e2e8f0' : '#1e293b', borderRadius: '50px', overflow: 'hidden', padding: '4px' }}>
                        <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg, #6366f1, #a855f7)', borderRadius: '50px', transition: 'width 0.4s cubic-bezier(0.1, 0.7, 1.0, 0.1)' }}></div>
                    </div>
                </div>
            )}

            {/* Premium Status Modal with Glassmorphism */}
            {(status.type === 'error' || status.type === 'success') && (
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(15px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                    <div style={{ 
                        background: isLight ? 'rgba(255, 255, 255, 0.7)' : 'rgba(15, 23, 42, 0.7)',
                        backdropFilter: 'blur(25px)',
                        padding: '4rem', 
                        borderRadius: '48px', 
                        display: 'flex', 
                        flexDirection: 'column',
                        alignItems: 'center', 
                        textAlign: 'center',
                        gap: '2rem',
                        maxWidth: '550px',
                        width: '100%',
                        border: `1px solid ${isLight ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.1)'}`,
                        boxShadow: `0 50px 100px rgba(0,0,0,0.3), inset 0 0 0 1px ${isLight ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.1)'}`,
                        animation: 'modalOpen 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                        position: 'relative'
                    }}>
                        <div style={{ 
                            width: '120px', 
                            height: '120px', 
                            background: status.type === 'error' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(16, 185, 129, 0.1)', 
                            borderRadius: '40px', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center' 
                        }}>
                            {status.type === 'error' ? <XCircle color="#ef4444" size={72} strokeWidth={1} /> : <CheckCircle2 color="#10b981" size={72} strokeWidth={1} />}
                        </div>
                        
                        <div>
                            <h3 style={{ color: textMain, fontSize: '2.5rem', fontWeight: '950', marginBottom: '1rem', letterSpacing: '-1.5px' }}>
                                {status.type === 'error' ? 'Protocal Error' : 'Success Ingested'}
                            </h3>
                            <p style={{ color: textMuted, fontSize: '1.2rem', fontWeight: '600', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>{status.message}</p>
                        </div>

                        <button 
                            onClick={() => setStatus({ type: 'idle', message: '' })}
                            style={{ 
                                background: status.type === 'error' ? '#ef4444' : '#6366f1', 
                                color: 'white', 
                                border: 'none', 
                                padding: '1.5rem', 
                                width: '100%',
                                borderRadius: '24px', 
                                fontWeight: '950', 
                                fontSize: '1.3rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s',
                                boxShadow: `0 20px 40px ${status.type === 'error' ? 'rgba(239, 68, 68, 0.3)' : 'rgba(99, 102, 241, 0.3)'}`
                            }}
                            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'none'}
                        >
                            Back to Control Panel
                        </button>
                    </div>
                </div>
            )}

            {/* Custom Animations */}
            <style>{`
                @keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes fadeInRight { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
                @keyframes spin-animation { 100% { transform: rotate(360deg); } }
                @keyframes modalOpen { from { opacity: 0; transform: scale(0.9) translateY(40px); } to { opacity: 1; transform: scale(1) translateY(0); } }
                .spin-animation { animation: spin-animation 2s linear infinite; }
                .icon-pulse { animation: pulse 3s infinite; }
                @keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
                .glass-panel { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); }
            `}</style>
        </div>
    );
};

// Help icons for steps
const FileSearch = ({size}) => <Search size={size} />;

export default AdminUpload;
