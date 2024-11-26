import { useState } from "react";
import { Link } from "react-router-dom";
import LoginBox from "./LoginBox";

const Header = () => {
  const [isLoginBoxOpen, setIsLoginBoxOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 border-b-2 border-red-500">
      <nav className="flex justify-between items-center container mx-auto py-4 px-6 lg:px-12 ">
        <div className="flex items-center space-x-4">
          <Link to="https://fce.unillanos.edu.co/" className="flex items-center space-x-2">
            <img
              src="../src/assets/images/faculty_logo.svg"
              alt="Logo facultad"
              className="w-12"
            />
            <span className="hidden md:block text-xl font-semibold text-gray-800 hover:text-green-600 transition-colors">
              Facultad
            </span>
          </Link>
          <Link to="/" >
            <img
              src="../src/assets/images/logocese.png"
              alt="Logo CESE"
              className="w-36 md:w-44"
            />
          </Link>
        </div>

        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <Link
              to="/"
              className="text-gray-700 hover:text-red-600 text-sm uppercase font-bold tracking-wide transition-colors"
            >
              CESE
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-700 hover:text-red-600 text-sm uppercase font-bold tracking-wide transition-colors"
            >
              Quienes Somos
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-gray-700 hover:text-red-600 text-sm uppercase font-bold tracking-wide transition-colors"
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-red-600 text-sm uppercase font-bold tracking-wide transition-colors"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="https://campusvirtualunillanos.co/"
              className="text-gray-700 hover:text-red-600 text-sm uppercase font-bold tracking-wide transition-colors"
            >
              Campus Virtual
            </Link>
          </li>
          <li>
            <Link
              to="https://biblioteca.unillanos.edu.co/"
              className="text-gray-700 hover:text-red-600 text-sm uppercase font-bold tracking-wide transition-colors"
            >
              Biblioteca
            </Link>
          </li>
          <li>
            <img
              src="../src/assets/images/user2.svg"
              alt="Usuario"
              className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
              onClick={() => setIsLoginBoxOpen(!isLoginBoxOpen)}
            />
          </li>
        </ul>

        <button className="md:hidden flex items-center space-x-2 text-gray-700" onClick={toggleMenu}>
          <span className="text-sm uppercase font-bold">Menú</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-green-600 block text-sm uppercase font-bold tracking-wide"
              >
                CESE
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-green-600 block text-sm uppercase font-bold tracking-wide"
              >
                Quienes Somos
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-gray-700 hover:text-green-600 block text-sm uppercase font-bold tracking-wide"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-gray-700 hover:text-green-600 block text-sm uppercase font-bold tracking-wide"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="https://campusvirtualunillanos.co/"
                className="text-gray-700 hover:text-green-600 block text-sm uppercase font-bold tracking-wide"
              >
                Campus Virtual
              </Link>
            </li>
            <li>
              <Link
                to="https://biblioteca.unillanos.edu.co/"
                className="text-gray-700 hover:text-green-600 block text-sm uppercase font-bold tracking-wide"
              >
                Biblioteca
              </Link>
            </li>
            <li>
              <img
                src="../src/assets/images/user2.svg"
                alt="Usuario"
                className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
                onClick={() => setIsLoginBoxOpen(!isLoginBoxOpen)}
              />
            </li>
          </ul>
        </div>
      )}

      {isLoginBoxOpen && <LoginBox closeLoginBox={() => setIsLoginBoxOpen(false)} />}
    </header>
  );
};

export default Header;
