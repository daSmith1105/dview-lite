import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginView from './login/LoginView';
import LiveView from './live/LiveView';
import PlaybackView from './playback/PlaybackView';
import Error from './PageError';
import { connect } from 'react-redux';
import { getServer } from './actions';
import './App.css';
import history from './history';

class App extends React.Component {
  constructor(props){
    super(props);
  }

componentDidMount =() => {
  // check autologin
  // if yes => history.push('/live')
  // else =>  history.push('/')
  this.props.getServer('/')
}
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
  return state;
}
export default connect( mapStateToProps, { getServer })(App);
