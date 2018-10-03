import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleAuthUser} from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class LogIn extends Component {
  state = {
    selectedUser: 'placeholder',
    redirectToReferrer: false,
  }

  handleChange(e) {
    e.preventDefault()
    let selectedUser = e.target.value

    this.setState(() => ({
      selectedUser: selectedUser
    }))
  }

  handleLogInUser() {
    const { dispatch } = this.props

    let userId = this.state.selectedUser

    if(userId === "placeholder") {
      alert("Please choose your name to log in.")
      return
    }

    dispatch(handleAuthUser(this.props.users[userId]))

    this.setState( () => ({
      redirectToReferrer: true,
    }))
  }
  

  render () {
    const { from } = this.props.location.state || { from: { pathname: '/home' } }
    const { users } = this.props
    let userIdsAndNames = []
    userIdsAndNames = Object.keys(users).map( (user) => ({ id: users[user].id, name: users[user].name }))

    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }
    
    return (
      <div className="dropdown">
        <h4>Please choose your name</h4>
        <select defaultValue="placeholder" onChange={(e) => this.handleChange(e)}>
          <option value="placeholder" defaultValue className="dropdown-placeholder">Please choose a user</option>
          {userIdsAndNames.map (user => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
          
        </select>
        <br/><br/>
        <button className="btn btn-success" onClick={() => this.handleLogInUser()}>Log In</button>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    users: users
  }
}

export default connect(mapStateToProps)(LogIn)
