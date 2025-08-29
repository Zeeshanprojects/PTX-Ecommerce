import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

import Fleece from "./Pages/Fleece";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import ScrollToTop from "./Components/ScrollToTop";
import Productinfo from "./Pages/Productinfo";
import Termsandconditions from "./Pages/Termsandconditions";
import Privacyandpolicy from "./Pages/Privacyandpolicy";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import TShirt from "./Pages/T-Shirt";
import Checkout from "./Pages/Checkout";
import LookBook from "./Pages/LookBook";
import Preloader from "./Components/Preloader";
import CollaredNeck from "./Pages/CollaredNeck";
import BoatNeck from "./Pages/BoatNeck";
import Hoddies from "./Pages/Hoddies";
import Short from "./Pages/Short";
import MineralWash from "./Pages/MineralWash";

function AppWrapper() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tshirts" element={<TShirt />} />
        <Route path="/Collaredneck" element={<CollaredNeck />} />
        <Route path="Boatneck" element={<BoatNeck />} />
        <Route path="Pulloverhoodie" element={<Hoddies />} />
        <Route path="short" element={<Short />} />
        <Route path="Mineralwash" element={<MineralWash />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Fleece" element={<Fleece />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/LookBook" element={<LookBook />} />
        <Route path="/productInfo" element={<Productinfo />} />
        <Route path="/TermsandConditions" element={<Termsandconditions />} />
        <Route path="/PrivacyandPolicy" element={<Privacyandpolicy />} />
      </Routes>
      {location.pathname !== "/LookBook" && <Footer />}
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to false after 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Router>{loading ? <Preloader /> : <AppWrapper />}</Router>
    </>
  );
}

export default App;
