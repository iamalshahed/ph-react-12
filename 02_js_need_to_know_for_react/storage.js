const text = document.getElementById("text");
const email = document.getElementById("email");

const handleAddToStorage = () => {
  const name = text.value;
  const id = email.value;
  // localStorage.setItem("name", name);

  // create an object
  const data = { id, name };
  localStorage.setItem(id, JSON.stringify(data));
};

const storedItem = localStorage.getItem("5");

const handleClear = () => {
  localStorage.clear();
};
