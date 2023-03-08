import React from "react";
import { Textarea } from "./Textarea";
import { Controls } from "./Controls";
import { FaExchangeAlt } from "react-icons/fa";
import { Button } from "./Button";

export const Container = () => {
  return (
    <div className="rounded-lg  bg-teal-4 p-[30px] text-teal-1 max-sm:w-min">
      <div className="flex h-[250px] flex-wrap justify-center">
        <Textarea placeholder="Enter text" />
        <div className="h-full w-[2px] bg-teal-1/30" />
        <Textarea placeholder="Translation" disabled={true} readOnly={true} />
      </div>
      <div className="h-[2px] w-full bg-teal-1/30" />
      <div className="mb-[20px] flex items-center justify-between p-[10px]">
        <Controls />
        <FaExchangeAlt className=" cursor-pointer" />
        <Controls />
      </div>
      <Button>Translate</Button>
    </div>
  );
};
