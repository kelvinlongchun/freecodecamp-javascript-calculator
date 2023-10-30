import React, { FC } from "react";
import "./styles.scss";

interface Props {
  text: string;
  id?: string;
  onClick?: React.MouseEventHandler;
}

const CalculatorButton: FC<Props> = (props) => {
  return (
    <button className="calculator-button" id={props.id} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default CalculatorButton;
