import React from 'react';
import { connect } from 'react-redux';
import dividia_logo from '../images/dividia_logo.jpg';
import temp_image from '../images/temp.jpg';

const singleView = <div style={{ height: '100%', width: '100%', position: 'relative' }}>
                        <img src={ temp_image } height='100%' width='100%' alt='' style={{ position: 'absolute', top: 0, left: 0 }}/>
                   </div>
                   
const quadView = <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                    <img src={ temp_image } height='50%' width='50%' alt='' style={{ position: 'absolute', top: 0, left: 0 }}/>
                    <img src={ temp_image } height='50%' width='50%' alt='' style={{ position: 'absolute', top: 0, left: '50%' }}/>
                    <img src={ temp_image } height='50%' width='50%' alt='' style={{ position: 'absolute', top: '50%', left: 0 }}/>
                    <img src={ temp_image } height='50%' width='50%' alt='' style={{ position: 'absolute', top: '50%', left: '50%' }}/>
                </div>

const octoView = <div style={{ height: '100%', width: '100%', position: 'relative' }}>
                    <img src={ temp_image } height='75%' width='75%' alt='' style={{ position: 'absolute', top: 0, left: 0 }} />
                    <img src={ temp_image } height='25%' width='25%' alt='' style={{ position: 'absolute', top: 0, right: 0 }}  />
                    <img src={ temp_image } height='25%' width='25%' alt='' style={{ position: 'absolute', top: '25%', right: 0 }}  />
                    <img src={ temp_image } height='25%' width='25%' alt='' style={{ position: 'absolute', top: '50%', right: 0 }} />
                    <img src={ temp_image } height='25%' width='25%' alt='' style={{ position: 'absolute', top: '75%', right: 0 }}/>
                    <img src={ temp_image } height='25%' width='25%' alt='' style={{ position: 'absolute', top: '75%', right: '25%' }}/>
                    <img src={ temp_image } height='25%' width='25%' alt='' style={{ position: 'absolute', top: '75%', right: '50%' }}/>
                    <img src={ temp_image } height='25%' width='25%' alt='' style={{ position: 'absolute', top: '75%', right: '75%' }}/>
                 </div>

const nineView = <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                    <img src={ temp_image } height='33.3%' width='33.3%' alt='' style={{ position: 'absolute', top: 0, left: 0 }}/>
                    <img src={ temp_image } height='33.3%' width='33.3%' alt='' style={{ position: 'absolute', top: 0, left: '33.3%' }}/>
                    <img src={ temp_image } height='33.3%' width='33.3%' alt='' style={{ position: 'absolute', top: 0, left: '66.6%' }}/>
                    <img src={ temp_image } height='33.3%' width='33.3%' alt='' style={{ position: 'absolute', top: '33.3%', left: 0 }}/>
                    <img src={ temp_image } height='33.3%' width='33.3%' alt='' style={{ position: 'absolute', top: '33.3%', left: '33.3%' }}/>
                    <img src={ temp_image } height='33.3%' width='33.3%' alt='' style={{ position: 'absolute', top: '33.3%', left: '66.6%' }}/>
                    <img src={ temp_image } height='33.3%' width='33.3%' alt='' style={{ position: 'absolute', top: '66.6%', left: 0 }}/>
                    <img src={ temp_image } height='33.3%' width='33.3%' alt='' style={{ position: 'absolute', top: '66.6%', left: '33.3%' }}/>
                    <img src={ temp_image } height='33.3%' width='33.3%' alt='' style={{ position: 'absolute', top: '66.6%', left: '66.6%' }}/>
                 </div>

const sixteenView = <div style={{ height: '100%', width: '100%', position: 'relative' }}>
                        <img src={ temp_image } height='25%' width='25%' alt='' style={{ position: 'absolute', top: 0, left: 0 }}/>
                        <img src={ temp_image } height='25%' width='25%' alt='' style={{ position: 'absolute', top: 0, left: '25%' }}/>
                        <img src={ temp_image } height='25%' width='25%' alt='' style={{ position: 'absolute', top: 0, left: '50%' }}/>
                        <img src={ temp_image } height='25%' width='25%' alt='' style={{ position: 'absolute', top: 0, left: '75%' }}/>
                        <img src={ temp_image } height='25%' width='25%' alt='' style={{ position: 'absolute', top: '25%', left: 0 }}/>
                        <img src={ temp_image } height='25%' width='25%' alt='' style={{ position: 'absolute', top: '25%', left: '25%'}}/>
                        <img src={ temp_image } height='25%' width='25%' alt='' style={{ position: 'absolute', top: '25%', left: '50%' }}/>
                        <img src={ temp_image } height='25%' width='25%' alt='' style={{ position: 'absolute', top: '25%', left: '75%' }}/>
                        <img src={ temp_image } height='25%' width='25%' alt='' style={{ position: 'absolute', top: '50%', left: 0 }}/>
                        <img src={ temp_image } height='25%' width='25%' alt='' style={{ position: 'absolute', top: '50%', left: '25%' }}/>
                        <img src={ temp_image } height='25%' width='25%' alt='' style={{ position: 'absolute', top: '50%', left: '50%' }}/>
                        <img src={ temp_image } height='25%' width='25%' alt='' style={{ position: 'absolute', top: '50%', left: '75%' }}/>
                        <img src={ temp_image } height='25%' width='25%' alt='' style={{ position: 'absolute', top: '75%', left: 0 }}/>
                        <img src={ temp_image } height='25%' width='25%' alt='' style={{ position: 'absolute', top: '75%', left: '25%' }}/>
                        <img src={ temp_image } height='25%' width='25%' alt='' style={{ position: 'absolute', top: '75%', left: '50%' }}/>
                        <img src={ temp_image } height='25%' width='25%' alt='' style={{ position: 'absolute', top: '75%', left: '75%' }}/>
                    </div>

const VideoView = props => {
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
    const { conf } = state.config;return {
        conf
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