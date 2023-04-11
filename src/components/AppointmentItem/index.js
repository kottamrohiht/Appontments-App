import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {userDetailsObj, onChangeStar} = props
  const {id, userTitle, userDate, isStarred} = userDetailsObj
  const formatedDate = format(new Date(userDate), 'dd MMMM yyyy, EEEE')

  const starClicked = () => {
    onChangeStar(id)
  }

  const isLikedImg = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="item-container">
      <div className="title-date-container">
        <p className="title-name"> {userTitle} </p>
        <p className="appoint-date"> {formatedDate} </p>
      </div>
      <button
        data-testid="star"
        className="like-button"
        type="button"
        onClick={starClicked}
      >
        <img src={isLikedImg} alt="star" />
      </button>
    </li>
  )
}

export default AppointmentItem
