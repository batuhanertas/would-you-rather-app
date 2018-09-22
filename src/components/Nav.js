import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {handleLogoutUser} from '../actions/authedUser'

class Nav extends Component {
    state = {
        toLogIn: false,
    }

    handleLogOutUser() {
        const { dispatch } = this.props

        // TODO: this is not the correct way to logout user find a way to remove authedUser from state
        // or assign an empty object
        // dispatch(handleLogoutUser())
        
        this.setState( () => ({
            toLogIn: true,
        }))
    }

    render () {
        const { toLogIn } = this.state

    if (toLogIn === true) {
      return <Redirect to='/' />
    }

        return (
            <nav>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        New Question
                    </li>
                    <li>
                        Leader Board
                    </li>
                    <li onClick={() => this.handleLogOutUser()}>
                        Logout
                    </li>
                </ul>
            </nav>
        )
    }
}

export default connect()(Nav)