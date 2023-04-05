import React from "react";

const Header = () => {
  return (
    <div className="bg-blue-200 px-5 py-2 flex justify-between align-middle">
      <span className="text-lg">Assignment - Orgware</span>

      <button className="bg-blue-500 text-white px-5 py-1 rounded-md">
        Save Layout
      </button>
    </div>
  );
};

export default Header;
