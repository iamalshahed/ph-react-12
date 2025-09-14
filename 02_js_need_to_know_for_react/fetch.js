const person = {
  name: "Shahed",
  age: 17,
  friends: ["shamim", "mazharul", "oshan"],
  family: {
    fotherName: "Andorkillah",
    motherName: "BandarBan",
  },
};

console.log(person);

const keys = Object.keys(person);
console.log(keys); // object keys

const value = Object.values(person);
console.log(value);

const personJson = JSON.stringify(person);
console.log(personJson); // json data

const objData = JSON.parse(personJson);
console.log(objData); // convert json data to an object

// fetch
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((data) => console.log(data));

const friendCircle = [
  {
    name: "maruf",
  },
  {
    name: "oshan",
  },
  {
    name: "bokchoy",
  },
];

const newData = {
  name: "Alamin",
};

const newFrnd = {
  name: "Mazharul",
};

const newArr = [...friendCircle, newData];
console.log(newArr);

const remainingFriends = friendCircle.filter((f) => f.name !== "Alamin");
console.log(remainingFriends);

const finalArr = [...remainingFriends, newFrnd];
console.log(finalArr);
