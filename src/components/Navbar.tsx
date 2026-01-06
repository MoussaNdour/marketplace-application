import {NavLink, Link} from "react-router-dom";
import { Menu } from "lucide-react";
import {isAuth} from "../services/auth";

const Navbar = () => {


    return (
        <div className="flex justify-between p-5  bg-slate-200">
            <Link to=""><h1 className="text-3xl text-cyan font-bold text-cyan-400 order-1">ServiceLink</h1></Link>
            <Menu className="lg:hidden order-3" />
            <nav className="lg:block hidden order-1">
                <ul className="flex gap-2">
                    <li><NavLink to="/services" ><span className="hover:text-sky-500">Services</span></NavLink></li>
                    <li><NavLink to="/providers" ><span className="hover:text-sky-500">Providers</span></NavLink></li>
                    <li><NavLink to="/howitwork" ><span className="hover:text-sky-500">How it work</span></NavLink></li>
                    <li><NavLink to="about" ><span className="hover:text-sky-500">About</span></NavLink></li>
                </ul>

            </nav>

            {!isAuth() && <Link to="/login"><button className="text-white bg-sky-500 hover:opacity-50 px-[15px] py-[5px] rounded cursor-pointer">Login</button></Link>}

        </div>
    )
}

export default Navbar;