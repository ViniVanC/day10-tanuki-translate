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
      className="h-[250px] w-[100%] resize-none bg-transparent p-[10px] placeholder:text-[18px] placeholder:text-teal-1 max-sm:h-[150px] sm:w-[350px]"
      spellCheck={false}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    ></textarea>
  );
};
