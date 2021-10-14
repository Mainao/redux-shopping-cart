import React from "react";
import { Link } from "react-router-dom";
import Rating from "../../../components/Rating";

const ProductCard = ({ product }) => {
  return (
    <div className="px-6 py-4 transition duration-200 ease-in-out hover:shadow-lg cursor-pointer">
      <Link to={`/product/${product.id}`} className="block">
        <div className="h-48 mx-auto">
          <img
            className="object-contain h-48"
            src={product.image}
            alt={product.title}
          />
        </div>
        <Rating product={product} />
        <p className="text-gray-700 text-xs mb-2">{product.title}</p>
        <p className="text-sm">
          $ <span className="font-bold">{product.price}</span>
        </p>
      </Link>
    </div>
  );
};

export default ProductCard;
