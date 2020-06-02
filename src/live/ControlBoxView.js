import React from 'react';

const ControlBoxView = props => {
    return (
        <div style={ styles.controlBoxViewContainerStyle }>
            <button style={ styles.controlBoxButtonStyle }>Playback</button>
            <button style={ styles.controlBoxButtonStyle }>FullViewer</button>
            <button style={ styles.controlBoxButtonStyle }>Logout</button>
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
        margin: 10
    }
}