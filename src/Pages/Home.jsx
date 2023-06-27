import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Banner from "./Banner";

const Home = () => {
    return (
        <div style= {{ backgroundColor: '#001C30' }}>
            <NavBar></NavBar>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;