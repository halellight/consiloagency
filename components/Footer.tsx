"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <>
            <section id="contact" className="cta-section">
                <h2 className="cta-text">Let’s work</h2>
                <Link href="/contact" className="btn-primary">Contact us</Link>
            </section>

            <footer className="footer">
                <div className="footer-top">
                    <div className="footer-logo" style={{ fontSize: '2rem', fontWeight: 700 }}>
                        <span style={{ color: 'white' }}>consilo</span><span style={{ color: '#fff507' }}>.</span>
                    </div>
                    <div className="footer-nav">
                        <div className="footer-col" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <h4>Company</h4>
                            <Link href="/about" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>About</Link>
                            <Link href="/editorial" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Editorial</Link>
                            <Link href="/merchandise" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Merchandise</Link>
                        </div>
                        <div className="footer-col" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <h4>Resources</h4>
                            <Link href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Terms of Service</Link>
                            <Link href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Privacy Policy</Link>
                        </div>
                        <div className="footer-col">
                            <h4>Connect</h4>
                            <div className="social-links" style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
                                <Link href="#" aria-label="X" style={{ color: 'white' }}>X</Link>
                                <Link href="#" aria-label="Instagram" style={{ color: 'white' }}>Instagram</Link>
                                <Link href="#" aria-label="LinkedIn" style={{ color: 'white' }}>LinkedIn</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '30px', marginTop: '50px', textAlign: 'center' }}>
                    <p style={{ color: 'var(--text-secondary)' }}>&copy; {new Date().getFullYear()} Consilo. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}
