import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Rating from "../../../components/Rating";

const Product = ({ product, addedToCart, buttonAction }) => {
  const renderButton = () => {
    if (addedToCart) {
      return (
        <button
          type="button"
          className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white uppercase flex items-center space-x-4"
          onClick={() => buttonAction(2)}
        >
          Go to cart
          <FaLongArrowAltRight className="ml-2" />
        </button>
      );
    }
    return (
      <button
        type="button"
        className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white uppercase"
        onClick={() => {
          buttonAction(1);
        }}
      >
        Add to Cart
      </button>
    );
  };

  return (
    <>
      <div className="flex flex-col md:flex-row -mx-4">
        <div className="md:flex-1 px-4">
          <div className="h-80 text-center rounded-lg mb-4">
            <img
              src={product.image}
              alt="product"
              className="mx-auto object-contain h-80"
            />
          </div>
        </div>
        <div className="md:flex-1 px-4">
          <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
            {product.title}
          </h2>
          <Rating product={product} />
          <div className="flex items-center space-x-4 my-4">
            <div className="rounded-lg bg-gray-100 flex py-2 px-3">
              <span className="text-indigo-400 mr-1 mt-1">$</span>
              <span className="font-bold text-indigo-600 text-3xl">
                {product.price}
              </span>
            </div>
          </div>
          <p className="text-gray-500">{product.description}</p>
          <div className="py-4">{renderButton()}</div>
        </div>
      </div>
    </>
  );
};

export default Product;
