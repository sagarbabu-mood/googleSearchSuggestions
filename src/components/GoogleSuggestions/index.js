// Write your code here

import {Component} from 'react'
import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  userInput = event => {
    this.setState({searchInput: event.target.value})
  }

  changeInput = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const filteredList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-image"
        />
        <div className="search-container">
          <div className="d-flex flex-column">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              onChange={this.userInput}
              className="search-input"
              value={searchInput}
              id="input-value"
            />
            <ul>
              {filteredList.map(each => (
                <SuggestionItem
                  key={each.id}
                  details={each}
                  onClick={this.changeInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
