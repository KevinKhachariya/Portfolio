import React, { useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logoDark, logoLight, menu, close } from "../assets";
import { Link } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const [active, setActive] = useState("");
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 sticky top-0 z-20 bg-white dark:bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={darkMode ? logoDark : logoLight}
            alt="kevin khachariya logo"
            className="h-16 lg:h-32 object-contain"
          />
        </Link>
        <button onClick={() => setDarkMode(!darkMode)}>
          <a
            href="#"
            class="transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            data-te-toggle="tooltip"
            title="Toogle theme"
          >
            {darkMode ? (
              <MoonIcon className="w-8 h-8 text-[#7fdbff]" />
            ) : (
              <SunIcon className="w-8 h-8 text-orange-400" />
            )}
          </a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
