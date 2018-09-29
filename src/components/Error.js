import React, {Component} from 'react'
import { connect } from 'react-redux'

class Error extends Component {
    render () {
        return (
            <h1>404 Not Found</h1>
        )
    }
}

export default connect()(Error)