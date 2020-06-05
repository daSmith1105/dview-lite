import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginView from './login/LoginView';
import LiveView from './live/LiveView';
import PlaybackView from './playback/PlaybackView';
import Error from './PageError';
import { connect } from 'react-redux';
import { getServer, checkExists,logoutUser, expireSession, getPlatform } from './actions';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        temp: ''
    };

    this.verifySessionHandler = 0;
};

componentDidMount = () => {
  this.props.getPlatform();
  this.props.getServer('/JSON/');
  this.verifySession();
}

componentWillUnmount = () => {
  clearTimeout(this.verifySessionHandler);
};

verifySession = async() => {
  const sessionValidation = this.props.checkExists(this.props.sSess, '/JSON/');
  Promise.all([sessionValidation])
  .then( (exists) => {
      if(exists[0] === false) {
        if(this.props.isLoggedIn) {
          // we never logged out, but we no longer have a valid session
          // set session expiration
          this.props.expireSession(this.props.sSess, '/JSON/', this.props.autoLoginStatus);
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
export default connect( mapStateToProps, { getServer, checkExists, logoutUser, expireSession, getPlatform })(App);


// whichIP: function( sIPbase, oServ )
// 		{
// 			var oServerTemp = new RDAServer();
// 			var sServer;
// 			var sUrl;

// 			/*
// 			 * Since we use rpcproxy.cgi and the standard case is
// 			 * we probably are not local, try public first.
// 			 * This fixes bug: http://tickets.dividia.net/show_bug.cgi?id=16612
// 			 */

// 			// Special case so we can direct connect back to our sIPbase
// 			if ( sIPbase != '' ) {
// 				sServer = oServ.getIP();
// 				if ( oServ.getPort() != 80 )
// 					sServer += ":" + oServ.getPort();
// 				if ( sIPbase == sServer )
// 					return sServer;
// 			}

// 			// Try Public IP
// 			try {
// 				sServer = oServ.getIP();
// 				if ( oServ.getPort() != 80 )
// 					sServer += ":" + oServ.getPort();
// 				sUrl = "http://" + sServer;
// 				oServerTemp.setServer( sUrl );
// 				oServerTemp.Query( "info.isAlive" );
// 				return sServer;
// 			} catch ( e ) {
// 			}