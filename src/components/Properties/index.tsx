import React from "react";

const Properties = () => {
  return (
    <div className="bg-slate-200 flex-none w-80 px-5 pt-5">
      <span className="text-lg">Click element to change its properties</span>

      <input
        className="mt-4 bg-white p-2 rounded-md"
        placeholder="Background Color"
      />

      <input
        className="mt-4 bg-white p-2 rounded-md"
        placeholder="Text Color"
      />

      <input
        className="mt-4 bg-white p-2 rounded-md"
        placeholder="Text Value "
      />

      <div className="mt-8">
        <span>More properties can be added easily...</span>
      </div>
    </div>
  );
};

export default Properties;
