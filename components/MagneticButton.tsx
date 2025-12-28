"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    style?: React.CSSProperties;
    disabled?: boolean;
}

export default function MagneticButton({ children, className, onClick, type = "button", style, disabled }: MagneticButtonProps) {
    const mouseRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const target = mouseRef.current;
        if (!target) return;

        const { width, height, left, top } = target.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);

        // Strength of attraction (0.35 = 35% of the distance)
        setPosition({ x: x * 0.35, y: y * 0.35 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <div
            ref={mouseRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ display: "inline-block" }}
        >
            <motion.button
                type={type}
                className={className}
                onClick={onClick}
                disabled={disabled}
                animate={{ x: position.x, y: position.y }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                style={style}
            >
                {children}
            </motion.button>
        </div>
    );
}
