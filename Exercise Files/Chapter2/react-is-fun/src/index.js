import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//

//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

var style= {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'Arial'
}


const title = React.createElement(
    'h1',
    {id: 'title', className:'header', style:style},
    'Hello World'//child
)

ReactDOM.render(
  title,
  document.getElementById('header')
);

const unorderedList = React.createElement(
    'ul',
    {id: 'title', className:'header', style:style},
    React.createElement(
      'li',
      {},
      'Item on our list'
    )
)

ReactDOM.render(
  unorderedList,
  document.getElementById('root')
);


// JSX Version

ReactDOM.render(
  <div style={style}>
    <h1>Hello World! </h1>
    <p> We're glad you're here! </p>
  </div>,
  document.getElementById('jsx')
)
