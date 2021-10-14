import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-y-4 mt-4">
          <ul className="leading-loose">
            <li className="font-bold">Products</li>
            <li>
              <a href="#0" className="text-gray-500">
                Men
              </a>
            </li>
            <li>
              <a href="#0" className="text-gray-500">
                Women
              </a>
            </li>
            <li>
              <a href="#0" className="text-gray-500">
                Jewelery
              </a>
            </li>
            <li>
              <a href="#0" className="text-gray-500">
                Electronics
              </a>
            </li>
          </ul>

          <ul className="leading-loose">
            <li className="font-bold">Links</li>
            <li>
              <a href="#0" className="text-gray-500">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#0" className="text-gray-500">
                FAQ
              </a>
            </li>
            <li>
              <a href="#0" className="text-gray-500">
                T&C
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
