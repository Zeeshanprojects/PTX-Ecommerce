import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    <Footer/>
    </Router>


    </>
  );
}

export default App;
