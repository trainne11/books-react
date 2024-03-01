import React from "react";
import BookShow from "./BookShow";

function BookList({ books, deleteBook, editBook }) {
  return (
    <div className="book-list">
      {books.map((item) => (
        <BookShow
          editBook={editBook}
          deleteBook={deleteBook}
          book={item}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default BookList;
