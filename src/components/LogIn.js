import React, { Component } from 'react'
import { connect } from 'react-redux'

class LogIn extends Component {
  state = {
    selectedUser: '',
  }

  handleChange(selectedUser) {
    this.setState(() => ({
      selectedUser: selectedUser
    }))
  }

  logInUser() {
    console.log("user logged in: " + this.state.selectedUser)
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
        <button onClick={() => this.logInUser()}>Log In</button>
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
