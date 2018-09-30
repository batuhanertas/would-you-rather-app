import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleLogoutUser} from '../actions/authedUser'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
    state = {
        toLogIn: false,
        toNewQuestion: false,
        toLeaderBoard: false,
        toHome: false
    }

    handleLogOutUser() {
        const { dispatch } = this.props

        dispatch(handleLogoutUser())
        
        this.setState( () => ({
            toLogIn: true,
        }))
    }

    

    render () {
        return (
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink to='/home' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' exact activeClassName='active'>
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' exact activeClassName='active' >
                            Leader Board
                        </NavLink>
                    </li>
                    <li>
                        Hello {this.props.authedUser.name}
                    </li>
                    <li>
                        <NavLink onClick={() => this.handleLogOutUser()} to='/' exact activeClassName='active' >
                            Logout
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

function mapStateToProps ({ authedUser }) {
    return {
      authedUser: authedUser
    }
  }

export default connect(mapStateToProps)(Nav)