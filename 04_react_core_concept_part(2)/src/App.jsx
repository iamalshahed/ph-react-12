import "./App.css";

function App() {
  function handleClicked() {
    alert("I am clicked!");
  }

  const handleClicked2 = () => {
    alert("clicked me two!!");
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <button onClick={handleClicked}>Click me</button>
      {/* <button>Click me</button> */}
      <br />
      <button onClick={handleClicked2}>Click me 2</button>

      <button onClick={()=>handleAdd5(20)}>Addition 20</button>
    </>
  );
}

export default App;
