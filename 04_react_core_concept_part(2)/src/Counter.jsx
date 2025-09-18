import { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newState = count + 1;
    setCount(newState);
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <hr />
    </div>
  );
}

export default Counter;
