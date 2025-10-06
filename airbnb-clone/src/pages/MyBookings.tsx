import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import { Link } from 'react-router-dom';

const MyBookings = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { currentUser, isAuthenticated } = useSelector((state: RootState) => state.user);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Please log in to view your bookings</h1>
          <Link 
            to="/login" 
            className="bg-primary-100 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
          >
            Log In
          </Link>
        </div>
      </div>
    );
  }

  // Mock bookings data - in real app, this would come from API
  const mockBookings = [
    {
      id: 'BK123456789',
      property: {
        id: '1',
        title: 'Cozy Apartment in Downtown Nashville',
        location: 'Nashville, TN',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        price: 120
      },
      checkIn: '2024-02-15',
      checkOut: '2024-02-18',
      guests: 2,
      totalPrice: 360,
      status: 'confirmed'
    },
    {
      id: 'BK987654321',
      property: {
        id: '2',
        title: 'Lakeside Cabin with Private Beach',
        location: 'South Haven, MI',
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        price: 200
      },
      checkIn: '2024-03-10',
      checkOut: '2024-03-15',
      guests: 4,
      totalPrice: 1000,
      status: 'confirmed'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Bookings</h1>
          <p className="text-gray-600">Manage your upcoming and past trips</p>
        </div>

        {mockBookings.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No bookings yet</h2>
            <p className="text-gray-600 mb-6">Start exploring and book your first trip!</p>
            <Link 
              to="/" 
              className="bg-primary-100 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              Start Exploring
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {mockBookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={booking.property.image}
                      alt={booking.property.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {booking.property.title}
                        </h3>
                        <p className="text-gray-600 mb-2">{booking.property.location}</p>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-yellow-400 fill-current mr-1" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span>4.8 (124 reviews)</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">
                          ${booking.totalPrice}
                        </div>
                        <div className="text-sm text-gray-600">Total</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-600">Check-in</div>
                        <div className="font-medium">
                          {new Date(booking.checkIn).toLocaleDateString()}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Check-out</div>
                        <div className="font-medium">
                          {new Date(booking.checkOut).toLocaleDateString()}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Guests</div>
                        <div className="font-medium">{booking.guests}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Status</div>
                        <div className="font-medium text-green-600 capitalize">
                          {booking.status}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        to={`/property/${booking.property.id}`}
                        className="flex-1 bg-primary-100 text-white py-2 px-4 rounded-lg font-semibold text-center hover:bg-red-600 transition-colors"
                      >
                        View Property
                      </Link>
                      <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                        Contact Host
                      </button>
                      <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                        Cancel Booking
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
