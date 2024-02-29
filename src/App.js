import {useState} from 'react'
import './index.css';
import BookCreate from './components/BookCreate';


function App() {
  let [books,setBooks] = useState([]);
  const createBook = (title) => {
    console.log(title)
  }
  return (
    <div>
      <BookCreate onCreate = {createBook} />
    </div>
  )
}

export default App