"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const products = [
    {
        id: 'tee',
        name: 'Classic Tee',
        price: '45.00',
        description: 'Deep charcoal luxury cotton. Minimalist embroidery.',
        image: '/img/consilo_classic_tee_1766884096576.png',
    },
    {
        id: 'cap',
        name: 'Design Cap',
        price: '35.00',
        description: 'Matte black premium twill. Signature yellow dot.',
        image: '/img/consilo_design_cap_mockup_1766884110040.png',
    },
    {
        id: 'hoodie',
        name: 'Signature Hoodie',
        price: '85.00',
        description: 'Heavyweight slate black. Statement branding.',
        image: '/img/consilo_signature_hoodie_mockup_1766884123819.png',
    }
];

export default function MerchandisePage() {
    const [cartCount, setCartCount] = useState(0);

    const addToCart = () => {
        setCartCount(prev => prev + 1);
    };

    return (
        <div className="app-container">
            <div className="bg-decoration">
                <div className="circle c1"></div>
                <div className="circle c2"></div>
                <div className="circle c3"></div>
            </div>
            <Navbar />

            <main style={{ paddingTop: '150px', paddingLeft: '5%', paddingRight: '5%', minHeight: '100vh', paddingBottom: '100px' }}>
                <div style={{ maxWidth: 'var(--container-max-width)', margin: '0 auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px', flexWrap: 'wrap', gap: '20px' }}>
                        <div>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="subtitle"
                            >
                                Limited Drops
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: '1', fontFamily: 'var(--font-header)' }}
                            >
                                The Shop<span className="dot">.</span>
                            </motion.h1>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            style={{
                                background: 'var(--glass-bg)',
                                padding: '15px 25px',
                                borderRadius: '50px',
                                border: '1px solid var(--glass-border)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px'
                            }}
                        >
                            <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Bag</span>
                            <span style={{
                                background: 'var(--accent)',
                                color: '#000',
                                width: '24px',
                                height: '24px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.8rem',
                                fontWeight: '700'
                            }}>
                                {cartCount}
                            </span>
                        </motion.div>
                    </div>

                    <div className="merch-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
                        {products.map((product, i) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                className="expertise-card"
                                style={{ opacity: 1, transform: 'none', padding: '0', background: 'transparent', border: 'none' }}
                            >
                                <div style={{
                                    width: '100%',
                                    aspectRatio: '0.8',
                                    background: 'var(--glass-bg)',
                                    borderRadius: '24px',
                                    marginBottom: '30px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    border: '1px solid var(--glass-border)'
                                }}>
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        style={{ objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
                                        className="merch-image"
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '0',
                                        left: '0',
                                        width: '100%',
                                        padding: '30px',
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease'
                                    }} className="merch-overlay">
                                        <p style={{ color: 'white', fontSize: '1rem' }}>{product.description}</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{product.name}</h3>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>${product.price}</p>
                                    </div>
                                    <button
                                        onClick={addToCart}
                                        className="btn-primary"
                                        style={{
                                            padding: '12px 24px',
                                            fontSize: '0.9rem',
                                            margin: '0'
                                        }}
                                    >
                                        Add to Bag
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            <style jsx>{`
                .expertise-card:hover .merch-image {
                    transform: scale(1.05);
                }
                .expertise-card:hover .merch-overlay {
                    opacity: 1;
                }
            `}</style>

            <Footer />
        </div>
    );
}
