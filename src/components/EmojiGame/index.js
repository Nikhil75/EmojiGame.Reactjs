/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    isGameInProgress: true,
    topScore: 0,
  }

  resetGame = () => {
    this.setState({
      isGameInProgress: true,
      clickedEmojisList: [],
    })
  }

  renderScoreCards = props => {
    const {clickedEmojisList} = this.state
    const {emojisList} = this.props
    const isWon = clickedEmojisList.length === emojisList.length
    return (
      <div className="score-cards-container">
        <WinOrLoseCard
          isWon={isWon}
          onClickPlayAgain={this.resetGame}
          score={clickedEmojisList.length}
        />
      </div>
    )
  }

  finshGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({
      isGameInProgress: false,
      topScore: newTopScore,
    })
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length

    if (isEmojiPresent) {
      this.finshGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(previousState => ({
        clickedEmojisList: [...previousState.clickedEmojisList, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiCards = props => {
    const {emojisList} = this.props
    const randomEmojisList = this.shuffledEmojisList()
    return (
      <ul className="random-emoji-cards-container">
        {randomEmojisList.map(eachItem => (
          <EmojiCard
            emojisDetails={eachItem}
            key={eachItem.id}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedEmojisList, isGameInProgress, topScore} = this.state
    return (
      <div className="app-container">
        <NavBar
          topScore={topScore}
          currentScore={clickedEmojisList.length}
          isGameInProgress={isGameInProgress}
        />
        <div className="emojis-list-container">
          {isGameInProgress ? this.renderEmojiCards() : this.renderScoreCards()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
