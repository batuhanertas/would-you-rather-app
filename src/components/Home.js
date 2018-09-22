import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeQuestion from './HomeQuestion'


class Home extends Component {
    render () {
        
        return (
            <div>
                <h4>Home Page</h4>
                <h5>Answered Questions</h5>
                <ul>
                    {this.props.answeredQuestionIds.map((id) => (
                        <li key={id}>
                            <HomeQuestion id={id}/>
                        </li>
                    ))}
                </ul>
                <h5>Unanswered Questions</h5>
                <ul>
                    {this.props.unansweredQuestionIds.map((id) => (
                        <li key={id}>
                            <HomeQuestion id={id}/>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({ questions, authedUser }) {
    const answeredQuestions = {}
    const unansweredQuestions = {}

    Object.keys(questions).map( (question) => {
        if (questions[question].optionOne.votes.includes(authedUser.id) || 
            questions[question].optionTwo.votes.includes(authedUser.id)) {
            
            answeredQuestions[questions[question].id] = questions[question]
        } else {
            unansweredQuestions[questions[question].id] = questions[question]
        }
    })

    return {
        unansweredQuestionIds: Object.keys(unansweredQuestions)
            .sort((a,b) => unansweredQuestions[b].timestamp - unansweredQuestions[a].timestamp),
        answeredQuestionIds: Object.keys(answeredQuestions)
            .sort((a,b) => answeredQuestions[b].timestamp - answeredQuestions[a].timestamp),
    }
}

export default connect(mapStateToProps)(Home)