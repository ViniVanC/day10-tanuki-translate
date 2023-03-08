import React from "react";

export const Textarea = ({
  placeholder,
  disabled = false,
  readOnly = false,
  value,
  handleChange = (f) => f,
}) => {
  return (
    <textarea
      className="h-full w-[350px] resize-none bg-transparent p-[10px] placeholder:text-[18px] placeholder:text-teal-1"
      spellCheck={false}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    ></textarea>
  );
};
