import React, { Component } from 'react';
import { connect } from 'react-redux'

class Question extends Component {
    render () {
        return (
            <h3>Hello World</h3>
        )
    }
}

export default connect()(Question)