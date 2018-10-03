import { connect } from "react-redux"
import React from 'react'
import { Route, Redirect } from 'react-router-dom'


const PrivateRoute = ({ component: Component, authedUser, ...rest }) => (
    <Route {...rest} render={(props) => (
      authedUser.id
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }} />
    )} />
  )

export default connect()(PrivateRoute)