"use client";

import { motion } from "framer-motion";

const faqData = [
    {
        question: "Do you possess the knowledge to help me with my project?",
        answer: "Our team consists of specialists across design, strategy, and technology, ensuring we have the depth of knowledge required for any complex digital product."
    },
    {
        question: "Do you also provide a creative concept for videos and images?",
        answer: "Yes, our creative direction services cover everything from full brand identity to specific visual content concepts and art direction."
    },
    {
        question: "Do you provide only design for my project, or development as well?",
        answer: "We offer end-to-end services. While we are design-led, we work closely with top-tier developers to ensure our designs are implemented flawlessly."
    },
    {
        question: "How can I get a proposal?",
        answer: "Simply reach out via our contact page. We'll set up an initial discovery call to understand your needs and then provide a tailored project proposal."
    }
];

export default function FAQ() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="faq" className="faq-section">
            <motion.h2
                className="faq-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Common Questions
            </motion.h2>
            <motion.div
                className="faq-accordion"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {faqData.map((item, index) => (
                    <motion.div key={index} className="faq-item" variants={itemVariants}>
                        <details>
                            <summary>
                                {item.question}
                                <span style={{ color: "var(--accent)", fontSize: "1.5rem" }}>+</span>
                            </summary>
                            <div className="faq-answer">{item.answer}</div>
                        </details>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
