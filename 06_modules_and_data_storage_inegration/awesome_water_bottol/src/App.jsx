import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/Bottles/Bottles";

const bottlePromise = fetch("/bottles.json").then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<h1 className="mt">Loading...</h1>}>
        <Bottles bottlePromise={bottlePromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
