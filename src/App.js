import { useState, useEffect } from "react";
import "./index.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  let [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetching() {
      let res = await axios.get("http://localhost:3001/books");

      setBooks(res.data);
    }

    fetching();
  }, []);

  const createBook = async (title) => {
    //setBooks([...books, { id: books.length + 1, title }]);
    let res = await axios.post("http://localhost:3001/books", { title });

    setBooks([...books, res.data]);
  };

  const deleteBookById = async (id) => {
    let res = await axios.delete(`http://localhost:3001/books/${id}`);
    if (res.status === 200) {
      setBooks(books.filter((item) => item.id !== id));
    }
  };

  const editBookById = async (id, title) => {
    let res = await axios.put(`http://localhost:3001/books/${id}`, { title });

    setBooks(
      books.map((item) => {
        if (item.id === id) {
          return res.data;
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
