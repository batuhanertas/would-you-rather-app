import React, { Component, Fragment } from 'react'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import LogIn from './LogIn'
import Home from './Home'
import Question from './Question'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'



class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className='main-container'>
        <Router>
          <Fragment>
            <div className='container'>
              <div className='container'>
                <Switch>
                  <Route path='/' exact component={LogIn} />
                  <PrivateRoute path='/home' component={Home}  authedUser={this.props.authedUser}/>
                  <PrivateRoute path='/questions/:id' component={Question} authedUser={this.props.authedUser} />
                  <PrivateRoute path='/add' component={NewQuestion} authedUser={this.props.authedUser} />
                  <PrivateRoute path='/leaderboard' component={LeaderBoard} authedUser={this.props.authedUser} />
                </Switch>
              </div>
            </div>
          </Fragment>
        </Router>
      </div>
    );
  }
}

function mapStateToProps ({ authedUser }) {  
  return {
      authedUser: authedUser
  }
}

export default connect(mapStateToProps)(App);
