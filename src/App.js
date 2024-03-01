import { useState } from "react";
import "./index.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  let [books, setBooks] = useState([]);
  const createBook = (title) => {
    setBooks([...books, { id: books.length + 1, title }]);
  };

  const deleteBookById = (id) => {
    setBooks(books.filter((item) => item.id !== id));
  };

  const editBookById = (id, title) => {
    setBooks(
      books.map((item) => {
        if (item.id === id) {
          return { id, title };
        }

        return item;
      })
    );
  };
  return (
    <div>
      <BookList
        editBook={editBookById}
        deleteBook={deleteBookById}
        books={books}
      />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
