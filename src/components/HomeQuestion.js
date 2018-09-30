import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class HomeQuestion extends Component {
    render () {
        const { question, user } = this.props

        return (
            <div className="question-container">
                <p>{user.name} asks:</p>
                <div className="question-main-part">
                    <img src={user.avatarURL} className="avatar-large"/> 
                </div>

                <div className="question-main-part question-text-part">
                    <h4>Would you rather?</h4>
                    <h5>... {question.optionOne.text} ...</h5>
                    <Link to={`/questions/${question.id}`} >
                        View Poll
                    </Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps( { questions, users }, { id }) {
    const question = questions[id]
    const user = users[question.author]
    return {
        question : question,
        user: user
    }
}

export default withRouter(connect(mapStateToProps)(HomeQuestion))