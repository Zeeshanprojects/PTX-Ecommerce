
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Kids from "./Pages/Kids";
import Shop from "./Pages/Shop";
import ScrollToTop from './Components/ScrollToTop';
import Productinfo from './Pages/Productinfo';
import Termsandconditions from './Pages/Termsandconditions';
import Privacyandpolicy from './Pages/Privacyandpolicy';

function App() {
  return (
    <>
    
    <Router>
      <ScrollToTop/>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Men" element={<Men/>}/>
      <Route path="/Women" element={<Women/>}/>
      <Route path="/Kid" element={<Kids/>}/>
      <Route path="/Shop" element={<Shop/>}/>
      <Route path='/productInfo' element={<Productinfo/>}/>
      <Route path='/TermsandConditions' element={<Termsandconditions/>}/>
      <Route path='/PrivacyandPolicy' element={<Privacyandpolicy/>}/>
    </Routes>
    <Footer/>
    </Router>


    </>
  );
}

export default App;
