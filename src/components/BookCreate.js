import React from "react";
import useContextHook from "../hooks/ReusableContext";

function BookCreate() {
  let [title, setTitle] = React.useState("");
  let {createBook} = useContextHook();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);

    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <input className="button" type="submit" value={"Submit"} />
      </form>
    </div>
  );
}

export default BookCreate;
