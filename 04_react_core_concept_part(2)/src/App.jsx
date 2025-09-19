import "./App.css";
import Counter from "./Counter";
import Batsman from "./Batsman";
import Users from "./Users";
import Friends from "./Friends";
import { Suspense } from "react";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const fetchFriends = async () => {
  const res = fetch("https://jsonplaceholder.typicode.com/users");
  return (await res).json();
};

function App() {
  const freindsPromise = fetchFriends();

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
      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      <Suspense fallback={<h3>Friends are comming...</h3>}>
        <Friends freindsPromise={freindsPromise}></Friends>
      </Suspense>

      <Batsman></Batsman>
      <Counter></Counter>

      <h1>Vite + React</h1>
      <button onClick={handleClicked}>Click me</button>
      {/* <button>Click me</button> */}
      <br />
      <button onClick={handleClicked2}>Click me 2</button>

      <button onClick={() => handleAdd5(20)}>Addition 20</button>
    </>
  );
}

export default App;
