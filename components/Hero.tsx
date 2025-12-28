"use client";

import MagneticButton from "./MagneticButton";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1 className="hero-title">
                    <span className="we">We are a bunch of</span>
                    <span className="s1">creatives looking to</span>
                    <span className="s2">change</span>
                    <span className="s3">the world</span>
                </h1>
                <p className="hero-details">
                    Consilo is a digital agency specialized in creating and scaling
                    digital products for startups and the world’s leading companies.
                </p>

                <div style={{ marginTop: '50px' }}>
                    <motion.div
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <Link href="#work" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '15px', textDecoration: 'none' }}>
                            See our work <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
