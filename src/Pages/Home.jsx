import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import AboutMe from "./AboutMe";
import Certification from "./Certification";
import Loader from "./Loader";
import Publications from "./Publications";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a 3-second loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

    return (
        <div style={{ backgroundColor: '#001C30' }}>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <NavBar />
                    <Banner />
                    <AboutMe />
                    <Skills />
                    <Projects />
                    <Publications />
                    <Certification />
                    <ContactForm />
                    <Footer />
                    <Outlet />
                </>
            )}
        </div>
    );
};

export default Home;
