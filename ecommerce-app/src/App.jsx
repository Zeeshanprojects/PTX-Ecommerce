
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
      <Route path="/Kids" element={<Kids/>}/>
      <Route path="/Shop" element={<Shop/>}/>
    </Routes>
    <Footer/>
    </Router>


    </>
  );
}

export default App;
