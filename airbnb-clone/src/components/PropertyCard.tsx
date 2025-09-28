import type { Property } from '../redux/slices/listingsSlice';
import { useNavigate } from 'react-router-dom';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/property/${property.id}`);
  };

  return (
    <div 
      className="cursor-pointer group"
      onClick={handleClick}
    >
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      <div className="mt-3">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-primary-100 transition-colors">
            {property.title}
          </h3>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-sm font-medium">{property.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mt-1">{property.location}</p>
        <p className="text-gray-600 text-sm">
          {property.bedrooms} bedroom{property.bedrooms !== 1 ? 's' : ''} · {property.bathrooms} bathroom{property.bathrooms !== 1 ? 's' : ''}
        </p>
        
        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-semibold">
            ${property.price}
            <span className="text-gray-600 font-normal text-sm"> / night</span>
          </span>
          <span className="text-sm text-gray-600">
            ({property.reviewCount} reviews)
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
