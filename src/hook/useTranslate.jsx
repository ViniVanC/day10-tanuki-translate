import React, { useState } from "react";

const useTranslate = () => {
  const [userText, setUserText] = useState("");
  const [userSelectedTag, setUserSelectedTag] = useState("Ukrainian");
  const [translate, setTranslate] = useState("");
  const [translateSelectedTag, setTranslateSelectedTag] = useState("English");

  function handleExchangeLang() {
    let tempText = userText;
    let tempLang = userSelectedTag;
    setUserText(translate);
    setTranslate(tempText);
    setUserSelectedTag(translateSelectedTag);
    setTranslateSelectedTag(tempLang);
  }

  return {
    userText,
    setUserText,
    translate,
    setTranslate,
    userSelectedTag,
    setUserSelectedTag,
    translateSelectedTag,
    setTranslateSelectedTag,
    handleExchangeLang,
  };
};

export default useTranslate;
