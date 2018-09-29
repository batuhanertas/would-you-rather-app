import React, { Component } from 'react'
import { connect } from 'react-redux';
import QuestionOverview from './QuestionOverview';
import QuestionSubmit from './QuestionSubmit';
import Nav from './Nav'

class Question extends Component {
    render() {
        const { questionAnswered, id } = this.props

        return (
            <div>
                <Nav/>
                {questionAnswered === true 
                    ? <QuestionOverview id={id} /> 
                    : <QuestionSubmit id={id} />
                }
            </div>
            
        )
    }
}

function mapStateToProps ( { questions, authedUser }, props) {
    const { id } = props.match.params
    const question = questions[id]

    let answered = false

    if (question.optionOne.votes.includes(authedUser.id) || question.optionTwo.votes.includes(authedUser.id)) {
        answered = true
    }

    return {
        questionAnswered: answered,
        id: id
    }
}

export default connect(mapStateToProps)(Question)