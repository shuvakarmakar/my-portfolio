import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactForm from "./ContactForm";

const Home = () => {
    return (
        <div style={{ backgroundColor: '#001C30'}}>
            <NavBar />
            <Banner />
            <Skills />
            <Projects></Projects>
            <ContactForm></ContactForm>
            <Outlet />
        </div>
    );
};

export default Home;
