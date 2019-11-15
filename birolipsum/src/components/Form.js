import React from "react";

const Form = props => {
  return (
    <>
      <form action="#" title="Paragráfos:">
        <label htmlFor="paragrafos">Parágrafos</label>
        <input
          label="paragrafos"
          type="number"
          name="paragrafos"
          style={{ width: "15%" }}
          className="form-control"
          id="numP"
          //   defaultValue={numParagraphs}
          ref={props.numParagraphs}
          defaultValue="1"
          min="0"
        />
        <button
          type="button"
          id="generate"
          onClick={e => {
            props.handleClick(e);
          }}
        >
          Gerar
        </button>
      </form>
    </>
  );
};

export default React.memo(Form);
