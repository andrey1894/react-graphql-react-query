import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className="container mb-3">
      <h3>{count}</h3>
      <button className="btn btn-primary" onClick={increment}>+</button>
      <button className="btn btn-primary" onClick={decrement}>-</button>
    </div>
  )
};

export default Counter;