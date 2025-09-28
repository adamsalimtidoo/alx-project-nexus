import { Link } from "react-router-dom";
import type { NavProps } from "../types/componentTypes";
//image imports
import logo_white from "../assets/icons/Logo_white.svg";
import logo_red from "../assets/icons/Logo_red.svg";
import globe from "../assets/icons/globe.svg";
import menu from "../assets/icons/menu.svg";
import avatar from "../assets/icons/Avatar.svg";
import search from "../assets/icons/search.svg";

const NavBar = ({ isListing, isSearch }: NavProps) => {
  return (
    <div
      className={`flex justify-between ${
        !(isSearch || isListing) ? "text-white" : "text-black"
      } font-poppins items-center`}
    >
      {!(isSearch || isListing) ? (
        <img src={logo_white} alt="logo" />
      ) : (
        <img src={logo_red} alt="logo" />
      )}
      {isSearch && (
        <div className="flex items-center pl-3 py-2 pr-1 rounded-full shadow-md bg-white">
          <p className="border-r-2 border-grey-200 px-4">Bordeaux</p>
          <p className="border-r-2 border-grey-200 px-4">Feb 19-24</p>
          <p className="px-4">2 guests</p>
          <span className="bg-primary-100 p-2 rounded-full">
            <img src={search} className="w-4" alt="" />
          </span>
        </div>
      )}
      {isListing && <div></div>}
      {!(isSearch || isListing) && (
        <div className="flex space-x-8">
          <p className="hover:border-b-2 px-0 hover:px-2 duration-300 ease-in-out">
            <Link to="/">Places to stay</Link>
          </p>
          <p className="hover:border-b-2 px-0 hover:px-2 duration-300 ease-in-out">
            <Link to="/">Experiences</Link>
          </p>
          <p className="hover:border-b-2 px-0 hover:px-2 duration-300 ease-in-out">
            <Link to="/">Online Experiences</Link>
          </p>
        </div>
      )}
      <div className="flex space-x-4 items-center">
        <p className="hover:text-grey-300">
          <Link to={"/"}>Become a Host</Link>
        </p>
        <button className="cursor-pointer">
          <img src={globe} />
        </button>
        <span className="flex space-x-1 bg-grey-200 px-2 rounded-2xl justify-between hover:bg-grey-300">
          <button className="cursor-pointer">
            <img src={menu} alt="" />
          </button>
          <button className="cursor-pointer">
            <img src={avatar} alt="" />
          </button>
        </span>
      </div>
    </div>
  );
};

export default NavBar;
