import { Link } from "react-router-dom";
//image imports
import logo from "../assets/icons/Logo_white.svg"
import globe from "../assets/icons/globe.svg"
import menu from "../assets/icons/menu.svg"
import avatar from "../assets/icons/Avatar.svg"

const NavBar = () => {
    return ( 
        <div className="flex justify-between text-white font-poppins items-center">
            <img src={logo} alt="logo" />
            <div className="flex space-x-8">
                <p className="hover:border-b-2 px-0 hover:px-2 duration-300 ease-in-out"><Link to='/'>Places to stay</Link></p>
                <p className="hover:border-b-2 px-0 hover:px-2 duration-300 ease-in-out"><Link to='/'>Experiences</Link></p>
                <p className="hover:border-b-2 px-0 hover:px-2 duration-300 ease-in-out"><Link to='/'>Online Experiences</Link></p>
            </div>
            <div className="flex space-x-4 items-center">
                <p className="hover:text-grey-300"><Link to={'/'}>Become a Host</Link></p>
                <button className="cursor-pointer"><img src={globe} /></button>
                <span className="flex space-x-1 bg-grey-200 px-2 rounded-2xl justify-between hover:bg-grey-300">
                    <button className="cursor-pointer"><img src={menu} alt="" /></button>
                    <button className="cursor-pointer"><img src={avatar} alt="" /></button>
                </span>
            </div>
        </div>
     );
}
 
export default NavBar;