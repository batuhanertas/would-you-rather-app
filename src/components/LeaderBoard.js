import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'
import Nav from './Nav'

class LeaderBoard extends Component {
    render () {
        const { userIds } = this.props

        return (
            <div>
            <Nav/>
                <div>
                <h4 className="page-header">Leader Board</h4>
                <br/><br/>
                <ul>
                    {userIds.map((id) => (
                        <li key={id}>
                            <User id={id} />
                        </li>
                    ))}
                </ul>
                </div>
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