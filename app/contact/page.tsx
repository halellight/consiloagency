"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MagneticButton from "@/components/MagneticButton";
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, ArrowRight, CheckCircle } from "lucide-react";

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setIsSubmitted(true);
    };

    const socialLinks = [
        { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
        { icon: <Linkedin size={20} />, label: "LinkedIn", href: "#" },
        { icon: <Instagram size={20} />, label: "Instagram", href: "#" }
    ];

    return (
        <div className="app-container">
            <div className="bg-decoration">
                <div className="circle c1"></div>
                <div className="circle c2"></div>
                <div className="circle c3"></div>
            </div>
            <Navbar />

            <main style={{ paddingTop: '150px', paddingLeft: '5%', paddingRight: '5%', minHeight: '100vh', paddingBottom: '100px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '80px' }}>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="subtitle"
                        >
                            Get in Touch
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: '1', fontFamily: 'var(--font-header)', marginBottom: '20px' }}
                        >
                            Let's Talk<span className="dot">.</span>
                        </motion.h1>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px' }}>
                        {/* Contact Form Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        onSubmit={handleSubmit}
                                        style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
                                    >
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="Name"
                                            />
                                        </div>
                                        <div className="input-group">
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="input-group">
                                            <textarea
                                                rows={5}
                                                required
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                placeholder="Message"
                                            />
                                        </div>

                                        <MagneticButton
                                            type="submit"
                                            className="btn-primary"
                                            style={{ width: 'fit-content', display: 'flex', alignItems: 'center', gap: '15px' }}
                                        >
                                            Send Message <ArrowRight size={18} />
                                        </MagneticButton>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        style={{
                                            padding: '60px',
                                            background: 'var(--glass-bg)',
                                            borderRadius: '30px',
                                            border: '1px solid var(--accent)',
                                            textAlign: 'center'
                                        }}
                                    >
                                        <CheckCircle size={60} color="var(--accent)" style={{ marginBottom: '30px' }} />
                                        <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Sent!</h2>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                                            We've received your message. Our team will get back to you within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            style={{ marginTop: '30px', background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer', textDecoration: 'underline' }}
                                        >
                                            Send another message
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Info & Social Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}
                        >
                            <div className="info-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
                                <div className="info-item">
                                    <h4 style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '20px' }}>Location</h4>
                                    <p style={{ fontSize: '1.2rem' }}>Belgrade, Serbia / Global</p>
                                </div>
                                <div className="info-item">
                                    <h4 style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '20px' }}>Email</h4>
                                    <p style={{ fontSize: '1.2rem' }}>hello@consilo.agency</p>
                                </div>
                            </div>

                            <div>
                                <h4 style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '40px' }}>Socials</h4>
                                <div className="social-hub" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                                    {socialLinks.map((social, i) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            whileHover={{ y: -5, borderColor: 'var(--accent)' }}
                                            style={{
                                                padding: '25px',
                                                background: 'var(--glass-bg)',
                                                border: '1px solid var(--glass-border)',
                                                borderRadius: '20px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                gap: '15px',
                                                color: 'white',
                                                textDecoration: 'none',
                                                transition: 'border-color 0.3s ease'
                                            }}
                                        >
                                            <div style={{ color: 'var(--accent)' }}>{social.icon}</div>
                                            <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>{social.label}</span>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            <div style={{ background: 'var(--glass-bg)', padding: '40px', borderRadius: '30px', border: '1px solid var(--glass-border)' }}>
                                <h4 style={{ marginBottom: '20px', fontStyle: 'italic', opacity: 0.8 }}>"Design is not just what it looks like and feels like. Design is how it works."</h4>
                                <p style={{ color: 'var(--accent)', fontWeight: '600' }}>— Consilo Philosophy</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            <style jsx>{`
                .input-group {
                    position: relative;
                    border-bottom: 1px solid var(--glass-border);
                    transition: border-color 0.3s ease;
                }
                .input-group:focus-within {
                    border-color: var(--accent);
                }
                input, textarea {
                    width: 100%;
                    background: none;
                    border: none;
                    padding: 20px 0;
                    color: white;
                    font-size: 1.2rem;
                    font-family: var(--font-body);
                    outline: none;
                }
                input::placeholder, textarea::placeholder {
                    color: rgba(255,255,255,0.3);
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-size: 0.8rem;
                    font-weight: 500;
                }
            `}</style>

            <Footer />
        </div>
    );
}
