import React from "react";

const Footer = () => (
  <footer className="bg-gray-200 mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between">
      <div className="text-gray-600">
        © 2023 My Website. All rights reserved.
      </div>
      <div>
        <a
          href="https://github.com/my-username"
          className="text-gray-600 hover:text-gray-800 mr-4"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com/my-username"
          className="text-gray-600 hover:text-gray-800"
        >
          Twitter
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
