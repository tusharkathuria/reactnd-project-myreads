import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ShelfChanger extends Component {
    static propTypes = {
        shelf: PropTypes.string.isRequired,
        onShelfChange: PropTypes.func.isRequired
    }

    handleChange = (event) => {
        this.props.onShelfChange(event.target.value)
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.props.shelf} onChange={this.handleChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default ShelfChanger