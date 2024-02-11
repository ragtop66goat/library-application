import React from 'react';
import './App.css';
import HomePage from "./layouts/HomePage/HomePage";
import Navbar from "./layouts/NavbarAndFooter/Navbar";
import Footer from "./layouts/NavbarAndFooter/Footer";

export function App() {
  return (
    <>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </>
  );
}
