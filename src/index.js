import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Life from './Life';
// import Events from './Events'
// import Forms from './Forms'
import Todo from './Todo'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Life /> */}
    {/* <Events /> */}
    {/* <Forms /> */}
    <Todo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
