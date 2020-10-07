import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// Hello Component is the only default item the Hello.js export
import Hello from './Hello';
import './Hello.css'
import 'tachyons'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Hello greeting = {'Hello' + 'React Ninja!'}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
