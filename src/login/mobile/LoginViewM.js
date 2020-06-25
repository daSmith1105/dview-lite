import React from 'react';
import Loader from 'react-loader-spinner';
import dividia_logo from '../../images/dividia_logo.png';
import SessionExistsModalM from './SessionExistsModalM';
import SessionExpiredModalM from './SessionExpiredModalM';
import MaxSessionsModal from '../MaxSessionsModal';
import NoRemoteModal from '../NoRemoteModal';
import SessionErrorModal from '../SessionErrorModal';
import { connect } from 'react-redux';
import {    
  usernameChanged, 
  passwordChanged, 
  autoLoginChanged, 
  loginUser,
  screenChange,
  clearSessionModal
} from '../../actions';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../../App.css';

class LoginViewM extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showPassword: false
        };
    };

    componentDidMount = async() => {
      // need to check if autologin is set in local storage, if so and we return a session that exists - logout and force login to get a new session variable
      const autoLogin = await localStorage.getItem('autoLogin');
      if(autoLogin){ this.props.autoLoginChanged('true') };

      const username = await localStorage.getItem('username');
      if(username){ this.props.usernameChanged(username) };

      const password = await localStorage.getItem('password');
      if(password){ this.props.passwordChanged(password) };

      const sSess = await localStorage.getItem('sSess');

      if(autoLogin && username && password && sSess ) {
        this.props.loginUser( username, password, true, false, '/JSON/', true ); // sName, sPass, fForce, fLocal, this.props.sServer + , fAuto
      };
    };

    handleUsernameChange = (e) => {
        this.props.usernameChanged(e.target.value);
    };

    handlePasswordChange = (e) => {
        this.props.passwordChanged(e.target.value);
    };

    toggleAutoLogin = () => {
        this.props.autoLoginChanged();
    };

    toggleShowPassword = () => {
      this.setState({ showPassword: !this.state.showPassword })
    }

    keyPressed = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        this.props.loginUser( this.props.username, this.props.password, false, false, '/JSON/', this.props.autoLoginStatus, this.props.bSerial )  //this.props.sServer + 
      }
    }

    onSubmit = ( e ) => {
        e.preventDefault();
        this.props.loginUser( this.props.username, this.props.password, false, false, '/JSON/', this.props.autoLoginStatus, this.props.bSerial ) //[sName,sPass,fForce,fLocal,this.props.sServer + ,fAuto,bSerial]
    };
    
  render() {
    const { 
      loginContainerStyle, 
      innerContainerStyle,
      headingStyle,
      formStyle,
      userBlockStyle,
      userInputStyle,
      passwordBlockStyle, 
      passwordInputStyle,
      autoLoginContainer,
      bottomButtonStyle,
      modalContainerStyle 
    } = styles;

    const date = new Date();
    const currentYear = date.getFullYear();

    return (
      <div style={ loginContainerStyle }>

        <div style={ innerContainerStyle }>
            <img src={ dividia_logo } height="55px" width="280px" alt='' />

            { this.props.loginResult !== 'maxsession' && 
              this.props.loginResult !== 'noremote' && 
              this.props.loginResult !== 'error' && 
              this.props.loginResult !== 'expired' && 
              this.props.loginResult !== 'exists' ?

              <form style={ formStyle }>
                  <h1 style={{ fontSize: 24, color: 'white' }}>Dividia Lite Viewer</h1>
                  <h2 style={ headingStyle }>{this.props.sName} </h2> 

                  <div style={styles.spacedRowStyle2}>
                    <p style={styles.footerTextStyle}>Version {this.props.sVersion}</p>
                  </div>

                  <div style={ userBlockStyle }>
                      <label htmlFor="username" style={{ fontSize: 14 }}>Username:</label>
                      <input 
                          style={ userInputStyle }
                          type="text" 
                          name="username" 
                          autocapitalize="none"
                          autocomplete={false}
                          value={ this.props.username } 
                          onChange={ this.handleUsernameChange }
                          autoFocus={true} />
                        
                  </div>

                  <div style={ passwordBlockStyle }>
                    <label htmlFor="password" style={{ fontSize: 14, marginLeft: 8 }}>Password:</label>
                      { this.state.showPassword ? 
                          <input 
                              style={ passwordInputStyle }
                              type="text"  
                              name="password" 
                              autocapitalize="none"
                              autocomplete={false}
                              value={ this.props.password } 
                              onKeyPress={this.keyPressed}
                              onChange={ this.handlePasswordChange } /> :
                            <input 
                              style={ passwordInputStyle }
                              type="password"
                              name="password" 
                              autocapitalize="none"
                              autocomplete={false}
                              value={ this.props.password } 
                              onKeyPress={this.keyPressed}
                              onChange={ this.handlePasswordChange } />
                      }
                      { this.state.showPassword ? 
                        <FaEyeSlash className="hoverable" style={{ marginTop: 2, color: 'white' }} onClick={ () => this.toggleShowPassword() } /> : 
                        <FaEye className="hoverable" style={{ marginTop: 2, color: 'white' }} onClick={ () => this.toggleShowPassword() } /> 
                      }
                  </div>

                  <div style={ autoLoginContainer }>
                      <label htmlFor='autoLogin' style={{ marginRight: 8 }}>Auto-Login</label>
                      <input
                          name='autoLogin' 
                          type="checkbox" 
                          checked={ this.props.autoLoginStatus }
                          value={ this.props.autoLoginStatus } 
                          onChange={ () => this.toggleAutoLogin() } />
                  </div>

                  { this.props.loginResult === 'noauth' ? 
                      <p style={{ backgroundColor: 'white', padding: 1, fontSize: 14, fontWeight: 'bold', color: 'red', marginTop: 1,  marginBottom: 0, borderRadius: 5  }}>Access Denied</p> :
                      <p style={{ height: 16, fontSize: 14, fontWeight: 'bold', marginTop: 1,  marginBottom: 0 }}></p> 
                  }

                  { this.props.loginResult === 'loginerror' ? 
                      <p style={{ backgroundColor: 'white', padding: 1, fontSize: 14, fontWeight: 'bold', color: 'red', marginTop: -11, borderRadius: 5, marginBottom: -10 }}>Must provide username and password</p> :
                      <p style={{  height: 16, fontSize: 14, fontWeight: 'bold', marginTop: -11, marginBottom: -10 }}></p> 
                  }

                  { this.props.platform === 'Ios' ? 
                        <button style={ bottomButtonStyle }>
                          <a href={ "https://itunes.apple.com/us/app/dividia-viewer/id1143269725?mt=8" } 
                            alt="app store" 
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: 'black', fontSize: 16 }}>
                            App Store
                          </a>
                        </button> :
                      null
                  }
                
                  { this.props.loading ?
                    <div style={{ display: 'flex', margin: 'auto', height: 26, justifyContent: 'center',  width: '30%', marginTop: 10 }}>
                      <p style={{ fontSize: 15, color: 'white', marginTop: 5, marginRight: 10}}><i>LOADING</i> </p>
                      <Loader type="Grid" color="white" height={26} width={26} />
                    </div> :
                    <button className="hoverable" style={ bottomButtonStyle } onClick={this.onSubmit}>Login</button>
                  }

              </form> :
              null
            }

            { this.props.loginResult === 'maxsession' ?
            <div style={ modalContainerStyle }>
                <MaxSessionsModal 
                    onAccept={ () => this.props.clearSessionModal() } />
            </div> :
            null  
            }

            { this.props.loginResult === 'noremote' ?
                <div style={ modalContainerStyle }>
                    <NoRemoteModal 
                        onAccept={ () => this.props.clearSessionModal() } />
                </div> :
                null  
            }

            { this.props.loginResult === 'error' ?
                <div style={ modalContainerStyle }>
                    <SessionErrorModal 
                        onAccept={ () => this.props.clearSessionModal() } />
                </div> :
                null  
            }

            { this.props.loginResult === 'expired' ?
                <div style={ modalContainerStyle }>
                    <SessionExpiredModalM
                        onAccept={ () => this.props.clearSessionModal() } />
                </div> :
                null  
            }

            { this.props.loginResult === 'exists' ?
              <div style={ modalContainerStyle }>
                  <SessionExistsModalM 
                      onDeny={ () => this.props.clearSessionModal() }
                      onAccept={ () => this.props.loginUser(this.props.username, this.props.password, true, false, '/JSON/', this.props.autoLoginStatus) } />  {/* sName, sPass, fForce, fLocal, this.props.sServer +, fAuto */}
              </div> :
              null  
            }   

            <div style={{ marginTop: 10 }}>
              <p style={styles.footerTextStyle}>&copy;{currentYear} Dividia Technologies, LLC</p>
            </div>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => {
    const { username, password, autoLoginStatus, loginStatus, loginResult, loading } = state.auth;
    const { sServer, sName, sVersion, serverUrl, bSerial, fEview } = state.server;
    const { platform } = state.utility;
    return {
        username,
        password,
        autoLoginStatus,
        loginStatus,
        loginResult,
        loading,
        sServer,
        sName,
        sVersion,
        serverUrl,
        bSerial,
        fEview,
        platform
    }
};

export default connect( 
  mapStateToProps, 
  { 
    usernameChanged, 
    passwordChanged, 
    autoLoginChanged, 
    loginUser, 
    screenChange,
    clearSessionModal
  })(LoginViewM);

const styles = {
  loginContainerStyle: {
    display: 'flex',
    flexDirection: 'column', 
    flex: 1,
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'lightgrey',
    position: 'relative',
    top: 0, 
    left: 0, 
    bottom: 0, 
    right: 0, 
    backgroundColor: 'rgba(10,14,25,0.7)',
    maxHeight: '100vh',
    overflow: 'hidden',
    paddingTop: 20
  },
  innerContainerStyle: {
    width: '98%',
    maxWidth: 360,
    borderRadius: 5
  },
  formStyle: {
    marginTop: 8, 
    padding: 4,
    paddingBottom: 15,
    backgroundColor: '#135ba2',
    borderRadius: 10,
    boxShadow: '1px 2px 4px 2px rgba(40,120,255,0.6), -1px -2px 4px 2px rgba(40,120,255,0.6)'
  },
  headingStyle: {
    fontSize: 18,
    height: 16,
    marginTop: 5
  },
  userBlockStyle: {
    fontSize: 14,
    width: '98%',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'left'
  },
  userInputStyle: {
    width: '66%', 
    maxWidth: 260,
    borderRadius: '.2em', 
    paddingLeft: 10, 
    marginLeft: 10,
    marginTop: 3,
    marginRight: 20,
    fontSize: 16
  },
  passwordBlockStyle: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'left',
    width: '98%',
  },
  passwordInputStyle: {
    width: '59%', 
    maxWidth: 260,
    borderRadius: '.2em', 
    paddingLeft: 10, 
    marginLeft: 10,
    marginTop: 3,
    marginRight: 14,
    fontSize: 16
  },
  autoLoginContainer: {
    marginTop: 20,
    textAlign: 'right',
    marginRight: 18,
    fontSize: 16
  },
  bottomButtonStyle: {
    width: '90%',
    padding: 2,
    fontSize: 18,
    fontWeight: 'bold',
    border: 'none',
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'lightgrey',
    boxShadow: '1px 2px 4px 2px rgba(0,0,0,0.3), -1px -1px 4px 2px rgba(0,0,0,0.3)', 
    marginTop: 18
  },
  modalContainerStyle: {
    marginTop: 8, 
    padding: 4,
    paddingBottom: 15,
    backgroundColor: '#135ba2',
    borderRadius: 10,
    boxShadow: '1px 2px 4px 2px rgba(40,120,255,0.6), -1px -2px 4px 2px rgba(40,120,255,0.6)',
    marginBottom: 16
  },
  spacedRowStyle1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    color: 'black',
    marginTop: 20
  },
  spacedRowStyle2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    color: 'black',
    marginTop: 10
  },
  footerTextStyle: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
  }
  
};
