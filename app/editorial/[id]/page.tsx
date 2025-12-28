"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ArticlePage() {
    const params = useParams();
    const id = params?.id as string;
    const [article, setArticle] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch('/api/articles');
                const articles = await response.json();
                const found = articles.find((a: any) => String(a.id) === id);
                setArticle(found);
            } catch (error) {
                console.error("Error fetching article:", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchArticle();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="app-container">
                <Navbar />
                <main style={{ paddingTop: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
                    <div className="subtitle">Loading insight...</div>
                </main>
                <Footer />
            </div>
        );
    }

    if (!article) {
        return notFound();
    }

    return (
        <div className="app-container">
            <div className="bg-decoration">
                <div className="circle c1"></div>
                <div className="circle c2"></div>
                <div className="circle c3"></div>
            </div>
            <Navbar />
            <main style={{ paddingTop: '150px', paddingLeft: '5%', paddingRight: '5%', minHeight: '80vh' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <Link href="/editorial" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        color: 'var(--accent)',
                        textDecoration: 'none',
                        marginBottom: '40px',
                        fontSize: '1.1rem'
                    }}>
                        <span>←</span>
                        <span>Back to Editorial</span>
                    </Link>

                    <span style={{ color: 'var(--accent)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px' }}>{article.date}</span>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        marginTop: '20px',
                        marginBottom: '40px',
                        fontFamily: 'var(--font-header)',
                        lineHeight: '1.1'
                    }}>
                        {article.title}
                    </h1>

                    <div style={{
                        fontSize: '1.25rem',
                        lineHeight: '1.8',
                        color: 'var(--text-secondary)',
                        whiteSpace: 'pre-wrap'
                    }}>
                        {article.content}
                    </div>

                    <div style={{
                        marginTop: '80px',
                        paddingTop: '40px',
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                        marginBottom: '100px'
                    }}>
                        <h4 style={{ marginBottom: '20px' }}>Share this insight</h4>
                        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                            <a
                                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://consilo.agency/editorial/${id}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'var(--accent)', textDecoration: 'none' }}
                            >
                                Twitter
                            </a>
                            <a
                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://consilo.agency/editorial/${id}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'var(--accent)', textDecoration: 'none' }}
                            >
                                LinkedIn
                            </a>
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(`https://consilo.agency/editorial/${id}`);
                                    alert('Link copied to clipboard!');
                                }}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: 'var(--accent)',
                                    cursor: 'pointer',
                                    padding: 0,
                                    fontSize: '1rem',
                                    fontFamily: 'inherit'
                                }}
                            >
                                Copy Link
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
