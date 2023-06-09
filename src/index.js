import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import './index.css';
import Card from './Card';
import { robots } from './data/robots.js';
// import App from './App';
 
import reportWebVitals from './reportWebVitals';
 
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <h1>Hello man</h1>
//     <App/>
//   </React.StrictMode>
// );
ReactDOM.render(
    <div>
<Card name={robots[0].name} email={robots[0].email}/>
<Card name={robots[1].name} email={robots[1].email}/>
<Card name={robots[2].name} email={robots[2].email}/>
</div>
,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
