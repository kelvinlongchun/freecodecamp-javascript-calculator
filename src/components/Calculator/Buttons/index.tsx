import ClearButton from "./ClearButton";
import EqualsButton from "./EqualsButton";
import NumberButtons from "./NumbersButtons";
import OperatorButtons from "./OperatorButtons";
import "./styles.scss";

const Buttons = () => {
  return (
    <div className="buttons">
      <ClearButton />
      <EqualsButton />
      <NumberButtons />
      <OperatorButtons />
    </div>
  );
};

export default Buttons;
