import React from 'react';
import { connect } from 'react-redux';
import { setSingleView } from '../../actions';
import dividia_logo from '../../images/dividia_logo.png';
import CameraStreamContainer from '../CameraStreamContainer';


const VideoViewM = props => {

    const forcedSingleView = <div style={{ height: '100%', width: '100%', position: 'relative' }}>
                                <CameraStreamContainer enabled={ props.cameras.filter( c => c.bID === props.singleCamSelected)[0] } height={'100%'} width={'100%'} camNum={ props.singleCamSelected } style={{ float: 'left' }} onDoubleClick={() => props.setSingleView('') } />
                             </div>

    const singleView =  <div style={{ height: '100%', width: '100%', position: 'relative' }}>
                            { props.cameras.find( c => c.bID.toString() === props.currentCamView.split('_')[1]) && props.cameras.find( c => c.bID.toString() === props.currentCamView.split('_')[1]).fEnable === true ?
                                <CameraStreamContainer height={'100%'} width={'100%'} enabled={ props.cameras.find( c => c.bID.toString() === props.currentCamView.split('_')[1]) } camNum={ props.currentCamView.split('_')[1] } style={{ float: 'left' }} onDoubleClick={ () => console.log('nope') } /> :
                                <CameraStreamContainer height={'100%'} width={'100%'} enabled={ 'false' } camNum={ props.currentCamView.split('_')[1] } style={{ float: 'left' }} onDoubleClick={ () => console.log('nope') } />
                            }
                        </div>
    
    const quadView = <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                        { props.currentCamView === "cam_1-4" && props.cameras.slice(0,4).map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'50%'} width={'50%'} onDoubleClick={() => c.fEnable === true ? props.setSingleView(c.bID) : null } style={{ float: 'left' }} />) }
                        { props.currentCamView === "cam_5-8" && props.cameras.slice(4,8).map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'50%'} width={'50%'} onDoubleClick={() => c.fEnable === true ? props.setSingleView(c.bID) : null } style={{ float: 'left' }} />) }
                        { props.currentCamView === "cam_9-12" && props.cameras.slice(8,12).map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'50%'} width={'50%'} onDoubleClick={() => c.fEnable === true ? props.setSingleView(c.bID) : null } style={{ float: 'left' }} />) }   
                        { props.currentCamView === "cam_13-16" && props.cameras.slice(12,16).map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'50%'} width={'50%'} onDoubleClick={() => c.fEnable === true ? props.setSingleView(c.bID) : null } style={{ float: 'left' }} />) }
                        { props.currentCamView === "cam_17-20" && props.cameras.slice(16,20).map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'50%'} width={'50%'} onDoubleClick={() => props.setSingleView(c.bID) } style={{ float: 'left' }} />) }
                        { props.currentCamView === "cam_21-24" && props.cameras.slice(20,24).map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'50%'} width={'50%'} onDoubleClick={() => props.setSingleView(c.bID) } style={{ float: 'left' }} />) }
                        { props.currentCamView === "cam_25-28" && props.cameras.slice(24,28).map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'50%'} width={'50%'} onDoubleClick={() => props.setSingleView(c.bID) } style={{ float: 'left' }} />) }
                        { props.currentCamView === "cam_29-32" && props.cameras.slice(28,32).map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'50%'} width={'50%'} onDoubleClick={() => props.setSingleView(c.bID) } style={{ float: 'left' }} />) }
                     </div>
    
    const sixView = <div style={{ height: '100%', width: '100%', position: 'relative' }}>
                        { props.currentCamView === "cam_1-6" && props.cameras.slice(0,6).map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'50%'} width={'33.3%'} onDoubleClick={() => c.fEnable === true ? props.setSingleView(c.bID) : null } style={{ float: 'left' }} />) }
                        { props.currentCamView === "cam_7-12" && props.cameras.slice(6,12).map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'50%'} width={'33.3%'} onDoubleClick={() => c.fEnable === true ? props.setSingleView(c.bID) : null } style={{ float: 'left' }} />) }
                        { props.currentCamView === "cam_13-18" && props.cameras.slice(12,18).map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'50%'} width={'33.3%'} onDoubleClick={() => c.fEnable === true ? props.setSingleView(c.bID) : null } style={{ float: 'left' }} />) }
                        { props.currentCamView === "cam_19-24" && props.cameras.slice(18,24).map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'50%'} width={'33.3%'} onDoubleClick={() => c.fEnable === true ? props.setSingleView(c.bID) : null } style={{ float: 'left' }} />) }
                        { props.currentCamView === "cam_25-30" && props.cameras.slice(24,30).map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'50%'} width={'33.3%'} onDoubleClick={() => c.fEnable === true ? props.setSingleView(c.bID) : null } style={{ float: 'left' }} />) }
                        { props.currentCamView === "cam_31-36" && props.cameras.slice(30,36).map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'50%'} width={'33.3%'} onDoubleClick={() => c.fEnable === true ? props.setSingleView(c.bID) : null } style={{ float: 'left' }} />) }
                    </div>
    
    const nineView = <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                        { props.currentCamView === "cam_1-9" && props.cameras.slice(0,9).map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'33.3%'} width={'33.3%'} onDoubleClick={() => c.fEnable === true ? props.setSingleView(c.bID) : null } style={{ float: 'left' }} />) }
                        { props.currentCamView === "cam_8-16" && props.cameras.slice(7,16).map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'33.3%'} width={'33.3%'} onDoubleClick={() => c.fEnable === true ? props.setSingleView(c.bID) : null } style={{ float: 'left' }} />) }
                        { props.currentCamView === "cam_16-24" && props.cameras.slice(15,24).map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'33.3%'} width={'33.3%'} onDoubleClick={() => props.setSingleView(c.bID) } style={{ float: 'left' }} />) }
                        { props.currentCamView === "cam_24-32" && props.cameras.slice(23,32).map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'33.3%'} width={'33.3%'} onDoubleClick={() => props.setSingleView(c.bID) } style={{ float: 'left' }} />) }
                     </div>
    
    const twelveView = <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                        { props.currentCamView === "cam_1-12" && props.cameras.slice(0,12).map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'33.3%'} width={'25%'} onDoubleClick={() => c.fEnable === true ? props.setSingleView(c.bID) : null } style={{ float: 'left' }} />) }
                        { props.currentCamView === "cam_13-24" && props.cameras.slice(12,24).map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'33.3%'} width={'25%'} onDoubleClick={() => c.fEnable === true ? props.setSingleView(c.bID) : null } style={{ float: 'left' }} />) }
                        { props.currentCamView === "cam_25-36" && props.cameras.slice(24,36).map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'33.3%'} width={'25%'} onDoubleClick={() => props.setSingleView(c.bID) } style={{ float: 'left' }} />) }                
                     </div>
                    
    const sixteenView = <div style={{ height: '100%', width: '100%', position: 'relative' }}>
                            { props.currentCamView === "cam_1-16" &&  props.cameras.slice(0,16).map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} height={'25%'} width={'25%'} camNum={c.bID } onDoubleClick={() => c.fEnable === true ? props.setSingleView(c.bID) : null } style={{ float: 'left' }} /> )}
                            { props.currentCamView === "cam_17-32" &&  props.cameras.slice(16,32).map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'33.3%'} width={'33.3%'} onDoubleClick={() => props.setSingleView(c.bID) } style={{ float: 'left' }} />) }
                        </div>

    return (
        <div style={ styles.videoViewContainerStyle }>
            { !props.fFullscreen && props.platform !== 'Ios' && props.platform !== 'Android' ? 
                <div style={ styles.videoViewHeaderStyle }>
                    <img src={ dividia_logo } height='100%' width='auto' alt='' />
                    <p style={ styles.dvsNameStyle }>{props.sName}</p>
                </div> :
                null
            }
            <div style={ styles.videoViewStreamStyle }>
                {   props.fSingle ? 
                        forcedSingleView :
                    props.conf === "conf-1" ?
                        singleView :
                    props.conf === "conf-4" ? 
                        quadView :
                    props.conf === "conf-6" ? 
                        sixView :
                    props.conf === "conf-9" ?
                        nineView :
                    props.conf === "conf-12" ?
                        twelveView :
                    props.conf === "conf-16" ? 
                        sixteenView :
                    null
                }   
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    const { conf } = state.config;
    const { platform } = state.utility;
    const { currentCamView, autoScrollEnabled } = state.camera;
    const { sName, cameras, bNumCams, cameraArr, singleViewEnabledArr, quadView, octoView, nineView, sixteenView } = state.server;
    const { fFullscreen, fSingle, singleCamSelected } = state.video;
    return {
        conf,
        platform,
        currentCamView,
        autoScrollEnabled,
        sName,
        fFullscreen,
        fSingle,
        singleCamSelected,
        cameras,
        bNumCams,
        cameraArr, 
        singleViewEnabledArr, 
        quadView, 
        octoView, 
        nineView, 
        sixteenView 
    }
}

export default connect(mapStateToProps, { setSingleView } )(VideoViewM);

const styles = {
    videoViewContainerStyle: {
        height: '100%',
        width: '100%',
        position: 'relative',
        marginLeft: '-1.5vmin'
    },
    videoViewHeaderStyle: {
        paddingRight: 20,
        paddingLeft: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '5vmin',
        marginBottom: '1vmin'
    },
    dvsNameStyle: {
        fontSize: '1.5vmin',
        fontWeight: 'bold',
        marginBottom: 0,
        color: 'white',
        letterSpacing: 1.0, 
    },
    videoViewStreamStyle: {
        border: 'none',
        backgroundColor: 'rgba(10,14,25,0.6)',
        height: '100%',
        width: '100%',
        boxShadow: '2px 3px 4px 2px rgba(40,120,255,0.7), -2px -2px 4px 2px rgba(40,120,255,0.7)'
    }
}