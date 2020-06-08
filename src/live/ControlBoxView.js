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
                <Link className="link" to="/playback">Playback</Link>
            </button>
            <button style={ styles.controlBoxButtonStyle }
                    className="hoverableButton">
                <Link className="link" to="/dview.php">Camera Browser</Link>
            </button>
            { props.platform !== 'Ios' && props.platform !== 'Android' ?
                <button style={ styles.controlBoxButtonStyle }
                        className="hoverableButton">
                    <a href={ props.platform === 'Win' ? 
                                "http://205.209.241.49:7000/launcher.php": 
                                "http://205.209.241.49:7000/dview.php"
                             } 
                      alt="full viewer"
                      style={styles.linkStyle}
                      className={'hoverableButton'}>
                      Full Viewer
                    </a>
                </button> :
                null
            }
            <button style={ styles.controlBoxButtonStyle }
                    className="hoverableButton"
                    onClick={ () => props.logoutUser(props.sSess, '/JSON/') }>
                <Link className="link" to="/">Logout</Link>
            </button>
        </div>
    )
}

const mapStateToProps = state => {
    const { sSess } = state.auth;
    const { platform } = state.utility;
    return {
        sSess,
        platform
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
        fontSize: 12
    },
    linkStyle: {
        fontSize: 12,
        textDecoration: 'none',
        marginTop: 10
      },
}