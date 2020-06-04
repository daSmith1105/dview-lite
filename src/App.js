import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginView from './login/LoginView';
import LiveView from './live/LiveView';
import PlaybackView from './playback/PlaybackView';
import Error from './PageError';
import { connect } from 'react-redux';
import { getServer, checkExists,logoutUser, expireSession } from './actions';
import './App.css';
import history from './history';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        temp: ''
    };

    this.verifySessionHandler = 0;
};

componentDidMount = () => {
  this.props.getServer('/');
  this.verifySession();
}

componentWillUnmount = () => {
  clearTimeout(this.verifySessionHandler);
};

verifySession = async() => {
  const sessionValidation = this.props.checkExists(this.props.sSess, '/');
  Promise.all([sessionValidation])
  .then( (exists) => {
      if(exists[0] === false) {
        if(this.props.isLoggedIn) {
          // we never logged out, but we no longer have a valid session
          // set session expiration
          this.props.expireSession(this.props.sSess, '/', this.props.autoLoginStatus);
        }
        console.log('session is invaild')
        this.verifySessionHandler = setTimeout( () => { this.verifySession(); this.verifySessionHandler = 0 }, 10000 );
      } else {
        console.log('session is vaild: ', this.props.sSess)
        clearTimeout(this.verifySessionHandler);
        this.verifySessionHandler = setTimeout( () => { this.verifySession(); this.verifySessionHandler = 0 }, 10000 );
      }
  }) 
};

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={LoginView} />
          <Route exact path="/live" component={LiveView} />
          <Route exact path="/playback" component={PlaybackView} />
          <Route component={Error} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { sSess, isLoggedIn, autoLoginStatus } = state.auth;
  return {
    sSess,
    isLoggedIn,
    autoLoginStatus
  }
}
export default connect( mapStateToProps, { getServer, checkExists, logoutUser, expireSession })(App);
