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
                <h4 className="page-header">Create New Question</h4>
                <br/><br/>
                <div className="card text-center question-container">
                    <div className="card-header">Create New Question</div>
                    <br/><br/>
                    <h6 className="card-subtitle mb-2 text-muted">Complete the question</h6>
                    <h5 className="card-title">Would you rather...</h5>
                    <br/><br/>
                    <input type="text" 
                    className="form-control"
                    name="optionOne"
                    placeholder="First option..." 
                    onChange={(e) => this.handleChange(e)} />
                    <br />
                    <h2>OR</h2>
                    <br />
                    <input type="text"
                    className="form-control" 
                    name="optionTwo"
                    placeholder="Second option..." 
                    onChange={(e) => this.handleChange(e)} />
                    <br />
                    <button className="btn btn-success" onClick={() => this.handleSubmit(authedUser)}>Submit</button>
                </div>
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