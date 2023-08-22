import './App.css';
import React, { Fragment } from 'react';
import Home from './component/home/Home';
import About from './component/about/AboutUs';
import Form from './component/forms/Form';
import Gallery from './component/gallery/Gallery';
import Footer from './component/footer/Footer';
import Pricing from './component/pricing/Pricing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './component/nav/Nav';
import SideNav from './component/sideNav/SideNav';

function App() {
  return (
    <React.Fragment>
      <Home />
      <About />
      <Gallery />
      <Pricing />
      <Form />
      <Footer />
    </React.Fragment>

  );
}

export default App;