import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
    static propTypes = {
        books: PropTypes.array,
        title: PropTypes.string,
        onBookShelfChange: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {this.props.books.map((book) => (
                        <li key={ book.id }>
                            <Book book={ book } onBookShelfChange={this.props.onBookShelfChange}/>
                        </li>
                    ))}
                </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf