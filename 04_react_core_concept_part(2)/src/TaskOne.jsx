import { useState } from "react";

export default function TaskOne() {
  const flex = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  };

  const mb = {
    marginBottom: "50px",
  };

  const [count, setCount] = useState(0);

  // handleAdd
  const handleAdd = () => {
    const addCount = count + 1;
    setCount(addCount);
  };

  // handleSubs
  const handleSubs = () => {
    const subs = count - 1;
    setCount(subs);
  };

  // handle reset
  const handleReset = () => {
    const reset = count * 0;
    setCount(reset);
  };

  return (
    <div style={mb}>
      <h1>Count: {count}</h1>

      <div style={flex}>
        <button onClick={handleAdd}>Count + 1</button>
        <button onClick={handleSubs}>Count - 1</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <br />
      <small>task 1 done...</small>
      <hr />
    </div>
  );
}
