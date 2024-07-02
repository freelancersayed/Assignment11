import { Outlet } from "react-router-dom";
import Navbar from "./Sheard/Navbar";
import Footer from "./Sheard/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-full h-[66px]"></div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;