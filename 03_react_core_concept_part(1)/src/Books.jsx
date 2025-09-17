export default function Books({ book }) {
  return (
    <div>
      <h3>Name: {book.name}</h3>
      <h3>Price: {`$${book.price}`}</h3>
      <h3>Address: {book.address}</h3>
      <hr />
    </div>
  );
}
