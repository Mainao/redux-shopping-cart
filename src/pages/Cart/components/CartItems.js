import React, { useState } from "react";
import { Link } from "react-router-dom";
import AlertModal from "../../../components/AlertModal";

const CartItems = ({ cart }) => {
  const [removeItem, setRemoveItem] = useState();

  return (
    <>
      {cart.map((item) => (
        <li className="py-6 flex" key={item.item.id}>
          <div className="flex-shrink-0 w-44 h-52 rounded-md overflow-hidden">
            <img
              src={item.item.image}
              alt={item.item.title}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className=" ml-4 flex-1 flex flex-col">
            <div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <h3>
                  <Link to={`product/${item.item.id}`}>
                    {item.item.title.slice(0, 30)}...
                  </Link>
                </h3>
                <button
                  type="button"
                  className="font-medium text-gray-600 hover:text-gray-500"
                  onClick={() => {
                    setRemoveItem(item.item.id);
                  }}
                >
                  Remove
                </button>
              </div>
              <p className="text-gray-500 my-2">Qty {item.quantity}</p>
              <p className="mt-1 text-sm font-bold">$ {item.item.price}</p>
            </div>
            <div className="flex-1 flex items-end justify-between text-sm">
              <p className="text-gray-500">In Stock</p>
            </div>
          </div>
        </li>
      ))}
      {removeItem ? (
        <AlertModal value={removeItem} removeAlert={() => setRemoveItem()} />
      ) : null}
    </>
  );
};

export default CartItems;
