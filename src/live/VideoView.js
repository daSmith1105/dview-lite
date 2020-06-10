import React from 'react';
import { connect } from 'react-redux';
import { setSingleView } from '../actions';
import dividia_logo from '../images/dividia_logo.jpg';
import CameraStreamContainer from './CameraStreamContainer';

// implement this.updateHandler = 0; function here and pass the updated timestamp to each component as props

const VideoView = props => {
    const qv1 = props.cameras.length > 4 ? props.cameras.slice(0,4) : props.cameras;
    const qv2 = props.cameras.length > 8 ? props.cameras.slice(4,8) : props.cameras.slice(4,props.cameras.length);
    const qv3 = props.cameras.length > 12 ? props.cameras.slice(8,12) : props.cameras.slice(8,props.cameras.length);
    const qv4 = props.cameras.length > 16 ? props.cameras.slice(12,16) : props.cameras.slice(12,props.cameras.length);
    let eightv1Main = props.cameras[0];
    let eightv2Main = props.cameras.length > 8 ? props.cameras[7] : null;
    const eightv1 = props.cameras.length > 8 ? props.cameras.slice(1,8) : props.cameras.slice(1,props.cameras.length);
    const eightv2 = props.cameras.length > 8 ? props.cameras.slice(9,props.cameras.length) : null;
    const ninev1 = props.cameras.length > 9 ? props.cameras.slice(0,9) : props.cameras.slice(0,props.cameras.length);
    const ninev2 = props.cameras.length > 9 ? props.cameras.slice(7,props.cameras.length) : null;

    const forcedSingleView = <div style={{ height: '100%', width: '100%', position: 'relative' }}>
                                <CameraStreamContainer enabled={ props.cameras.filter( c => c.bID === props.singleCamSelected)[0] } height={'100%'} width={'100%'} camNum={ props.singleCamSelected } style={{ float: 'left' }} onDoubleClick={() => props.setSingleView('') } />
                             </div>

    const singleView =  <div style={{ height: '100%', width: '100%', position: 'relative' }}>
                            { isNaN(parseInt(props.currentCamView.charAt(props.currentCamView.length -2))) ?
                                <CameraStreamContainer height={'100%'} width={'100%'} enabled={ props.cameras.filter( c => c.bID.toString() === props.currentCamView.slice(-1))[0] } camNum={ props.currentCamView.slice(-1) } style={{ float: 'left' }} onDoubleClick={ () => console.log('nope') } /> :
                                <CameraStreamContainer height={'100%'} width={'100%'} enabled={ props.cameras.filter( c => c.bID.toString() === props.currentCamView.slice(-2))[0] } camNum={ props.currentCamView.slice(-2) } style={{ float: 'left' }} onDoubleClick={ () => console.log('nope') } />
                            }
                        </div>
    
    const quadView = <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                        { props.currentCamView === "cam-1-4" && qv1.map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'50%'} width={'50%'} onDoubleClick={() => props.setSingleView(c.bID) } style={{ float: 'left' }} />) }
                        { props.currentCamView === "cam-5-8" && qv2.map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'50%'} width={'50%'} onDoubleClick={() => props.setSingleView(c.bID) } style={{ float: 'left' }} />) }
                        { props.currentCamView === "cam-9-12" && qv3.map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'50%'} width={'50%'} onDoubleClick={() => props.setSingleView(c.bID) } style={{ float: 'left' }} />) }   
                        { props.currentCamView === "cam-13-16" && qv4.map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'50%'} width={'50%'} onDoubleClick={() => props.setSingleView(c.bID) } style={{ float: 'left' }} />) }
                        {/* { props.currentCamView === "cam-17-20" && qv4.map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'50%'} width={'50%'} onDoubleClick={() => props.setSingleView(c.bID) } style={{ float: 'left' }} />) } */}
                        {/* { props.currentCamView === "cam-21-24" && qv4.map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'50%'} width={'50%'} onDoubleClick={() => props.setSingleView(c.bID) } style={{ float: 'left' }} />) } */}
                        {/* { props.currentCamView === "cam-25-28" && qv4.map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'50%'} width={'50%'} onDoubleClick={() => props.setSingleView(c.bID) } style={{ float: 'left' }} />) } */}
                        {/* { props.currentCamView === "cam-29-32" && qv4.map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'50%'} width={'50%'} onDoubleClick={() => props.setSingleView(c.bID) } style={{ float: 'left' }} />) } */}
                     </div>
    
    const octoView = <div style={{ height: '100%', width: '100%', position: 'relative' }}>
                    { props.currentCamView === "cam-1-8" ?
                        <div style={{ height: '100%', width: '100%' }}>
                            <CameraStreamContainer height={'75%'} width={'75%'} enabled={ props.cameras.filter( c => c.bID === 1)[0] } camNum={ 1 } style={{ float: 'left' }} />
                            { eightv1.map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} height={'25%'} width={'25%'} camNum={c.bID } onDoubleClick={() => props.setSingleView(c.bID) } style={{ float: 'right' }} />) }
                        </div> :
                        null
                    }
                    { props.currentCamView === "cam-9-16" ?
                        <div style={{ height: '100%', width: '100%' }}>
                            <CameraStreamContainer height={'75%'} enabled={ props.cameras.filter( c => c.bID === 9)[0] } width={'75%'} camNum={ 9 } style={{ float: 'left' }} />
                            { eightv2.map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c}  height={'25%'} width={'25%'} camNum={c.bID } onDoubleClick={() => props.setSingleView(c.bID) } style={{ float: 'right' }} />) }
                        </div> :
                        null
                    }
                     {/* { props.currentCamView === "cam-17-24" ?
                        <div style={{ height: '100%', width: '100%' }}>
                            <CameraStreamContainer height={'75%'} enabled={ props.cameras.filter( c => c.bID === 9)[0] } width={'75%'} camNum={ 9 } style={{ float: 'left' }} />
                            { eightv2.map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c}  height={'25%'} width={'25%'} camNum={c.bID } onDoubleClick={() => props.setSingleView(c.bID) } style={{ float: 'right' }} />) }
                        </div> :
                        null
                    } */}
                     {/* { props.currentCamView === "cam-25-32" ?
                        <div style={{ height: '100%', width: '100%' }}>
                            <CameraStreamContainer height={'75%'} enabled={ props.cameras.filter( c => c.bID === 9)[0] } width={'75%'} camNum={ 9 } style={{ float: 'left' }} />
                            { eightv2.map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c}  height={'25%'} width={'25%'} camNum={c.bID } onDoubleClick={() => props.setSingleView(c.bID) } style={{ float: 'right' }} />) }
                        </div> :
                        null
                    } */}
                 </div>
    
    const nineView = <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                        { props.currentCamView === "cam-1-9" && ninev1.map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'33.3%'} width={'33.3%'} onDoubleClick={() => props.setSingleView(c.bID) } style={{ float: 'left' }} />) }
                        { props.currentCamView === "cam-8-16" && ninev2.map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'33.3%'} width={'33.3%'} onDoubleClick={() => props.setSingleView(c.bID) } style={{ float: 'left' }} />) }
                        {/* { props.currentCamView === "cam-16-24" && ninev2.map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'33.3%'} width={'33.3%'} onDoubleClick={() => props.setSingleView(c.bID) } style={{ float: 'left' }} />) } */}
                        {/* { props.currentCamView === "cam-24-32" && ninev2.map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'33.3%'} width={'33.3%'} onDoubleClick={() => props.setSingleView(c.bID) } style={{ float: 'left' }} />) } */}
                     </div>
                    
    const sixteenView = <div style={{ height: '100%', width: '100%', position: 'relative' }}>
                            { props.currentCamView === "cam-1-16" && props.cameras.map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} height={'25%'} width={'25%'} camNum={c.bID } onDoubleClick={() => props.setSingleView(c.bID) } style={{ float: 'left' }} /> )}
                            {/* { props.currentCamView === "cam-17-32" && ninev1.map( c => <CameraStreamContainer key={c.bID.toString()} enabled={c} camNum={c.bID } height={'33.3%'} width={'33.3%'} onDoubleClick={() => props.setSingleView(c.bID) } style={{ float: 'left' }} />) } */}
                        </div>
    console.log('conf: ', props.conf)
    console.log(props.cameras)
    return (
        <div style={ styles.videoViewContainerStyle }>
            { !props.fFullscreen ? 
                <div style={ styles.videoViewHeaderStyle }>
                    <img src={ dividia_logo } height='100%' width='auto' alt='' />
                    <p style={ styles.dvsNameStyle }>{props.sName}</p>
                </div> :
                null
            }
            <div style={ styles.videoViewStreamStyle }>
                { props.fSingle ? 
                    forcedSingleView :
                    props.conf === "conf-1" ?
                        singleView :
                    props.conf === "conf-4" ? 
                        quadView :
                    props.conf === "conf-8" ? 
                        octoView :
                    props.conf === "conf-9" ?
                        nineView :
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
    const { currentCamView } = state.camera;
    const { sName, cameras, bNumCams } = state.server;
    const { fFullscreen, fSingle, singleCamSelected } = state.video;
    return {
        conf,
        currentCamView,
        sName,
        fFullscreen,
        fSingle,
        singleCamSelected,
        sName,
        cameras,
        bNumCams
    }
}

export default connect(mapStateToProps, { setSingleView } )(VideoView);

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
        height: '5vmin'
    },
    dvsNameStyle: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold'
    },
    videoViewStreamStyle: {
        border: 'nmone',
        borderRadius: 10,
        backgroundColor: 'lightgrey',
        height: '100%',
        width: '100%'
    }
}