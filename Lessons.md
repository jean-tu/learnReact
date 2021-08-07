# Lessons 

This file will contain the different lessons in the Lynda courses. For the modification to **index.js**

## States 

```javascript
import React from 'react';
import { render } from 'react-dom';


// Created an array
let bookList = [
  {"title": "The Sun Also Rises", "author": "Earnest Hemingway", "pages": 260},
  {"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
  {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304}
]

// Child Component
const Book = ({title, author, pages}) => {
  return(
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages}</p>
    </section>
  )
}

// Parent Component
class Library extends React.Component {
  constructor(props){
    super(props) // creates a new instance of the class
    this.state = {
      open: true
    }
  }
  render(){
    console.log(this.state)
    const { books} = this.props
    return (
      <div>
        <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
        {books.map( //.map will create an item for each part
          (book, i) =>
            <Book
              title={book.title}
              author={book.author}
              pages={book.pages}/>
        )}
      </div>
    )
  }
}

render (
  <Library books={bookList}/>,
  document.getElementById('root')
)
```

All of the **state** information should be at the Parent Level (aka in this case the Library) -- **SOURCE OF TRUTH**



