import React from "react";

import "./Options.scss";

const Options = (props) => {
  const options = [
    {
      text: "Mujer",
      handler: props.actionProvider.handleJavascriptQuiz,
      id: 1,
    },
    { text: "Hombre", handler: () => {}, id: 2 },
    { text: "Zapatillas", handler: () => {}, id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;