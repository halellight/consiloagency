"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="preloader"
                    initial={{ opacity: 1 }}
                    exit={{
                        y: "-100%",
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "#0a0a0a",
                        zIndex: 9999,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden"
                    }}
                >
                    <div style={{ position: "relative", overflow: "hidden" }}>
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            style={{ fontSize: "4rem", fontWeight: 700, fontFamily: "var(--font-header)" }}
                        >
                            <span style={{ color: "white" }}>consilo</span>
                            <span style={{ color: "var(--accent)" }}>.</span>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        style={{
                            width: "200px",
                            height: "2px",
                            background: "var(--accent)",
                            marginTop: "20px",
                            transformOrigin: "left"
                        }}
                    />

                    {/* <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        transition={{ delay: 0.5 }}
                        style={{ marginTop: "20px", fontSize: "0.8rem", letterSpacing: "2px", textTransform: "uppercase", color: "white" }}
                    >
                        Digital Creative Agency
                    </motion.div> */}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
