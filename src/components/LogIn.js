import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleAuthUser} from '../actions/users'

class LogIn extends Component {
  state = {
    selectedUser: '',
  }

  handleChange(selectedUser) {
    this.setState(() => ({
      selectedUser: selectedUser
    }))
  }

  handleLogInUser() {
    const { dispatch } = this.props

    let userId = this.state.selectedUser
    dispatch(handleAuthUser(this.props.users[userId]))
  }
  

  render () {
    const { users } = this.props
    let userIdsAndNames = []
    userIdsAndNames = Object.keys(users).map( (user) => ({ id: users[user].id, name: users[user].name }))
    
    return (
      <div className="dropdown">
        <h4>Please choose your name</h4>
        <select onChange={(e) => this.handleChange(e.target.value)}>
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
