import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import { Link } from 'react-router-dom';
import '../App.css';

const ControlBoxView = props => {

    const doLogout = (sSess) => {
        props.logoutUser(sSess);
    }

    return (
        <div style={ styles.controlBoxViewContainerStyle }>
            <button style={ styles.controlBoxButtonStyle }
                    className="hoverableButton">
                Playback
            </button>
            <button style={ styles.controlBoxButtonStyle }
                    className="hoverableButton">
                FullViewer
            </button>
            <button style={ styles.controlBoxButtonStyle }
                    className="hoverableButton"
                    onClick={ () => doLogout('sSess') }>
                <Link className="link" to="/">Logout</Link>
            </button>
        </div>
    )
}

const mapStateToProps = state => {
    return state;
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
        borderRadius: 5
    }
}