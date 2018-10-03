import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionOverview from './QuestionOverview'
import QuestionSubmit from './QuestionSubmit'
import Nav from './Nav'

class Question extends Component {
    render() {
        const { questionAnswered, id, question } = this.props

        if (!question) {
            return (
                <div>
                    <h2 className="page-header">404 Not Found</h2>
                    <h3 className="page-header">This question doesn't exist</h3>
                </div>
            )
        }

        return (
            <div>
                {
                   <div>
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

    if (authedUser.id && question &&
        (question.optionOne.votes.includes(authedUser.id) || question.optionTwo.votes.includes(authedUser.id))) {
        answered = true
    }

    return {
        questionAnswered: answered,
        id: id,
        question: question
    }
}

export default connect(mapStateToProps)(Question)