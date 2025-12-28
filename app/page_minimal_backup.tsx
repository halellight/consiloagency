import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import Work from "@/components/Work";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="app-container">
            {/* Decoration Elements */}
            <div className="bg-decoration">
                <div className="circle c1"></div>
                <div className="circle c2"></div>
                <div className="circle c3"></div>
            </div>

            <Navbar />

            <main>
                <Hero />
                <Approach />
                <Work />
                <FAQ />
            </main>

            <Footer />
        </div>
    );
}
