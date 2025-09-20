import { Suspense } from "react";
import "./App.css";
import TaskOne from "./TaskOne";
import TaskTwo from "./TaskTwo";
import Preloader from "./Preloader";

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

function App() {
  const fetchUsersPromise = fetchUsers();

  return (
    <>
      <TaskOne></TaskOne>

      <Suspense fallback={<Preloader></Preloader>}>
        <TaskTwo fetchUsersPromise={fetchUsersPromise}></TaskTwo>
      </Suspense>
    </>
  );
}

export default App;
