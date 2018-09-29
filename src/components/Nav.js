import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
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

        // TODO: this is not the correct way to logout user find a way to remove authedUser from state
        // or assign an empty object
        // dispatch(handleLogoutUser())
        
        this.setState( () => ({
            toLogIn: true,
        }))
    }

    handleNewQuestion() {
        this.setState( () => ({
            toNewQuestion: true,
        }))
    }

    handleLeaderBoard() {
        this.setState( () => ({
            toLeaderBoard: true,
        }))
    }

    handleHome() {
        this.setState( () => ({
            toHome: true,
        }))
    }

    render () {
        const { toLogIn, toNewQuestion, toLeaderBoard, toHome } = this.state

        if (toLogIn === true) {
        return <Redirect to='/' />
        }

        if (toNewQuestion === true) {
            return <Redirect to='/add' />
        }

        if (toLeaderBoard === true) {
            return <Redirect to='/leaderboard' />
        }

        

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
                        <NavLink to='/' exact activeClassName='active' >
                            Logout
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default connect()(Nav)