import React from "react";

function BookCreate({ onCreate }) {
  let [title, setTitle] = React.useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);

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
