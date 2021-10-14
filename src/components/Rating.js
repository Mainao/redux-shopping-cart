import React from "react";
import { HiStar } from "react-icons/hi";

const Rating = ({ product }) => {
  return (
    <div className="flex space-x-2 items-center text-sm mt-4 mb-2">
      <p>{product.rating ? product.rating.rate : 0}</p>
      <div className="flex space-x-2 items-center">
        <HiStar />
        <div className="border-r h-4" />
        <p>{product.rating ? product.rating.count : 0}</p>
      </div>
    </div>
  );
};

export default Rating;
