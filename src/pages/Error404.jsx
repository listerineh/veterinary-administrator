import React from "react";

const Error404 = () => {
  return (
    <div className="bg-gray-800 h-screen w-screen grid content-center justify-items-center text-center gap-4 p-10">
      <p className="text-7xl text-white">
        Error <span className="text-indigo-600 font-light">404</span>!
      </p>
      <p className="text-3xl text-white font-light">
        Go back to{" "}
        <a
          href="/"
          className="text-indigo-600 hover:text-indigo-800 cursor-pointer transition-all"
        >
          home
        </a>
        , please ;)
      </p>
    </div>
  );
};

export default Error404;
