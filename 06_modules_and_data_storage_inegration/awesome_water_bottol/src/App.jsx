import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/Bottles/Bottles";

const bottlePromise = fetch("/bottles.json").then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Bottles bottlePromise={bottlePromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
