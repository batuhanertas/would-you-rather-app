import React, {Component} from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Error extends Component {
    render () {
        return (
            <div>
                <h1>404 Not Found</h1>

                <NavLink to='/' exact activeClassName='active'>
                    Click here to log in
                </NavLink>
            </div>
        )
    }
}

export default connect()(Error)