import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {
    render () {
        const { user } = this.props
        const answeredQuestions = Object.keys(user.answers).length
        const createdQuestions = user.questions.length

        return (
            <div className="card text-center question-container">
                <div className="card-header">{user.name}</div>
                <img src={user.avatarURL} className="card-img-top" alt={user.id} />
                <h5 className="card-title">Score {answeredQuestions + createdQuestions}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Answered Question: {answeredQuestions}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Created Questions: {createdQuestions}</h6>
            </div>
        )
    }
}

function mapStateToProps({ users }, {id}) {
    const user = users[id]

    return {
        user: user
    }
}

export default connect(mapStateToProps)(User)