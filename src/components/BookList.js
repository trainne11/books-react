import React from "react";
import BookShow from "./BookShow";
import useContextHook from "../hooks/ReusableContext";


function BookList() {
  let {books} = useContextHook();
  return (
    <div className="book-list">
      {books.map((item) => (
        <BookShow
          key={item.id}
          book = {item}
        />
      ))}
    </div>
  );
}

export default BookList;
