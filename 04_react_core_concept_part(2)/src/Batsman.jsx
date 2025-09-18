import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);

  // for singles
  const handleSingles = () => {
    const updateSingleRuns = runs + 1;
    setRuns(updateSingleRuns);
  };

  // for four
  const handleFour = () => {
    const updateFourRuns = runs + 4;
    setRuns(updateFourRuns);
  };

  // for six
  const handleSix = () => {
    const updateSixRuns = runs + 6;
    const updateSixes = sixes + 1;
    setSixes(updateSixes);
    setRuns(updateSixRuns);
  };

  return (
    <div>
      <h3>Player: Bangla Batsman</h3>
      <h1>Score: {runs}</h1>
      {runs >= 50 && <p>Congrates!! you scored {runs}</p>}
      <div className="">
        <button onClick={handleSingles}>Single</button>
        <button onClick={handleFour}>Four</button>
        <button onClick={handleSix}>Six</button>
      </div>
      <p>
        <small>Six: {sixes}</small>
      </p>
      <hr />
    </div>
  );
}
