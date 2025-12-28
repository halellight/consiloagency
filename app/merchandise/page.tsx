import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MerchandisePage() {
    return (
        <div className="app-container">
            <div className="bg-decoration">
                <div className="circle c1"></div>
                <div className="circle c2"></div>
                <div className="circle c3"></div>
            </div>
            <Navbar />
            <main style={{ paddingTop: '150px', paddingLeft: '5%', paddingRight: '5%' }}>
                <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '40px' }}>Merchandise</h1>
                <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '60px' }}>
                    Exclusive Consilo gear. Limited drops. Premium quality.
                </p>
                <div className="merch-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                    {['Classic Tee', 'Design Cap', 'Signature Hoodie'].map(item => (
                        <div key={item} className="expertise-card" style={{ opacity: 1, transform: 'none' }}>
                            <div style={{ width: '100%', aspectRatio: '1', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', marginBottom: '20px' }}></div>
                            <h3>{item}</h3>
                            <p className="card-text">$45.00</p>
                            <button className="btn-primary" style={{ marginTop: '20px', padding: '15px 30px', fontSize: '1rem' }}>Add to Bag</button>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
