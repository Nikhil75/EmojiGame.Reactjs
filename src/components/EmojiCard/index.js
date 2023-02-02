import './index.css'

const EmojiCard = props => {
  const {emojisDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojisDetails

  const sendId = () => {
    clickEmoji(id)
  }
  return (
    <li className="emojis-list">
      <button className="emoji-buttons" type="button" onClick={sendId}>
        <img src={emojiUrl} className="emojiImage" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
