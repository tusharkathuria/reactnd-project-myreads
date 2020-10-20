import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BooksGrid extends Component {
    static propTypes = {
        books: PropTypes.array,
        onBookShelfChange: PropTypes.func.isRequired
    }

    render() {
        return (
            <ol className="books-grid">
                {this.props.books.map((book) => (
                    <li key={ book.id }>
                        <Book book={ book } onBookShelfChange={this.props.onBookShelfChange}/>
                    </li>
                ))}
            </ol>
        )
    }
}

export default BooksGrid