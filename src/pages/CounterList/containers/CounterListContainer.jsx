import { useCallback, useState } from "react";
import { v4 as uuid } from "uuid";

import Layout from "../components/Layout";
import { isEven } from "../utils/isEven";

const CounterListContainer = () => {
  const [counters, setCounters] = useState([]);

  const handleAddCounter = () => {
    const newCounter = {
      id: uuid(),
      countValue: 0,
    };

    setCounters((state) => {
      const updatedCounters = state.map((counter) => {
        return {
          ...counter,
          countValue: isEven(counter.countValue)
            ? counter.countValue + 1
            : counter.countValue,
        };
      });

      updatedCounters.push(newCounter);

      return updatedCounters;
    });
  };

  const handleRemoveCounter = useCallback((id) => {
    setCounters((state) => {
      const countersCopy = structuredClone(state);
      const counterIndex = countersCopy.findIndex(
        (counter) => counter.id === id
      );
      countersCopy.splice(counterIndex, 1);

      return countersCopy.map((counter) => {
        return {
          ...counter,
          countValue: !isEven(counter.countValue)
            ? counter.countValue - 1
            : counter.countValue,
        };
      });
    });
  }, []);

  const handleIncrement = useCallback((id) => {
    setCounters((state) => {
      const countersCopy = structuredClone(state);
      const foundCounter = countersCopy.find((counter) => counter.id === id);

      foundCounter.countValue += 1;

      return countersCopy;
    });
  }, []);

  const handleDecrement = useCallback((id) => {
    setCounters((state) => {
      const countersCopy = structuredClone(state);
      const foundCounter = countersCopy.find((counter) => counter.id === id);

      foundCounter.countValue -= 1;

      return countersCopy;
    });
  }, []);

  const handleReset = useCallback((id) => {
    setCounters((state) => {
      const countersCopy = structuredClone(state);
      const foundCounter = countersCopy.find((counter) => counter.id === id);

      foundCounter.countValue = 0;

      return countersCopy;
    });
  }, []);

  const handleResetCounters = useCallback(() => setCounters([]), []);

  const totalSum = counters.reduce(
    (result, { countValue }) => countValue + result,
    0
  );

  return (
    <Layout
      counters={counters}
      handleAddCounter={handleAddCounter}
      handleRemoveCounter={handleRemoveCounter}
      handleResetCounters={handleResetCounters}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleReset={handleReset}
      totalSum={totalSum}
    />
  );
};

export default CounterListContainer;
