"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1]
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Work", href: "/#work" },
        { name: "Editorial", href: "/editorial" },
        { name: "Merchandise", href: "/merchandise" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="navbar">
            <div className="logo">
                <Link href="/">
                    <span className="consilo">consilo</span><span className="dot">.</span>
                </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="desktop-nav">
                <ul className="nav-items">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <Link href={link.href}>{link.name}</Link>
                            </motion.div>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Toggle */}
            <button
                className={`mobile-toggle ${isOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                <span className="line"></span>
                <span className="line"></span>
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        <nav>
                            <ul className="mobile-nav-items">
                                {navLinks.map((link, i) => (
                                    <motion.li
                                        key={link.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * i + 0.2 }}
                                    >
                                        <Link href={link.href} onClick={() => setIsOpen(false)}>
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>
                        <div className="mobile-menu-footer">
                            <p>Let's build something great.</p>
                            <Link href="mailto:hello@consilo.com">hello@consilo.com</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </header>
    );
}
