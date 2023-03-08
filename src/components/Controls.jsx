import React from "react";
import { FaCopy, FaVolumeUp } from "react-icons/fa";

export const Controls = ({ handleSpeechText, handleCopyText }) => {
  return (
    <div className="flex items-center gap-[20px]">
      <FaVolumeUp className="cursor-pointer" onClick={handleSpeechText} />
      <FaCopy className="cursor-pointer" onClick={handleCopyText} />
    </div>
  );
};
