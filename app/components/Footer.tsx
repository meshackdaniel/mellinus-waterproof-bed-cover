import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-200 font-inter">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <span className="text-2xl font-bold text-blue-500">Mellitus</span>
            <p className="text-gray-400 mt-3 text-sm">
              Get your water proof bedcovers that protects your bed from spills while retaining comfort.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-blue-400 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.29 3.9A12.13 12.13 0 0 1 3.1 4.86a4.28 4.28 0 0 0 1.32 5.71c-.7-.02-1.36-.22-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2c-.33.09-.68.14-1.04.14-.25 0-.5-.02-.74-.07a4.29 4.29 0 0 0 4 2.98A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.7 8.7 0 0 0 24 4.59a8.47 8.47 0 0 1-2.54.7z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-blue-600 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-pink-400 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.13.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-blue-300 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.07-.02-2.44-1.49-2.44-1.5 0-1.73 1.17-1.73 2.36v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.61 2.01 3.61 4.62v4.71z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Legal
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Terms and codition
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Shipping and delivery
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.657 16.657L13.414 12.414a2 2 0 0 0-2.828 0l-4.243 4.243A8 8 0 1 1 17.657 16.657z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                  />
                </svg>
                124 Lami road, Lekki, Lagos, Nigeria
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 12v1a4 4 0 0 1-8 0v-1m8 0a4 4 0 0 0-8 0m8 0V7a4 4 0 0 0-8 0v5"
                  />
                </svg>
                info@mellitus.ng
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 5a2 2 0 0 1 2-2h2.28a2 2 0 0 1 1.94 1.45l.52 1.56a2 2 0 0 0 1.94 1.45h2.64a2 2 0 0 0 1.94-1.45l.52-1.56A2 2 0 0 1 16.72 3H19a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z"
                  />
                </svg>
                +234 800 123 4567
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 py-6">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-2">
            <div>© 2025 Mellitus. All rights reserved.</div>
            <div>
              Built with <span className="text-red-500">♥</span> by Lasioweb
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
