import React from 'react';
import Loader from 'react-loader-spinner'
import dividia_logo from '../images/dividia_logo.jpg';
import SessionExistsModal from './SessionExistsModal';
import SessionExpiredModal from './SessionExpiredModal';
import MaxSessionsModal from './MaxSessionsModal';
import NoRemoteModal from './NoRemoteModal';
import SessionErrorModal from './SessionErrorModal';
import { connect } from 'react-redux';
import {    usernameChanged, 
            passwordChanged, 
            autoLoginChanged, 
            loginUser,
            screenChange,
            clearSessionModal
        } from '../actions';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../App.css';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isWin: null,
            isMac: null,
            isIos: null,
            isAndroid: null,
            showPassword: false
        };
    };

    componentDidMount = () => {
        this.isWindows();
        this.isMacintosh();
        this.isIOS();
        this.isAndroid()
        // need to check if autologin is set in local storage, if so and we return a session that exists - logout and force login to get a new session variable
    };

    isWindows = () => {
        return navigator.platform.indexOf('Win') > -1
    }

    isMacintosh = () => {
        return navigator.platform.indexOf('Mac') > -1
    }

    isIOS = () => {
        return navigator.platform.indexOf('iPad') > -1 || navigator.platform.indexOf('iPhone') > -1
    }

    isAndroid = () => {
        return navigator.platform.indexOf('Android') > -1
    }

    handleUsernameChange = (e) => {
        this.props.usernameChanged(e.target.value);
    };

    handlePasswordChange = (e) => {
        this.props.passwordChanged(e.target.value);
    };

    toggleAuto = () => {
        this.props.autoLoginChanged();
    };

    toggleShowPassword = () => {
      this.setState({ showPassword: !this.state.showPassword })
    }

    keyPressed = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        this.props.loginUser( this.props.username, this.props.password, '/' )
      }
    }

    _onSubmit = ( e ) => {
        e.preventDefault();
        // need to sanitize/verify user, pass, autologin and dispatch action
        this.props.loginUser( this.props.username, this.props.password, '/' )
    };

    // showInactivity = () => {		
    //     this.lblMessage.innerHTML = "You were logged out due to inactivity";
    //     this.frmLogin.sUser.selectionStart = 0;
    //     this.frmLogin.sUser.selectionEnd = this.frmLogin.sUser.textLength;
    //     this.frmLogin.sUser.focus();
    // }
    
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
      modalContainerStyle } = styles;

    const date = new Date();
    const currentYear = date.getFullYear();

    return (
      <div style={ loginContainerStyle }>
        { this.props.loginResult === 'exists' ?
            <div style={ modalContainerStyle }>
                <SessionExistsModal 
                    onDeny={ () => this.props.clearSessionModal() }
                    onAccept={ () => this.props.loginUser(this.props.username, this.props.password, '/', 'force') } />
            </div> :
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
                <SessionExpiredModal 
                    onAccept={ () => this.props.clearSessionModal() } />
            </div> :
            null  
        }

        <div style={ innerContainerStyle }>
            <img src={ dividia_logo } height="55px" width="280px" alt='' />

            <form style={ formStyle }>

                <h1 style={ headingStyle }>{this.props.sName} </h1> 

                <div style={ userBlockStyle }>
                    <label htmlFor="username">Username:</label>
                    <input 
                        style={ userInputStyle }
                        type="text" 
                        name="username" 
                        value={ this.props.username } 
                        onChange={ this.handleUsernameChange }
                        autoFocus={true} />
                </div>

                <div style={ passwordBlockStyle }>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                    <label htmlFor="password" style={{ paddingLeft: 10 }}>Password:</label>
                      { this.state.showPassword ? 
                          <input 
                              style={ passwordInputStyle }
                              type="text"  
                              name="password" 
                              value={ this.props.password } 
                              onKeyPress={this.keyPressed}
                              onChange={ this.handlePasswordChange } /> :
                            <input 
                              style={ passwordInputStyle }
                              type="password"
                              name="password" 
                              value={ this.props.password } 
                              onKeyPress={this.keyPressed}
                              onChange={ this.handlePasswordChange } />
                      }
                      { this.state.showPassword ? 
                        <FaEyeSlash className="hoverable" style={{ marginTop: 2, color: 'white' }} onClick={ () => this.toggleShowPassword() } /> : 
                        <FaEye className="hoverable" style={{ marginTop: 2, color: 'white' }} onClick={ () => this.toggleShowPassword() } /> 
                      }
                    </div>
                </div>

                <div style={ autoLoginContainer }>
                    <label htmlFor='autoLogin' style={{ marginRight: 4 }}>Auto-Login</label>
                    <input
                        name='autoLogin' 
                        type="checkbox" 
                        value={ this.props.autoLoginStatus } 
                        onChange={ this.toggleAuto } />
                </div>

                { this.props.loginResult === 'noauth' ? 
                    <p style={{ height: 8, fontSize: 13, fontWeight: 'bold', color: 'red', marginTop: 1,  marginBottom: 0 }}>Access Denied</p> :
                    <p style={{ height: 8, fontSize: 13, fontWeight: 'bold', marginTop: 1,  marginBottom: 0 }}></p> 
                }

                { this.props.loginResult === 'loginerror' ? 
                    <p style={{ height: 8, fontSize: 13, fontWeight: 'bold', color: 'red', marginTop: -4,  marginBottom: 0 }}>Must provide username and password</p> :
                    <p style={{ height: 8, fontSize: 13, fontWeight: 'bold', marginTop: -4,  marginBottom: 0 }}></p> 
                }

                <div style={styles.spacedRowStyle}>
                    { !this.state.isIOS && !this.state.isAndroid ? 
                        <button style={ bottomButtonStyle} onClick={() => this.props.screenChange('full')}>Full Viewer</button> :
                        null
                    }

                    { this.props.fEview ? 
                        <button style={ bottomButtonStyle} onClick={() => this.props.screenChange('enterprise')}>eView</button> :
                        null
                    }

                    { this.state.isMac || this.state.isIOS ? 
                        <button style={ bottomButtonStyle } onClick={() => this.props.screenChange('app_store')}>App Store</button> :
                        null
                    }
                    { this.props.loading ?
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 26,  width: '30%', }}>
                        <p style={{ fontSize: 14, color: 'white', marginRight: 10 }}><i>LOADING</i> </p>
                        <Loader type="Grid" color="white" height={26} width={26} />
                      </div> :
                      <button style={ bottomButtonStyle } onClick={this._onSubmit}>Login</button>
                    }

                </div>

            </form>

            <div style={styles.spacedRowStyle}>
                <p style={styles.footerTextStyle}>Version {this.props.sVersion}</p>
                <p style={styles.footerTextStyle}>&copy;{currentYear} Dividia Technologies, LLC</p>
                { !this.state.isIOS && !this.state.isWin ?
                    <p style={styles.footerTextStyle} className={'hoverable'} onClick={() => this.props.screenChange('full')}>full</p> :
                    null
                }

                { this.props.fEview ? 
                    <p style={styles.footerTextStyle} className={'hoverable'} onClick={() => this.props.screenChange('enterprise')}>eview</p> :
                null
                }
            </div>

            { this.state.isWin ? 
                <p style={ styles.launcherDownloadStyle } className={'hoverable'} onClick={() => this.props.screenChange('launcher')}>download launcher</p> :
                null
            }

        </div>
      </div>
    );
  };
};

const mapStateToProps = state => {
    const { username, password, autoLoginStatus, loginStatus, loginResult, loading } = state.auth;
    const { sName, sVersion, serverUrl, fEview } = state.server;
    return {
        username,
        password,
        autoLoginStatus,
        loginStatus,
        loginResult,
        loading,
        sName,
        sVersion,
        serverUrl,
        fEview
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
  })(Login);

const styles = {
  loginContainerStyle: {
    display: 'flex',
    flex: 1,
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'lightgrey',
    position: 'relative'
  },
  innerContainerStyle: {
    width: 300,
  },
  formStyle: {
    padding: 3,
    paddingBottom: 15,
    backgroundColor: '#135ba2',
    borderRadius: 5
  },
  headingStyle: {
    fontSize: 16,
    height: 16
  },
  userBlockStyle: {
    marginTop: 16,
    fontSize: 14
  },
  userInputStyle: {
    width: '55%', 
    borderRadius: '.2em', 
    paddingLeft: 10,  
    marginLeft: 10, 
    marginRight: 14
  },
  passwordBlockStyle: {
    marginTop: 5,
    fontSize: 14
  },
  passwordInputStyle: {
    width: '55%', 
    borderRadius: '.2em', 
    paddingLeft: 10, 
    marginLeft: 4, 
    marginTop: 3,
  },
  autoLoginContainer: {
    marginTop: 10,
    textAlign: 'right',
    marginRight: 8,
    fontSize: 13
  },
  bottomButtonStyle: {
    width: '30%',
    padding: 2,
    fontSize: 12,
    fontWeight: 'bold',
    border: 'none',
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'lightgrey',
    height: 26
  },
  modalContainerStyle: {
    height: 180,
    width: 280,
    position: 'absolute',
    left: '50%',
    marginLeft: -150,
    top: '50%',
    marginTop: -90,
    zIndex: 10
  },
  spacedRowStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    color: 'black',
    marginTop: 16
  },
  footerTextStyle: {
    fontSize: 10
  },
  launcherDownloadStyle: {
    textAlign: 'right',
    fontSize: 10,
    padding: 0,
    margin: 0
  }
};
