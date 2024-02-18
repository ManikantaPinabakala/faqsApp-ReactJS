import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isFaqOpened: false}

  onClickSymbol = () => {
    this.setState(prevState => ({isFaqOpened: !prevState.isFaqOpened}))
  }

  render() {
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    const {isFaqOpened} = this.state

    const symbolUrl = isFaqOpened
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const symbolAlt = isFaqOpened ? 'minus' : 'plus'

    return (
      <li className="faq-item">
        <div className="question-symbol-container">
          <h1 className="question-text">{questionText}</h1>
          <img
            src={symbolUrl}
            alt={symbolAlt}
            onClick={this.onClickSymbol}
            className="symbol"
          />
        </div>
        {isFaqOpened && (
          <>
            <hr className="horizontal-break" />
            <p className="answer-text">{answerText}</p>
          </>
        )}
      </li>
    )
  }
}

export default FaqItem
