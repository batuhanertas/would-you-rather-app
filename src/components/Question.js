import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {
    render () {
        const { question } = this.props

        return (
            <div>
                <h4>Would you rather?</h4>
                <h5>{question.optionOne.text}</h5>
                <Link to={`/questions/${question.id}`} >
                    View Poll
                </Link>
            </div>
        )
    }
}

function mapStateToProps( { questions }, { id }) {
    const question = questions[id]
    return {
        question : question
    }
}

export default withRouter(connect(mapStateToProps)(Question))