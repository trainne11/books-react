import { createContext, useState, useCallback } from "react";
import axios from "axios";

let BookContext = createContext();

function Provider({ children }) {
  let [books, setBooks] = useState([]);

  let stableFetchFunction = useCallback(async function fetching() {
    let res = await axios.get("http://localhost:3001/books");
    setBooks(res.data);
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

  let valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    stableFetchFunction,
  };

  return (
    <BookContext.Provider value={valueToShare}>
      {children}{" "}
    </BookContext.Provider>
  );
}

export default Provider;

export { BookContext };
