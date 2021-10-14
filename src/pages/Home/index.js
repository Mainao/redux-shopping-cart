import React from "react";
import { Link } from "react-router-dom";
import HomeBanner from "../../assets/homebanner.jpg";

const Home = () => {
  const cardItems = [
    {
      id: 1,
      name: "men's clothing",
      url: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      redirect: "/men's clothing",
    },
    {
      id: 2,
      name: "women's clothing",
      url: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      redirect: "women's clothing",
    },
    {
      id: 3,
      name: "jewelery",
      url: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      redirect: "jewelery",
    },
    {
      id: 4,
      name: "electronics",
      url: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      redirect: "electronics",
    },
  ];
  return (
    <div className="container">
      <img src={HomeBanner} alt="banner" />
      <div className="grid grid-cols-4 gap-10 my-20">
        {cardItems.map((item) => (
          <Link to={item.redirect} key={item.id}>
            <div
              className="relative group bg-gray-900 relative cursor-pointer flex-none flex items-end h-80 rounded-md transition duration-300 ease-in-out transform bg-cover"
              style={{
                backgroundImage: `url(${item.url})`,
              }}
            >
              <div className="absolute inset-0 flex items-end justify-center p-5 rounded-md transition duration-300 ease-in-out transform text-transparent text-gray-300 bg-gradient-to-b from-transparent to-gray-800">
                <p className="capitalize">{item.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
