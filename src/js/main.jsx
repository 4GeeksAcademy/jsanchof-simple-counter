import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";


// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
//import MyCounter from './components/MyCounter';

let counter = 0;

setInterval(function () {
  const thousands = Math.floor(counter / 1000 % 10);
  const hundreads = Math.floor(counter / 100 % 10);
  const tens = Math.floor(counter / 10 % 10);
  const units = Math.floor(counter / 1 % 10);
  counter++;

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Home units={units} tens={tens} hundreads={hundreads} thousands={thousands}/>
    </React.StrictMode>,
  );
}, 1000);


