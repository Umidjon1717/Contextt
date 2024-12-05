import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-4 w-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

        <div className="mb-2 md:mb-0">
          <h3 className="text-lg font-bold">MyWebsite</h3>
          <p className="text-sm">© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        </div>


        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="/about" className="hover:text-blue-400 transition text-sm">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400 transition text-sm">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-blue-400 transition text-sm">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
