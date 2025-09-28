// imports for react router
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import SearchPage from "./pages/search";
import PropertyDetail from "./pages/PropertyDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BookingConfirmation from "./pages/BookingConfirmation";
import MyBookings from "./pages/MyBookings";
import HostDashboard from "./pages/HostDashboard";

const AppRoutes = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/property/:id" element={<PropertyDetail/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/booking-confirmation/:id" element={<BookingConfirmation/>} />
            <Route path="/my-bookings" element={<MyBookings/>} />
            <Route path="/host-dashboard" element={<HostDashboard/>} />
        </Routes>
     );
}
 
export default AppRoutes;
