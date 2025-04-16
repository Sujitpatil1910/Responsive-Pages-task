import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/contact";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import Career from "./pages/Career";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;