import React, { useState } from "react";

const useTranslate = () => {
  const [userText, setUserText] = useState("");
  const [translate, setTranslate] = useState("");
  const [translatePlaceholder, setTranslatePlaceholder] = useState("Translate");
  const [userSelectedTag, setUserSelectedTag] = useState("Ukrainian");
  const [translateSelectedTag, setTranslateSelectedTag] = useState("English");

  function handleExchangeLang() {
    let tempText = userText;
    let tempLang = userSelectedTag;
    setUserText(translate);
    setTranslate(tempText);
    setUserSelectedTag(translateSelectedTag);
    setTranslateSelectedTag(tempLang);
  }

  const handleTranslate = () => {
    if (userText === "") {
      setTranslate("");
    }

    let text = userText.trim(),
      translateFrom = userSelectedTag,
      translateTo = translateSelectedTag;
    if (!text) return;

    setTranslatePlaceholder("Translation...");
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setTranslate(data.responseData.translatedText);
        data.matches.forEach((data) => {
          if (data.id === 0) {
            setTranslate(data.translation);
          }
        });
        setTranslatePlaceholder("Translate");
      });
  };

  let voiceMessage;

  const handleSpeechText = (text, lang) => {
    voiceMessage = new SpeechSynthesisUtterance(text);
    voiceMessage.lang = lang;
    voiceMessage.pitch = 1;
    voiceMessage.rate = 1;
    window.speechSynthesis.speak(voiceMessage);
  };

  const handleCopyText = (text) => {
    return navigator.clipboard.writeText(text);
  };

  return {
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
  };
};

export default useTranslate;
