import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
    render () {
        return (
            <h4>Home Page</h4>
        )
    }
}

export default connect()(Home)