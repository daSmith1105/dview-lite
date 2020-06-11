import React from 'react';
import { connect } from 'react-redux';
import { configChange, camViewChange, setSingleView } from '../actions';
import '../App.css';
import conf1 from '../images/Nconf1.png';
import conf4 from '../images/Nconf4.png';
import conf8 from '../images/Nconf8.png';
import conf9 from '../images/Nconf9.png';
import conf16 from '../images/Nconf16.png';
import confFS from '../images/NconfFS.png';
import dConf1 from '../images/Dconf1.png';
import dConf4 from '../images/Dconf4.png';
import dConf8 from '../images/Dconf8.png';
import dConf9 from '../images/Dconf9.png';
import dConf16 from '../images/Dconf16.png';
import dConfFS from '../images/DconfFS.png';
import CurrentTimeContainer from '../playback/CurrentTimeContainer';

const ConfButtonsView = props => {
    return (
        <div style={ styles.confButtonsViewContainerStyle }>
            <div style={{position: 'relative', width: '11vmin', whiteSpace: 'nowrap', top: '-8vmin', right: 0, marginLeft: '.5vmin', overflow: 'visible'}}>
                <CurrentTimeContainer />
            </div>

            <div style={ styles.confButtonsRowStyle }>
                <div style={ styles.confButtonStyle } 
                     className="hoverable"
                     onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.configChange("conf-1"); props.camViewChange("cam-1") } }>
                        { props.conf === 'conf-1' ?
                            <img src={dConf1} alt='conf-1' height='100%' width='100%' /> :
                            <img src={conf1} alt='conf-1' height='100%' width='100%' />
                        }
                </div>
                { props.bNumCams > 1 ? 
                    <div style={ styles.confButtonStyle }  
                         className="hoverable"
                         onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.configChange("conf-4"); props.camViewChange("cam-1-4") } }>
                        { props.conf === 'conf-4' ?
                            <img src={dConf4} alt='conf-4' height='100%' width='100%' /> :
                            <img src={conf4} alt='conf-4' height='100%' width='100%' /> 
                        }
                    </div> :
                    null
                }
            </div>
            <div style={ styles.confButtonsRowStyle }>

                <div style={ styles.confButtonStyle } 
                        className="hoverable"
                        onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.configChange("conf-8"); props.camViewChange("cam-1-8") } }>
                    { props.conf === 'conf-8' ?
                        <img src={dConf8} alt='conf-8' height='100%' width='100%' /> :
                        <img src={conf8} alt='conf-8' height='100%' width='100%' /> 
                    }   
                </div>
            
                <div style={ styles.confButtonStyle } 
                        className="hoverable"
                        onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.configChange("conf-9"); props.camViewChange("cam-1-9") } }>
                    { props.conf === 'conf-9' ?
                        <img src={dConf9} alt='conf-9' height='100%' width='100%' /> :
                        <img src={conf9} alt='conf-9' height='100%' width='100%' />
                    }
                </div> 
                      
            </div>
            <div style={ styles.confButtonsRowStyle }>

                <div style={ styles.confButtonStyle } 
                        className="hoverable"
                        onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.configChange("conf-16"); props.camViewChange("cam-1-16") } }>
                    { props.conf === 'conf-16' ?
                        <img src={dConf16} alt='conf-16' height='100%' width='100%' /> :
                        <img src={conf16} alt='conf-16' height='100%' width='100%' />
                    }
                </div> 

                <div style={ styles.confButtonStyle } 
                     className="hoverable"
                     onClick={ () => props.configChange("conf-fs")}>
                    { props.conf === 'conf-fs' ?
                        <img src={dConfFS} alt='conf-fs' height='100%' width='100%' /> :
                        <img src={confFS} alt='conf-fs' height='100%' width='100%' />
                    }
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = state => {
    const { conf } = state.config;
    const { fFullscreen, singleCamSelected } = state.video;
    const { bNumCams } = state.server;
    return {
        conf,
        fFullscreen,
        singleCamSelected,
        bNumCams
    }
};

export default connect(mapStateToProps, { configChange, camViewChange, setSingleView })(ConfButtonsView);

const styles = {
    confButtonsViewContainerStyle: {
        display: 'flex',
        flexDirection: 'column'
    },
    confButtonsRowStyle: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    confButtonStyle: {
        width: '6vmin', 
        height: '6vmin', 
        margin: 6
    }
}