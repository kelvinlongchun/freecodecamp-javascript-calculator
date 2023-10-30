import Buttons from "./Buttons";
import Output from "./Output";
import Formula from "./Formula";
import CalculatorContextWrapper from "../../contexts/CalculatorContent";
import "./styles.scss";

const Calculator = () => {
  return (
    <CalculatorContextWrapper>
      <div className="calculator">
        <div className="display-area">
          <Formula />
          <Output />
        </div>
        <Buttons />
      </div>
    </CalculatorContextWrapper>
  );
};

export default Calculator;
