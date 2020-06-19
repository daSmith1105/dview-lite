import React from 'react';
import { connect } from 'react-redux';
import { camViewChange, setSingleView, setCameraBrowerCam } from '../actions';
import '../App.css';

const CamButtonsView = props => {

    const setSingleCamData = cam => {
        props.camViewChange(cam[0]);  
        props.setCameraBrowerCam(cam[1]);
    }

    const setMultipleCamData = cam => {
        props.singleCamSelected && props.setSingleView(''); 
        props.camViewChange(cam);
    }

    // modify to change color for cameras that are note enabled/available
    const singleView = <div>
                            { props.cameraArr.map(c => 
                                <button key={c[1]}
                                        style={{ color: !c[2] ? 'rgba(0,0,0,0.4)' : props.currentCamView === c[0] ? 'white' : 'black', backgroundColor: !c[2] ? 'white' : props.currentCamView === c[0] ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: !c[2] ? '2px solid lightgrey' : props.currentCamView === c[0] ? '2px solid dodgerblue' : '2px solid lightgrey', borderRadius: 5, boxShadow: !c[2] ? '2px 2px 4px 2px rgba(0,0,0,0)' : '2px 2px 4px 2px rgba(40,120,255,0.4), -2px -2px 4px 2px rgba(40,120,255,0.4)'}} 
                                        className={ c[2] ?  "hoverableButton" : null }
                                        onClick={ () => c[2] ? setSingleCamData(c) : null }>
                                    { c[1] }
                                </button>
                            )}

                            <button style={{ color: props.autoScanning ? 'white' : 'black', backgroundColor: props.autoScanning ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5, boxShadow: '2px 2px 4px 2px rgba(40,120,255,0.4), -2px -2px 4px 2px rgba(40,120,255,0.4)' }}
                                    className="hoverable"
                                    onClick={ props.toggleAutoScan }>
                                AS
                            </button>
                        </div>

    const quadView = <div>
                        { props.quadView.map(v => 
                            <button key={v[0]}
                                    style={{ color: !v[1] ? 'rgba(0,0,0,0.4)' : props.currentCamView === "cam_" + v[0] ? 'white' : 'black', backgroundColor: !v[1] ? 'white' :props.currentCamView === "cam_" + v[0] ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5, boxShadow: !v[1] ? '2px 2px 4px 2px rgba(0,0,0,0)' : '2px 2px 4px 2px rgba(40,120,255,0.4), -2px -2px 4px 2px rgba(40,120,255,0.4)' }}
                                    className="hoverable"
                                    onClick={ () => v[1] ? setMultipleCamData ('cam_' + v[0]) : null }>
                                {v[0].split('-')[0] + ' - ' + v[0].split('-')[1]}
                            </button>
                        )}
                        <button style={{ color: props.autoScanning ? 'white' : 'black', backgroundColor: props.autoScanning ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5, boxShadow: '2px 2px 4px 2px rgba(40,120,255,0.4), -2px -2px 4px 2px rgba(40,120,255,0.4)' }}
                                className="hoverable"
                                onClick={ props.toggleAutoScan }>
                            AS
                        </button>
                    </div>

    const sixView = <div>
                        { props.sixView.map(v => 
                            <button key={v[0]}
                                    style={{ color: !v[1] ? 'rgba(0,0,0,0.4)' : props.currentCamView === "cam_" + v[0] ? 'white' : 'black', backgroundColor: !v[1] ? 'white' :props.currentCamView === "cam_" + v[0] ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5, boxShadow: !v[1] ? '2px 2px 4px 2px rgba(0,0,0,0)' : '2px 2px 4px 2px rgba(40,120,255,0.4), -2px -2px 4px 2px rgba(40,120,255,0.4)' }}
                                    className="hoverable"
                                    onClick={ () => v[1] ? setMultipleCamData ('cam_' + v[0]) : null }>
                                {v[0].split('-')[0] + ' - ' + v[0].split('-')[1]}
                            </button>
                        )}
                        <button style={{ color: props.autoScanning ? 'white' : 'black', backgroundColor: props.autoScanning ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5, boxShadow: '2px 2px 4px 2px rgba(40,120,255,0.4), -2px -2px 4px 2px rgba(40,120,255,0.4)' }}
                                className="hoverable"
                                onClick={ props.toggleAutoScan }>
                            AS
                        </button>
                    </div>

    const nineView = <div>
                        { props.nineView.map(v => 
                            <button key={v[0]}
                                    style={{ color: !v[1] ? 'rgba(0,0,0,0.4)' : props.currentCamView === "cam_" + v[0] ? 'white' : 'black', backgroundColor: !v[1] ? 'white' :props.currentCamView === "cam_" + v[0] ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5, boxShadow: !v[1] ? '2px 2px 4px 2px rgba(0,0,0,0)' : '2px 2px 4px 2px rgba(40,120,255,0.4), -2px -2px 4px 2px rgba(40,120,255,0.4)' }}
                                    className="hoverable"
                                    onClick={ () => v[1] ? setMultipleCamData ('cam_' + v[0]) : null }>
                                {v[0].split('-')[0] + ' - ' + v[0].split('-')[1]}
                            </button>
                        )}
                        <button style={{ color: props.autoScanning ? 'white' : 'black', backgroundColor: props.autoScanning ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5, boxShadow: '2px 2px 4px 2px rgba(40,120,255,0.4), -2px -2px 4px 2px rgba(40,120,255,0.4)' }}
                                className="hoverable"
                                onClick={ props.toggleAutoScan }>
                            AS
                        </button>
                    </div>

    const twelveView = <div>
                        { props.twelveView.map(v => 
                            <button key={v[0]}
                                    style={{ color: !v[1] ? 'rgba(0,0,0,0.4)' : props.currentCamView === "cam_" + v[0] ? 'white' : 'black', backgroundColor: !v[1] ? 'white' :props.currentCamView === "cam_" + v[0] ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5, boxShadow: !v[1] ? '2px 2px 4px 2px rgba(0,0,0,0)' : '2px 2px 4px 2px rgba(40,120,255,0.4), -2px -2px 4px 2px rgba(40,120,255,0.4)' }}
                                    className="hoverable"
                                    onClick={ () => v[1] ? setMultipleCamData ('cam_' + v[0]) : null }>
                                {v[0].split('-')[0] + ' - ' + v[0].split('-')[1]}
                            </button>
                        )}
                        <button style={{ color: props.autoScanning ? 'white' : 'black', backgroundColor: props.autoScanning ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5, boxShadow: '2px 2px 4px 2px rgba(40,120,255,0.4), -2px -2px 4px 2px rgba(40,120,255,0.4)' }}
                                className="hoverable"
                                onClick={ props.toggleAutoScan }>
                            AS
                        </button>
                     </div>

    const sixteenView = <div>
                            { props.sixteenView.map(v => 
                                <button key={v[0]}
                                        style={{ color: !v[1] ? 'rgba(0,0,0,0.4)' : props.currentCamView === "cam_" + v[0] ? 'white' : 'black', backgroundColor: !v[1] ? 'white' :props.currentCamView === "cam_" + v[0] ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5, boxShadow: !v[1] ? '2px 2px 4px 2px rgba(0,0,0,0)' : '2px 2px 4px 2px rgba(40,120,255,0.4), -2px -2px 4px 2px rgba(40,120,255,0.4)' }}
                                        className="hoverable"
                                        onClick={ () => v[1] ? setMultipleCamData ('cam_' + v[0]) : null }>
                                    {v[0].split('-')[0] + ' - ' + v[0].split('-')[1]}
                                </button>
                            )}
                            <button style={{ color: props.autoScanning ? 'white' : 'black', backgroundColor: props.autoScanning ? 'dodgerblue' : 'lightgrey', fontSize: '1.5vmin', margin: '.8vmin', paddingRight: 8, paddingLeft: 8, paddingTop: 3, paddingBottom: 3, border: 'none', borderRadius: 5, boxShadow: '2px 2px 4px 2px rgba(40,120,255,0.4), -2px -2px 4px 2px rgba(40,120,255,0.4)' }}
                                    className="hoverable"
                                    onClick={ props.toggleAutoScan }>
                                AS
                            </button>
                        </div>
    return (
        <div>
            {/* get the number of cams and map out buttons, temp below */}
            { props.conf === "conf-1" && singleView }
            { props.conf === "conf-4" && quadView }
            { props.conf === "conf-6" && sixView }
            { props.conf === "conf-9" && nineView }
            { props.conf === "conf-12" && twelveView }
            { props.conf === "conf-16" && sixteenView }
        </div>
    )
}

const mapStateToProps = state => {
    const { conf } = state.config;
    const { 
        bAutoScanTimeout, 
        bNumCams, 
        cameras, 
        cameraArr, 
        singleViewEnabledArr, 
        quadView, 
        quadViewEnabledArr, 
        sixView, 
        sixViewEnabledArr, 
        nineView, 
        nineViewEnabledArr, 
        twelveView, 
        twelveViewEnabledArr, 
        sixteenView,
        sixteenViewEnabledArr
     } = state.server;
    const { currentCamView } = state.camera;
    const { singleCamSelected } = state.video;
    return {
        conf,
        currentCamView,
        bAutoScanTimeout,
        bNumCams,
        cameras,
        cameraArr, 
        singleViewEnabledArr,
        quadView, 
        quadViewEnabledArr, 
        sixView, 
        sixViewEnabledArr, 
        nineView, 
        nineViewEnabledArr, 
        twelveView, 
        twelveViewEnabledArr, 
        sixteenView,
        sixteenViewEnabledArr,
        singleCamSelected
    }
}

export default connect(mapStateToProps, { camViewChange, setSingleView, setCameraBrowerCam })(CamButtonsView);