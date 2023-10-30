import { createContext, useContext, useReducer } from "react";
import type { FC, ReactNode, Reducer } from "react";

interface State {
  currentValue: string;
  previousValue: string;
  isEvaluated: boolean;
}

interface Action extends Partial<State> {
  type:
    | "UPDATE_NUMBER_VALUE"
    | "UPDATE_OPEATOR_VALUE"
    | "NEW_VALUE"
    | "COUNT"
    | "RESET";
}

interface ContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const INITIAL_STATE: State = {
  currentValue: "0",
  previousValue: "",
  isEvaluated: false,
};

const getNumberValue = (currentValue: string, newValue: string) =>
  newValue === "." && currentValue.includes(".")
    ? currentValue
    : currentValue === "0" && newValue !== "."
    ? newValue
    : currentValue + newValue;

const isNumber = (value: string) => !isNaN(Number(value));

const getAnswer = (expression: string) =>
  eval(
    expression.replaceAll("x", "*").replaceAll("÷", "/")
  ).toString() as string;

const reducer: Reducer<State, Action> = (state, action) => {
  const { currentValue, previousValue, isEvaluated } = state;

  switch (action.type) {
    case "UPDATE_NUMBER_VALUE":
      if (action.currentValue) {
        return isEvaluated
          ? {
              ...INITIAL_STATE,
              currentValue: getNumberValue("0", action.currentValue),
              isEvaluated: false,
            }
          : isNumber(currentValue)
          ? {
              ...state,
              currentValue: getNumberValue(currentValue, action.currentValue),
            }
          : {
              ...state,
              currentValue: getNumberValue("0", action.currentValue),
              previousValue: previousValue + currentValue,
            };
      }
      break;
    case "UPDATE_OPEATOR_VALUE":
      if (action.currentValue) {
        return isEvaluated
          ? {
              ...state,
              currentValue: action.currentValue,
              previousValue: currentValue,
              isEvaluated: false,
            }
          : action.currentValue === "-" &&
            currentValue[currentValue.length - 1] !== "-"
          ? {
              ...state,
              currentValue: currentValue + action.currentValue,
            }
          : isNumber(currentValue)
          ? {
              ...state,
              currentValue: action.currentValue,
              previousValue: previousValue + currentValue,
            }
          : { ...state, currentValue: action.currentValue };
      }
      break;
    case "COUNT":
      if (!isEvaluated) {
        return {
          ...state,
          currentValue: getAnswer(previousValue + currentValue),
          previousValue: previousValue + currentValue,
          isEvaluated: true,
        };
      }
      break;
    case "RESET":
      return { ...INITIAL_STATE };
  }
  return state;
};

const CalculatorContext = createContext<ContextType | null>(null);

const useCalculatorContext = () => useContext(CalculatorContext) as ContextType;

const CalculatorContextWrapper: FC<{ children: ReactNode }> = (props) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <CalculatorContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorContextWrapper;
export { useCalculatorContext };
