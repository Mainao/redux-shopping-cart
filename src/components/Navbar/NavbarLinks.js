import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navlinks = () => {
  const routeLinks = [
    {
      id: 1,
      category: "men's clothing",
      label: "Men",
    },
    {
      id: 2,
      category: "women's clothing",
      label: "Women",
    },
    {
      id: 3,
      category: "jewelery",
      label: "Jewelery",
    },
    {
      id: 4,
      category: "electronics",
      label: "Electronics",
    },
  ];

  const location = useLocation();
  const { pathname } = location;
  const page = pathname.split("/")[1];

  return (
    <div className="hidden md:flex space-x-3 flex-1 lg:ml-8">
      {routeLinks.map((link) => {
        let bgActive = "bg-white";
        if (page === link.category.toLowerCase()) {
          bgActive = "bg-gray-100";
        }
        return (
          <Link
            to={`/${link.category}`}
            key={`${link.id}`}
            className={`px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600 ${bgActive}`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Navlinks;
