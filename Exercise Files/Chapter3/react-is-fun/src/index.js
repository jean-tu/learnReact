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

  state ={
    open: true,
    freeBookmark: true
  }

  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
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
              pages={book.pages}
              freeBookmark={this.state.freeBookmark}/>
        )}
      </div>
    )
  }
}


render (
  <Library books={bookList}/>,
  document.getElementById('root')
)
