import { useCalculatorContext } from "../../../../contexts/CalculatorContent";
import CalculatorButton from "../../../common/CalculatorButton";
import "./styles.scss";

const EqualsButton = () => {
  const { dispatch } = useCalculatorContext();

  const handleClick = () => {
    dispatch({ type: "COUNT" });
  };
  return <CalculatorButton id="equals" text="=" onClick={handleClick} />;
};

export default EqualsButton;
