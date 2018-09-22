import React, { Component } from 'react'
import { connect } from 'react-redux';

class QuestionSubmit extends Component {
    render() {
        return (
            <h4>Question Submit</h4>
        )
    }
}

export default connect()(QuestionSubmit)