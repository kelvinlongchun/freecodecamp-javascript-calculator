import { useCalculatorContext } from "../../../../contexts/CalculatorContent";
import CalculatorButton from "../../../common/CalculatorButton";
import "./styles.scss";

const ClearButton = () => {
  const calculator = useCalculatorContext();

  const handleClick = () => calculator.dispatch({ type: "RESET" });

  return <CalculatorButton id="clear" text="AC" onClick={handleClick} />;
};

export default ClearButton;
