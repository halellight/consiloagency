"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 20, stiffness: 250, mass: 0.5 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        // Hover effect ditched as per user request
        /*
        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable = target.closest('a, button, .project-card, .merch-image, input, textarea');
            setIsHovered(!!isClickable);
        };
        */

        window.addEventListener("mousemove", moveMouse);
        // window.addEventListener("mouseover", handleHover);

        return () => {
            window.removeEventListener("mousemove", moveMouse);
            // window.removeEventListener("mouseover", handleHover);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            <motion.div
                className="cursor-dot"
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: 20, // Constant size
                    height: 20,
                    backgroundColor: "var(--accent)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                    zIndex: 9999,
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
            <style jsx global>{`
                @media (pointer: fine) {
                    * {
                        cursor: none !important;
                    }
                }
                @media (max-width: 768px) {
                    .cursor-dot { display: none !important; }
                    * { cursor: auto !important; }
                }
            `}</style>
        </>
    );
}
