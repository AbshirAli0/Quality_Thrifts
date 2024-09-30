import React from "react";

function Header({currentUser, navigate, handleSignOut}) {
  return (
    <>
      <div className="text-2x font-bold text-right">
        <p>Signed in as: {currentUser?.email}</p>
        <button
          onClick={handleSignOut}
          className="w-50 bg-red-600 text-white p-1 rounded hover:bg-red-900 mt-1"
        >
          Sign Out
        </button>
      </div>
      <h2 className="text-5xl mt-4 text-center font-bold">Quality Thrifts</h2>
      <nav className="text-center mt-6 ">
        <a
          onClick={() => navigate("/clothes")}
          className="nav-link text-white hover:text-gray-400 text-xl"
        >
          Home
        </a>
        <a
          onClick={() => navigate("/cart")}
          className="nav-link text-white hover:text-gray-400 text-xl"
        >
          Cart
        </a>
        <a
          onClick={() => navigate("/about")}
          className="nav-link text-white hover:text-black-700 text-xl"
        >
          About
        </a>
      </nav>
    </>
  );
}

export default Header;
