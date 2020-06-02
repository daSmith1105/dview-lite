import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginView from './login/LoginView';
import LiveView from './live/LiveView';
import Error from './PageError';
import { connect } from 'react-redux';
import { getServer } from './actions';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
  }

componentDidMount =() => {
  this.props.getServer('http://205.209.241.49:7000/JSON/')
}
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={LoginView} />
          <Route exact path="/live" component={LiveView} />
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
