import './index.css'

const SuggestionItem = props => {
  const {onClick, details} = props
  const {suggestion} = details
  const change = () => {
    onClick(suggestion)
  }

  return (
    <li className="list-item">
      <div className="container">
        <p className="suggestion">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="icon"
          onClick={change}
        />
      </div>
    </li>
  )
}
export default SuggestionItem
