import React from 'react';
import { setAutoScroll } from '../actions';
import { connect } from 'react-redux';
import { camViewChange, setSingleView, setCameraBrowerCam } from '../actions';
import '../App.css';

let as =false

const CamButtonsView = props => {

    var autoScanTimer; 
    let s = parseInt(props.currentCamView.split('-')[1])
    console.log(s)
    const startAutoScroll = () => {
        as = true;
        props.setAutoScroll(3); // props.bAutoScanTimeout
        props.singleCamSelected && props.setSingleView('')
        autoScanTimer = setInterval(scanStart, 3000);
    }

    const scanStart = () => { 
        if(as === false) {
            clearInterval(autoScanTimer)
        }
        props.camViewChange(`cam-` + s);
        if(s < props.bNumCams){
            s++ 
        } else {
            s = 1;
        }
    }
    
    const killAutoScroll = () => {
        as = false;
        props.setAutoScroll();
        props.singleCamSelected && props.setSingleView('');
    }

    // create an array of [cam number string. number] for single cam view
    let singleCamArr = [];
    let i = 1;
    while( i < props.bNumCams + 1) {
        singleCamArr.push([`cam-${i}`, i]);
        i++;
    }
    
    // let singleCamEnabledArr = [];
    // let se = 1;
    // while( se < props.bNumCams) {
    //     let cam = props.cameras.find(c => c.bID === se);
    //     if(cam.fEnable === true){
    //         singleCamEnabledArr.push([`cam-${i}`, i]);  
    //     }
    //     se++;
    // }

    // modify to change color for cameras that are note enabled/available
    const singleView = <div>
                            { singleCamArr.map(c => 
                                <button key={c[1]}
                                        style={{ color: props.currentCamView === c[0] ? 'white' : 'black', backgroundColor: props.currentCamView === c[0] ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }} 
                                        className="hoverableButton"
                                        onClick={ () => { props.camViewChange(c[0]);  props.setCameraBrowerCam(c[1]) }}>
                                    { c[1] }
                                </button>
                            )}

                            <button style={{ color: props.autoScrollEnabled ? 'white' : 'black', backgroundColor: props.autoScrollEnabled ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                    className="hoverable"
                                    onClick={ () => props.autoScrollEnabled ? killAutoScroll(props) : startAutoScroll(props) }>
                                AS
                            </button>
                        </div>

    const quadView = <div>
                        <button style={{ color: props.currentCamView === "cam-1-4" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-1-4" ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                className="hoverable"
                                onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.camViewChange('cam-1-4') }}>
                            1 - 4
                        </button>
                        { props.bNumCams > 4 &&
                        <button style={{ color: props.currentCamView === "cam-5-8" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-5-8" ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                className="hoverable"
                                onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.camViewChange('cam-5-8') }}>
                            5 - 8
                        </button>
                        }
                        { props.bNumCams > 8 &&
                        <button style={{ color: props.currentCamView === "cam-9-12" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-9-12" ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                className="hoverable"
                                onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.camViewChange('cam-9-12') }}>
                            9 - 12
                        </button>
                        }
                        { props.bNumCams > 12 &&
                        <button style={{ color: props.currentCamView === "cam-13-16" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-13-16" ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                className="hoverable"
                                onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.camViewChange('cam-13-16') }}>
                            13 -16
                        </button>
                        }
                        { props.bNumCams > 16 &&
                            <button style={{ color: props.currentCamView === "cam-17 -20" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-17 -20" ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                    className="hoverable"
                                    onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.camViewChange('cam-17 -20') }}>
                                17 -20
                            </button>
                        }
                        { props.bNumCams > 20 &&
                            <button style={{ color: props.currentCamView === "cam-21 -24" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-21 -24" ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                    className="hoverable"
                                    onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.camViewChange('cam-21 -24') }}>
                                21 -24
                            </button>
                        }
                        { props.bNumCams > 24 &&
                            <button style={{ color: props.currentCamView === "cam-25 -28" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-25 -28" ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                    className="hoverable"
                                    onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.camViewChange('cam-25 -28') }}>
                                25 -28
                            </button>
                        }
                        { props.bNumCams > 28 &&
                            <button style={{ color: props.currentCamView === "cam-29 -32" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-29 -32" ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                    className="hoverable"
                                    onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.camViewChange('cam-13-16') }}>
                                29 -32
                            </button>
                        }
                        <button style={{ color: props.autoScrollEnabled ? 'white' : 'black', backgroundColor: props.autoScrollEnabled ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                className="hoverable"
                                onClick={ () => props.autoScrollEnabled ? killAutoScroll(props) : startAutoScroll(props) }>
                            AS
                        </button>
                    </div>

    const octoView = <div>
                        <button style={{ color: props.currentCamView === "cam-1-8" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-1-8" ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                className="hoverable"
                                onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.camViewChange('cam-1-8') }}>
                            1 - 8
                        </button>
                        { props.bNumCams > 8 &&
                            <button style={{ color: props.currentCamView === "cam-9-16" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-9-16" ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                    className="hoverable"
                                    onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.camViewChange('cam-9-16') }}>
                                9 - 16
                            </button>
                        }
                        { props.bNumCams > 16 &&
                            <button style={{ color: props.currentCamView === "cam-9-16" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-9-16" ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                    className="hoverable"
                                    onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.camViewChange('cam-9-16') }}>
                                17 - 24
                            </button>
                        }
                        { props.bNumCams > 24 &&
                            <button style={{ color: props.currentCamView === "cam-9-16" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-9-16" ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                    className="hoverable"
                                    onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.camViewChange('cam-9-16') }}>
                                25 - 32
                            </button>
                        }
                        <button style={{ color: props.autoScrollEnabled ? 'white' : 'black', backgroundColor: props.autoScrollEnabled ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                className="hoverable"
                                onClick={ () => props.autoScrollEnabled ? killAutoScroll(props) : startAutoScroll(props) }>
                            AS
                        </button>
                    </div>

    const nineView = <div>
                        <button style={{ color: props.currentCamView === "cam-1-9" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-1-9" ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                className="hoverable"
                                onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.camViewChange('cam-1-9') }}>
                            1 - 9
                        </button>
                        { props.bNumCams > 8 &&
                        <button style={{ color: props.currentCamView === "cam-8-16" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-8-16" ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                className="hoverable"
                                onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.camViewChange('cam-8-16') }}>
                            8 - 16
                        </button>
                        }
                        { props.bNumCams > 16 &&
                            <button style={{ color: props.currentCamView === "cam-16-24" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-16-24" ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                    className="hoverable"
                                    onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.camViewChange('cam-16-24') }}>
                                16 - 24
                            </button>
                        }
                        { props.bNumCams > 24 &&
                            <button style={{ color: props.currentCamView === "cam-24-32'" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-24-32'" ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                    className="hoverable"
                                    onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.camViewChange('cam-24-32') }}>
                                24 - 32
                            </button>
                        }
                        <button style={{ color: props.autoScrollEnabled ? 'white' : 'black', backgroundColor: props.autoScrollEnabled ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                className="hoverable"
                                onClick={ () => props.autoScrollEnabled ? killAutoScroll(props) : startAutoScroll(props) }>
                            AS
                        </button>
                    </div>

    const sixteenView = <div>
                            <button style={{ color: props.currentCamView === "cam-1-16" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-1-16" ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                    className="hoverable"
                                    onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.camViewChange('cam-1-16') }}>1 - 16</button>
                            { props.bNumCams > 16 &&
                                <button style={{ color: props.currentCamView === "cam-17-32" ? 'white' : 'black', backgroundColor: props.currentCamView === "cam-17-32" ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                        className="hoverable"
                                        onClick={ () => { props.singleCamSelected && props.setSingleView(''); props.camViewChange('cam-17-32') }}>17 - 32</button>
                            }
                            <button style={{ color: props.autoScrollEnabled ? 'white' : 'black', backgroundColor: props.autoScrollEnabled ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5 }}
                                    className="hoverable"
                                    onClick={ () => props.autoScrollEnabled ? killAutoScroll(props) : startAutoScroll(props) }>
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
    const { conf } = state.config;
    const { bAutoScanTimeout, bNumCams, cameras } = state.server;
    const { autoScrollEnabled, currentCamView } = state.camera;
    const { singleCamSelected } = state.video;
    return {
        conf,
        currentCamView,
        bAutoScanTimeout,
        bNumCams,
        cameras,
        autoScrollEnabled,
        singleCamSelected
    }
}

export default connect(mapStateToProps, { camViewChange, setAutoScroll, setSingleView, setCameraBrowerCam })(CamButtonsView);

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