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

const ConfButtonsView = props => {
    return (
        <div style={ styles.confButtonsViewContainerStyle }>
            <div style={ styles.confButtonsRowStyle }>
                <div style={ styles.confButtonStyle } 
                     className="hoverable"
                     onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.configChange("conf-1"); props.camViewChange("cam-1") } }>
                    <img src={conf1} alt='conf-1' height='100%' width='100%' />
                </div>
                { props.bNumCams > 1 ? 
                    <div style={ styles.confButtonStyle }  
                         className="hoverable"
                         onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.configChange("conf-4"); props.camViewChange("cam-1-4") } }>
                        <img src={conf4} alt='conf-4' height='100%' width='100%' />
                    </div> :
                    null
                }
            </div>
            <div style={ styles.confButtonsRowStyle }>
                { props.bNumCams > 4 ? 
                    <div style={ styles.confButtonStyle } 
                         className="hoverable"
                         onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.configChange("conf-8"); props.camViewChange("cam-1-8") } }>
                        <img src={conf8} alt='conf-8' height='100%' width='100%' />
                    </div> :
                    null
                }
                { props.bNumCams > 8 ? 
                    <div style={ styles.confButtonStyle } 
                         className="hoverable"
                         onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.configChange("conf-9"); props.camViewChange("cam-1-9") } }>
                        <img src={conf9} alt='conf-9' height='100%' width='100%' />
                    </div> :
                    null
                }           
            </div>
            <div style={ styles.confButtonsRowStyle }>
                { props.bNumCams > 9 ? 
                    <div style={ styles.confButtonStyle } 
                         className="hoverable"
                         onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.configChange("conf-16"); props.camViewChange("cam-1-16") } }>
                        <img src={conf16} alt='conf-16' height='100%' width='100%' />
                    </div> :
                    null
                }
                <div style={ styles.confButtonStyle } 
                     className="hoverable"
                     onClick={ () => props.configChange("conf-fs")}>
                    <img src={confFS} alt='conf-fs' height='100%' width='100%' />
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