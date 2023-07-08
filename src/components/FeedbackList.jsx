import FeedbackItem from "./FeedbackItem"
// import PropTypes from 'prop-types'
import { useContext } from "react"
import FeedbackContext from "./context/FeedbackContext"

function FeedbackList() {
  const {feedback} = useContext(FeedbackContext)

  if(!feedback || feedback.length === 0)
  {
    return (<p>No Feedback Yet</p>)
  }
  return (

    <div className="feedback-list">
      {feedback.map((Item) =>(
        <FeedbackItem key={Item.id} item={Item}/>
      ))}
    </div>
  )
}

// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   )
// }

export default FeedbackList