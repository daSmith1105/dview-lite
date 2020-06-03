import React from 'react';
import dividia_logo from '../images/dividia_logo.jpg';
import SessionExistsModal from './SessionExistsModal';
import SessionExpiredModal from './SessionExpiredModal';
import { connect } from 'react-redux';
import {    usernameChanged, 
            passwordChanged, 
            autoLoginChanged, 
            loginUser,
            screenChange,
            clearSessionExistsModal,
            clearExpiredSessionModal,
            forceLogin
        } from '../actions';
import '../App.css';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isWin: null,
            isMac: null,
            isIos: null,
            isAndroid: null
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

// work this out - enter key should advance to next field or submit if user and pass have value
    _onKey = ( e ) => {
        e.preventDefault();
        // summary: If the enter key is pressed, then move to the next field or submit login.
        // try {
        //     if (e.keyCode == keys.ENTER) {
        //         if (e.target == this.frmLogin.sUser) {
        //             this.frmLogin.sPass.focus();
        //         } else if (e.target == this.frmLogin.sPass) {
        //             this.btnLogin.click();
        //         } else if (e.target == this.btnAuto) {
        //             this.btnLogin.click();
        //         }
        //         //e.preventDefault();
        //         event.stop( e );
        //     }
        // } catch(e) {
        //     console.log( "Error handling key press [" + e + "]" );
        // }
    }

    _onSubmit = ( e ) => {
        e.preventDefault();
        // need to sanitize/verify user, pass, autologin and dispatch action
        this.props.loginUser( this.props.username, this.props.password, '/' )
    };

    // setServer = ( sServer ) => {
    //     if ( sServer == "" )
    //         sServer = "DVS";

    //     this.lblServer.innerHTML = sServer + " Login";
    // }

    // promptLoginSuccess = () => {
    //     this.lblMessage.innerHTML = "&nbsp;";
    //     this.frmLogin.sUser.value = "";
    //     this.frmLogin.sPass.value = "";
    //     this.frmLogin.sUser.focus();
    // }

    // promptLoginAttempt =() => {
    //     this.lblMessage.innerHTML = "Please Wait";
    //     this.frmLogin.sUser.selectionStart = 0;
    //     this.frmLogin.sUser.selectionEnd = this.frmLogin.sUser.textLength;
    //     this.frmLogin.sUser.focus();
    // }

    // promptLoginFailed = () => {
    //     this.lblMessage.innerHTML = "Access Denied";
    //     this.frmLogin.sPass.value = "";
    //     this.frmLogin.sUser.selectionStart = 0;
    //     this.frmLogin.sUser.selectionEnd = this.frmLogin.sUser.textLength;
    //     this.frmLogin.sUser.focus();
    // }

    // promptExisting = () => {
    //     var fRet = confirm('You are already logged in.\nWould you like to terminate your other session?');
    //     if ( fRet ) {
    //         this.btnForce.click();
    //         return;
    //     }

    //     this.lblMessage.innerHTML = "Login Cancelled";
    //     this.frmLogin.sPass.value = "";
    //     this.frmLogin.sUser.selectionStart = 0;
    //     this.frmLogin.sUser.selectionEnd = this.frmLogin.sUser.textLength;
    //     this.frmLogin.sUser.focus();
    // }

    // promptLoginMax = () => {
    //     alert( "Maximum login sessions exceeded.\nTry again later." );
        
    //     this.lblMessage.innerHTML = "Max Sessions Exceeded";
    //     this.frmLogin.sUser.selectionStart = 0;
    //     this.frmLogin.sUser.selectionEnd = this.frmLogin.sUser.textLength;
    //     this.frmLogin.sUser.focus();
	// }

    // promptNoRemote = () => {
    //     this.lblMessage.innerHTML = "Access Denied (No remote rights)!";
    //     this.frmLogin.sPass.value = "";
    //     this.frmLogin.sUser.selectionStart = 0;
    //     this.frmLogin.sUser.selectionEnd = this.frmLogin.sUser.textLength;
    //     this.frmLogin.sUser.focus();
	// }

    // promptError = ( fOverride, sMsg ) => {
    //     var sError = "An error occurred while attempting to login to the server. Please try again.\n" +
    //         "If this problem persists, please contact Dividia at 866-348-4342.";
    //     if ( fOverride )
    //         sError = sMsg;
    //     else
    //         sError += "\n\n(" + sMsg + ")";

    //     alert( sError );

    //     this.lblMessage.innerHTML = "&nbsp;";
    //     this.frmLogin.sPass.value = "";
    //     this.frmLogin.sUser.selectionStart = 0;
    //     this.frmLogin.sUser.selectionEnd = this.frmLogin.sUser.textLength;
    //     this.frmLogin.sUser.focus();
    // }

    // showLoginBooted = () => {
    //     alert( "Someone has logged in from a different computer with your username.\n\nYour session has been terminated." );
        
    //     this.lblMessage.innerHTML = "Session Terminated";
    //     this.frmLogin.sUser.selectionStart = 0;
    //     this.frmLogin.sUser.selectionEnd = this.frmLogin.sUser.textLength;
    //     this.frmLogin.sUser.focus();
	// }

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
                    onDeny={ this.props.clearSessionExistsModal }
                    onAccept={ this.props.forceLogin } />
            </div> :
            null  
        }

        { 1 === 2 ?
            <div style={ modalContainerStyle }>
                <SessionExpiredModal 
                    onAccept={ this.props.clearExpiredSessionModal } />
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
                    <label htmlFor="password">Password:</label>
                    <input 
                        style={ passwordInputStyle }
                        type="password" 
                        name="password" 
                        value={ this.props.password } 
                        onChange={ this.handlePasswordChange } />
                </div>

                <div style={ autoLoginContainer }>
                    <label htmlFor='autoLogin' style={{ marginRight: 4 }}>Auto-Login</label>
                    <input
                        name='autoLogin' 
                        type="checkbox" 
                        value={ this.props.autoLoginStatus } 
                        onChange={ this.toggleAuto } />
                </div>

                { this.state.error ? 
                    <p style={{ height: 8, fontSize: 13, fontWeight: 'bold', color: 'red', marginTop: -1,  marginBottom: -1 }}>Access Denied</p> :
                    <p style={{ height: 8, fontSize: 13, fontWeight: 'bold', marginTop: -1,  marginBottom: -1 }}></p> 
                }

                { this.state.loginCancelled ? 
                    <p style={{ height: 8, fontSize: 13, fontWeight: 'bold', color: 'red', marginTop: -1 }}>Login Cancelled</p> :
                    <p style={{ height: 8, fontSize: 13, fontWeight: 'bold', marginTop: -1 }}></p> 
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

                    <button style={ bottomButtonStyle} onClick={this._onSubmit}>Login</button>
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
    const { username, password, autoLoginStatus, loginStatus, loginResult } = state.auth;
    const { sName, sVersion, serverUrl, fEview } = state.server;
    return {
        username,
        password,
        autoLoginStatus,
        loginStatus,
        loginResult,
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
    clearSessionExistsModal,
    clearExpiredSessionModal,
    forceLogin
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
    width: '60%', 
    borderRadius: '.2em', 
    paddingLeft: 10,  
    marginLeft: 10 
  },
  passwordBlockStyle: {
    marginTop: 5,
    fontSize: 14
  },
  passwordInputStyle: {
    width: '60%', 
    borderRadius: '.2em', 
    paddingLeft: 10, 
    marginLeft: 14, 
    marginTop: 3
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
    backgroundColor: 'lightgrey'
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
    color: 'black'
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
