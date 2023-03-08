import React from "react";

export const Option = ({ selected, countryCode, country }) => {
  return (
    <option className="text-teal-5" selected={selected}>
      {country}
    </option>
  );
};
