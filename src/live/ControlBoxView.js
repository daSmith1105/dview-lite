import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import { Link } from 'react-router-dom';
import history from '../history';
import '../App.css';

const ControlBoxView = props => {

    return (
        <div style={ styles.controlBoxViewContainerStyle }>
            <button style={ styles.controlBoxButtonStyle }
                    className="hoverableButton"
                    onCLick={() => history.push('/playback')}>
                <Link className="hoverableButton link" to="/playback" style={{ textDecoration: 'none' }}>Playback</Link>
            </button>
            <br />

            {/* show the camera browser button if we are accessing locally - same network */}
            { props.conf === 'conf-1' ? 
                <button style={ styles.controlBoxButtonStyle }
                        className="hoverableButton">
                    <a href={ ":434" + props.camBrowserCam } target="_blank" rel="noopener noreferrer" className="hoverableButton" style={{ textDecoration :'none'}}>
                        Cam Browser
                    </a>
                </button> :
                null
            }
            { props.platform !== 'Ios' && props.platform !== 'Android' ?
                <button style={ styles.controlBoxButtonStyle }
                        className="hoverableButton">
                    <a href={ props.platform === 'Win' ? 
                               "/launcher.php": 
                                "/dview.php"
                             } 
                      alt="full viewer"
                      style={styles.linkStyle}
                      className={'hoverableButton'}>
                      Full Viewer
                    </a>
                </button> :
                null
            }
            <br/>
            <button style={ styles.controlBoxButtonStyle }
                    className="hoverableButton"
                    onClick={ () => { props.logoutUser(props.sSess, '/JSON/'); history.push("/") } }> 
                <Link className="hoverableButton" to="/" style={{ textDecoration :'none'}}>Logout</Link>
            </button>
        </div>
    )
}

const mapStateToProps = state => {
    const { sSess } = state.auth;
    const { platform } = state.utility;
    const { sServer } = state.server;
    const { conf } = state.config;
    const { camBrowserCam } = state.camera;
    return {
        sSess,
        platform,
        sServer,
        conf,
        camBrowserCam
    };
}

export default connect(mapStateToProps, { logoutUser })(ControlBoxView);

const styles = {
    controlBoxViewContainerStyle: {

    },
    controlBoxButtonStyle: {
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 3,
        paddingBottom: 3,
        margin: 10,
        border: 'none',
        borderRadius: 5,
        fontSize: '1.5vmin',
        // boxShadow: '2px 2px 4px 2px rgba(40,120,255,0.4), -2px -2px 4px 2px rgba(40,120,255,0.4)'
    },
    linkStyle: {
        fontSize: '1.5vmin',
        textDecoration: 'none',
        marginTop: 10
      },
}