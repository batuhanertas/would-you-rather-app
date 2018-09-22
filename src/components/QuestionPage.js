import React, { Component } from 'react'
import { connect } from 'react-redux';

function calculateVote (question) {
    let firstOption = question.optionOne.votes.length
    let secondOption = question.optionTwo.votes.length

    return {
        firstOptionPercentage : ((firstOption / (firstOption + secondOption)) * 100).toFixed(1),
        secondOptionPercentage : ((secondOption/ (firstOption + secondOption)) * 100).toFixed(1),
        firstOptionTotal: firstOption,
        secondOptionTotal: secondOption,
        allTotal: firstOption + secondOption
    }
}


class QuestionPage extends Component {
    render() {
        const { question } = this.props

        let { firstOptionPercentage, secondOptionPercentage, firstOptionTotal, secondOptionTotal, allTotal } 
                = calculateVote(question)

        return (
            <div>
                <h4> Results </h4>
                <div>
                    <p>Would you rather { question.optionOne.text }?</p>
                    <p>{firstOptionPercentage}%</p>
                    <p>{firstOptionTotal} out of {allTotal}</p>
                </div>
                <div>
                    <p>Would you rather { question.optionTwo.text }?</p>
                    <p>{secondOptionPercentage}%</p>
                    <p>{secondOptionTotal} out of {allTotal}</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ questions }, props) {
    const { id } = props.match.params
    const question = questions[id]

    return {
        question: question
    }
}

export default connect(mapStateToProps)(QuestionPage)