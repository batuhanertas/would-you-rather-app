import React, { Component } from 'react'
import { connect } from 'react-redux';
import User from './User'
import Nav from './Nav'
import { Redirect } from 'react-router-dom'

class LeaderBoard extends Component {
    render () {
        const { userIds } = this.props

        return (
            <div>
            {
                !this.props.authedUser.id 
                ? <Redirect to='/error' /> : null
            }

            <Nav/>
                <ul>
                    {userIds.map((id) => (
                        <li key={id}>
                            <User id={id} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    return {
        userIds: Object.keys(users)
        .sort((a,b) => (users[b].questions.length + Object.keys(users[b].answers).length) - 
        (users[a].questions.length + Object.keys(users[a].answers).length)),
        authedUser: authedUser
    }
}

export default connect(mapStateToProps)(LeaderBoard)