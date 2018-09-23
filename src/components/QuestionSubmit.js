import React, { Component } from 'react'
import { connect } from 'react-redux';
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
        const { question, authedUser } = this.props

        const { toHome } = this.state

        if (toHome === true) {
          return <Redirect to='/home' />
        }

        return (
            <div>
                <h3>{question.author} asks:</h3>
                <h4>Would you rather...</h4>
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
                    <button onClick={() => this.handleSubmit(authedUser, question.id)}>Submit</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps ({ questions, authedUser }, id) {
    const question = questions[id.id]
    
    return {
        question: question,
        authedUser: authedUser
    }
}

export default connect(mapStateToProps)(QuestionSubmit)