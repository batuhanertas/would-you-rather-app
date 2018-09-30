import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleAuthUser} from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class LogIn extends Component {
  state = {
    selectedUser: 'placeholder',
    toHome: false,
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
      toHome: true,
    }))
  }
  

  render () {
    const { users } = this.props
    let userIdsAndNames = []
    userIdsAndNames = Object.keys(users).map( (user) => ({ id: users[user].id, name: users[user].name }))

    const { toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/home' />
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
        <button onClick={() => this.handleLogInUser()}>Log In</button>
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
