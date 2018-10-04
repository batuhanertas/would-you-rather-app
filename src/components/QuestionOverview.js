import React from 'react'
import { connect } from 'react-redux'

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


const QuestionOverview = ({question, authedUser, user}) => {
    let { firstOptionPercentage, secondOptionPercentage, firstOptionTotal, secondOptionTotal, allTotal, firstOptionNotSelected } 
            = calculateVote(question, authedUser)

    return (
        <div className="card text-center question-container">
            <div className="card-header">Asked by {user.name}</div>
            <img className="card-img-top" src={user.avatarURL} alt={user.id} />
            <h4> Results </h4>
            <div className="card text-center">
                <div className="card-body">
                    <p className="card-text">Would you rather { question.optionOne.text }?</p>
                    <h5 className="card-title">{firstOptionTotal} out of {allTotal}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{firstOptionPercentage}%</h6>
                    <h3 hidden={!firstOptionNotSelected}>
                        <span className="badge badge-danger" >Your Vote!</span>
                    </h3>
                </div>
            </div>
            <div className="card text-center">
                <div className="card-body">
                    <p className="card-text">Would you rather { question.optionOne.text }?</p>
                    <h5 className="card-title">{secondOptionTotal} out of {allTotal}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{secondOptionPercentage}%</h6>
                    <h3 hidden={firstOptionNotSelected}>
                        <span className="badge badge-danger" >Your Vote!</span>
                    </h3>
                </div>
            </div>
        </div>
    )
    
}

function mapStateToProps ({ questions, authedUser, users }, id) {
    const question = questions[id.id]
    const user = users[question.author]
    
    return {
        question: question,
        authedUser: authedUser,
        user: user
    }
}

export default connect(mapStateToProps)(QuestionOverview)