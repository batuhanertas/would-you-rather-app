import React, { Component } from 'react'
import { connect } from 'react-redux';

class NewQuestion extends Component {
    state ={
        optionOne: '',
        optionTwo: ''
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

    handleSubmit() {
        if (!this.state.optionOne || !this.state.optionTwo) {
            alert('Input cannot be empty.')
        } else {
            console.log("success")
        }
    }

    render() {
        return (
            <div>
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
                <button onClick={() => this.handleSubmit()}>Submit</button>
            </div>
        )
    }
}

export default connect()(NewQuestion)