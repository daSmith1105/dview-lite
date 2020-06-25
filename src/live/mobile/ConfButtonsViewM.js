import React from 'react';
import { connect } from 'react-redux';
import { configChange, camViewChange, setSingleView } from '../../actions';
import '../../App.css';
import conf1 from '../../images/Nconf1.png';
import conf4 from '../../images/Nconf4.png';
import conf6 from '../../images/Nconf6.png';
import conf9 from '../../images/Nconf9.png';
import conf12 from '../../images/Nconf12.png';
import conf16 from '../../images/Nconf16.png';
import dConf1 from '../../images/Dconf1.png';
import dConf4 from '../../images/Dconf4.png';
import dConf6 from '../../images/Dconf6.png';
import dConf9 from '../../images/Dconf9.png';
import dConf12 from '../../images/Dconf12.png';
import dConf16 from '../../images/Dconf16.png';
import CurrentTimeContainer from '../../playback/CurrentTimeContainer';

const ConfButtonsView = props => {
    return (
        <div style={ styles.confButtonsViewContainerStyle }>
    {/* 1 */}
                <div style={ styles.confButtonStyle } 
                     className="hoverable"
                     onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.configChange("conf-1"); props.camViewChange("cam_1") } }>
                        { props.conf === 'conf-1' ?
                            <img src={dConf1} alt='conf-1' height='100%' width='100%' /> :
                            <img src={conf1} alt='conf-1' height='100%' width='100%' style={{ boxShadow: '1px 1px 4px 2px rgba(40,120,255,0.3), -1px -1px 4px 2px rgba(40,120,255,0.3)' }}  />
                        }
                </div>
    {/* 4 */}
                { props.bNumCams > 1 ? 
                    <div style={ styles.confButtonStyle }  
                         className="hoverable"
                         onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.configChange("conf-4"); props.camViewChange("cam_1-4") } }>
                        { props.conf === 'conf-4' ?
                            <img src={dConf4} alt='conf-4' height='100%' width='100%' /> :
                            <img src={conf4} alt='conf-4' height='100%' width='100%' style={{ boxShadow: '1px 1px 4px 2px rgba(40,120,255,0.3), -1px -1px 4px 2px rgba(40,120,255,0.3)' }}  /> 
                        }
                    </div> :
                    null
                }
   
    {/* 6 */}
                <div style={ styles.confButtonStyle } 
                        className="hoverable"
                        onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.configChange("conf-6"); props.camViewChange("cam_1-6") } }>
                    { props.conf === 'conf-6' ?
                        <img src={dConf6} alt='conf-6' height='100%' width='100%' /> :
                        <img src={conf6} alt='conf-6' height='100%' width='100%' style={{ boxShadow: '1px 1px 4px 2px rgba(40,120,255,0.3), -1px -1px 4px 2px rgba(40,120,255,0.3)' }}  /> 
                    }   
                </div>
    {/* 9  */}
                <div style={ styles.confButtonStyle } 
                        className="hoverable"
                        onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.configChange("conf-9"); props.camViewChange("cam_1-9") } }>
                    { props.conf === 'conf-9' ?
                        <img src={dConf9} alt='conf-9' height='100%' width='100%' /> :
                        <img src={conf9} alt='conf-9' height='100%' width='100%' style={{ boxShadow: '1px 1px 4px 2px rgba(40,120,255,0.3), -1px -1px 4px 2px rgba(40,120,255,0.3)' }}  />
                    }
                </div> 
                      
    
    {/* 12 */}
                <div style={ styles.confButtonStyle } 
                        className="hoverable"
                        onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.configChange("conf-12"); props.camViewChange("cam_1-12") } }>
                    { props.conf === 'conf-12' ?
                        <img src={dConf12} alt='conf-9' height='100%' width='100%' /> :
                        <img src={conf12} alt='conf-9' height='100%' width='100%' style={{ boxShadow: '1px 1px 4px 2px rgba(40,120,255,0.3), -1px -1px 4px 2px rgba(40,120,255,0.3)' }}  />
                    }
                </div> 
    {/* 16 */}
                <div style={ styles.confButtonStyle } 
                        className="hoverable"
                        onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.configChange("conf-16"); props.camViewChange("cam_1-16") } }>
                    { props.conf === 'conf-16' ?
                        <img src={dConf16} alt='conf-16' height='100%' width='100%' /> :
                        <img src={conf16} alt='conf-16' height='100%' width='100%' style={{ boxShadow: '1px 1px 4px 2px rgba(40,120,255,0.3), -1px -1px 4px 2px rgba(40,120,255,0.3)' }}  />
                    }
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
        alignItems: 'center', 
        jusifyContent: 'space-between',
        marginTop: 10, 
        width: '100%',
        marginRight: 'auto', 
        marginLeft: 'auto'
    },
    confButtonsRowStyle: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    confButtonStyle: {
        width: '10vmin', 
        height: '10vmin', 
        margin: '2.5vmin'
    }
}