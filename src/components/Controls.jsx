import React from "react";
import { FaCopy, FaVolumeUp } from "react-icons/fa";

export const Controls = () => {
  return (
    <div className="flex items-center gap-[20px]">
      <FaVolumeUp className=" cursor-pointer" />
      <FaCopy className=" cursor-pointer" />
      <select></select>
    </div>
  );
};
