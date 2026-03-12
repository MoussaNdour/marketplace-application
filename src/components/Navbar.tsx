import {NavLink, Link} from "react-router-dom";
import { Menu } from "lucide-react";
import {isAuth, logout} from "../services/auth";
import { Box } from "@mui/material";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutIcon from '@mui/icons-material/Logout';


const Navbar = () => {


    return (
        <Box bgcolor={"grey.300"} className="flex justify-between p-5">
            <Link to=""><h1 className="text-4xl text-cyan font-bold text-cyan-400 order-1">ServiceLink</h1></Link>
            <Menu className="lg:hidden order-3" />
            <nav className="lg:block hidden order-1">
                <ul className="flex gap-2">
                    <li><NavLink to="/services" ><span className="text-sky-500 text-xl hover:opacity-65">Services</span></NavLink></li>
                    <li><NavLink to="/providers" ><span className="text-sky-500 text-xl hover:opacity-65">Providers</span></NavLink></li>
                    <li><NavLink to="/servicesproposals" ><span className="text-sky-500 text-xl hover:opacity-65">Service-Proposals</span></NavLink></li>
                    <li><NavLink to="about" ><span className="text-sky-500 text-xl hover:opacity-65">About</span></NavLink></li>
                </ul>

            </nav>

            {isAuth() ?  <Link to={"/login"} onClick={()=>{logout()}}><LogoutIcon/></Link>: <Link to="/login"><LoginOutlinedIcon/></Link>}

        </Box>
    )
}

export default Navbar;