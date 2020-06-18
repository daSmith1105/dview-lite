import React from 'react';
import { connect } from 'react-redux';
import { configChange, setSingleView, camViewChange } from '../actions';
import VideoView from './VideoView';
import CamButtonsView from './CamButtonsView';
import ConfButtonsView from './ConfButtonsView';
import ServerView from './ServerView';
import ControlBoxView from './ControlBoxView';
import ContextMenu from 'react-context-menu';
import '../App.css';

let autoScanTimerHandler = 0;
let camIndex = 0;

class Live extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            autoScanning: false
        };

        this.autoScanTimerHandler = 0
    };

    componentDidMount =() => {
      clearInterval(this.autoScanTimerHandler);
      camIndex = 0;
      this.setState({ 
        autoScanning: false
      })
    }

    componentWillUnmount = () => {
      clearInterval(this.autoScanTimerHandler);
      camIndex = 0
      this.setState({
        autoScanning: false
      });
    }

    exitFullscreenHamdler= () => {
      this.props.configChange('conf-fs');
    }

    // for single cam scan we are just going to increment the current cam view

    startAutoScan = () => {
      // get index of current cam selected in our enabled Cams array
      console.log(camIndex)
      console.log(this.props.singleViewEnabledArr)
      switch (this.props.conf) {
        case "conf-1":
          let cam1 = this.props.singleViewEnabledArr.indexOf(parseInt(this.props.currentCamView.slice(4, this.props.currentCamView.length)));
          if(cam1 > -1){
            camIndex = cam1;
          } else {
            camIndex = 0;
          }
          break;
        case "conf-4":
          let cam4 = this.props.quadViewEnabledArr.indexOf(this.props.currentCamView.slice(4, this.props.currentCamView.length));
          if(cam4 > -1){
            camIndex = cam4;
          } else {
            camIndex = 0;
          }
          break;
        case "conf-8":
          let cam8 = this.props.octoViewEnabledArr.indexOf(this.props.currentCamView.slice(4, this.props.currentCamView.length));
          if(cam8 > -1){
            camIndex = cam8;
          } else {
            camIndex = 0;
          }
          break;
        case "conf-9":
          let cam9 = this.props.nineViewEnabledArr.indexOf(this.props.currentCamView.slice(4, this.props.currentCamView.length));
          if(cam9 > -1){
            camIndex = cam9;
          } else {
            camIndex = 0;
          }
          break;
        case "conf-16":
          let cam16 = this.props.sixteenViewEnabledArr.indexOf(this.props.currentCamView.slice(4, this.props.currentCamView.length));
          if(cam16> -1){
            camIndex = cam16;
          } else {
            camIndex = 0;
          }
          break;
        default:
          camIndex = 0;
      }

      console.log(camIndex)

      this.setState({ 
        autoScanning: true
      });
      // clear single cam view if we have a cam that was enlarged using double click
      this.props.singleCamSelected && this.props.setSingleView('')
      // set the interval timer to call scanStart function
      this.autoScanTimerHandler = setInterval(this.scan, 4000);  // bAutoScanTimeout
    }

    scan = () => { 

      // initial scan cam is balnk when moving to another this.props.conf - cam_ undefined
      // if our local as variable gets set to false clear the interval timer
      if(!this.state.autoScanning) {
        this.killAutoScan();
      }

      // single cam view
      if(this.props.conf === 'conf-1' && this.props.singleViewEnabledArr.length > 1) {
        // rotate through changing our cameras
        this.props.camViewChange(`cam_` + this.props.singleViewEnabledArr[camIndex]);
        // if the cam number is less than the number of cameras that are enabled, increment the curent cam set by 1
        // otherwise set the current cam back to 1
        if(camIndex < this.props.singleViewEnabledArr.length - 1){
            camIndex++
        } else {
          camIndex = 0
        }
      }

        // quad cam view
        if(this.props.conf === 'conf-4' && this.props.quadViewEnabledArr.length > 1){
            // rotate through changing our cameras
            this.props.camViewChange(`cam_` + this.props.quadViewEnabledArr[camIndex]);
            // if the cam number isless than the number of cameras we support, increment the curent cam set by 1
            // otherwise set the current cam back to index 0
            if(camIndex < this.props.quadViewEnabledArr.length - 1){
              camIndex++
            } else {
              camIndex = 0
            }
        }

        // octo cam view
        if(this.props.conf === 'conf-8' && this.props.octoViewEnabledArr.length > 1){
            // rotate through changing our cameras
            this.props.camViewChange(`cam_` + this.props.octoViewEnabledArr[camIndex]);
            // if the cam number isless than the number of cameras we support, increment the curent cam set by 1
            // otherwise set the current cam back to index 0
            if(camIndex < this.props.octoViewEnabledArr.length - 1){
              camIndex++
            } else {
              camIndex = 0
            }
        }

        // nine cam view
        if(this.props.conf === 'conf-9' && this.props.nineViewEnabledArr.length > 1){
            // rotate through changing our cameras
            this.props.camViewChange(`cam_` + this.props.nineViewEnabledArr[camIndex]);
            // if the cam number isless than the number of cameras we support, increment the curent cam set by 1
            // otherwise set the current cam back to index 0
            if(camIndex < this.props.nineViewEnabledArr.length - 1){
              camIndex++
            } else {
              camIndex = 0
            }
        }

        // sixteen cam view
        if(this.props.conf === 'conf-16' && this.props.sixteenViewEnabledArr.length >  1){
            // rotate through changing our cameras
            this.props.camViewChange(`cam_` + this.props.sixteenViewEnabledArr[camIndex]);
            // if the cam number isless than the number of cameras we support, increment the curent cam set by 1
            // otherwise set the current cam back to index 0
            if(camIndex < this.props.sixteenViewEnabledArr.length - 1){
              camIndex++
            } else {
              camIndex = 0
            }
        }
    }

    killAutoScan = () => {
      camIndex = 0;
      clearInterval(this.autoScanTimerHandler);
      this.setState({ autoScanning: false })
      // make sure we do not have a camera set that has been double clicked for enlargement - shouldnt be necessary, but...
      this.props.singleCamSelected && this.props.setSingleView('');
    }

    toggleAutoScan = () => {
      if(this.state.autoScanning) {
        this.killAutoScan();
      } else {
        this.startAutoScan();
      }
    }

    render() {

        console.log(this.props.currentCamView)

        const styles = {
          liveContainerStyle: {
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            height: '100vh',
            maxHeight: '100vh',
            overflow: 'hidden', 
            justifyContent: 'space-around',
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
            marginRight: 0
          },
          rightSubContainerStyle: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '16vmin', 
            height: '68vmin',
            marginTop: 'auto',
            marginBottom: 'auto',
            paddingTop: '1vmin',
            backgroundColor: 'white',
            marginLeft: '-6vmin', 
            zIndex: 2
          }
        };

        const { liveContainerStyle } = styles;
        

        return (
            <div style={ liveContainerStyle } id="live_view">

                <div style={ styles.leftSubContainerStyle }>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, margin: 'auto', width: this.props.fFullscreen ? '101%' : '88%', height: this.props.fFullscreen ? '100%' : '82%' }}>
                        <VideoView />
                    </div>
                    { !this.props.fFullscreen ?
                      <div style={{ position: 'absolute', bottom: '6vmin', left: 0, right: 0, margin: 'auto', height: '5%', width: '94%' }}>
                        <CamButtonsView autoScanning={ this.state.autoScanning } toggleAutoScan={ this.toggleAutoScan } />
                      </div> :
                      null
                    }
                </div>

                { !this.props.fFullscreen ?
                  <div style={ styles.rightSubContainerStyle }>
                      <ConfButtonsView killAutoScan={ this.killAutoScan } />
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
                {/* spacer to move the previous container to the left */}
                { !this.props.fFullscreen ?
                    <div style={{ width: '10vmin', height: '100%' }}></div> :
                    null
                }
        </div>
        );
    };
};

const mapStateToProps = state => {
    const { 
      dvsName, 
      dvsVersion, 
      serverUrl, 
      fEview, 
      singleViewEnabledArr,
      quadViewEnabledArr,
      octoViewEnabledArr,
      nineViewEnabledArr,
      sixteenViewEnabledArr
     } = state.server;
    const { fFullscreen, singleCamSelected } = state.video;
    const { conf } = state.config;
    const { currentCamView } = state.camera;
    return {
        dvsName,
        dvsVersion,
        serverUrl,
        fEview,
        singleViewEnabledArr,
        quadViewEnabledArr,
        octoViewEnabledArr,
        nineViewEnabledArr,
        sixteenViewEnabledArr,
        fFullscreen,
        singleCamSelected,
        conf,
        currentCamView
    }
};

export default connect(mapStateToProps, { configChange, setSingleView, camViewChange })(Live);