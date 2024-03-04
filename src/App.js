import "./index.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useEffect } from "react";
import useContextHook from "./hooks/ReusableContext";

function App() {
  let { fetching } = useContextHook();
  useEffect(() => {
    fetching();
  }, []);
  return (
    <div>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
