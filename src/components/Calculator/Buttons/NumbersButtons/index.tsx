import { useCalculatorContext } from "../../../../contexts/CalculatorContent";
import CalculatorButton from "../../../common/CalculatorButton";
import "./styles.scss";

const numbers = [
  { id: "one", text: "1" },
  { id: "two", text: "2" },
  { id: "three", text: "3" },
  { id: "four", text: "4" },
  { id: "five", text: "5" },
  { id: "six", text: "6" },
  { id: "seven", text: "7" },
  { id: "eight", text: "8" },
  { id: "nine", text: "9" },
  { id: "zero", text: "0" },
  { id: "decimal", text: "." },
];

const NumberButtons = () => {
  const { dispatch } = useCalculatorContext();

  const handleClick: React.MouseEventHandler = (e) => {
    const targetValue = e.currentTarget.textContent as string;
    dispatch({
      type: "UPDATE_NUMBER_VALUE",
      currentValue: targetValue,
    });
  };

  return (
    <div className="number-buttons">
      {numbers.map((data, index) => (
        <CalculatorButton
          key={`number-button-${index}`}
          id={data.id}
          text={data.text}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default NumberButtons;
