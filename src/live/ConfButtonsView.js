import React from 'react';
import { connect } from 'react-redux';
import { configChange, camViewChange } from '../actions';
import '../App.css';
import cams from './test_cams.json';

const ConfButtonsView = props => {
    return (
        <div style={ styles.confButtonsViewContainerStyle }>
            <div style={ styles.confButtonsRowStyle }>
                <button style={{ border: 'none', borderRadius: 5, paddingTop: 4, paddingBottom: 4, width: 36, marginTop: 6, color: props.conf === "conf-1" ? 'white' : 'black', backgroundColor: props.conf === "conf-1" ? 'dodgerblue' : 'lightgrey' }} 
                        className="hoverable"
                        onClick={ () => { props.configChange("conf-1"); props.camViewChange("cam-1") } }>
                    1
                </button>
                {cams.length > 1 ? 
                    <button style={{ border: 'none', borderRadius: 5, paddingTop: 4, paddingBottom: 4, width: 36, marginTop: 6, color: props.conf === "conf-4" ? 'white' : 'black', backgroundColor: props.conf === "conf-4" ? 'dodgerblue' : 'lightgrey' }}  
                            className="hoverable"
                            onClick={ () => { props.configChange("conf-4"); props.camViewChange("cam-1-4") } }>
                        4
                    </button> :
                    null
                }
            </div>
            <div style={ styles.confButtonsRowStyle }>
                { cams.length > 4 ? 
                    <button style={{ border: 'none', borderRadius: 5, paddingTop: 4, paddingBottom: 4, width: 36, marginTop: 6, color: props.conf === "conf-8" ? 'white' : 'black', backgroundColor: props.conf === "conf-8" ? 'dodgerblue' : 'lightgrey' }} 
                            className="hoverable"
                            onClick={ () => { props.configChange("conf-8"); props.camViewChange("cam-1-8") } }>
                        8
                    </button> :
                    null
                }
                { cams.length > 8 ? 
                    <button style={{ border: 'none', borderRadius: 5, paddingTop: 4, paddingBottom: 4, width: 36, marginTop: 6, color: props.conf === "conf-9" ? 'white' : 'black', backgroundColor: props.conf === "conf-9" ? 'dodgerblue' : 'lightgrey' }} 
                            className="hoverable"
                            onClick={ () => { props.configChange("conf-9"); props.camViewChange("cam-1-9") } }>
                        9
                    </button> :
                    null
                }           
            </div>
            <div style={ styles.confButtonsRowStyle }>
                { cams.length > 9 ? 
                    <button style={{ border: 'none', borderRadius: 5, paddingTop: 4, paddingBottom: 4, width: 36, marginTop: 6, color: props.conf === "conf-16" ? 'white' : 'black', backgroundColor: props.conf === "conf-16" ? 'dodgerblue' : 'lightgrey' }} 
                            className="hoverable"
                            onClick={ () => { props.configChange("conf-16"); props.camViewChange("cam-1-16") } }>
                        16
                    </button> :
                    null
                }
                <button style={{ border: 'none', borderRadius: 5, paddingTop: 4, paddingBottom: 4, width: 36, marginTop: 6, color: props.fFullscreen ? 'white' : 'black', backgroundColor: props.fFullscreen ? 'dodgerblue' : 'lightgrey' }} 
                        className="hoverable"
                        onClick={ () => props.configChange("conf-fs")}>
                    FS
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    const { conf } = state.config;
    const { fFullscreen } = state.video;
    return {
        conf,
        fFullscreen
    }
};

export default connect(mapStateToProps, { configChange, camViewChange })(ConfButtonsView);

const styles = {
    confButtonsViewContainerStyle: {
        display: 'flex',
        flexDirection: 'column',
        width: '10vmin'
    },
    confButtonsRowStyle: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}