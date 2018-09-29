import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'
import Nav from './Nav'

class NewQuestion extends Component {
    state ={
        optionOne: '',
        optionTwo: '',
        toHome: false,
    }

    handleChange(e) {
        if (e.target.name === 'optionOne') {
            if (e.target.value) {
                let optionOne = e.target.value
                this.setState(() => ({
                    optionOne: optionOne
                }))
            } else {
                this.setState(() => ({
                    optionOne: ''
                }))
            }
        }

        if (e.target.name === 'optionTwo') {
            if (e.target.value) {
                let optionTwo = e.target.value
                this.setState(() => ({
                    optionTwo: optionTwo
                }))
            } else {
                this.setState(() => ({
                    optionTwo: ''
                }))
            }
        }
    }

    handleSubmit(authedUser) {
        if (!this.state.optionOne || !this.state.optionTwo) {
            alert('Input cannot be empty.')
        } else {
            const { dispatch } = this.props
            let optionOne = this.state.optionOne
            let optionTwo = this.state.optionTwo
            dispatch(handleSaveQuestion({
                author: authedUser.id, 
                optionOneText: optionOne, 
                optionTwoText: optionTwo}))
            this.setState(() => ({
                toHome: true,
            }))
        }
    }

    render() {
        const { authedUser } = this.props

        const { toHome } = this.state

        if (toHome === true) {
          return <Redirect to='/home' />
        }

        return (
            <div>
                <Nav/>
                <h1>Create New Question</h1>
                <hr />
                <h3>Complete the questions</h3>
                <h2>Would you rather...</h2>
                <input type="text" 
                name="optionOne"
                placeholder="First option..." 
                onChange={(e) => this.handleChange(e)} />
                <br />
                <h2>OR</h2>
                <br />
                <input type="text" 
                name="optionTwo"
                placeholder="Second option..." 
                onChange={(e) => this.handleChange(e)} />
                <br />
                <button onClick={() => this.handleSubmit(authedUser)}>Submit</button>
            </div>
        )
    }
}

function mapStateToProps ({ authedUser }) {
    return {
        authedUser: authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion)