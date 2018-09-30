import React, { Component } from 'react'
import { connect } from 'react-redux';
import QuestionOverview from './QuestionOverview';
import QuestionSubmit from './QuestionSubmit';
import Nav from './Nav'
import { Redirect } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

class Question extends Component {
    render() {
        const { questionAnswered, id, authedUser, question } = this.props

        if (!question) {
            return (
                <div>
                    <h2>404 Not Found</h2>
                    <h3>This question doesn't exist</h3>
                    <NavLink to='/' exact activeClassName='active'>
                        Click here to go to log in page
                    </NavLink> 
                </div>
            )
        }

        return (
            <div>
                {
                   !authedUser.id 
                   ? <Redirect to='/error' />  
                   :<div>
                        <Nav/>
                        {questionAnswered === true 
                            ? <QuestionOverview id={id} /> 
                            : <QuestionSubmit id={id} />
                        }
                   </div>
                }
            </div>
            
        )
    }
}

function mapStateToProps ( { questions, authedUser }, props) {
    const { id } = props.match.params
    const question = questions[id]

    let answered = false

    if (authedUser.id &&
        (question.optionOne.votes.includes(authedUser.id) || question.optionTwo.votes.includes(authedUser.id))) {
        answered = true
    }

    return {
        questionAnswered: answered,
        id: id,
        authedUser: authedUser,
        question: question
    }
}

export default connect(mapStateToProps)(Question)