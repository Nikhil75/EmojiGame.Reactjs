import './index.css'

const NavBar = props => {
  const {topScore, currentScore, isGameInProgress} = props
  return (
    <nav className="navbar-container">
      <div className="logoandbrand">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="logo"
          alt="emoji logo"
        />
        <h1 className="brand">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="scores-container">
          <p className="score">Score: {currentScore}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}
export default NavBar
