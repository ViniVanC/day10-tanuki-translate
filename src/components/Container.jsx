import React from "react";
import { Textarea } from "./Textarea";
import { Controls } from "./Controls";
import { FaExchangeAlt } from "react-icons/fa";
import { Button } from "./Button";
import { Select } from "./Select/Select";
import useTranslate from "../hook/useTranslate";

export const Container = () => {
  const {
    userText,
    setUserText,
    translate,
    setTranslate,
    translatePlaceholder,
    userSelectedTag,
    setUserSelectedTag,
    translateSelectedTag,
    setTranslateSelectedTag,
    handleExchangeLang,
    handleTranslate,
    handleSpeechText,
    handleCopyText,
  } = useTranslate();

  return (
    <div className="rounded-lg  bg-teal-4 p-[30px] text-teal-1 drop-shadow-lg max-md:p-[20px] max-sm:w-min">
      <div className="mb-[30px] flex w-full min-w-[250px] items-center justify-center gap-[20px] max-sm:flex-col sm:min-h-[250px]">
        <div className="flex flex-col items-end gap-[10px]">
          <Textarea
            placeholder="Enter text"
            value={userText}
            handleChange={setUserText}
          />
          <div className="flex items-center gap-[20px] pr-[10px]">
            <Select lang={userSelectedTag} setSelected={setUserSelectedTag} />
            <Controls
              handleSpeechText={() =>
                handleSpeechText(userText, userSelectedTag)
              }
              handleCopyText={() => handleCopyText(userText)}
            />
          </div>
        </div>
        <FaExchangeAlt
          className="cursor-pointer transition duration-300 hover:scale-110 active:scale-95"
          onClick={handleExchangeLang}
        />
        <div className="flex flex-col items-end gap-[10px]">
          <Textarea
            placeholder={translatePlaceholder}
            disabled={true}
            readOnly={true}
            value={translate}
            handleChange={setTranslate}
          />
          {/* <div className="h-[2px] w-full bg-teal-1/30" /> */}
          <div className="flex items-center gap-[20px] pr-[10px]">
            <Select
              lang={translateSelectedTag}
              setSelected={setTranslateSelectedTag}
            />
            <Controls
              handleSpeechText={() =>
                handleSpeechText(translate, translateSelectedTag)
              }
              handleCopyText={() => handleCopyText(translate)}
            />
          </div>
        </div>
      </div>
      <Button handleClick={handleTranslate}>Translate</Button>
    </div>
  );
};
