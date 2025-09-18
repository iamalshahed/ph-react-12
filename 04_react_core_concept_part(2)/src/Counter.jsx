import { useState } from "react";

function Counter() {
  const counterStyle = {
    border: "2px solid yellow",
  };

  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newState = count + 1;
    setCount(newState);
  };

  return (
    <div style={counterStyle}>
      <h3>Count: {count}</h3>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Counter;
