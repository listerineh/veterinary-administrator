import { Outlet, Link, useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import Logo from "../favicon.svg";

function Layout({ theme, handleThemeSwitch }) {
  const location = useLocation();
  const currentURL = location.pathname;

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="md:flex md:min-h-screen md:max-h-screen">
            <div className="md:w-1/6 bg-gray-900 px-5 sm:py-10 py-5">
              <div className="flow-root">
                <div className="float-right block">
                  <button
                    type="button"
                    onClick={handleThemeSwitch}
                    className="p-2 md:mt-2 text-white text-lg hover:animate-pulse"
                  >
                    {theme === "light" ? (
                      <FontAwesomeIcon
                        className="block h-6 w-6 hover:text-yellow-300"
                        icon={faSun}
                      />
                    ) : (
                      <FontAwesomeIcon
                        className="block h-6 w-6 hover:text-gray-400"
                        icon={faMoon}
                      />
                    )}
                  </button>
                </div>
                <div className="sm:float-left float-right">
                  <Link
                    to=""
                    className="text-5xl font-black text-white hover:text-green-300"
                  >
                    <div className="flex">
                      <img
                        src={Logo}
                        alt="Web page Logo"
                        className="sm:w-12 w-10 sm:h-12 h-10"
                      />
                      <h1 className="text-3xl pl-2 mt-2 sm:block hidden">
                        Pet<span className="text-indigo-600">Vet</span>
                      </h1>
                    </div>
                  </Link>
                </div>
                <div className="float-left block sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    {open ? (
                      <FontAwesomeIcon className="block h-6 w-6" icon={faX} />
                    ) : (
                      <FontAwesomeIcon
                        className="block h-6 w-6"
                        icon={faBars}
                      />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
              <Disclosure.Panel className="sm:hidden">
                <div className="p-2 pt-2 pb-3 space-y-0">
                  <Link
                    to="/registration"
                    className={`${
                      currentURL === "/registration"
                        ? "bg-indigo-300 text-indigo-900 font-bold"
                        : "text-white"
                    }  pl-5 py-2 block ml-5 hover:text-indigo-200 rounded-lg shadow`}
                  >
                    Registration
                  </Link>
                  <Link
                    to="/listing"
                    className={`${
                      currentURL === "/listing"
                        ? "bg-indigo-300 text-indigo-900 font-bold"
                        : "text-white"
                    }  pl-5 py-2 block ml-5 hover:text-indigo-200 rounded-lg shadow`}
                  >
                    Listing
                  </Link>
                  <Link
                    to="/reports"
                    className={`${
                      currentURL === "/reports"
                        ? "bg-indigo-300 text-indigo-900 font-bold"
                        : "text-white"
                    }  pl-5 py-2 block ml-5 hover:text-indigo-200 rounded-lg shadow`}
                  >
                    Reports
                  </Link>
                </div>
              </Disclosure.Panel>

              <nav className="mt-10 pl-2 sm:block hidden">
                <Link
                  to="/registration"
                  className={`${
                    currentURL === "/registration"
                      ? "text-indigo-300 font-bold"
                      : "text-white font-light"
                  }  text-xl block mt-2 hover:text-green-300`}
                >
                  Registration
                </Link>
                <Link
                  to="/listing"
                  className={`${
                    currentURL === "/listing"
                      ? "text-indigo-300 font-bold"
                      : "text-white font-light"
                  }  text-xl block mt-2 hover:text-green-300`}
                >
                  Listing
                </Link>
                <Link
                  to="/reports"
                  className={`${
                    currentURL === "/reports"
                      ? "text-indigo-300 font-bold"
                      : "text-white font-light"
                  }  text-xl block mt-2 hover:text-green-300`}
                >
                  Reports
                </Link>
              </nav>
            </div>
            <div className="md:w-5/6 md:h-screen md:overflow-y-auto dark:bg-black transition-all">
              <Outlet />
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}

export default Layout;
