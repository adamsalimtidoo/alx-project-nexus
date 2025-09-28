// imports for react router
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import SearchPage from "./pages/search";

const AppRoutes = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/search" element={<SearchPage/>} />
        </Routes>
     );
}
 
export default AppRoutes;