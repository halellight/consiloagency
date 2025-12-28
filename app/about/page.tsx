"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    const stagger = {
        visible: { transition: { staggerChildren: 0.1 } }
    };

    return (
        <div className="app-container">
            <div className="bg-decoration">
                <div className="circle c1"></div>
                <div className="circle c2"></div>
                <div className="circle c3"></div>
            </div>
            <Navbar />

            <main style={{ paddingTop: '180px', paddingBottom: '150px' }}>
                {/* Hero Section */}
                <section style={{ padding: '0 5%', marginBottom: '150px' }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                    >
                        <motion.span variants={fadeUp} className="subtitle">Who We Are</motion.span>
                        <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', letterSpacing: '-2px', lineHeight: '0.9', marginBottom: '60px', fontFamily: 'var(--font-header)' }}>
                            We are <br /> <span style={{ color: 'var(--accent)' }}>Consilo.</span>
                        </motion.h1>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'start' }}>
                            <motion.p variants={fadeUp} style={{ fontSize: '1.5rem', lineHeight: '1.4', color: 'var(--text-primary)' }}>
                                A collective of thinkers, designers, and developers united by a single mission: to build digital products that leave a lasting impact.
                            </motion.p>
                            <motion.p variants={fadeUp} style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                                Founded on the principles of technical excellence and creative audacity, we partner with visionary startups and global enterprises to translate complex ideas into intuitive, beautiful, and high-performance digital realities.
                            </motion.p>
                        </div>
                    </motion.div>
                </section>

                {/* Values/Vision Section */}
                <section style={{ background: 'rgba(255, 245, 7, 0.03)', padding: '150px 5%', marginBottom: '150px', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={stagger}
                            style={{ textAlign: 'center' }}
                        >
                            <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '80px', fontFamily: 'var(--font-header)' }}>Our Philosophy</motion.h2>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
                                {[
                                    { title: "Radical Simplicity", desc: "We strip away the noise to find the core message. If it doesn't add value, it doesn't belong." },
                                    { title: "Technical Artistry", desc: "We treat code as a medium for artistic expression, ensuring every interaction feels like magic." },
                                    { title: "Future-First", desc: "We don't just solve for today; we architect systems that are ready for the challenges of tomorrow." }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={fadeUp}
                                        className="expertise-card"
                                        style={{ textAlign: 'left', background: 'var(--bg-dark)' }}
                                    >
                                        <h3 style={{ marginBottom: '20px', color: 'var(--accent)' }}>{item.title}</h3>
                                        <p style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* The Team / Collective Section (Simplified for impact) */}
                <section style={{ padding: '0 5%' }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={stagger}
                    >
                        <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '60px', fontFamily: 'var(--font-header)' }}>The Collective</motion.h2>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                            {['Design', 'Strategy', 'Development', 'Motion', 'Architecture', 'Innovation'].map((role, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeUp}
                                    style={{
                                        padding: '40px 20px',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: '15px',
                                        textAlign: 'center',
                                        fontSize: '1.2rem',
                                        fontWeight: '600',
                                        color: idx % 2 === 0 ? 'var(--text-primary)' : 'var(--accent)'
                                    }}
                                    whileHover={{ scale: 1.05, borderColor: 'var(--accent)', background: 'rgba(255, 255, 255, 0.05)' }}
                                >
                                    {role}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
