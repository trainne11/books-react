import React from 'react';
import ReactDOM  from 'react-dom/client';
import App from './App';
import Provider from './context/books';


let div = document.getElementById('root');

let root = ReactDOM.createRoot(div);


root.render(<Provider><App/></Provider>);