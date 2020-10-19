import React, {Component} from 'react'
import ShelfChanger from './ShelfChanger'
import PropTypes from 'prop-types'

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onBookShelfChange: PropTypes.func.isRequired
    }

    onShelfChange = (shelf) => {
        this.props.onBookShelfChange(this.props.book, shelf)
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`
                    }}/>
                    <ShelfChanger shelf={this.props.book.shelf} onShelfChange={ this.onShelfChange }/>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors.join(" ,")}</div>
            </div>
        )
    }
}

export default Book