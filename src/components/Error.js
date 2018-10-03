import React, {Component} from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Error extends Component {
    render () {
        return (
            <div>
                
                <h1>You need to be logged in to see this page</h1>

                <NavLink to='/' exact activeClassName='active'>
                    Click here to log in
                </NavLink>
            </div>
        )
    }
}

export default connect()(Error)