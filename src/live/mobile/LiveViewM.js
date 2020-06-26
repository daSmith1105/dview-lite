import React from 'react';
import { connect } from 'react-redux';
import { configChange, setSingleView, camViewChange, logoutUser } from '../../actions';
import { FaPlay, FaSignOutAlt } from 'react-icons/fa';
import VideoViewM from './VideoViewM';
import ConfButtonsViewM from './ConfButtonsViewM';
import ServerViewM from './ServerViewM';
import logo from '../../images/logo_transparent.png'
import history from '../../history';
import '../../App.css';

// Drag & Drop
let dragStartX = 0
let dragEndX = 0
let dragged = false

class LiveViewM extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          isPortrait: true
        };

        this.view = React.createRef();
    };

    componentDidMount() {
      dragStartX = 0;
      dragEndX = 0;
      dragged = false;
      window.addEventListener("mouseup", this.onDragEndMouse);
      window.addEventListener("touchend", this.onDragEndTouch);
    }

    componentWillUnmount() {
      window.removeEventListener("mouseup", this.onDragEndMouse);
      window.removeEventListener("touchend", this.onDragEndTouch);
    }

    resize = () => {
      let width = window.innerWidth;
      let height = window.innerHeight;
      let isPortrait = height > width;
      if( isPortrait !== this.state.isPortrait ) {
        this.setState({ isPortrait: isPortrait })
      }
    }  

    onDragStart = (clientX) => {
      dragged = true;
      dragStartX = clientX;
      dragEndX = clientX;
      window.addEventListener("touchmove", this.onTouchMove);
    }
    
    onDragStartTouch = (evt) => {
      const touch = evt.targetTouches[0];
      !this.props.fSingle && this.onDragStart(touch.clientX);
    }
    
    onTouchMove = (evt) => {
      const touch = evt.targetTouches[0];
      dragEndX = touch.clientX;
    }
    
    onDragEndTouch = (evt) => {
      this.onDragEnd(dragStartX, dragEndX);
      dragged = false;
      dragStartX = 0;
      dragEndX = 0;
      window.removeEventListener("touchmove", this.onTouchMove);
    }

    onDragEnd = (start, end) => {
      if(dragged && (end - start > 160)){
        this.onSwiped('r')
      }
      if(dragged && (start - end > 170)){
        this.onSwiped('l')
      }
    }

    onSwiped = (text) => {
      if(text === 'l'){
        this.getConfAndIndex('inc');
      };
      if (text === 'r'){
        this.getConfAndIndex('dec');
      };
    }

    killDrag = () => {
      window.removeEventListener("touchmove", this.onTouchMove);
      window.removeEventListener("touchend", this.onDragEndTouch);
      window.addEventListener("touchend", this.onDragEndTouch);
    }

    getConfAndIndex = (type) => {
      const currentCamset = this.props.currentCamView.split('_')[1];
      if(currentCamset){
        switch (this.props.conf) {
          case "conf-1": 
            let camset1 = this.props.singleViewEnabledArr.indexOf(parseInt(currentCamset));
            if(type === 'dec') {
              if(this.props.singleViewEnabledArr[camset1 - 1]){
                this.props.camViewChange('cam_' + this.props.singleViewEnabledArr[camset1 - 1])
              } else {
                this.props.camViewChange('cam_' + this.props.singleViewEnabledArr[this.props.singleViewEnabledArr.length - 1])
              }
            }
            if(type === 'inc') {
              if((camset1 < this.props.singleViewEnabledArr.length) && this.props.singleViewEnabledArr[camset1 + 1]){
                this.props.camViewChange('cam_' + this.props.singleViewEnabledArr[camset1 + 1])
              } else {
                this.props.camViewChange('cam_' + this.props.singleViewEnabledArr[0])
              }
            }
            break

          case "conf-4": 
            let camset4 = this.props.quadViewEnabledArr.indexOf(currentCamset);
            if(type === 'dec') {
              if(this.props.quadViewEnabledArr[camset4 - 1]){
                this.props.camViewChange('cam_' + this.props.quadViewEnabledArr[camset4 - 1])
              } else {
                this.props.camViewChange('cam_' + this.props.quadViewEnabledArr[this.props.quadViewEnabledArr.length - 1])
              }
            }
            if(type === 'inc') {
              if(camset4 < this.props.quadViewEnabledArr.length -1 && this.props.quadViewEnabledArr[camset4 + 1]){
                this.props.camViewChange('cam_' + this.props.quadViewEnabledArr[camset4 + 1])
              } else {
                this.props.camViewChange('cam_' + this.props.quadViewEnabledArr[0])
              }
            }
            break

          case "conf-6": 
            let camset6 = this.props.sixViewEnabledArr.indexOf(currentCamset);
            if(type === 'dec') {
              if(this.props.sixViewEnabledArr[camset6 - 1]){
                this.props.camViewChange('cam_' + this.props.sixViewEnabledArr[camset6 - 1])
              } else {
                this.props.camViewChange('cam_' + this.props.sixViewEnabledArr[this.props.sixViewEnabledArr.length - 1])
              }
            }
            if(type === 'inc') {
              if(camset6 < this.props.sixViewEnabledArr.length -1 && this.props.sixViewEnabledArr[camset6 + 1]){
                this.props.camViewChange('cam_' + this.props.sixViewEnabledArr[camset6 + 1])
              } else {
                this.props.camViewChange('cam_' + this.props.sixViewEnabledArr[0])
              }
            }
            break

          case "conf-9": 
            let camset9 = this.props.nineViewEnabledArr.indexOf(currentCamset);
            if(type === 'dec') {
              if(this.props.nineViewEnabledArr[camset9 - 1]){
                this.props.camViewChange('cam_' + this.props.nineViewEnabledArr[camset9 - 1])
              } else {
                this.props.camViewChange('cam_' + this.props.nineViewEnabledArr[this.props.nineViewEnabledArr.length - 1])
              }
            }
            if(type === 'inc') {
              if(camset9 < this.props.nineViewEnabledArr.length -1 && this.props.nineViewEnabledArr[camset9 + 1]){
                this.props.camViewChange('cam_' + this.props.nineViewEnabledArr[camset9 + 1])
              } else {
                this.props.camViewChange('cam_' + this.props.nineViewEnabledArr[0])
              }
            }
            break

          case "conf-12": 
            let camset12 = this.props.twelveViewEnabledArr.indexOf(currentCamset);
            if(type === 'dec') {
              if(this.props.twelveViewEnabledArr[camset12 - 1]){
                this.props.camViewChange('cam_' + this.props.twelveViewEnabledArr[camset12 - 1])
              } else {
                this.props.camViewChange('cam_' + this.props.twelveViewEnabledArr[this.props.twelveViewEnabledArr.length - 1])
              }
            }
            if(type === 'inc') {
              if(camset12 < this.props.twelveViewEnabledArr.length -1 && this.props.twelveViewEnabledArr[camset12 + 1]){
                this.props.camViewChange('cam_' + this.props.twelveViewEnabledArr[camset12 + 1])
              } else {
                this.props.camViewChange('cam_' + this.props.twelveViewEnabledArr[0])
              }
            }
            break

          case "conf-16": 
            let camset16 = this.props.sixteenViewEnabledArr.indexOf(currentCamset);
            if(type === 'dec') {
              if(this.props.sixteenViewEnabledArr[camset16 - 1]){
                this.props.camViewChange('cam_' + this.props.sixteenViewEnabledArr[camset16 - 1])
              } else {
                this.props.camViewChange('cam_' + this.props.sixteenViewEnabledArr[this.props.sixteenViewEnabledArr.length - 1])
              }
            }
            if(type === 'inc') {
              if(camset16 < this.props.sixteenViewEnabledArr.length -1 && this.props.sixteenViewEnabledArr[camset16 + 1]){
                this.props.camViewChange('cam_' + this.props.sixteenViewEnabledArr[camset16 + 1])
              } else {
                this.props.camViewChange('cam_' + this.props.sixteenViewEnabledArr[0])
              }
            }
            break
          default:
            console.log('should not get called')
        }
      } else {
        alert('nada')
      }
    }


    render() {

      window.onresize = this.resize;

        const styles = {
          liveContainerStyle: {
            position: 'relative',
            backgroundColor: 'rgba(10,14,25,0.7)',
            height: '100%',
            width: '100%', 
            maxWidth: '100vw',
            maxHeight: '100vh',
            paddingTop: 2,
            paddingLeft: '2.5%'
          }
        };

        const { liveContainerStyle } = styles;

        return (
            <div style={ liveContainerStyle } id="live_view">
              <div style={{ width:'98%', height: '50%',  marginLeft: '1%' }}>
                <div style={{ width: '95%', marginRight: 'auto', marginLeft: 'auto', display: 'flex', alignItems: 'center', jusitfyContent: 'space-around', marginBottom: 10}}>
                  <div style={{ width: '38%', marginLeft: '-5%', marginRight: '2%' }}>
                    <img src={logo} height="auto" width="95%" alt="" />
                  </div>
                  <div style={{ width: '65%' }}>
                    <p style={{ textAlign: 'right', margin: 0, padding: 0, fontSize: 12, marginRight: 10, color: 'white', marginTop: 5 }}>DVS Version: {this.props.sVersion}</p>
            
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%', marginTop: 0}}>
                      <p style={{ fontSize: 12, marginRight: 10, color: 'white'  }}>Name:</p>
                      <p style={{ fontSize: 12, color: 'white', whiteSpace: 'nowrap' }}>{this.props.sName}</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', width: '100%', marginTop: -8 }}>
                      <p style={{ fontSize: 12, marginRight: 10, color: 'white', marginTop: 2 }}>Jump:</p>
                      <ServerViewM />
                    </div>

                  </div>
                </div> 
                <div style={{ height: '100%', width: '100%' }} 
                      onTouchStart={this.onDragStartTouch}
                      onDoubleClick={this.killDrag}
                      ref={this.view} >
                  <VideoViewM />
                </div>
                <p style={{ margin: 0, padding: 0, fontSize: 12, color: 'white',textAlign: 0, marginTop: 8, marginBottom: -10, marginRight: 10 }}>
                  {(this.props.currentCamView.split('_')[1].length > 2 ? 'cams ': 'cam ') + this.props.currentCamView.split('_')[1]}
                </p>
                <ConfButtonsViewM killAutoScan={ this.killAutoScan } /> 
                <div style={{ height: 34, width: '100%', marginLeft: '-1.5%', backgroundColor: 'rgba(0,0,0,.4)', borderRadius: 5, marginTop: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                  {/* icons for playback, jump?, take picture, logout */}
                  <FaPlay style={{ height: '7vmin', width: '7vmin', color: 'white' }} onClick={ () => history.push('/playback') } />
                  <FaSignOutAlt style={{ height: '7vmin', width: '7vmin', color: 'white' }} onClick={ () => this.props.logoutUser(this.props.sSess) } />
                </div>
              </div>
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
      sixViewEnabledArr,
      nineViewEnabledArr,
      twelveViewEnabledArr,
      sixteenViewEnabledArr,
      sName,
      sVersion
     } = state.server;
    const { fFullscreen, singleCamSelected, fSingle } = state.video;
    const { conf } = state.config;
    const { currentCamView } = state.camera;
    const { sSess } = state.auth;
    return {
        dvsName,
        dvsVersion,
        serverUrl,
        fEview,
        singleViewEnabledArr,
        quadViewEnabledArr,
        sixViewEnabledArr,
        nineViewEnabledArr,
        twelveViewEnabledArr,
        sixteenViewEnabledArr,
        fFullscreen,
        singleCamSelected,
        fSingle,
        conf,
        currentCamView,
        sName,
        sVersion,
        sSess
    }
};

export default connect(mapStateToProps, { configChange, setSingleView, camViewChange, logoutUser })(LiveViewM);