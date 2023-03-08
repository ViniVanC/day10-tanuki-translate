import React from "react";

export const Button = ({ children, handleClick = (f) => f }) => {
  return (
    <button
      className="w-full rounded-lg bg-teal-2 p-[10px] text-[20px]
      font-bold text-teal-5 drop-shadow-lg transition duration-200 hover:scale-[1.03] active:scale-95"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
