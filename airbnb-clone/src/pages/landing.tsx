import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { setProperties } from "../redux/slices/listingsSlice";
import { mockProperties } from "../data/mockData";
import NavBar from "../components/navbar";
import SearchBar from "../components/searchBar";
import DestinationCard from "../components/destination";
import PropertyCard from "../components/PropertyCard";
import Button from "../components/button";

import bg from "../assets/Big Card.png";
import nashville from "../assets/nashville.png";
import south_haven from "../assets/south_haven.png";
import stanton from "../assets/stanton.png";
import berries from "../assets/unsplash_JYTWsPsIDcY.png";
import trip from "../assets/unsplash_qvO4yjZo-Mc.png";
import woman from "../assets/woman.png";

const Landing = () => {
  const dispatch = useDispatch();
  const { properties } = useSelector((state: RootState) => state.listings);

  useEffect(() => {
    // Load mock data
    dispatch(setProperties(mockProperties));
  }, [dispatch]);

  return (
    <div className="font-poppins">
      {/* hero section UI */}
      <section className="w-full h-[100vh] bg-black px-20 py-4 flex flex-col">
        <div className="">
          <NavBar isListing={false} isSearch={false} />
        </div>
        <div className="self-center w-fit">
          <SearchBar />
        </div>
        <div className="relative my-4">
          <span className="absolute top-[50vh] left-1/2 transform -translate-x-1/2 text-white z-20 flex flex-col items-center space-y-8">
            <h1 className="text-4xl">Not sure where to go? Perfect.</h1>
            <button className="text-primary-100 bg-white hover:bg-primary-100 hover:text-white duration-500 ease-in-out cursor-pointer px-6 py-2 rounded-full">
              I'm flexible
            </button>
          </span>
          <img src={bg} className="bg-cover absolute top-0 left-0 z-10" />
        </div>
      </section>

      <section className="my-16 px-20 py-4">
        <h1 className="text-3xl">Inspiration for your next trip</h1>
        <div className="mt-8 flex justify-between">
          <DestinationCard
            name="Nashville"
            img={nashville}
            color="bg-primary-100"
            distance="53"
          />
          <DestinationCard
            name="South Haven"
            img={south_haven}
            color="bg-primary-100"
            distance="168"
          />
          <DestinationCard
            name="Stanton"
            img={stanton}
            color="bg-primary-100"
            distance="192"
          />
          <DestinationCard
            name="New Buffalo"
            img={south_haven}
            color="bg-primary-100"
            distance="130"
          />
        </div>
      </section>

      {/* Featured Properties */}
      <section className="my-16 px-20 py-4">
        <h1 className="text-3xl mb-8">Featured properties</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.slice(0, 4).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      <section className="my-16 px-20 py-4 h-[80vh]">
        <h1 className="text-3xl">Discover Airbnb Experiences</h1>
        <div className="relative flex flex-row justify-between mt-4">
          <span className="relative w-full">
            <span className="absolute top-16 left-16 text-white z-20 flex flex-col items-start space-y-8 m-8">
              <h1 className="text-5xl">
                Things to do <br /> on your trip
              </h1>
              <Button name="Experiences" isAlt={false} />
            </span>
            <img src={trip} className="bg-cover absolute top-0 left-0 z-10" />
          </span>
          <span className="relative w-full">
            <span className="absolute top-16 left-16 text-white z-20 flex flex-col items-start space-y-8 m-8">
              <h1 className="text-5xl">
                Things to do <br /> on from home
              </h1>
              <Button name="Online Experiences" isAlt={false} />
            </span>
            <img
              src={berries}
              className="bg-cover absolute top-0 left-0 z-10"
            />
          </span>
        </div>
      </section>

      <section className="relative my-16 px-20 py-4 flex justify-between items-center">
        <img src={woman} className="relative top-0 left-0 z-0" />
        <span className="absolute top-16 left-20 ml-20 z-10  flex flex-col space-y-20 items-start">
          <h1 className="text-white text-6xl">
            Questions <br />
            about <br /> hosting?
          </h1>
          <Button name="Online Experiences" isAlt={false} />
        </span>
      </section>
    </div>
  );
};

export default Landing;
