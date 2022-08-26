import { Outlet, Link, useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import Logo from "../favicon.svg";

function Layout({ theme, handleThemeSwitch }) {
  const location = useLocation();
  const currentURL = location.pathname;

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="md:flex md:min-h-screen md:max-h-screen">
            <div className="md:w-1/6 bg-gray-800 dark:bg-gray-900 px-5 py-10">
              <img src={Logo} alt="Aplication logo" className="px-10 mb-2" />
              <h2 className="text-5xl md:text-2xl lg:text-3xl text-center font-normal text-green-300">
                PetVet {""}
                <span className="text-white font-light">Admin</span>
              </h2>
              <div className="grid content-center md:mt-10">
                <button
                  type="button"
                  onClick={handleThemeSwitch}
                  className="p-2 text-white text-4xl md:text-xl lg:text-2xl"
                >
                  {theme === "light" ? (
                    <FontAwesomeIcon
                      icon={faSun}
                      className="hover:text-yellow-300 transition-all"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faMoon}
                      className="hover:text-gray-400 transition-all"
                    />
                  )}
                </button>
              </div>
              <nav className="mt-10 ml-5">
                <Link
                  to="/"
                  className={`${
                    currentURL === "/" ? "text-indigo-600" : "text-white"
                  }  text-xl font-bold block mt-2 hover:text-green-300 transition-all`}
                >
                  Home
                </Link>
                <Link
                  to="/registration"
                  className={`${
                    currentURL === "/registration"
                      ? "text-indigo-600"
                      : "text-white"
                  }  text-xl font-bold block mt-2 hover:text-green-300 hover: transition-all`}
                >
                  Registration
                </Link>
                <Link
                  to="/listing"
                  className={`${
                    currentURL === "/listing" ? "text-indigo-600" : "text-white"
                  }  text-xl font-bold block mt-2 hover:text-green-300 transition-all`}
                >
                  Listing
                </Link>
                <Link
                  to="/reports"
                  className={`${
                    currentURL === "/reports" ? "text-indigo-600" : "text-white"
                  }  text-xl font-bold block mt-2 hover:text-green-300 transition-all`}
                >
                  Reports
                </Link>
              </nav>
            </div>
            <div className="md:w-5/6 md:h-screen md:overflow-y-auto dark:bg-black">
              <Outlet />
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}

export default Layout;
