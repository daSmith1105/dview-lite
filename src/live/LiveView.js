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
        const { liveContainerStyle } = styles;

        return (
            <div style={ liveContainerStyle }>
                <div style={ styles.leftSubContainerStyle }>
                    <div>
                        <VideoView />
                    </div>
                    <CamButtonsView />
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
    return {
        dvsName,
        dvsVersion,
        serverUrl,
        fEview
    }
};

export default connect(mapStateToProps, {})(Live);

const styles = {
  liveContainerStyle: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    height: '100vh',
    justifyContent: 'center',
    color: 'lightgrey',
    position: 'relative',
    // backgroundColor: 'green'
  },
  subContainer: {
    height: '70vmin',
    width: '90vmin',
    backgroundColor: 'white',
    paddingRight: 40,
    paddingleft: 40
  },
  leftSubContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  rightSubContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '20vmin',
    // backgroundColor: 'yellow',
    height: '68vmin',
    marginTop: 'auto',
    marginBottom: 'auto',
    paddingTop: '1vmin',
    backgroundColor: 'white'
  }
};
