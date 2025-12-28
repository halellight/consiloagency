import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
    return (
        <div className="app-container">
            <div className="bg-decoration">
                <div className="circle c1"></div>
                <div className="circle c2"></div>
                <div className="circle c3"></div>
            </div>
            <Navbar />
            <main style={{ paddingTop: '150px', paddingLeft: '5%', paddingRight: '5%' }}>
                <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '40px' }}>Contact Us</h1>
                <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '40px' }}>
                    Have a project in mind? Let's build something world-class together.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                    <div>
                        <h3 style={{ color: 'var(--accent)', marginBottom: '10px' }}>Email</h3>
                        <p>hello@consilo.com</p>
                    </div>
                    <div>
                        <h3 style={{ color: 'var(--accent)', marginBottom: '10px' }}>Phone</h3>
                        <p>+234-814-331-71 61</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
