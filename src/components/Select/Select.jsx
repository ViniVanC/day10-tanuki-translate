import React from "react";
import { countries } from "../../countries.js";
import { Option } from "./Option";

export const Select = ({ lang }) => {
  return (
    <select className="border-none bg-transparent outline-none">
      {Object.entries(countries).map((item, i) => (
        <Option
          key={item[0]}
          selected={item[0] === lang ? true : false}
          countryCode={item[0]}
          country={item[1]}
        />
      ))}
    </select>
  );
};
