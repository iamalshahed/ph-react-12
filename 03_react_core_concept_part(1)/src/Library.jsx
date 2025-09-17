import Books from "./Books";

export default function Library({ books }) {
  return (
    <div>
      <h2>My Book Collections</h2>
      <h2>Book Length: {books.length}</h2>

      <div>
        {books.map((book) => (
          <Books key={book.id} book={book}></Books>
        ))}
      </div>
    </div>
  );
}
