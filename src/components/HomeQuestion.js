import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

class HomeQuestion extends Component {
    render () {
        const { question, user } = this.props

        return (
            <div className="card text-center question-container">
                <div class="card-header">
                    {user.name} asks:
                </div>
                <img className="card-img-top" src={user.avatarURL} alt="Card image cap" />
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