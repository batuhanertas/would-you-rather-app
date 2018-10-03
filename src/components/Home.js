import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeQuestion from './HomeQuestion'
import Nav from './Nav'
import { Redirect } from 'react-router-dom'


class Home extends Component {
    state = {
        tabUnansweredQuestionsHidden: true,
      }

      handleTabChange(unAnswered) {
        this.setState( () => ({
            tabUnansweredQuestionsHidden: unAnswered,
          }))
      }

    render () {
        
        return (        
            <div className='container'>
                {
                   !this.props.authedUser.id 
                   ? <Redirect to='/error' /> : null
                }
                
                <Nav/>
                <h4 className="page-header">Home Page</h4>
                <div className="container">
                    <div className="justify-content-center question-tab">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link " onClick={() => this.handleTabChange(true)}>Unanswered Questions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " onClick={() => this.handleTabChange(false)}>Answered Questions</a> 
                        </li>
                    </ul>
                    </div>
                    <ul hidden={this.state.tabUnansweredQuestionsHidden}>
                        <h5 className="page-header">Answered Questions</h5>
                        {this.props.answeredQuestionIds.map((id) => (
                            <li key={id}>
                                <HomeQuestion id={id}/>
                            </li>
                        ))}
                    </ul>
                    
                    <ul hidden={!this.state.tabUnansweredQuestionsHidden}>
                        <h5 className="page-header">Unanswered Questions</h5>
                        {this.props.unansweredQuestionIds.map((id) => (
                            <li key={id}>
                                <HomeQuestion id={id}/>
                            </li>
                        ))}
                    </ul>
                </div>
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
        authedUser: authedUser,
    }
}

export default connect(mapStateToProps)(Home)