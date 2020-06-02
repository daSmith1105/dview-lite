import React from 'react';
import { connect } from 'react-redux';
import dividia_logo from '../images/dividia_logo.jpg';
import cams from './test_cams.json';
import temp_image from '../images/image1.jpg'

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
    console.log(cams.length)
    const singleView =  <div style={{ height: '100%', width: '100%', position: 'relative' }}>
                            { isNaN(parseInt(props.currentCamView.charAt(props.currentCamView.length -2))) ?
                                <img src={ cams.find(c => c.id.toString() === props.currentCamView.slice(-1)).url } height='100%' width='100%' alt='' style={{ position: 'absolute', top: 0, left: 0 }}/> :
                                <img src={ cams.find(c => c.id.toString() === props.currentCamView.slice(-2)).url } height='100%' width='100%' alt='' style={{ position: 'absolute', top: 0, left: 0 }}/>
                            }
                        </div>
    
    const quadView = <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                        { props.currentCamView === "cam-1-4" && qv1.map( c => <img key={c.id.toString()} src={c.url} height='49.5%' width='50%' alt='' />) }
                        { props.currentCamView === "cam-5-8" && qv2.map( c => <img key={c.id.toString()} src={c.url} height='49.5%' width='50%' alt='' />) }
                        { props.currentCamView === "cam-9-12" && qv3.map( c => <img key={c.id.toString()} src={c.url} height='49.5%' width='50%' alt='' />) }   
                        { props.currentCamView === "cam-13-16" && qv4.map( c => <img key={c.id.toString()} src={c.url} height='49.5%' width='50%' alt='' />) }
                     </div>
    
    const octoView = <div style={{ height: '100%', width: '100%', position: 'relative' }}>
                    { props.currentCamView === "cam-1-8" ?
                        <div style={{ height: '100%', width: '100%' }}>
                            <img src={ eightv1Main.url } height='75%' width='75%' alt='' style={{ float: 'left' }} />
                            { eightv1.map( c => <img key={c.id.toString()} src={c.url} height='25%' width='25%' alt='' style={{ float: 'right' }} />) }
                        </div> :
                        null
                    }
                    { props.currentCamView === "cam-9-16" ?
                        <div style={{ height: '100%', width: '100%' }}>
                            <img src={ eightv2Main.url } height='75%' width='75%' alt='' style={{ float: 'left' }} />
                            { eightv2.map( c => <img key={c.id.toString()} src={c.url} height='25%' width='25%' alt='' style={{ float: 'right' }} />) }
                        </div> :
                        null
                    }
                 </div>
    
    const nineView = <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                        { props.currentCamView === "cam-1-9" && ninev1.map( c => <img key={c.id.toString()} src={c.url} height='32.75%' width='33.3%' alt='' />) }
                        { props.currentCamView === "cam-8-16" && ninev2.map( c => <img key={c.id.toString()} src={c.url} height='32.75%' width='33.3%' alt='' />) }
                     </div>
                    
    const sixteenView = <div style={{ height: '100%', width: '100%', position: 'relative' }}>
                            { cams.map( c => <img key={c.id.toString()}src={c.url} height='24.5%' width='25%' alt=''/> )}
                        </div>

    return (
        <div style={ styles.videoViewContainerStyle }>
            <div style={ styles.videoViewHeaderStyle }>
                <img src={ dividia_logo } height='100%' width='auto' alt='' />
                <p style={ styles.dvsNameStyle }>Rosa's Cafe #04-1</p>
            </div>
            <div style={ styles.videoViewStreamStyle }>
                { props.conf === "conf-1" && singleView }
                { props.conf === "conf-4" &&  quadView }
                { props.conf === "conf-8" && octoView }
                { props.conf === "conf-9" && nineView }
                { props.conf === "conf-16" && sixteenView }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    const { conf, currentCamView } = state.config;return {
        conf,
        currentCamView
    }
}

export default connect(mapStateToProps, {} )(VideoView);

const styles = {
    videoViewContainerStyle: {
        height: '100%',
        width: '100%',
        position: 'relative',
        // border: '2px solid grey'
    },
    videoViewHeaderStyle: {
        paddingRight: 10,
        paddingLeft: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '6vmin'
    },
    dvsNameStyle: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold'
    },
    videoViewStreamStyle: {
        backgroundColor: 'grey',
        marginTop: '1vmin',
        height: '53vmin',
        width: '80vmin'
    }
}