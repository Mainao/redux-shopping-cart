import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen w-full">
        <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
