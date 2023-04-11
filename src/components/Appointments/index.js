import {Component} from 'react'
import {v4 as uuid} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {
    inputTitle: '',
    inputDate: '',
    userDetails: [],
  }

  onclickStarred = () => {
    const {userDetails} = this.state
    const filterStarredItems = userDetails.filter(
      each => each.isStarred === true,
    )

    this.setState({userDetails: filterStarredItems})
  }

  onChangeStar = id => {
    const {userDetails} = this.state
    const toggleStar = userDetails.map(each => {
      if (each.id === id) {
        return {
          id: each.id,
          userTitle: each.userTitle,
          userDate: each.userDate,
          isStarred: !each.isStarred,
        }
      }
      return each
    })

    this.setState({userDetails: toggleStar})
  }

  onChangeTitle = event => {
    this.setState({inputTitle: event.target.value})
  }

  onChangeDate = event => {
    this.setState({inputDate: event.target.value})
  }

  addButtonClicked = () => {
    const {inputDate, inputTitle} = this.state
    const userObj = {
      id: uuid(),
      userTitle: inputTitle,
      userDate: inputDate,
      isStarred: false,
    }
    if (inputDate !== '' && inputTitle !== '') {
      this.setState(prevState => ({
        userDetails: [...prevState.userDetails, userObj],
        inputDate: '',
        inputTitle: '',
      }))
    }
  }

  renderAppointmentView = () => {
    const {inputTitle, inputDate, userDetails} = this.state
    return (
      <div className="app-container">
        <div className="inside-container">
          <h1 className="heading"> Add Appointment </h1>
          <div className="inside-img-container">
            <div className="input-container">
              <label htmlFor="text" className="title">
                {' '}
                Title{' '}
              </label>
              <input
                id="text"
                value={inputTitle}
                type="text"
                onChange={this.onChangeTitle}
                className="title-input"
                placeholder="Title"
              />
              <label htmlFor="date" className="title">
                {' '}
                Date{' '}
              </label>
              <input
                id="date"
                type="date"
                value={inputDate}
                onChange={this.onChangeDate}
                className="title-input"
                placeholder="dd/mm/yyyy"
              />

              <div className="button-container">
                <button
                  onClick={this.addButtonClicked}
                  type="button"
                  className="add-button"
                >
                  Add
                </button>
              </div>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="cccbp-img"
            />
          </div>

          <hr className="horizontal-line" />
          <div className="app-start-container">
            <h1 className="appoint-heading"> Appointments </h1>
            <button
              onClick={this.onclickStarred}
              type="button"
              className="star-button"
            >
              starred
            </button>
          </div>

          <ul className="appointmentItem-container">
            {userDetails.map(each => (
              <AppointmentItem
                userDetailsObj={each}
                key={each.id}
                onChangeStar={this.onChangeStar}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    return this.renderAppointmentView()
  }
}

export default Appointments
