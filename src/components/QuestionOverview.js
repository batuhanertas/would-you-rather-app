import React, { Component } from 'react'
import { connect } from 'react-redux';

function calculateVote (question, user) {
    let firstOption = question.optionOne.votes.length
    let secondOption = question.optionTwo.votes.length
    let firstOptionNotSelected = question.optionOne.votes.includes(user.id)

    return {
        firstOptionPercentage : ((firstOption / (firstOption + secondOption)) * 100).toFixed(1),
        secondOptionPercentage : ((secondOption/ (firstOption + secondOption)) * 100).toFixed(1),
        firstOptionTotal: firstOption,
        secondOptionTotal: secondOption,
        allTotal: firstOption + secondOption,
        firstOptionNotSelected: firstOptionNotSelected
    }
}


class QuestionPage extends Component {
    render() {
        const { question, authedUser, authorAvatarUrl } = this.props

        let { firstOptionPercentage, secondOptionPercentage, firstOptionTotal, secondOptionTotal, allTotal, firstOptionNotSelected } 
                = calculateVote(question, authedUser)

        return (
            <div>
                <h3>Asked by {question.author}</h3>
                <img src={authorAvatarUrl} className="avatar-large" />
                <h4> Results </h4>
                <div>
                    <p>Would you rather { question.optionOne.text }?</p>
                    <p>{firstOptionPercentage}%</p>
                    <p>{firstOptionTotal} out of {allTotal}</p>
                    <p hidden={!firstOptionNotSelected}>Your Vote!</p>
                </div>
                <div>
                    <p>Would you rather { question.optionTwo.text }?</p>
                    <p>{secondOptionPercentage}%</p>
                    <p>{secondOptionTotal} out of {allTotal}</p>
                    <p hidden={firstOptionNotSelected}>Your Vote!</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ questions, authedUser, users }, id) {
    const question = questions[id.id]
    const authorAvatarUrl = users[question.author].avatarURL
    
    return {
        question: question,
        authedUser: authedUser,
        authorAvatarUrl: authorAvatarUrl
    }
}

export default connect(mapStateToProps)(QuestionPage)