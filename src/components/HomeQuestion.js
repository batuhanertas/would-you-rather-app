import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'


class HomeQuestion extends Component {
    render () {
        const { question, user } = this.props

        return (
            <div className="card text-center question-container">
                <div className="card-header">
                    {user.name} asks:
                </div>
                <img className="card-img-top" src={user.avatarURL} alt={user.id} />
                <div className="card-body">
                    <h5 className="card-title">Would you rather?</h5>
                    <p className="card-text">...{question.optionOne.text}...</p>
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