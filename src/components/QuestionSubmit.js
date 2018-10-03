import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleSubmitQuestion } from '../actions/questions'

class QuestionSubmit extends Component {
    state = {
        option: '',
        toHome: false,
    }

    handleChange(option) {
        this.setState(() => ({
          option: option
        }))
    }

    handleSubmit(authedUser, qid) {
        const { dispatch } = this.props
        let answer = this.state.option

        dispatch(handleSubmitQuestion({ authedUser, qid, answer }))

        this.setState(() => ({
            option: '',
            toHome: true,
        }))
    }
 

    render() {
        const { question, authedUser, user } = this.props

        const { toHome } = this.state

        if (toHome === true) {
          return <Redirect to='/home' />
        }

        return (
            <div className="card text-center question-container">
                <div className="card-header">{user.name} asks:</div>
                <img className="card-img-top" src={user.avatarURL} alt={user.id} />
                <h5 className="card-title">Would you rather...</h5>
                <form>
                    <label>
                        <input type="radio" name="option" value="optionOne" 
                        onChange={(e) => this.handleChange(e.target.value)} />
                        {question.optionOne.text}
                    </label>
                    <br />
                    <label>
                        <input type="radio" name="option" value="optionTwo" 
                        onChange={(e) => this.handleChange(e.target.value)}
                        />
                        {question.optionTwo.text}
                    </label>
                    <br />
                    <button className="btn btn-success" onClick={() => this.handleSubmit(authedUser, question.id)}>Submit</button>
                    <br /> <br />
                </form>
            </div>
        )
    }
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

export default connect(mapStateToProps)(QuestionSubmit)