import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class HomeQuestion extends Component {
    render () {
        const { question, userAvatarURL } = this.props

        return (
            <div>
                <img src={userAvatarURL} className="avatar-large" />
                <h4>Would you rather?</h4>
                <h5>{question.optionOne.text}</h5>
                <Link to={`/questions/${question.id}`} >
                    View Poll
                </Link>
            </div>
        )
    }
}

function mapStateToProps( { questions, users }, { id }) {
    const question = questions[id]
    const userAvatarURL = users[question.author].avatarURL
    return {
        question : question,
        userAvatarURL: userAvatarURL
    }
}

export default withRouter(connect(mapStateToProps)(HomeQuestion))