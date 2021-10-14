import React from "react";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="w-full py-24 flex flex-col justify-center items-center">
      <BsBag className="text-3xl" />
      <p>Cart is empty</p>
      <Link to="/men's clothing" className="link text-indigo-600">
        Continue Shopping
      </Link>
    </div>
  );
};

export default EmptyCart;
