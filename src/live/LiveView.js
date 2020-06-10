import React from 'react';
import { connect } from 'react-redux';
import { configChange } from '../actions';
import VideoView from './VideoView';
import CamButtonsView from './CamButtonsView';
import ConfButtonsView from './ConfButtonsView';
import ServerView from './ServerView';
import ControlBoxView from './ControlBoxView';
import ContextMenu from 'react-context-menu';
import '../App.css';

class Live extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            temp: ''
        };
    };

    exitFullscreenHamdler= () => {
      this.props.configChange('conf-fs');
    }

    render() {

        const styles = {
          liveContainerStyle: {
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'black',
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
            height: this.props.fFullscreen ? '100%' : '100vmin',
            width: this.props.fFullscreen ? '100%' : '160vmin',
            marginRight: this.props.fFullscreen ? 0 : '4vmin' 
          },
          rightSubContainerStyle: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            // width: '16vmin',
            maxWidth: 190,
            // backgroundColor: 'yellow',
            height: '68vmin',
            marginTop: 'auto',
            marginBottom: 'auto',
            padding: '1vmin',
            paddingTop: '1vmin',
            backgroundColor: 'white',
            marginLeft: '-5vmin', 
            zIndex: 1
          }
        };

        const { liveContainerStyle } = styles;
        

        return (
            <div style={ liveContainerStyle } id="live_view">
                <div style={ styles.leftSubContainerStyle }>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, margin: 'auto', width: this.props.fFullscreen ? '101%' : '90%', height: this.props.fFullscreen ? '100%' : '84%' }}>
                        <VideoView />
                    </div>
                    { !this.props.fFullscreen ?
                      <div style={{ position: 'absolute', bottom: '4vmin', left: 0, right: 0, margin: 'auto', height: '5%', width: '94%' }}>
                        <CamButtonsView />
                      </div> :
                      null
                    }
                </div>
                { !this.props.fFullscreen ?
                  <div style={ styles.rightSubContainerStyle }>
                      <ConfButtonsView />
                      <ServerView />
                      <ControlBoxView />
                  </div> :
                  null 
                }
                {/* iCamButttonsBoxView */}
                {/* iControlBoxView */}
                { this.props.fFullscreen ? 
                    <ContextMenu
                      style={{ color: 'black'}}
                      contextId={'live_view'}
                      closeOnClick
                      items={[
                        {
                          label: 'Exit FullScreen',
                          onClick: this.exitFullscreenHamdler
                        }
                      ]} /> :
                      null 
                }
        </div>
        );
    };
};

const mapStateToProps = state => {
    const { dvsName, dvsVersion, serverUrl, fEview } = state.server;
    const { fFullscreen } = state.video;
    return {
        dvsName,
        dvsVersion,
        serverUrl,
        fEview,
        fFullscreen
    }
};

export default connect(mapStateToProps, { configChange })(Live);