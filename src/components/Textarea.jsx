import React from "react";

export const Textarea = ({
  placeholder,
  disabled = false,
  readOnly = false,
}) => {
  return (
    <textarea
      className="h-full w-[350px] resize-none bg-transparent p-[10px] placeholder:text-[18px] placeholder:text-teal-1"
      spellcheck="false"
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
    ></textarea>
  );
};
