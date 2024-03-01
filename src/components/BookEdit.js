import React from "react";

function BookEdit({ PreTitle, id, editBook, edit }) {
  let [title, setTitle] = React.useState(PreTitle);
  function handleSubmit(e) {
    e.preventDefault();

    editBook(id, title);

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
