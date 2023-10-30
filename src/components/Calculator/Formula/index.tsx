import { useCalculatorContext } from "../../../contexts/CalculatorContent";

const Formula = () => {
  const { state } = useCalculatorContext();

  return (
    <p>
      {state.isEvaluated
        ? state.previousValue
        : state.previousValue + state.currentValue}
    </p>
  );
};

export default Formula;
