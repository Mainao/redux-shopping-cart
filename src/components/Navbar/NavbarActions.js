import React from "react";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";

const NavbarActions = ({ count }) => {
  const renderCartItemsBadge = () => {
    if (count > 0) {
      return (
        <div className="w-5 h-5 rounded-full bg-red-500 text-white text-xs flex justify-center items-center absolute -top-2 -right-4">
          {count}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="relative mr-4 md:mr-4">
      <Link to="/checkout/cart">
        <BsBag className="text-xl" />
      </Link>
      {renderCartItemsBadge()}
    </div>
  );
};

export default NavbarActions;
