import React from "react";
import { Toaster } from "react-hot-toast";

const ToasterAlert = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        className: "bg-gray-500 text-white",
        duration: 1000,
      }}
    />
  );
};

export default ToasterAlert;
