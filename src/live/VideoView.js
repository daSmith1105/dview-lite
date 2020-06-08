import React from 'react';
import { connect } from 'react-redux';
import { setSingleView } from '../actions';
import dividia_logo from '../images/dividia_logo.jpg';
import cams from './test_cams.json';
import CameraStreamContainer from './CameraStreamContainer';

// implement this.updateHandler = 0; function here and pass the updated timestamp to each component as props

const VideoView = props => {
    const qv1 = cams.length > 4 ? cams.slice(0,4) : cams;
    const qv2 = cams.length > 8 ? cams.slice(4,8) : cams.slice(4,cams.length);
    const qv3 = cams.length > 12 ? cams.slice(8,12) : cams.slice(8,cams.length);
    const qv4 = cams.length > 16 ? cams.slice(12,16) : cams.slice(12,cams.length);
    let eightv1Main = cams[0];
    let eightv2Main = cams.length > 8 ? cams[7] : null;
    const eightv1 = cams.length > 8 ? cams.slice(1,8) : cams.slice(1,cams.length);
    const eightv2 = cams.length > 8 ? cams.slice(9,cams.length) : null;
    const ninev1 = cams.length > 9 ? cams.slice(0,9) : cams.slice(0,cams.length);
    const ninev2 = cams.length > 9 ? cams.slice(7,cams.length) : null;

    const forcedSingleView = <div style={{ height: '100%', width: '100%', position: 'relative' }}>
                                <img src={ props.singleCamView ? cams.find(c => c.id === props.singleCamSelected).url : '' } height='100%' width='100%' alt='' style={{ position: 'absolute', top: 0, left: 0 }} onDoubleClick={() => props.setSingleView('') } />
                             </div>

    const singleView =  <div style={{ height: '100%', width: '100%', position: 'relative' }}>
                            { isNaN(parseInt(props.currentCamView.charAt(props.currentCamView.length -2))) ?
                                <img src={ cams.find(c => c.id.toString() === props.currentCamView.slice(-1)).url } height='100%' width='100%' alt='' style={{ position: 'absolute', top: 0, left: 0 }}/> :
                                <img src={ cams.find(c => c.id.toString() === props.currentCamView.slice(-2)).url } height='100%' width='100%' alt='' style={{ position: 'absolute', top: 0, left: 0 }}/>
                            }
                        </div>
    
    const quadView = <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                        { props.currentCamView === "cam-1-4" && qv1.map( c => <img key={c.id.toString()} src={c.url} height='50%' width='50%' alt='' style={{ float: 'left' }} onDoubleClick={() => props.setSingleView(c.id) } />) }
                        { props.currentCamView === "cam-5-8" && qv2.map( c => <img key={c.id.toString()} src={c.url} height='50%' width='50%' alt='' style={{ float: 'left' }} onDoubleClick={() => props.setSingleView(c.id) } />) }
                        { props.currentCamView === "cam-9-12" && qv3.map( c => <img key={c.id.toString()} src={c.url} height='50%' width='50%' alt='' style={{ float: 'left' }} onDoubleClick={() => props.setSingleView(c.id) } />) }   
                        { props.currentCamView === "cam-13-16" && qv4.map( c => <img key={c.id.toString()} src={c.url} height='50%' width='50%' alt='' style={{ float: 'left' }} onDoubleClick={() => props.setSingleView(c.id) } />) }
                     </div>
    
    const octoView = <div style={{ height: '100%', width: '100%', position: 'relative' }}>
                    { props.currentCamView === "cam-1-8" ?
                        <div style={{ height: '100%', width: '100%' }}>
                            <img src={ eightv1Main.url } height='75%' width='75%' alt='' style={{ float: 'left' }} onDoubleClick={() => alert('double clicked ' + eightv1Main.url.id)} />
                            { eightv1.map( c => <img key={c.id.toString()} src={c.url} height='25%' width='25%' alt='' style={{ float: 'right' }} onDoubleClick={() => alert('double clicked ' + c.id)} />) }
                        </div> :
                        null
                    }
                    { props.currentCamView === "cam-9-16" ?
                        <div style={{ height: '100%', width: '100%' }}>
                            <img src={ eightv2Main.url } height='75%' width='75%' alt='' style={{ float: 'left' }} onDoubleClick={() => alert('double clicked ' + eightv2Main.url.id)} />
                            { eightv2.map( c => <img key={c.id.toString()} src={c.url} height='25%' width='25%' alt='' style={{ float: 'right' }} onDoubleClick={() => alert('double clicked ' + c.id)} />) }
                        </div> :
                        null
                    }
                 </div>
    
    const nineView = <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                        { props.currentCamView === "cam-1-9" && ninev1.map( c => <img key={c.id.toString()} src={c.url} height='33.3%' width='33.3%' alt='' style={{ float: 'left' }} onDoubleClick={() => props.setSingleView(c.id) }  />) }
                        { props.currentCamView === "cam-8-16" && ninev2.map( c => <img key={c.id.toString()} src={c.url} height='33.3%' width='33.3%' alt='' style={{ float: 'left' }} onDoubleClick={() => props.setSingleView(c.id) }  />) }
                     </div>
                    
    const sixteenView = <div style={{ height: '100%', width: '100%', position: 'relative' }}>
                            { cams.map( c => <img key={c.id.toString()}src={c.url} height='25%' width='25%' alt='' style={{ float: 'left' }} onDoubleClick={() => props.setSingleView(c.id) } /> )}
                        </div>

    console.log(props.bNumCams)
    console.log(props.cameras)
    return (
        <div style={ styles.videoViewContainerStyle }>
            <div style={ styles.videoViewHeaderStyle }>
                <img src={ dividia_logo } height='100%' width='auto' alt='' />
                <p style={ styles.dvsNameStyle }>{props.sName}</p>
            </div>
            <div style={ styles.videoViewStreamStyle }>
                { props.singleCamView ? 
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
            {/* <div style={{ display: 'flex', jusifyContent: 'center', alignItems: 'center' }}>
                <CameraStreamContainer camNum='1'/>
                <CameraStreamContainer camNum='2'/>
                <CameraStreamContainer camNum='3'/>
                <CameraStreamContainer camNum='4'/>
            </div> */}
        </div>
    )
}

const mapStateToProps = state => {
    const { conf } = state.config;
    const { currentCamView, singleCamView, singleCamSelected } = state.camera;
    const { sName, cameras, bNumCams } = state.server;
    return {
        conf,
        currentCamView,
        singleCamView,
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
        position: 'relative'
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
        backgroundColor: 'grey',
        marginTop: '1vmin',
        height: '100%',
        width: '100%'
    }
}