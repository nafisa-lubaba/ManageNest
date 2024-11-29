import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='pt-24 min-h-[calc(100vh-68px)]'>
                <Outlet></Outlet>


            </div>
            <div>
                <Footer></Footer>
            </div>
            
           
            
        </div>
    );
};

export default Root;