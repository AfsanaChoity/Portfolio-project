import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router";
const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // const [isDark, setIsDark] = useState(() => {
  //   return localStorage.getItem("theme") === "dark";
  // });

  // useEffect(() => {
  //   if (isDark) {
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //   }
  // }, [isDark]);

  // const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="navbar  xl:px-16 bg-base-100 dark:bg-[#1F3434]  fixed top-0 left-0 right-0 z-50 pt-4">
      <div className="navbar-start">
        <div className="dropdown ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-black dark:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow text-black dark:text-white "
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#profile">Profile</a>
            </li>
            <li>
              <a href="#courses">Courses</a>
            </li>
            {/* <li>
              <a href="#expertise">Expertise</a>
            </li> */}
            <li>
              <a href="#research">Research</a>
            </li>
            <li>
              <a href="#publications">Publications</a>
            </li>
          </ul>
        </div>
        <a
          href="#home"
          className="btn btn-link md:text-2xl lg:text-3xl  xl:text-4xl no-underline hover:no-underline"
        >
          {/* <img className="w-32 h-10" src="/logo3.png" alt="logo" /> */}
          <span className="hidden md:inline text-black dark:text-white font-bold ">
            M.F. Wahid
          </span>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-2 menu-xl text-black dark:text-white font-medium">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#profile">Profile</a>
          </li>
          <li>
            <a href="#courses">Courses</a>
          </li>
          {/* <li>
            <a href="#expertise">Expertise</a>
          </li> */}
          <li>
            <a href="#research">Research</a>
          </li>
          <li>
            <a href="#publications">Publications</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <button
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} + mode`}
          // className="text-2xl text-white dark:text-yellow-300 absolute top-6 right-6 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          className="cursor-pointer text-2xl text-white dark:text-yellow-300 p-2 rounded-full bg-black dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors mr-2"
        // aria-label="Toggle Theme"
        >
          {/* {isDark ? <FaSun /> : <FaMoon />} */}
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
        <div className="border-l border-gray-400 h-12 mr-5"></div>
        <button className="btn bg-white text-black font-medium border-[#e5e5e5] ">
          <a  href="#contact" className="flex gap-1 items-center">Contact
            <svg
              aria-label="Email icon"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="black"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
          </a>
          {/* Contact */}

        </button>
      </div>
    </div>
  );
};

export default Navbar;
