import "./App.css";
import ToDo from "./Todo";

function App() {
  const time = 50;
  return (
    <>
      <h1>React Core Concepts</h1>
      <ToDo task="Learn React" isDone={true} time={time}></ToDo>
      <ToDo task="Revise JS" isDone={false}></ToDo>
      <ToDo task="Take a Shower" isDone={true} time=''></ToDo>

      {/* components */}
      {/* <Developers name="AL Shahed" tech="JavaScript"></Developers>

      <Developers name="Bokchoy" tech="Python"></Developers>

      <Player name="Tamim" runs="5000"></Player>

      <Player name="Mushi" runs="5462"></Player>

      <Salami event="Rojar Eid" ammount="20"></Salami>
      <Salami event="Graduation"></Salami> */}
    </>
  );
}

// const { name, runs } = { name: "Tamim", runs: '5000' };

function Player({ name, runs }) {
  // console.log(props);
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Runs: {runs}</p>
    </div>
  );
}

function Salami({ event, ammount = 0 }) {
  return (
    <div>
      <p>Salami For: {event}</p>
      <p>Ammount: {ammount}</p>
    </div>
  );
}

/*
const { name, tech } = {
  name: "Sabbir",
  tech: "Java",
};
*/

function Developers(props) {
  return (
    <div className="basic">
      <h3>Dev Name: {props.name}</h3>
      <p>Tech Stack: {props.tech}</p>
    </div>
  );
}

export default App;
