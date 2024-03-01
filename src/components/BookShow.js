import React from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, deleteBook, editBook }) {
  let [edit, setEdit] = React.useState(false);
  return (
    <div className="book-show">
      <img alt="books" src="https://picsum.photos/200/300" />
      <div>
        {edit ? (
          <BookEdit
            edit={setEdit}
            editBook={editBook}
            PreTitle={book.title}
            id={book.id}
          />
        ) : (
          `${book.title}`
        )}
      </div>
      <div className="actions">
        <button onClick={() => setEdit(!edit)} className="edit">
          Edit
        </button>
        <button onClick={() => deleteBook(book.id)} className="delete">
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
