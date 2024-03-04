import React from "react";
import BookEdit from "./BookEdit";
import useContextHook from "../hooks/ReusableContext";

function BookShow({ book }) {
  let [edit, setEdit] = React.useState(false);
  let {deleteBookById} = useContextHook();

  return (
    <div className="book-show">
      <img alt="books" src="https://picsum.photos/200/300" />
      <div>
        {edit ? (
          <BookEdit
            edit={setEdit}
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
        <button onClick={() => deleteBookById(book.id)} className="delete">
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
