import "./App.css";
import ToDo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";
import Library from "./Library";

function App() {
  // const time = 50;

  // const actors = [
  //   "Bappa Raj",
  //   "Omar Sani",
  //   "Salman Shah",
  //   "Jasim",
  //   "Anowar",
  //   "Rajjak",
  //   "Hero Alom",
  // ];

  // const singers = [
  //   {
  //     id: 1,
  //     name: "Dr. Mahfuz",
  //     age: 68,
  //   },
  //   {
  //     id: 2,
  //     name: "Tahsan",
  //     age: 45,
  //   },
  //   {
  //     id: 3,
  //     name: "Suvro Deb",
  //     age: 57,
  //   },
  // ];

  // library
  const books = [
    {
      id: 1,
      name: "JS Fundamental",
      price: 250,
      address: "Hauz Khas Village",
    },
    {
      id: 2,
      name: "Programming Basics",
      price: 658,
      address: "Sri Krishna Puri, Near Boring Canal Road",
    },
    {
      id: 3,
      name: "Math for Programming",
      price: 240,
      address: "R.C. Dutt Road",
    },
    {
      id: 4,
      name: "Programming for Hablu",
      price: 680,
      address: "2, MG Marg, Near High Court",
    },
  ];

  return (
    <>
      <Library books={books}></Library>
      {/* <h1>React Core Concepts</h1> */}

      {/* {actors.map((actor) => (
        <Actor actor={actor}></Actor>
      ))} */}

      {/* {
        singers.map(singer=><Singer key={singer.id} singer={singer}></Singer>)
      } */}

      {/* <ToDo task="Learn React" isDone={true} time={time}></ToDo>
      <ToDo task="Revise JS" isDone={false}></ToDo>
      <ToDo task="Take a Shower" isDone={true} time=''></ToDo> */}

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

// function Player({ name, runs }) {
//   // console.log(props);
//   return (
//     <div>
//       <h3>Name: {name}</h3>
//       <p>Runs: {runs}</p>
//     </div>
//   );
// }

// function Salami({ event, ammount = 0 }) {
//   return (
//     <div>
//       <p>Salami For: {event}</p>
//       <p>Ammount: {ammount}</p>
//     </div>
//   );
// }

/*
const { name, tech } = {
  name: "Sabbir",
  tech: "Java",
};
*/

// function Developers(props) {
//   return (
//     <div className="basic">
//       <h3>Dev Name: {props.name}</h3>
//       <p>Tech Stack: {props.tech}</p>
//     </div>
//   );
// }

export default App;
