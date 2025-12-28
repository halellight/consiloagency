"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectData: any = {
    bumbly: {
        id: "bumbly",
        title: "Bumbly",
        category: "Mobile App design",
        client: "Bumbly Inc.",
        year: "2024",
        services: "Brand Identity, UI/UX Design",
        description: "Bumbly is a social networking platform designed to reconnect people through meaningful, location-based interactions. We created a vibrant visual language and a seamless mobile experience.",
        imgClass: "bumbly-img"
    },
    finwise: {
        id: "finwise",
        title: "Finwise",
        category: "Website design",
        client: "Finwise Global",
        year: "2023",
        services: "Web Design, Fintech Strategy",
        description: "Finwise is a next-generation financial management dashboard. Our goal was to simplify complex data visualization into an intuitive and empowering user interface.",
        imgClass: "finwise-img"
    }
};

export default function Work() {
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const openModal = (id: string) => setSelectedProject(projectData[id]);
    const closeModal = () => setSelectedProject(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section id="work" className="work-section">
            <div className="work-header">
                <div className="marquee">
                    <span>Featured Work</span>
                    <img src="/img/Group.png" alt="icon" className="scroll-icon" />
                    <span>Featured Work</span>
                    <img src="/img/Group.png" alt="icon" className="scroll-icon" />
                    {/* Duplicated for smooth loop */}
                    <span>Featured Work</span>
                    <img src="/img/Group.png" alt="icon" className="scroll-icon" />
                </div>
            </div>

            <motion.div
                className="projects-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
                    gap: '40px',
                    marginBottom: '50px'
                }}
            >
                {Object.values(projectData).map((project: any) => (
                    <motion.div
                        key={project.id}
                        className="project-card"
                        onClick={() => openModal(project.id)}
                        variants={cardVariants}
                    >
                        <div className={`project-image ${project.imgClass}`}></div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <span>{project.category}</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <div className="view-more-container" style={{ textAlign: "center", marginTop: "40px" }}>
                <a href="#" className="view-more">see more projects</a>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="modal active"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={(e) => e.target === e.currentTarget && closeModal()}
                        style={{
                            padding: '10px'
                        }}
                    >
                        <motion.div
                            className="modal-content"
                            initial={{ y: 100, scale: 0.9, opacity: 0 }}
                            animate={{ y: 0, scale: 1, opacity: 1 }}
                            exit={{ y: 100, scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            style={{
                                padding: 'clamp(20px, 5vw, 50px)',
                                width: '100%',
                                maxWidth: '900px'
                            }}
                        >
                            <button className="close-modal" onClick={closeModal} style={{ top: '20px', right: '20px' }}>×</button>
                            <div className="modal-header">
                                <span className="subtitle">{selectedProject.category}</span>
                                <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}>{selectedProject.title}</h2>
                            </div>
                            <div className="modal-grid" style={{
                                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                gap: '30px'
                            }}>
                                <div className="modal-section">
                                    <h3>About the Project</h3>
                                    <p>{selectedProject.description}</p>
                                </div>
                                <div className="modal-section">
                                    <div style={{ marginBottom: "20px" }}>
                                        <h3>Client</h3>
                                        <p>{selectedProject.client}</p>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                        <div>
                                            <h3>Services</h3>
                                            <p>{selectedProject.services}</p>
                                        </div>
                                        <div>
                                            <h3>Year</h3>
                                            <p>{selectedProject.year}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
