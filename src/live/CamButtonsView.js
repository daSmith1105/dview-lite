import React from 'react';
import { setAutoScroll } from '../actions';
import { connect } from 'react-redux';
import { camViewChange } from '../actions';
import '../App.css';

const CamButtonsView = props => {
    const singleView = <div>
                    <button style={{ color: props.currentCamView === "cam-1" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-1" ? 'dodgerblue' : 'lightgrey', margin: 4, paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }} 
                            className="hoverableButton"
                            onClick={ () => props.camViewChange('cam-1')}>
                        1
                    </button>
                    <button style={{ color: props.currentCamView  === "cam-2" ? 'white' : 'black', backgroundColor: props.currentCamView  === "cam-2" ? 'dodgerblue' : 'lightgrey', margin: 4, paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }} 
                            className="hoverableButton"
                            onClick={ () => props.camViewChange('cam-2')}>
                        2
                    </button>
                    <button style={{ color: props.currentCamView  === "cam-3" ? 'white' : 'black', backgroundColor: props.currentCamView  === "cam-3" ? 'dodgerblue' : 'lightgrey', margin: 4, paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                            className="hoverableButton"
                            onClick={ () => props.camViewChange('cam-3')}>
                        3
                    </button>
                    <button style={{ color: props.currentCamView  === "cam-4" ? 'white' : 'black', backgroundColor: props.currentCamView  === "cam-4" ? 'dodgerblue' : 'lightgrey', margin: 4, paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                            className="hoverableButton"
                            onClick={ () => props.camViewChange('cam-4')}>
                        4
                    </button>
                    <button style={{ color: props.currentCamView  === "cam-5" ? 'white' : 'black', backgroundColor: props.currentCamView  === "cam-5" ? 'dodgerblue' : 'lightgrey', margin: 4, paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                            className="hoverableButton"
                            onClick={ () => props.camViewChange('cam-5')}>
                        5
                    </button>
                    <button style={{ color: props.currentCamView  === "cam-6" ? 'white' : 'black', backgroundColor: props.currentCamView  === "cam-6" ? 'dodgerblue' : 'lightgrey', margin: 4, paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                            className="hoverableButton"
                            onClick={ () => props.camViewChange('cam-6')}>
                        6
                    </button>
                    <button style={{ color: props.currentCamView  === "cam-7" ? 'white' : 'black', backgroundColor: props.currentCamView  === "cam-7" ? 'dodgerblue' : 'lightgrey', margin: 4, paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                            className="hoverableButton"
                            onClick={ () => props.camViewChange('cam-7')}>
                        7
                    </button>
                    <button style={{ color: props.currentCamView  === "cam-8" ? 'white' : 'black', backgroundColor: props.currentCamView  === "cam-8" ? 'dodgerblue' : 'lightgrey', margin: 4, paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                            className="hoverableButton"
                            onClick={ () => props.camViewChange('cam-8')}>
                        8
                    </button>
                    <button style={{ color: props.currentCamView  === "cam-9" ? 'white' : 'black', backgroundColor: props.currentCamView  === "cam-9" ? 'dodgerblue' : 'lightgrey', margin: 4, paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                            className="hoverableButton"
                            onClick={ () => props.camViewChange('cam-9')}>
                        9
                    </button>
                    <button style={{ color: props.currentCamView  === "cam-10" ? 'white' : 'black', backgroundColor: props.currentCamView  === "cam-10" ? 'dodgerblue' : 'lightgrey', margin: 4, paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                            className="hoverableButton"
                            onClick={ () => props.camViewChange('cam-10')}>
                        10
                    </button>
                    <button style={{ color: props.currentCamView  === "cam-11" ? 'white' : 'black', backgroundColor: props.currentCamView  === "cam-11" ? 'dodgerblue' : 'lightgrey', margin: 4, paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                            className="hoverableButton"
                            onClick={ () => props.camViewChange('cam-11')}>
                        11
                    </button>
                    <button style={{ color: props.currentCamView === "cam-12" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-12" ? 'dodgerblue' : 'lightgrey', margin: 4, paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                            className="hoverable"
                            onClick={ () => props.camViewChange('cam-12')}>
                        12
                    </button>
                    <button style={{ color: props.currentCamView  === "cam-13" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-13" ? 'dodgerblue' : 'lightgrey', margin: 4, paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                            className="hoverable"
                            onClick={ () => props.camViewChange('cam-13')}>
                        13
                    </button>
                    <button style={{ color: props.currentCamView === "cam-14" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-14" ? 'dodgerblue' : 'lightgrey', margin: 4, paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                            className="hoverable"
                            onClick={ () => props.camViewChange('cam-14')}>
                        14
                    </button>
                    <button style={{ color: props.currentCamView === "cam-15" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-15" ? 'dodgerblue' : 'lightgrey', margin: 4, paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                            className="hoverable"
                            onClick={ () => props.camViewChange('cam-15')}>
                        15
                    </button>
                    <button style={{ color: props.currentCamView === "cam-16" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-16" ? 'dodgerblue' : 'lightgrey', margin: 4, paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                            className="hoverable"
                            onClick={ () => props.camViewChange('cam-16')}>
                        16
                    </button>
                    <button style={{ color: props.autoScrollEnabled ? 'white' : 'black', backgroundColor: props.autoScrollEnabled ? 'dodgerblue' : 'lightgrey', margin: 4, paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                className="hoverable"
                                onClick={ () => props.autoScrollEnabled ? props.setAutoScroll('', '') : props.setAutoScroll( props.conf, props.bAutoScanTimeout) }>AS</button>
                  </div>

    const quadView = <div>
                        <button style={{ color: props.currentCamView === "cam-1-4" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-1-4" ? 'dodgerblue' : 'lightgrey', margin: 4, paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                className="hoverable"
                                onClick={ () => props.camViewChange('cam-1-4')}>
                            1 - 4
                        </button>
                        <button style={{ color: props.currentCamView === "cam-5-8" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-5-8" ? 'dodgerblue' : 'lightgrey', margin: 4, paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                className="hoverable"
                                onClick={ () => props.camViewChange('cam-5-8')}>
                            5 - 8
                        </button>
                        <button style={{ color: props.currentCamView === "cam-9-12" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-9-12" ? 'dodgerblue' : 'lightgrey', margin: 4, paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                className="hoverable"
                                onClick={ () => props.camViewChange('cam-9-12')}>
                            9 - 12
                        </button>
                        <button style={{ color: props.currentCamView === "cam-13-16" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-13-16" ? 'dodgerblue' : 'lightgrey', margin: 4, paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                className="hoverable"
                                onClick={ () => props.camViewChange('cam-13-16')}>
                            13 -16
                        </button>
                        <button style={{ color: props.autoScrollEnabled ? 'white' : 'black', backgroundColor: props.autoScrollEnabled ? 'dodgerblue' : 'lightgrey', margin: 4, paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                className="hoverable"
                                onClick={ () => props.autoScrollEnabled ? props.setAutoScroll('', '') : props.setAutoScroll( props.conf, props.bAutoScanTimeout) }>AS</button>
                    </div>

    const octoView = <div>
                        <button style={{ color: props.currentCamView === "cam-1-8" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-1-8" ? 'dodgerblue' : 'lightgrey', margin: 4, paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                className="hoverable"
                                onClick={ () => props.camViewChange('cam-1-8')}>
                            1 - 8
                        </button>
                        <button style={{ color: props.currentCamView === "cam-9-16" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-9-16" ? 'dodgerblue' : 'lightgrey', margin: 4, paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                className="hoverable"
                                onClick={ () => props.camViewChange('cam-9-16')}>
                            9 - 16
                        </button>
                        <button style={{ color: props.autoScrollEnabled ? 'white' : 'black', backgroundColor: props.autoScrollEnabled ? 'dodgerblue' : 'lightgrey', margin: 4, paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                className="hoverable"
                                onClick={ () => props.autoScrollEnabled ? props.setAutoScroll('', '') : props.setAutoScroll( props.conf, props.bAutoScanTimeout) }>AS</button>
                    </div>

    const nineView = <div>
                        <button style={{ color: props.currentCamView === "cam-1-9" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-1-9" ? 'dodgerblue' : 'lightgrey', margin: 4, paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                className="hoverable"
                                onClick={ () => props.camViewChange('cam-1-9')}>
                            1 - 9
                        </button>
                        <button style={{ color: props.currentCamView === "cam-8-16" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-8-16" ? 'dodgerblue' : 'lightgrey', margin: 4, paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                className="hoverable"
                                onClick={ () => props.camViewChange('cam-8-16')}>
                            8 - 16
                        </button>
                        <button style={{ color: props.autoScrollEnabled ? 'white' : 'black', backgroundColor: props.autoScrollEnabled ? 'dodgerblue' : 'lightgrey', margin: 4, paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                className="hoverable"
                                onClick={ () => props.autoScrollEnabled ? props.setAutoScroll('', '') : props.setAutoScroll( props.conf, props.bAutoScanTimeout) }>AS</button>
                    </div>

    const sixteenView = <div>
                            <button style={{ color: props.currentCamView === "cam-1-16" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-1-16" ? 'dodgerblue' : 'lightgrey', margin: 4, paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                    className="hoverable"
                                    onClick={ () => props.camViewChange('cam-1-16')}>1 - 16</button>
                            <button style={{ color: props.autoScrollEnabled ? 'white' : 'black', backgroundColor: props.autoScrollEnabled ? 'dodgerblue' : 'lightgrey', margin: 4, paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                    className="hoverable"
                                    onClick={ () => props.autoScrollEnabled ? props.setAutoScroll('', '') : props.setAutoScroll( props.conf, props.bAutoScanTimeout) }>
                                AS
                            </button>
                        </div>

    console.log('current cam view: ', props.currentCamView)
    return (
        <div style={ StyleSheet.camButtonsViewContainerStyle }>
            {/* get the number of cams and map out buttons, temp below */}
            { props.conf === "conf-1" && singleView }
            { props.conf === "conf-4" && quadView }
            { props.conf === "conf-8" && octoView }
            { props.conf === "conf-9" && nineView }
            { props.conf === "conf-16" && sixteenView }
        </div>
    )
}

const mapStateToProps = state => {
    const { conf} = state.config;
    const { bAutoScanTimeout } = state.server;
    const { autoScrollEnabled, currentCamView } = state.camera;
    return {
        conf,
        currentCamView,
        bAutoScanTimeout,
        autoScrollEnabled
    }
}

export default connect(mapStateToProps, { camViewChange, setAutoScroll })(CamButtonsView);

const styles = {
    camButtonsViewContainerStyle: {
        backgroundColor: 'green',
        display: 'flex',
    },
    camButtonStyle: {
        margin: 4,
        paddingRight: 8,
        paddingLeft: 8,
        paddingTop: 3,
        paddingBottom: 3,
        border: 'none',
        borderRadius: 5
    }
}