import React from "react";
import { FaCopy, FaVolumeUp } from "react-icons/fa";

export const Controls = ({ handleSpeechText, handleCopyText }) => {
  return (
    <div className="flex items-center gap-[20px]">
      <FaVolumeUp
        className="cursor-pointer transition duration-300 hover:scale-110 active:scale-95"
        onClick={handleSpeechText}
      />
      <FaCopy
        className="cursor-pointer transition duration-300 hover:scale-110 active:scale-95"
        onClick={handleCopyText}
      />
    </div>
  );
};
