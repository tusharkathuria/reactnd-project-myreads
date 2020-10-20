import React from 'react'
import BookShelf from './BookShelf'
import SearchScreen from './SearchScreen'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from "react-router-dom"
import { Link } from "react-router-dom"

class BooksApp extends React.Component {
  state = {
    books: []
  }

  onBookShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf)
    this.setState((prevState) => {
      book.shelf = shelf

      return prevState.books
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    let currentlyReadingBooks = this.state.books.filter((book) => book.shelf === "currentlyReading")
    let wantToReadBooks = this.state.books.filter((book) => book.shelf === "wantToRead")
    let readBooks = this.state.books.filter((book) => book.shelf === "read")

    return (
      <div className="app">
        <Route exact path="/" render={()=> (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf
                title="Currently Reading"
                books={ currentlyReadingBooks }
                onBookShelfChange = {this.onBookShelfChange}/>
                <BookShelf
                title="Want to Read"
                books={ wantToReadBooks }
                onBookShelfChange = {this.onBookShelfChange}/>
                <BookShelf
                title="Read"
                books={ readBooks }
                onBookShelfChange = {this.onBookShelfChange}/>
              </div>
            </div>
            <Link className="open-search" to="/search">Add a book</Link>
          </div>
        )}/>

        <Route path="/search" render={() => (
          <SearchScreen books={this.state.books} onBookShelfChange={this.onBookShelfChange}/>
        )}  />
      </div>
    )
  }
}

export default BooksApp
