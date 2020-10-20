import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'

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
                <BooksGrid books={this.props.books} onBookShelfChange={this.props.onBookShelfChange}/>
                </div>
            </div>
        )
    }
}

export default BookShelf