import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'
import { Link } from "react-router-dom"
import * as BooksAPI from './BooksAPI'
import { debounce } from 'throttle-debounce'

class BookShelf extends Component {
    constructor(props) {
        super(props)
        this.updateSearchResultsDebounced = debounce(500, this.updateSearchResults)
    }

    static propTypes = {
        books: PropTypes.array,
        onBookShelfChange: PropTypes.func.isRequired
    }

    state = {
        query: '',
        filteredBooks: []
    }

    onSearchUpdate = (event) => {
        const query = event.target.value

        this.setState({ query }, () => {
            this.updateSearchResultsDebounced(query)
        })
    }
    
    updateSearchResults = (query) => {
        if(query.trim === "") {
            this.setState({filteredBooks: []})
            return
        }

        BooksAPI.search(query).then((results) => {
            results = results instanceof Array ? results : []
            const booksPromises = results.map((result) => (
                BooksAPI.get(result.id)
            ))

            Promise.all(booksPromises).then((books) => {
                this.setState({
                    filteredBooks: books
                })
            })
        })
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" value={this.state.query} placeholder="Search by title or author" onChange={this.onSearchUpdate}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <BooksGrid books={this.state.filteredBooks} onBookShelfChange={this.props.onBookShelfChange}/>
                </div>
            </div>
        )
    }
}

export default BookShelf