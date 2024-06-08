import  { useState, useEffect } from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
// import Blogs from '../components/Blogs';
// import Stats from '../components/Stats';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import whatsappLogo from '/assets/icons/WhatsApp_icon.png';
import backToTopIcon from '/assets/icons/back-to-top.png';


const LandingPage = () => {
    const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
    const [showWhatsApp] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const scrollThreshold = 0.25 * windowHeight;

            if (scrollPosition > scrollThreshold) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // effect runs only once

    return (
        <div>
            <Header />
            <Home />
            <About />
            <Projects />
            {/* <Blogs /> */}
            {/* <Stats /> */}
            <Contact />
            <Footer />
            {/* Back to top Icon */}
            <div className={`fixed bottom-0 right-0 mr-3 mb-3 p-0 ${showWhatsApp ? 'opacity-100' : 'opacity-0 transition-opacity duration-500'}`} style={{
                zIndex: "6",
                left: "initial",
            }}>
                <a href="https://wa.me/7756966720" target='_blank'>
                    <img src={whatsappLogo} width="60" alt="whatsapp logo" />
                </a>
            </div>
            {/* End of back to top */}
            {/* Floating Whatsapp Icon on bottom right */}
            <div className={`fixed top-0 right-0 mr-3 mb-3 py-2 ${showBackToTop ? 'opacity-95' : 'opacity-0 transition-opacity duration-700'}`} style={{
                zIndex: "6",
                left: "initial",
            }}>
                <a href="#">
                    <img src={backToTopIcon} width="60" alt="a back to top logo" />
                </a>
            </div>
            {/* End of floating whatsapp icon on bottom */}
        </div>
    );
};

export default LandingPage;
