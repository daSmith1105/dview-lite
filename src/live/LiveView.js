import React from 'react';
import { connect } from 'react-redux';
import VideoView from './VideoView';
import CamButtonsView from './CamButtonsView';
import ConfButtonsView from './ConfButtonsView';
import ServerView from './ServerView';
import ControlBoxView from './ControlBoxView';
import '../App.css';

class Live extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            temp: ''
        };
    };
    
    render() {

        const styles = {
          liveContainerStyle: {
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'lightgrey',
            position: 'relative',
            // backgroundColor: 'green'
          },
          leftSubContainerStyle: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            position: 'relative',
            // backgroundColor: 'red',
            height: this.props.fullScreenEnabled ? '100vmin' : '68vmin',
            width: this.props.fullScreenEnabled ? '160vmin' : '80vmin',
            marginRight: 10
          },
          rightSubContainerStyle: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: this.props.fullScreenEnabled ? '14vmin' : '16vmin',
            maxWidth: 180,
            // backgroundColor: 'yellow',
            height: '68vmin',
            marginTop: 'auto',
            marginBottom: 'auto',
            padding: 10,
            paddingTop: '1vmin',
            backgroundColor: 'white'
          }
        };

        const { liveContainerStyle } = styles;
        

        return (
            <div style={ liveContainerStyle }>
                <div style={ styles.leftSubContainerStyle }>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, margin: 'auto', width: '100%', height: this.props.fullScreenEnabled ? '88%' : '80%', padding: 5 }}>
                        <VideoView />
                    </div>
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, margin: 'auto', height: this.props.fullScreenEnabled ? '5%' : '8%', width: '100%' }}>
                      <CamButtonsView />
                    </div>
                </div>
                <div style={ styles.rightSubContainerStyle }>
                    <ConfButtonsView />
                    <ServerView />
                    <ControlBoxView />
                </div>
                {/* iCamButttonsBoxView */}
                {/* iControlBoxView */}
        </div>
        );
    };
};

const mapStateToProps = state => {
    const { dvsName, dvsVersion, serverUrl, fEview } = state.server;
    const {fullScreenEnabled  } = state.config;
    return {
        dvsName,
        dvsVersion,
        serverUrl,
        fEview,
        fullScreenEnabled
    }
};

export default connect(mapStateToProps, {})(Live);