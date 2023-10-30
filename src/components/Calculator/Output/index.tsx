import { useCalculatorContext } from "../../../contexts/CalculatorContent";

const Output = () => {
  const { state } = useCalculatorContext();
  return <p id="display">{state.currentValue}</p>;
};

export default Output;
