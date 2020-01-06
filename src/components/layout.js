import React from "react";

import "./bootstrap.min.css";
import "./layout.css";
import Navbar from "./Globals/Navbar";
import Footer from "./Globals/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
