import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function EditorialPage() {
    const filePath = path.join(process.cwd(), 'data', 'articles.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const articles = JSON.parse(fileData);

    return (
        <div className="app-container">
            <div className="bg-decoration">
                <div className="circle c1"></div>
                <div className="circle c2"></div>
                <div className="circle c3"></div>
            </div>
            <Navbar />
            <main style={{ paddingTop: 'var(--header-padding)', paddingLeft: '5%', paddingRight: '5%' }}>
                <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '40px', fontFamily: 'var(--font-header)' }}>Editorial<span className="dot">.</span></h1>
                <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', color: 'var(--text-secondary)', marginBottom: '60px', maxWidth: '700px' }}>
                    Insights, thoughts, and industry trends from the Consilo team.
                </p>

                <div className="editorial-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))',
                    gap: 'clamp(20px, 4vw, 40px)',
                    marginBottom: '100px'
                }}>
                    {articles.map((article: any, index: number) => (
                        <Link
                            key={article.id}
                            href={`/editorial/${article.id}`}
                            style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                        >
                            <div
                                className="expertise-card article-card"
                                style={{
                                    opacity: 1,
                                    transform: 'none',
                                    cursor: 'pointer',
                                    height: '100%',
                                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                                }}
                                data-step={String(index + 1).padStart(2, '0')}
                            >
                                <div style={{ marginBottom: '20px' }}>
                                    <span style={{ color: 'var(--accent)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{article.date}</span>
                                    <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginTop: '10px', fontFamily: 'var(--font-body)', lineHeight: '1.3' }}>{article.title}</h3>
                                </div>
                                <p className="card-text" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)' }}>{article.excerpt}</p>
                                <div style={{ marginTop: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ textDecoration: 'underline' }}>Read Article</span>
                                    <span style={{ color: 'var(--accent)' }}>→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
            <Footer />

        </div>
    );
}
