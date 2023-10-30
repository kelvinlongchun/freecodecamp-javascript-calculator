import { useCalculatorContext } from "../../../../contexts/CalculatorContent";
import CalculatorButton from "../../../common/CalculatorButton";
import "./styles.scss";

const opertors = [
  { id: "add", text: "+" },
  { id: "subtract", text: "-" },
  { id: "multiply", text: "x" },
  { id: "divide", text: "÷" },
];

const OperatorButtons = () => {
  const { dispatch } = useCalculatorContext();

  const handleClick: React.MouseEventHandler = (e) => {
    const targetValue = e.currentTarget.textContent as string;
    dispatch({ type: "UPDATE_OPEATOR_VALUE", currentValue: targetValue });
  };

  return (
    <div className="operator-buttons">
      {opertors.map((data, index) => (
        <CalculatorButton
          key={`opertor-button-${index}`}
          id={data.id}
          text={data.text}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default OperatorButtons;
