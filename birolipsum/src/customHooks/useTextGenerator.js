import { useState, useEffect, useRef } from "react";
import { shuffle } from "../utils";
let data = require("../data/dataset.json");

const useTextGenerator = () => {
  const paragraphSize = 500;
  const textAreaRef = useRef(null);
  const numParagraphs = useRef(null);
  const bolsonaroQuotes = data;
  const avatar = useRef(null);
  const [textBlob, setTextBlob] = useState("");
  const [successfulCopy, setsuccessfulCopy] = useState(false);

  const hiddenAnimation = {
    visibility: "hidden",
    opacity: "0",
    WebkitTransition: "1s",
    MozTransition: "1s",
    msTransition: "1s",
    OTransition: "1s"
  };

  const showAnimation = {
    visibility: "visible",
    opacity: "1",
    WebkitTransition: "1s",
    MozTransition: "1s",
    msTransition: "1s",
    OTransition: "1s"
  };

  useEffect(() => {
    if (textBlob !== "") {
      handleImageChange();
    }
    return () => {};
  });

  const handleValueLessThanZero = val => {
    if (val < 0) {
      return;
    }
  };

  const generateText = (quotes, paragraphNumber) => {
    shuffle(quotes);
    let i = 0;
    let text = "";
    let numP = Number(paragraphNumber);

    handleValueLessThanZero();

    while (numP > 0) {
      let paragraph = "";
      while (paragraph.length < paragraphSize) {
        paragraph += quotes[i] + " ";
        i++;

        if (i >= quotes.length) {
          i = 0;
          shuffle(quotes);
        }
      }
      text += paragraph + "\n\n";
      numP--;
    }

    return text;
  };

  const handleImageChange = () => {
    if (textBlob !== "") {
      let imgList = ["biru1", "biru2", "biru3", "biru4"];
      var rand = imgList[Math.floor(Math.random() * imgList.length)];
      avatar.current.src = `/img/${rand}.png`;
    }
  };

  const handleClick = e => {
    e.preventDefault();
    const quotes = bolsonaroQuotes.quotes;
    const numP = numParagraphs.current.value;
    const newBlob = generateText(quotes, numP);
    setTextBlob(newBlob);
    setsuccessfulCopy(false);
  };

  const copyToClipboard = e => {
    textAreaRef.current.select();
    if (textAreaRef.current.value !== "") {
      try {
        var successful = document.execCommand("copy");
        var msg = successful ? "successful" : "unsuccessful";
        console.log("Copying text command was " + msg);
      } catch (err) {
        console.error("Fallback: Oops, unable to copy", err);
      }
      e.target.focus();
      setsuccessfulCopy(true);
    }
  };

  return {
    textBlob,
    avatar,
    textAreaRef,
    numParagraphs,
    handleClick,
    copyToClipboard,
    successfulCopy,
    showAnimation,
    hiddenAnimation
  };
};

export default useTextGenerator;
