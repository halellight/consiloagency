"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

export default function CaseStudyPage() {
    const { id } = useParams();
    const [project, setProject] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/projects')
            .then(res => res.json())
            .then(data => {
                if (data[id as string]) {
                    setProject(data[id as string]);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return null;
    if (!project) return (
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h1 style={{ fontFamily: 'var(--font-header)' }}>Project Not Found<span className="dot">.</span></h1>
        </div>
    );

    return (
        <div className="app-container">
            <div className="bg-decoration">
                <div className="circle c1"></div>
                <div className="circle c2"></div>
                <div className="circle c3"></div>
            </div>
            <Navbar />

            <main style={{ paddingTop: '150px', paddingBottom: '100px' }}>
                <div style={{ padding: '0 5%', maxWidth: 'var(--container-max-width)', margin: '0 auto' }}>
                    {/* Header Section */}
                    <div style={{ marginBottom: '80px' }}>
                        <Link href="/#work" style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: 'var(--text-secondary)',
                            textDecoration: 'none',
                            marginBottom: '40px'
                        }}>
                            <ArrowLeft size={18} /> Back to Work
                        </Link>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'flex-start' }}>
                            <div>
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="subtitle"
                                >
                                    {project.category}
                                </motion.span>
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: '1.1', fontFamily: 'var(--font-header)', margin: '20px 0' }}
                                >
                                    {project.title}<span className="dot">.</span>
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}
                                >
                                    {project.fullDescription}
                                </motion.p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                style={{
                                    background: 'var(--glass-bg)',
                                    padding: '40px',
                                    borderRadius: '30px',
                                    border: '1px solid var(--glass-border)',
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '30px'
                                }}
                            >
                                <div>
                                    <h4 style={{ color: 'var(--accent)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '10px' }}>Client</h4>
                                    <p>{project.client}</p>
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--accent)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '10px' }}>Year</h4>
                                    <p>{project.year}</p>
                                </div>
                                <div style={{ gridColumn: 'span 2' }}>
                                    <h4 style={{ color: 'var(--accent)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '10px' }}>Services</h4>
                                    <p>{project.services}</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Hero Image / Video Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        style={{
                            width: '100%',
                            aspectRatio: '16/7',
                            background: 'rgba(255,255,255,0.05)',
                            borderRadius: '40px',
                            marginBottom: '100px',
                            overflow: 'hidden',
                            position: 'relative'
                        }}
                    >
                        <div className={`project-image ${project.imgClass}`} style={{ width: '100%', height: '100%' }}></div>
                    </motion.div>

                    {/* Storytelling Content */}
                    <div style={{ display: 'grid', gap: '150px' }}>
                        {/* Challenge & Solution */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '100px' }}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 style={{ fontSize: '2rem', marginBottom: '30px', fontFamily: 'var(--font-header)' }}>The Challenge<span className="dot">.</span></h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8' }}>{project.challenge}</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <h3 style={{ fontSize: '2rem', marginBottom: '30px', fontFamily: 'var(--font-header)' }}>The Solution<span className="dot">.</span></h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8' }}>{project.solution}</p>
                            </motion.div>
                        </div>

                        {/* Impact / Results */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            style={{
                                background: 'var(--accent)',
                                color: '#000',
                                padding: '100px 10%',
                                borderRadius: '40px',
                                textAlign: 'center'
                            }}
                        >
                            <h3 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '30px', fontFamily: 'var(--font-header)', fontWeight: '700' }}>Impact & Results<span style={{ color: 'white' }}>.</span></h3>
                            <p style={{ fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', fontWeight: '500', lineHeight: '1.6' }}>{project.impact}</p>
                        </motion.div>
                    </div>

                    {/* Next Project Navigation */}
                    <div style={{ marginTop: '150px', paddingTop: '80px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'center' }}>
                        <Link href="/work/finwise" style={{ // Temporary link, should be dynamic
                            textAlign: 'center',
                            textDecoration: 'none',
                            color: 'white',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '20px'
                        }}>
                            <span className="subtitle">Up Next</span>
                            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontFamily: 'var(--font-header)' }}>Finwise <ArrowRight size={40} className="dot" /></h2>
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
