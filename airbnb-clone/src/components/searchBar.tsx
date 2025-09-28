//image imports
import { useState } from "react";
import search from "../assets/icons/search.svg";

const SearchBar = () => {
  const [isActive, setIsActive] = useState<boolean>();

  //for triggering text input visibility
  const handleActive = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <div
      onDoubleClick={handleActive}
      className="text-black bg-white pl-4 pr-2 py-2 flex rounded-full justify-between space-x-1"
    >
      {isActive ? (
        <input type="text" className="w-[51.5vw] px-4 outline-none" />
      ) : (
        <div className="flex">
          <span className="text-sm flex flex-col pl-4 pr-16 border-r-2 border-grey-200">
            <p>Location</p>
            <p className="text-grey-100">Where are you going?</p>
          </span>
          <span className="text-sm flex flex-col pl-4 pr-16 border-r-2 border-grey-200">
            <p>Check in dates</p>
            <p className="text-grey-100">Add dates</p>
          </span>
          <span className="text-sm flex flex-col pl-4 pr-16 border-r-2 border-grey-200">
            <p>Check out dates</p>
            <p className="text-grey-100">Add dates</p>
          </span>
          <span className="text-sm flex flex-col pl-4 pr-16 ">
            <p>Guests</p>
            <p className="text-grey-100">Add guests</p>
          </span>
        </div>
      )}
      <span className="bg-primary-100 p-3 rounded-full">
        <img src={search} alt="" />
      </span>
    </div>
  );
};

export default SearchBar;
