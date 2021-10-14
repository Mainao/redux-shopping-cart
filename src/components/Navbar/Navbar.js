import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NavbarLinks from "./NavbarLinks";
import NavbarActions from "./NavbarActions";

const Navbar = () => {
  const cart = useSelector((state) => {
    return state.cart.cart;
  });
  const cartTotalItem = cart.reduce((acc, cur) => acc + cur.quantity, 0);

  return (
    <>
      <nav className="bg-white shadow sticky top-0">
        <div className="flex items-center justify-between max-w-8xl mx-auto sm:px-6 lg:px-8">
          <div className="inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="relative flex items-center justify-between h-16">
            <Link to="/">Shop</Link>
          </div>
          <div className="hidden md:flex space-x-3 flex-1 lg:ml-8">
            <NavbarLinks />
          </div>
          <NavbarActions count={cartTotalItem} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
