import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cart";

const AlertModal = ({ value, removeAlert }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        />
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Move from bag
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Are you sure you want to move this item from bag?
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-3 sm:px-6 sm:flex sm:justify-around">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => {
                dispatch(removeFromCart(value));
                removeAlert();
              }}
            >
              Remove
            </button>
            <div className="border-r h-10 border-gray-200" />
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md px-4 py-2 text-base font-medium text-red-400 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => {
                removeAlert();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
