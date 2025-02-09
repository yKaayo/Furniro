import { useState } from "react";
import logo from "../../public/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Link } from "react-router";

const Header = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed w-full bg-white px-5 z-[5]">
      <div className="relative container mx-auto flex h-20 flex-wrap items-center justify-between md:flex-nowrap">
        <h1>
          <Link className="flex items-center text-2xl font-bold" to="/">
            <img className="mr-2" src={logo} alt="Website Logo" />
            Furniro
          </Link>
        </h1>

        <button
          className={`${window.innerWidth < 768 ? "flex" : "hidden"}`}
          onClick={() => setShowNavBar((prevNavBar) => !prevNavBar)}
        >
          <FontAwesomeIcon
            className="text-xl text-black"
            icon="fa-solid fa-bars-staggered"
          />
        </button>

        <div
          className={`w-full ${
            !showNavBar && window.innerWidth < 768 ? "hidden" : "flex"
          } md:rounded-n4 bg-secundary-yellow absolute top-[70px] flex-col gap-8 rounded-lg p-5 shadow-xl md:static md:flex-row md:justify-between md:bg-transparent md:p-0 md:shadow-none`}
        >
          <nav className="relative md:mx-auto">
            <ul className="flex flex-col justify-center gap-10 font-semibold md:flex-row">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    className={`nav__link ${({ isActive }) => (isActive ? "active" : "")}`}
                    to={link.path}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex items-center gap-5">
            <li>
              <button>
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
              </button>
            </li>
            <li>
              <button>
                <FontAwesomeIcon icon="fa-regular fa-heart" />
              </button>
            </li>
            <li>
              <Link to={'cart'}>
                <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
