import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import { Link } from 'react-router-dom';
import '../App.css';

const ControlBoxView = props => {

    return (
        <div style={ styles.controlBoxViewContainerStyle }>
            <button style={ styles.controlBoxButtonStyle }
                    className="hoverableButton">
                <Link className="hoverableButton link" to="/playback">Playback</Link>
            </button>
            <br />

            {/* show the camera browser button if we are accessing locally - same network */}
            { props.conf === 'conf-1' ? 
                <button style={ styles.controlBoxButtonStyle }
                        className="hoverableButton">
                    <a href={ props.sServer + ":434" + props.camBrowserCam } target="_blank" rel="noopener noreferrer" className="hoverableButton link">
                        Cam Browser
                    </a>
                </button> :
                null
            }
            { props.platform !== 'Ios' && props.platform !== 'Android' ?
                <button style={ styles.controlBoxButtonStyle }
                        className="hoverableButton">
                    <a href={ props.platform === 'Win' ? 
                                props.sServer + "/launcher.php": 
                                props.sServer + "/dview.php"
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
                    onClick={ () => props.logoutUser(props.sSess, '/JSON/') }> {/* this.props.sServer  */}
                <Link className="hoverableButton link" to="/">Logout</Link>
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
    },
    linkStyle: {
        fontSize: '1.5vmin',
        textDecoration: 'none',
        marginTop: 10
      },
}