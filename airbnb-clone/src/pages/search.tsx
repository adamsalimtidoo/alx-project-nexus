import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import { setProperties } from '../redux/slices/listingsSlice';
import { mockProperties } from '../data/mockData';
import NavBar from '../components/navbar';
import PropertyCard from '../components/PropertyCard';
import Tags from '../components/tag';

const SearchPage = () => {
  const dispatch = useDispatch();
  const { properties } = useSelector((state: RootState) => state.listings);

  useEffect(() => {
    // Load mock data
    dispatch(setProperties(mockProperties));
  }, [dispatch]);

  return (
    <div className="w-[100vw] min-h-[100vh] bg-white">
      <div className="my-4 mx-8">
        <NavBar isSearch={true} isListing={false} />
        
        {/* Filters */}
        <div className="flex flex-row w-full justify-start items-start mt-6">
          <span className="border-r-2 border-grey-200 pr-4 flex space-x-4">
            <Tags name="Price" hasIcon={true} />
            <Tags name="Type of place" hasIcon={true} />
          </span>
          <span className="flex space-x-4 items-start ml-4">
            <Tags name="Free cancellation" hasIcon={false} />
            <Tags name="WiFi" hasIcon={false} />
            <Tags name="Kitchen" hasIcon={false} />
            <Tags name="Parking" hasIcon={false} />
            <Tags name="Pool" hasIcon={false} />
            <Tags name="Hot tub" hasIcon={false} />
            <Tags name="Gym" hasIcon={false} />
            <Tags name="More filters" hasIcon={false} />
          </span>
        </div>

        {/* Results count */}
        <div className="mt-6 mb-4">
          <p className="text-lg font-medium">
            {properties.length} places to stay
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
