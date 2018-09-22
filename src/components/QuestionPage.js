import React, { Component } from 'react'
import { connect } from 'react-redux';


class QuestionPage extends Component {
    render() {
        const { question } = this.props
        return (
            <div>
                <h4> Results </h4>
                <div>
                    <p>Would you rather { question.optionOne.text }?</p>
                </div>
                <div>
                    <p>Would you rather { question.optionTwo.text }?</p>
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