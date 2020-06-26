import React from 'react';
import { connect } from 'react-redux';
import placeholderImage from '../../images/placeholder.jpeg';
import moment from 'moment';

class CameraStreamContainerM extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            timestamp: '',
            enabled: false,
            imgError: false
        }

        this.updateHandler = 0;
    }

    componentDidMount = () => {
        this.setState({ 
            loading: true, 
            imgError: false
        }, () => {
            setTimeout( () => {
                let cam = this.props.enabled;

                if(cam && cam.fEnable){ 
                    this.setState({
                        enabled: cam.fEnable
                    }, () => {
                        this.setState({
                            loading: false
                        })
                    })
                } else {
                    this.setState({
                        loading: false
                    })
                }
            }, 300)
        })
       this.updateTimestamp();
        // set a timer to call and replace our image with an updated one
    }

    componentWillUnmount = () => {
        clearTimeout(this.updateHandler);
    }

    updateTimestamp = () => {
        this.setState({
            timestamp: Date.now()
        }, () => {
            this.props.isLoggedIn ?
                this.updateHandler = setTimeout( () => { this.updateTimestamp(); this.updateHandler = 0 }, 1000 ) :
                clearTimeout(this.updateHandler)
        });
    };
    
    render() {
        return (
            <div style={{ float: 'left', height: this.props.height, width: this.props.width }} onDoubleClick={ () => this.props.onDoubleClick() }>
                { this.state.enabled && !this.state.loading && this.props.enabled !== 'false' ?
                   <div style={{ position: 'relative', height: '100%', width: '100%'}}>
                   <img src={ '/mpe/cam' + this.props.camNum + '.jpg?user=' + this.props.username + '&pass=' + this.props.password +'&ts=' + this.state.timestamp } 
                       alt='camera_stream' 
                       height={'100%'} 
                       width={'100%'} 
                       style={{ border: '1px solid grey' }} />
                   <div style={{ position: 'absolute', bottom: 1, left: 0, width: '99%', marginLeft: '.5%', backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1vmin',  }}>

                     {/* for 12 and 16 view arrange 2 lines - top is cam num etc, bottom is date time */}
                       <p style={{ margin: 0, 
                                   padding: 0, 
                                   fontWeight: 'bold',
                                   fontSize: this.props.conf === "conf-1" || this.props.fSingle ? '3vmin' : 
                                             this.props.conf === "conf-4" ? '1.8vmin' :
                                             this.props.conf === "conf-6" ? '1.3vmin' :
                                             this.props.conf === "conf-9" ? '1.2vmin' :
                                             this.props.conf === "conf-12" ? '1.1vmin' :
                                             this.props.conf === "conf-16" ? '1.1vmin' :
                                             10,  
                                   color: 'white' }}>
                           {this.props.camNum + ' - ' + this.props.cameras.find( c => c.bID === parseInt(this.props.camNum)).sName}
                       </p>
                       <p style={{ margin: 0, 
                                   padding: 0, 
                                   fontWeight: 'bold',
                                   fontSize: this.props.conf === "conf-1" || this.props.fSingle ? '3vmin' : 
                                             this.props.conf === "conf-4" ? '1.8vmin' :
                                             this.props.conf === "conf-6" ? '1.3vmin' :
                                             this.props.conf === "conf-9" ? '1.2vmin' :
                                             this.props.conf === "conf-12" ? '1.1vmin' :
                                             this.props.conf === "conf-16" ? '1.1vmin' :
                                             10, 
                                   color: 'white' }}>
                           {moment(this.state.timestamp).format('MM/DD/YYYY HH:mm:ss')}
                       </p>
                   </div>
               </div>  :
                    <div style={{ position: 'relative', height: '100%', width: '100%'}}>
                    <img src={placeholderImage} alt='no_stream' height={'100%'} width={'100%'} style={{ border: '1px solid grey' }} /> 
                    <div style={{ position: 'absolute', bottom: 1, left: 0, width: '99%', marginLeft: '.5%', backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1vmin',  }}>
 
                      {/* for 12 and 16 view arrange 2 lines - top is cam num etc, bottom is date time */}
                        <p style={{ margin: 0, 
                                    padding: 0, 
                                    fontWeight: 'bold',
                                    fontSize: this.props.conf === "conf-1" || this.props.fSingle ? '3vmin' : 
                                              this.props.conf === "conf-4" ? '1.8vmin' :
                                              this.props.conf === "conf-6" ? '1.3vmin' :
                                              this.props.conf === "conf-9" ? '1.2vmin' :
                                              this.props.conf === "conf-12" ? '1.1vmin' :
                                              this.props.conf === "conf-16" ? '1.1vmin' :
                                              10,  
                                    color: 'white' }}>
                            {'Cam ' + this.props.camNum + ' - No Camera Enabled'}
                        </p>
                    </div>
                </div> 
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { sSess, sServerLiveMPE, isLoggedIn, username, password } = state.auth;
    const { sServer, cameras } = state.server;
    const { conf } = state.config
    const { fSingle } = state.video
    return {
        sSess,
        sServerLiveMPE,
        isLoggedIn,
        username,
        password,
        sServer,
        cameras,
        conf,
        fSingle
    }
}

export default connect(mapStateToProps, {})(CameraStreamContainerM);