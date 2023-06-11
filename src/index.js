import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import './index.css';
 import { robots } from './data/robots.js';
import CardList from './CardList';
import App from './App';
 
import reportWebVitals from './reportWebVitals';
 
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <h1>Hello man</h1>
//     <App/>
//   </React.StrictMode>
// );
ReactDOM.render(
 <App/>
,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
