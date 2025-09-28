import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";
import { clearUser } from "../redux/slices/userSlice";
import type { NavProps } from "../types/componentTypes";
//image imports
import logo_white from "../assets/icons/Logo_white.svg";
import logo_red from "../assets/icons/Logo_red.svg";
import search from "../assets/icons/search.svg";

const NavBar = ({ isListing, isSearch }: NavProps) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { currentUser, isAuthenticated } = useSelector((state: RootState) => state.user);

  const handleLogout = () => {
    dispatch(clearUser());
  };

  return (
    <div
      className={`flex justify-between ${
        !(isSearch || isListing) ? "text-white" : "text-black"
      } font-poppins items-center`}
    >
      <Link to="/">
        {!(isSearch || isListing) ? (
          <img src={logo_white} alt="logo" />
        ) : (
          <img src={logo_red} alt="logo" />
        )}
      </Link>
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
          <Link to="/host-dashboard">Become a Host</Link>
        </p>
        
        {isAuthenticated ? (
          <div className="flex items-center space-x-2">
            <Link 
              to="/my-bookings"
              className=" hover:text-grey-300"
            >
              My Bookings
            </Link>
  
            <button 
              onClick={handleLogout}
              className="text-sm text-white px-4 py-2 rounded-2xl hover:bg-primary-100 bg-primary-200"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex space-x-2">
            <Link 
              to="/login" 
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Log in
            </Link>
            <Link 
              to="/signup" 
              className="px-4 py-2 text-sm font-medium text-white bg-primary-100 rounded-full hover:bg-red-600"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
