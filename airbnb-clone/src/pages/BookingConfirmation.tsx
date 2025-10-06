import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import { mockProperties } from '../data/mockData';

const BookingConfirmation = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: RootState) => state.user);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [property, setProperty] = useState<any>(null);
  const [bookingDetails, setBookingDetails] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    totalPrice: 0,
    bookingId: ''
  });

  useEffect(() => {
    const foundProperty = mockProperties.find(p => p.id === id);
    if (foundProperty) {
      setProperty(foundProperty);
      // Generate booking details
      const checkIn = new Date();
      const checkOut = new Date();
      checkOut.setDate(checkOut.getDate() + 3);
      
      const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
      const totalPrice = foundProperty.price * nights;
      
      setBookingDetails({
        checkIn: checkIn.toISOString().split('T')[0],
        checkOut: checkOut.toISOString().split('T')[0],
        guests: 2,
        totalPrice,
        bookingId: `BK${Date.now()}`
      });
    }
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
            <p className="text-gray-600">Your reservation has been confirmed</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Property Details */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Your Trip</h2>
              <div className="border border-gray-200 rounded-lg p-4">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold">{property.title}</h3>
                <p className="text-gray-600 mb-2">{property.location}</p>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-yellow-400 fill-current mr-1" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>{property.rating} ({property.reviewCount} reviews)</span>
                </div>
              </div>
            </div>

            {/* Booking Details */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Booking ID:</span>
                  <span className="font-medium">{bookingDetails.bookingId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Check-in:</span>
                  <span className="font-medium">{new Date(bookingDetails.checkIn).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Check-out:</span>
                  <span className="font-medium">{new Date(bookingDetails.checkOut).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Guests:</span>
                  <span className="font-medium">{bookingDetails.guests}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price per night:</span>
                  <span className="font-medium">${property.price}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total:</span>
                    <span>${bookingDetails.totalPrice}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Guest Information</h3>
                <div className="space-y-2">
                  <p><span className="text-gray-600">Name:</span> {currentUser?.name}</p>
                  <p><span className="text-gray-600">Email:</span> {currentUser?.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t">
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/my-bookings')}
                className="flex-1 bg-primary-100 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-600 transition-colors"
              >
                View My Bookings
              </button>
              <button
                onClick={() => navigate('/')}
                className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Continue Exploring
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
