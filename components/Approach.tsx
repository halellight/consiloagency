"use client";

import { motion } from "framer-motion";

const expertiseData = [
    {
        num: "01",
        text: "Our approach to design revolves around simplifying intricate solutions. We integrate deliberate user experience with a distinct visual identity.",
        step: "01"
    },
    {
        num: "02",
        text: "Our expertise lies in fostering sustainable user acquisition and enhancing your product's market appeal to boost sales and facilitate growth.",
        step: "02"
    },
    {
        num: "03",
        text: "Within our strategic methodology, we meticulously examine customer needs, pinpoint overarching product issues, and provide guidance on crucial future decisions.",
        step: "03"
    }
];

export default function Approach() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <section id="approach" className="approach-section">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <span className="subtitle">our approach</span>
                <h2 className="section-title">We streamline complex processes.</h2>
            </motion.div>

            <motion.div
                className="expertise-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {expertiseData.map((item, index) => (
                    <motion.div
                        key={index}
                        className="expertise-card"
                        data-step={item.step}
                        variants={itemVariants}
                    >
                        <span className="card-num">{item.num}</span>
                        <p className="card-text">{item.text}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
