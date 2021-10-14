import React from "react";

const Loader = () => {
  return (
    <div className="col-span-5">
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-b-4 border-blue-400 border-solid rounded-full animate-spin" />
      </div>
    </div>
  );
};

export default Loader;
