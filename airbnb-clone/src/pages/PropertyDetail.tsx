import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { setSelectedProperty } from "../redux/slices/listingsSlice";
import { mockProperties } from "../data/mockData";
import NavBar from "../components/navbar";

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedProperty } = useSelector(
    (state: RootState) => state.listings
  );
  const { isAuthenticated } = useSelector((state: RootState) => state.user);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [guests, setGuests] = useState(1);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  useEffect(() => {
    const property = mockProperties.find((p) => p.id === id);
    if (property) {
      dispatch(setSelectedProperty(property));
    } else {
      navigate("/");
    }
  }, [id, dispatch, navigate]);

  if (!selectedProperty) {
    return <div>Loading...</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedProperty.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProperty.images.length - 1 : prev - 1
    );
  };

  const handleReserve = () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    if (!checkIn || !checkOut) {
      alert("Please select check-in and check-out dates");
      return;
    }

    if (new Date(checkIn) >= new Date(checkOut)) {
      alert("Check-out date must be after check-in date");
      return;
    }

    // Calculate total price
    const nights = Math.ceil(
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
        (1000 * 60 * 60 * 24)
    );
    const totalPrice = selectedProperty.price * nights;

    // In a real app, this would create a booking and redirect to confirmation
    navigate(
      `/booking-confirmation/${selectedProperty.id}?checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}&total=${totalPrice}`
    );
  };

  const nights =
    checkIn && checkOut
      ? Math.ceil(
          (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
            (1000 * 60 * 60 * 24)
        )
      : 0;
  const totalPrice = nights * selectedProperty.price;

  return (
    <div className="w-[100vw] min-h-[100vh] bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <NavBar isSearch={false} isListing={true} />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Image Gallery */}
        <div className="relative mb-8">
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <img
              src={selectedProperty.images[currentImageIndex]}
              alt={selectedProperty.title}
              className="w-full h-full object-cover"
            />

            {/* Navigation arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Image indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {selectedProperty.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentImageIndex ? "bg-primary-100" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Property Info */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {selectedProperty.title}
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                {selectedProperty.location}
              </p>

              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-yellow-400 fill-current mr-1"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>
                    {selectedProperty.rating} ({selectedProperty.reviewCount}{" "}
                    reviews)
                  </span>
                </div>
                <span>·</span>
                <span>{selectedProperty.propertyType}</span>
                <span>·</span>
                <span>
                  {selectedProperty.bedrooms} bedroom
                  {selectedProperty.bedrooms !== 1 ? "s" : ""}
                </span>
                <span>·</span>
                <span>
                  {selectedProperty.bathrooms} bathroom
                  {selectedProperty.bathrooms !== 1 ? "s" : ""}
                </span>
              </div>
            </div>

            {/* Host Info */}
            <div className="border-t border-b border-gray-200 py-8 mb-8">
              <div className="flex items-center space-x-4">
                <img
                  src={selectedProperty.host.avatar}
                  alt={selectedProperty.host.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    Hosted by {selectedProperty.host.name}
                  </h3>
                  {selectedProperty.host.isSuperhost && (
                    <p className="text-sm text-primary-100 font-medium">
                      Superhost
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">About this place</h2>
              <p className="text-gray-700 leading-relaxed">
                {selectedProperty.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                What this place offers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedProperty.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 border border-gray-200 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-2xl font-bold">
                    ${selectedProperty.price}
                  </span>
                  <span className="text-gray-600"> / night</span>
                </div>
                <div className="flex items-center text-sm">
                  <svg
                    className="w-4 h-4 text-yellow-400 fill-current mr-1"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>{selectedProperty.rating}</span>
                  <span className="text-gray-600 ml-1">
                    ({selectedProperty.reviewCount})
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-2">
                  <div className="border border-gray-300 rounded-lg p-3">
                    <label className="text-xs font-medium text-gray-700 block mb-1">
                      CHECK-IN
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full text-sm border-none outline-none"
                    />
                  </div>
                  <div className="border border-gray-300 rounded-lg p-3">
                    <label className="text-xs font-medium text-gray-700 block mb-1">
                      CHECK-OUT
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      min={checkIn || new Date().toISOString().split("T")[0]}
                      className="w-full text-sm border-none outline-none"
                    />
                  </div>
                </div>

                <div className="border border-gray-300 rounded-lg p-3">
                  <label className="text-xs font-medium text-gray-700 block mb-1">
                    GUESTS
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full text-sm border-none outline-none"
                  >
                    {Array.from(
                      { length: selectedProperty.maxGuests },
                      (_, i) => i + 1
                    ).map((num) => (
                      <option key={num} value={num}>
                        {num} guest{num !== 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {nights > 0 && (
                <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between text-sm">
                    <span>
                      ${selectedProperty.price} × {nights} night
                      {nights !== 1 ? "s" : ""}
                    </span>
                    <span>${totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span>Cleaning fee</span>
                    <span>$50</span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span>Service fee</span>
                    <span>${Math.round(totalPrice * 0.1)}</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>
                        ${totalPrice + 50 + Math.round(totalPrice * 0.1)}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <button
                onClick={handleReserve}
                className="w-full bg-primary-100 text-white py-4 rounded-lg font-semibold text-lg hover:bg-red-600 transition-colors"
              >
                {isAuthenticated ? "Reserve" : "Log in to Reserve"}
              </button>

              <p className="text-center text-sm text-gray-600 mt-4">
                You won't be charged yet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
