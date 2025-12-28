import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
    metadataBase: new URL('https://consilo.agency'),
    title: "Consilo | Digital Creative Agency",
    description: "Creatives looking to change the world. Digital products for startups and leading companies.",
    icons: {
        icon: '/img/logo.png',
        apple: '/img/logo.png',
    },
    openGraph: {
        title: 'Consilo | Digital Creative Agency',
        description: 'Creatives looking to change the world. Digital products for startups and leading companies.',
        url: 'https://consilo.agency',
        siteName: 'Consilo',
        images: [
            {
                url: '/img/logo.png',
                width: 800,
                height: 600,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Consilo | Digital Creative Agency',
        description: 'Creatives looking to change the world. Digital products for startups and leading companies.',
        images: ['/img/logo.png'],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=Pacifico&family=Outfit:wght@300;400;600&display=swap" rel="stylesheet" />
                <style dangerouslySetInnerHTML={{
                    __html: `
          :root {
            --bg-dark: #0a0a0a;
            --bg-darker: #050505;
            --text-primary: #ffffff;
            --text-secondary: #b4b4b4;
            --accent: #fff507;
            --accent-muted: rgba(255, 245, 7, 0.2);
            --border-color: rgba(255, 255, 255, 0.1);
            --glass-bg: rgba(255, 255, 255, 0.03);
            --glass-border: rgba(255, 255, 255, 0.08);
            --font-header: 'Orbitron', sans-serif;
            --font-body: 'Outfit', sans-serif;
            --font-accent: 'Pacifico', cursive;
            --section-padding: 100px 5%;
            --container-max-width: 1440px;
          }
          * { margin: 0; padding: 0; box-sizing: border-box; }
          html { scroll-behavior: smooth; }
          body { background-color: var(--bg-dark); color: var(--text-primary); font-family: var(--font-body); line-height: 1.6; overflow-x: hidden; }
          .app-container { max-width: 100vw; position: relative; }
          .bg-decoration { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; pointer-events: none; overflow: hidden; }
          .circle { position: absolute; border: 1px solid var(--border-color); border-radius: 50%; opacity: 0.7; }
          .c1 { width: 700px; height: 700px; top: -100px; left: -200px; }
          .c2 { width: 600px; height: 600px; top: 20%; right: -100px; }
          .c3 { width: 800px; height: 800px; bottom: -200px; left: 30%; }
          .navbar { display: flex; justify-content: space-between; align-items: center; padding: 20px 5%; position: fixed; top: 0; width: 100%; z-index: 1000; background: rgba(10, 10, 10, 0.8); backdrop-filter: blur(10px); border-bottom: 1px solid var(--glass-border); }
          .logo { font-size: 1.8rem; font-weight: 700; font-family: 'Poppins', sans-serif; }
          .logo a { color: white; text-decoration: none; }
          .dot { color: var(--accent); }
          .nav-items { display: flex; list-style: none; gap: 40px; }
          .nav-items a { color: var(--text-primary); text-decoration: none; font-size: 1rem; font-weight: 400; transition: color 0.3s ease; }
          .nav-items a:hover { color: var(--accent); }
          .hero { min-height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: var(--section-padding); padding-top: 150px; }
          .hero-title { font-family: var(--font-header); font-size: clamp(2.5rem, 6vw, 5.5rem); line-height: 1.1; margin-bottom: 30px; }
          .hero-title span { display: block; }
          .hero-title .s2 { font-family: var(--font-accent); color: var(--accent); font-size: clamp(3rem, 7vw, 6.5rem); margin: 10px 0; }
          .hero-details { max-width: 800px; margin: 0 auto; font-size: clamp(1rem, 2vw, 1.5rem); color: var(--text-secondary); }
          .approach-section { padding: var(--section-padding); }
          .section-header { margin-bottom: 60px; }
          .subtitle { color: var(--text-secondary); text-transform: uppercase; letter-spacing: 2px; font-size: 0.9rem; display: block; margin-bottom: 10px; }
          .section-title { font-size: clamp(2rem, 4vw, 4rem); font-family: var(--font-body); font-weight: 600; }
          .expertise-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
          .expertise-card { background: var(--glass-bg); border: 1px solid var(--glass-border); padding: 40px; border-radius: 20px; transition: all 0.4s ease; position: relative; overflow: hidden; }
          .expertise-card:hover { border-color: var(--accent); transform: translateY(-5px); }
          .expertise-card::before { content: attr(data-step); position: absolute; top: -20px; right: -10px; font-size: 8rem; font-weight: 900; color: rgba(255, 255, 255, 0.03); pointer-events: none; }
          .card-num { font-size: 2.5rem; font-weight: 700; display: block; margin-bottom: 20px; }
          .card-text { color: var(--text-secondary); font-size: 1.1rem; }
          .work-section { padding: var(--section-padding); }
          .work-header { border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color); padding: 40px 0; margin-bottom: 60px; overflow: hidden; }
          .marquee { display: flex; align-items: center; gap: 50px; font-family: var(--font-header); font-size: clamp(2rem, 5vw, 5rem); white-space: nowrap; animation: marquee 20s linear infinite; }
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .scroll-icon { width: 80px; height: 80px; }
          .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); gap: 40px; margin-bottom: 50px; }
          .project-card { cursor: pointer; transition: transform 0.4s ease; }
          .project-card:hover { transform: scale(0.98); }
          .project-image { aspect-ratio: 16/9; background: #222; border-radius: 20px; margin-bottom: 20px; overflow: hidden; position: relative; background-size: cover; background-position: center; }
          .project-image::after { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.4); opacity: 0; transition: opacity 0.3s ease; }
          .project-card:hover .project-image::after { opacity: 1; }
          .bumbly-img { background-image: url('/img/bumbly.png'); }
          .finwise-img { background-image: url('/img/finwise.png'); }
          .project-info h3 { font-size: 1.8rem; font-family: 'Poppins', sans-serif; }
          .project-info span { color: var(--text-secondary); }
          .view-more { display: inline-block; color: var(--text-secondary); text-decoration: underline; font-size: 1.2rem; }
          .faq-section { padding: var(--section-padding); max-width: 1000px; margin: 0 auto; }
          .faq-title { text-align: center; font-size: clamp(1.8rem, 3vw, 3rem); margin-bottom: 60px; }
          .faq-accordion { display: flex; flex-direction: column; gap: 20px; }
          .faq-item { border-bottom: 1px solid var(--border-color); padding-bottom: 20px; }
          .faq-item summary { list-style: none; display: flex; justify-content: space-between; align-items: center; font-size: 1.4rem; cursor: pointer; padding: 20px 0; }
          .faq-answer { padding: 10px 0; color: var(--text-secondary); font-size: 1.1rem; }
          .cta-section { padding: 150px 5%; text-align: center; background: #050505; }
          .cta-text { font-size: clamp(3rem, 8vw, 6rem); margin-bottom: 40px; }
          .btn-primary { display: inline-block; padding: 20px 50px; background: #ffffff; color: #0a0a0a; text-decoration: none; border-radius: 100px; font-weight: 600; font-size: 1.2rem; transition: all 0.3s ease; border: 1px solid #ffffff; }
          .btn-primary:hover { background: transparent; color: #ffffff; }
          .footer { padding: 70px 5% 50px; background: #000; }
          .footer-top { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 60px; margin-bottom: 80px; }
          .footer-nav { display: flex; gap: 80px; flex-wrap: wrap; }
          .footer-col h4 { margin-bottom: 30px; font-size: 1.2rem; }
          .footer-col a { display: block; color: var(--text-secondary); text-decoration: none; margin-bottom: 15px; transition: color 0.3s ease; }
          .footer-col a:hover { color: var(--text-primary); }
          .social-links { display: flex; gap: 20px; margin-top: 20px; }
          .social-links a { color: var(--text-primary); opacity: 0.6; }
          .social-links a:hover { opacity: 1; }
          .footer-bottom { border-top: 1px solid var(--border-color); padding-top: 30px; text-align: center; color: var(--text-secondary); }
          .modal { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.9); z-index: 2000; display: none; align-items: center; justify-content: center; padding: 20px; backdrop-filter: blur(15px); }
          .modal.active { display: flex; }
          .modal-content { background: var(--bg-dark); width: 100%; max-width: 900px; max-height: 90vh; border: 1px solid var(--glass-border); border-radius: 30px; padding: 50px; position: relative; overflow-y: auto; }
          .close-modal { position: absolute; top: 30px; right: 30px; background: none; border: none; color: #fff; font-size: 2.5rem; cursor: pointer; }
          .expertise-card, .project-card, .faq-item { opacity: 1; transform: none; }
          .article-card:hover { transform: translateY(-10px) !important; border-color: var(--accent) !important; background: rgba(255, 255, 255, 0.05); }
          .modal-header { margin-bottom: 40px; }
          .modal-header h2 { font-family: var(--font-header); font-size: 3rem; margin-top: 10px; }
          .modal-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; }
          .modal-section h3 { margin-bottom: 15px; color: var(--accent); text-transform: uppercase; font-size: 0.9rem; letter-spacing: 1px; }
          .modal-section p { color: var(--text-secondary); font-size: 1.1rem; }
          /* Navbar & Mobile Menu */
          .mobile-toggle { display: none; background: none; border: none; cursor: pointer; z-index: 2001; padding: 10px; }
          .mobile-toggle .line { display: block; width: 25px; height: 1.5px; background: white; margin: 6px 0; transition: 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
          .mobile-toggle.active .line:nth-child(1) { transform: translateY(4px) rotate(45deg); }
          .mobile-toggle.active .line:nth-child(2) { transform: translateY(-3.5px) rotate(-45deg); }
          .mobile-menu { position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: rgba(5, 5, 5, 0.98); backdrop-filter: blur(20px); z-index: 2000; display: flex; flex-direction: column; justify-content: center; padding: 0 10%; }
          .mobile-nav-items { list-style: none; padding: 0; }
          .mobile-nav-items li { margin-bottom: clamp(15px, 4vh, 30px); }
          .mobile-nav-items a { font-family: var(--font-header); font-size: clamp(2rem, 8vw, 4rem); color: white; text-decoration: none; font-weight: 700; transition: color 0.3s ease; }
          .mobile-nav-items a:hover { color: var(--accent); }
          .mobile-menu-footer { margin-top: 50px; border-top: 1px solid var(--border-color); padding-top: 30px; }
          .mobile-menu-footer p { color: var(--text-secondary); margin-bottom: 10px; font-size: 0.9rem; }
          .mobile-menu-footer a { color: var(--accent); text-decoration: none; font-size: 1.2rem; font-weight: 500; }
          
          @media (max-width: 992px) { 
            .nav-items { display: none; } 
            .mobile-toggle { display: block; }
            .footer-nav { gap: 40px; } 
          }
          @media (max-width: 768px) { .hero { padding-top: 120px; } .section-header { margin-bottom: 40px; } .footer-top { flex-direction: column; } .modal-grid { grid-template-columns: 1fr; } .modal-content { padding: 30px; } .modal-header h2 { font-size: 2rem; } }
        ` }} />
            </head>
            <body>
                <Preloader />
                <SmoothScroll>
                    {children}
                </SmoothScroll>
                <Analytics />
            </body>
        </html>
    );
}
