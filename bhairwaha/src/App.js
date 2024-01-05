import React, { createcontext } from 'react';
import './App.css';
import Home from './pages/home/Home';
import './style/main.css';
import './style/responsive.css';
import { Route, Router, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Facility from './pages/facility/Facility';
import Gallery from './pages/gallery/Gallery';
import Rooms from './pages/rooms/Rooms';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NoteState from './context/notes/NoteState';
import ContextProvider from './context/notes/ContextProvider';
// const 

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>

      <ContextProvider>

        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/facilities" exact element={<Facility />} />
          <Route path="/gallery" exact element={<Gallery />} />
          <Route path="/rooms" exact element={<Rooms />} />
        </Routes>
        <Footer />

      </ContextProvider>
    </>
  );
}

export default App;
