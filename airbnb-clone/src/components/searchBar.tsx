import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateFilters } from "../redux/slices/searchSlice";
import search from "../assets/icons/search.svg";

const SearchBar = () => {
  const [location, setLocation] = useState<string>("");
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [guests, setGuests] = useState<number>(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(
      updateFilters({
        location,
        checkIn,
        checkOut,
        guests,
      })
    );
    navigate("/search");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="text-black bg-white pl-4 pr-2 py-2 flex rounded-full justify-between space-x-1 shadow-lg">
      <div className="flex w-full">
        <div className="flex flex-col px-4 pr-16 border-r-2 border-grey-200">
          <label className="text-xs font-medium text-gray-700">Location</label>
          <input
            type="text"
            placeholder="Where are you going?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full px-0 outline-none text-sm"
          />
        </div>
        <div className="flex flex-col px-4 pr-16 border-r-2 border-grey-200">
          <label className="text-xs font-medium text-gray-700">Check in</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full px-0 outline-none text-sm"
          />
        </div>
        <div className="flex flex-col px-4 pr-16 border-r-2 border-grey-200">
          <label className="text-xs font-medium text-gray-700">Check out</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full px-0 outline-none text-sm"
          />
        </div>
        <div className="flex flex-col px-4 pr-16">
          <label className="text-xs font-medium text-gray-700">Guests</label>
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full px-0 outline-none text-sm border-none"
          >
            {Array.from({ length: 16 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num} guest{num !== 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        onClick={handleSearch}
        className="bg-primary-100 p-3 rounded-full hover:bg-red-600 transition-colors"
      >
        <img src={search} alt="Search" />
      </button>
    </div>
  );
};

export default SearchBar;
