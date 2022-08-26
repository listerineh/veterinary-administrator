import { Outlet, Link, useLocation } from "react-router-dom";
import Logo from "../favicon.svg";

function Layout() {
  const location = useLocation();
  const currentURL = location.pathname;

  return (
    <div className="md:flex md:min-h-screen ">
      <div className="md:w-1/6 bg-gray-800 px-5 py-10">
        <img src={Logo} alt="Aplication logo" className="px-10 mb-2" />
        <h2 className="text-5xl md:text-2xl lg:text-3xl font-black text-center text-green-300">
          PetVet {""}
          <span className="text-white">Admin</span>
        </h2>
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
              currentURL === "/registration" ? "text-indigo-600" : "text-white"
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
      <div className="md:w-5/6 md:h-screen md:overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
