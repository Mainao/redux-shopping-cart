import React from "react";
import { useSelector } from "react-redux";
import { cartSelector } from "../../redux/slices/cart";
import CartItems from "./components/CartItems";
import EmptyCart from "./components/EmptyCart";

const Cart = () => {
  const { cart } = useSelector(cartSelector);

  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.item.price;
  }, 0);

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="flex space-x-8">
      <div className="w-3/5">
        <ul role="list" className="-my-6 divide-y divide-gray-200">
          <li className="py-6">
            <h1 className="text-2xl font-bold">Shopping Cart</h1>
          </li>
          <CartItems cart={cart} />
        </ul>
      </div>
      <div className="w-2/5">
        <div className="bg-gray-50 rounded p-8">
          <h2 className="font-bold">Order Summary</h2>
          <ul role="list" className=" mt-4 divide-y divide-gray-200">
            <li className="py-3 text-sm text-gray-500 flex justify-between">
              <h1>Subtotal</h1>
              <p>$ {totalPrice.toFixed(2)}</p>
            </li>
            <li className="py-3 text-sm text-gray-500 flex justify-between">
              <h1>Shipping</h1>
              <p>Free</p>
            </li>
            <li className="py-3 text-md flex justify-between">
              <h1 className="capitalize">Order total</h1>
              <p>$ {totalPrice.toFixed(2)}</p>
            </li>
          </ul>
          <button
            type="button"
            className="w-full mt-4 flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-2 md:text-lg md:px-10"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
