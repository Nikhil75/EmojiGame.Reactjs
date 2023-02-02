import './index.css'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const gameUrl = isWon ? WON_IMAGE : LOSE_IMAGE
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="score-card-container">
      <div className="games-status-container">
        <h1 className="game">{gameStatus}</h1>
        <p className="scorelabel">{scoreLabel}</p>
        <p className="score">{score}/12</p>
        <button
          type="button"
          className="play-back-btn"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="win-lose-images">
        <img src={gameUrl} alt="win or lose" className="win-or-lose-image" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
