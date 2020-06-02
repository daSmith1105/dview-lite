import React from 'react';

const ControlBoxView = props => {
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
                    className="hoverableButton">
                Logout
            </button>
        </div>
    )
}

export default ControlBoxView;

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