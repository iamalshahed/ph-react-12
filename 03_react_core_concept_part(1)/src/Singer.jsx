import "./App.css";

export default function Singer({ singer }) {
  return (
    <li className="basic">
      <h3>Singer name: {singer.name}</h3>
      <h4>Age: {singer.age}</h4>
    </li>
  );
}
