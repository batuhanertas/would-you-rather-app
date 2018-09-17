import React, { Component, Fragment } from 'react';
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import LogIn from './LogIn';
import Home from './Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div >
        <Router>
        <Fragment>
          <div className='container'>
             <div>
                <Route path='/' exact component={LogIn} />
                <Route path='/home' component={Home} />
              </div>
          </div>
        </Fragment>
      </Router>
      </div>
    );
  }
}

export default connect()(App);
