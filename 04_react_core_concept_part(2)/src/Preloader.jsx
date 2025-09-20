export default function Preloader() {
  const img = {
    width: "150px",
  };

  return (
    <div>
      <img
        style={img}
        src="https://cdn.pixabay.com/animation/2023/11/09/03/05/03-05-45-320_512.gif"
        alt="Loading"
      />
    </div>
  );
}
