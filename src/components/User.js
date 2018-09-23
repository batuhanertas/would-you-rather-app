import React, { Component } from 'react'
import { connect } from 'react-redux';

class User extends Component {
    render () {
        const { user } = this.props
        const answeredQuestions = Object.keys(user.answers).length
        const createdQuestions = user.questions.length

        return (
            <div>
                <h2>{user.name}</h2>
                <h3>Answered Question: {answeredQuestions}</h3>
                <h3>Created Questions: {createdQuestions}</h3>
                <h2>Score {answeredQuestions + createdQuestions}</h2>
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