import React from "react";
import TextArea from "./TextArea";
import Form from "./Form";
import Avatar from "./Avatar";
import useTextGenerator from "../customHooks/useTextGenerator";

const TextGenerator = () => {
  const {
    textBlob,
    avatar,
    textAreaRef,
    numParagraphs,
    handleClick,
    copyToClipboard,
    successfulCopy,
    showAnimation,
    hiddenAnimation
  } = useTextGenerator();
  return (
    <>
      <div className="grid">
        <Avatar avatar={avatar} />
        <div style={{ textAlign: "right" }}>
          <Form numParagraphs={numParagraphs} handleClick={handleClick} />
        </div>
      </div>
      <blockquote
        style={successfulCopy ? { borderRight: "5px solid #00e500" } : null}
        className="quote"
      >
        <TextArea textBlob={textBlob} textAreaRef={textAreaRef} />
        <footer>Biroliro</footer>
        <span style={successfulCopy ? showAnimation : hiddenAnimation}>
          Text copiado com sucesso!{" "}
        </span>
        <button type="button" onClick={e => copyToClipboard(e)}>
          Copiar texto
        </button>
        {/* <div id="containerBlock">
          <br />
          <br />
          <div id="twitterButtonContainer"></div>
        </div> */}
      </blockquote>
    </>
  );
};

export default React.memo(TextGenerator);
