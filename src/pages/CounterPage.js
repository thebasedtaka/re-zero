import { useState, useEffect } from "react";
import Button from "../components/Button";

function useLogCount(initialCount) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return {
    count,
    handleClick,
  };
}

function CounterPage({ initialCount }) {
  const { count, handleClick } = useLogCount(initialCount);

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={handleClick}>increment</Button>
    </div>
  );
}

export default CounterPage;
