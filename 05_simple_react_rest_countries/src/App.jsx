import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((res) => res.json());

function App() {
  return (
    <>
      <h1>In the countries:</h1>
      <Suspense fallback={<h4>Countries are loading...</h4>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
