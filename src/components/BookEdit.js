import useContextHook from "../hooks/ReusableContext";
import { useState } from "react";

function BookEdit({ PreTitle, id, edit }) {
  let [title, setTitle] = useState(PreTitle);
  let { editBookById } = useContextHook();
  function handleSubmit(e) {
    e.preventDefault();

    editBookById(id, title);

    edit(false);
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="book-edit">
      <label>Title</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input"
      />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
