import React from "react";

const TextArea = props => {
  return (
    <>
      <textarea
        rows="8"
        style={{ width: "100%" }}
        id="birolipsum"
        defaultValue={props.textBlob}
        ref={props.textAreaRef}
        readOnly
      ></textarea>
    </>
  );
};

export default React.memo(TextArea);
