import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import AboutMe from "./AboutMe";
import Certification from "./Certification";

const Home = () => {
    return (
        <div style={{ backgroundColor: '#001C30'}}>
            <NavBar />
            <Banner />
            <AboutMe></AboutMe>
            <Skills />
            <Projects></Projects>
            <Certification></Certification>
            <ContactForm></ContactForm>
            <Footer></Footer>
            <Outlet />
        </div>
    );
};

export default Home;
