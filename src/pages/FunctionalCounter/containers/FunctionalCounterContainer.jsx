import CounterView from "../../../commonComponents/CounterView";
import { useCounter } from "../../../hooks";

const FunctionalCounterContainer = () => {
  const { count, handleIncrement, handleDecrement, handleReset } =
    useCounter(0);

  return (
    <CounterView
      counterValue={count}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleReset={handleReset}
    />
  );
};

export default FunctionalCounterContainer;
