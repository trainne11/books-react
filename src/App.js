import "./index.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useEffect } from "react";
import useContextHook from "./hooks/ReusableContext";

function App() {
  let { stableFetchFunction } = useContextHook();
  useEffect(() => {
    stableFetchFunction();
  }, [stableFetchFunction]);


  return (
    <div>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
