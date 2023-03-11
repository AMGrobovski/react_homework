import { useCallback, useState } from "react";

const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = useCallback(() => {
    setCount((state) => state + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((state) => state - 1);
  }, []);

  const handleReset = useCallback(() => setCount(0), []);

  return {
    count,
    handleIncrement,
    handleDecrement,
    handleReset,
  };
};

export default useCounter;
