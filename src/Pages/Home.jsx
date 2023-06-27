import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Skills from "./Skills";

const Home = () => {
    return (
        <div style= {{ backgroundColor: '#001C30' }}>
            <NavBar></NavBar>
            <Banner></Banner>
            <Skills></Skills>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;