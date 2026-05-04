import React, { useState, useRef } from 'react';
import { useAppContext } from '../../context/useAppContext';
import { Briefcase, MapPin, Send, MessageCircle, Link, Globe, ArrowRight, UploadCloud, FileText, X } from 'lucide-react';

const Contact = () => {
    const { addInquiry } = useAppContext();
    const fileInputRef = useRef(null);
    const [form, setForm] = useState({ name: '', email: '', subject: 'AI Logistics Specialist', message: '' });
    const [file, setFile] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const handleFileSelect = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const removeFile = (e) => {
        if (e) e.stopPropagation();
        setFile(null);
    };

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = error => reject(error);
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (file) {
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
                    applicantEmail: form.email,
                    uploadDate: new Date().toISOString(),
                    type: 'career_application',
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
            } catch (err) {
                console.error('Resume CouchDB Upload Error:', err);
            }
        }

        const attachmentNote = file ? `\nATTACHED RESUME: ${file.name}` : '';
        const inquiryData = {
            ...form,
            subject: `[JOB APP] ${form.subject}`,
            message: `EXPERIENCE SUMMARY:\n${form.message}${attachmentNote}`
        };
        addInquiry(inquiryData);
        setSubmitted(true);
    };

    return (
        <div className="container section-padding animate-fade">
            <div style={{ marginBottom: '5rem' }}>
                <span className="badge badge-pastel-rose" style={{ marginBottom: '1rem' }}>CAREERS</span>
                <h1 style={{ fontSize: '4.5rem', letterSpacing: '-3px', marginBottom: '1.5rem', lineHeight: '1', fontWeight: '950' }}>Join the Ecosystem</h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.4rem', maxWidth: '800px', lineHeight: '1.6', fontWeight: '600' }}>
                    We're building the decentralized future of global trade. Explore our elite technical roles and help us scale the Bluvanta protocol.
                </p>
            </div>

            {/* Job Listings Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
                {[
                    { title: 'AI Logistics Specialist', type: 'Full-time', loc: 'Remote / Bengaluru', desc: 'Optimize global supply chain logic using decentralized neural networks.' },
                    { title: 'Frontend Architect', type: 'Contract', loc: 'Remote', desc: 'Craft high-fidelity, high-performance interfaces for global trade operators.' },
                    { title: 'Backend Engineer', type: 'Full-time', loc: 'Remote / Global', desc: 'Scalable microservices for real-time transaction reconciliation.' },
                    { title: 'UX Designer', type: 'Full-time', loc: 'London / Remote', desc: 'Design the future of complex procurement systems with elegant simplicity.' }
                ].map((job, idx) => (
                    <div key={`job-${idx}`} className="card" style={{ 
                        padding: '2.5rem', borderRadius: '30px', border: '1px solid var(--glass-border)', 
                        background: 'var(--card-bg)', transition: 'all 0.4s', cursor: 'pointer',
                        display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
                    }}
                    onMouseOver={e => e.currentTarget.style.transform = 'translateY(-10px)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'none'}
                    >
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                <span style={{ padding: '0.4rem 0.8rem', borderRadius: '10px', background: 'var(--pastel-blue-bg)', color: 'var(--primary-color)', fontSize: '0.75rem', fontWeight: '900' }}>{job.type}</span>
                                <div style={{ color: 'var(--text-muted)' }}><Globe size={16} /></div>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-0.5px' }}>{job.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem', fontWeight: '500' }}>{job.desc}</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--primary-color)', fontWeight: '800', fontSize: '0.9rem' }}>
                            <MapPin size={16} /> {job.loc}
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem', alignItems: 'start', padding: '5rem', background: 'var(--glass-bg)', borderRadius: '50px', border: '1px solid var(--glass-border)' }}>
                {/* Recruitment Info */}
                <div>
                    <h2 style={{ fontSize: '3rem', letterSpacing: '-2px', marginBottom: '1.5rem', lineHeight: '1.1', fontWeight: '950' }}>Submit Your Application</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3rem', fontWeight: '600' }}>
                        Ready to make an impact? Fill out the portal credentials below and our talent acquisition team will be in touch.
                    </p>

                    <div style={{ display: 'grid', gap: '2rem' }}>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <div style={{ width: '56px', height: '56px', background: 'var(--pastel-blue-bg)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)' }}>
                                <Briefcase size={24} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', fontWeight: '900' }}>Direct Listing</h4>
                                <p style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Verified by Bluvanta Admin Hub</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <div style={{ width: '56px', height: '56px', background: 'var(--pastel-sage-bg)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--pastel-sage-text)' }}>
                                <Globe size={24} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', fontWeight: '900' }}>Global Reach</h4>
                                <p style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Applications are visible worldwide</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Application Form */}
                <div className="card" style={{ padding: '3rem', borderRadius: '35px', border: 'none', background: 'var(--card-bg)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                    {submitted ? (
                        <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                            <div style={{ width: '80px', height: '80px', background: 'var(--pastel-sage-bg)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--pastel-sage-text)', margin: '0 auto 2rem auto' }}>
                                <MessageCircle size={40} />
                            </div>
                            <h2 style={{ fontSize: '2.4rem', fontWeight: '950', marginBottom: '1rem', letterSpacing: '-1.5px' }}>Inquiry Transmitted</h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1.1rem', fontWeight: '500' }}>Your credentials have been indexed. Our talent acquisition team will review your profile shortly.</p>
                            <button onClick={() => setSubmitted(false)} className="btn btn-secondary" style={{ padding: '1rem 2rem' }}>Apply for Another Role</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '800', fontSize: '0.9rem' }}>Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        style={{ width: '100%', padding: '1rem 1.5rem', background: 'var(--input-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'var(--text-main)' }}
                                        placeholder="John Carter"
                                        value={form.name}
                                        onChange={e => setForm({ ...form, name: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '800', fontSize: '0.9rem' }}>Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        style={{ width: '100%', padding: '1rem 1.5rem', background: 'var(--input-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'var(--text-main)' }}
                                        placeholder="carter@bluvanta.io"
                                        value={form.email}
                                        onChange={e => setForm({ ...form, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '800', fontSize: '0.9rem' }}>Desired Position</label>
                                <select
                                    required
                                    style={{ width: '100%', padding: '1rem 1.5rem', background: 'var(--input-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px', height: '58px', color: 'var(--text-main)' }}
                                    value={form.subject}
                                    onChange={e => setForm({ ...form, subject: e.target.value })}
                                >
                                    <option>AI Logistics Specialist</option>
                                    <option>Frontend Architect</option>
                                    <option>Backend Engineer</option>
                                    <option>UX Designer</option>
                                    <option>Product Manager</option>
                                </select>
                            </div>

                            {/* Resume Upload Zone */}
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '800', fontSize: '0.9rem' }}>Upload Resume (PDF/DOCX)</label>
                                <div 
                                    onClick={() => fileInputRef.current?.click()}
                                    style={{ 
                                        width: '100%', 
                                        padding: '2.5rem', 
                                        background: 'var(--input-bg)', 
                                        border: '2px dashed var(--glass-border)', 
                                        borderRadius: '20px',
                                        textAlign: 'center',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '1rem'
                                    }}
                                    onMouseOver={e => e.currentTarget.style.borderColor = 'var(--primary-color)'}
                                    onMouseOut={e => e.currentTarget.style.borderColor = 'var(--glass-border)'}
                                >
                                    <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileSelect} accept=".pdf,.doc,.docx" />
                                    {file ? (
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--primary-color)', background: 'rgba(99, 102, 241, 0.05)', padding: '0.75rem 1.5rem', borderRadius: '15px', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
                                            <FileText size={24} />
                                            <span style={{ fontWeight: '700' }}>{file.name}</span>
                                            <button onClick={removeFile} style={{ background: 'rgba(239, 68, 68, 0.1)', border: 'none', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444', cursor: 'pointer' }}>
                                                <X size={16} />
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            <div style={{ padding: '1rem', borderRadius: '50%', background: 'var(--glass-bg)', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                                                <UploadCloud size={32} />
                                            </div>
                                            <div>
                                                <p style={{ fontWeight: '800', fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Drop your resume or click to browse</p>
                                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem', fontWeight: '600' }}>Supports PDF, DOC, DOCX (Max 10MB)</p>
                                                <div className="btn btn-secondary" style={{ pointerEvents: 'none', padding: '0.75rem 1.5rem', borderRadius: '12px', fontSize: '0.9rem' }}>
                                                    Select Resume File
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '800', fontSize: '0.9rem' }}>Experience Summary</label>
                                <textarea
                                    required
                                    style={{ width: '100%', padding: '1rem 1.5rem', background: 'var(--input-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px', minHeight: '150px', resize: 'vertical', color: 'var(--text-main)' }}
                                    placeholder="Tell us about your technical achievements..."
                                    value={form.message}
                                    onChange={e => setForm({ ...form, message: e.target.value })}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center', padding: '1.5rem', marginTop: '1rem', fontSize: '1.1rem', borderRadius: '15px' }}>
                                Dispatch Application <ArrowRight size={20} />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
