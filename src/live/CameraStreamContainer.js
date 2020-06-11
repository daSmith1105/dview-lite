import React from 'react';
import { connect } from 'react-redux';

class CameraStreamContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            timestamp: '',
            enabled: false
        }

        this.updateHandler = 0;
    }

    componentDidMount = () => {
        this.setState({ 
            loading: true
        }, () => {
            setTimeout( () => {
                let cam = this.props.enabled;
                console.log(cam)
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
            }, 200)
        })
       this.updateTimestamp();
        // set a timer to call and replace our image with an updated one
    }

    componentWillUnmount = () => {
        clearTimeout(this.updateHandler)
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
        console.log( this.props.sServer + '/mpe/cam' + this.props.camNum + '.jpg?sess=' + this.props.sSess)
        return (
            <div style={{ float: 'left', height: this.props.height, width: this.props.width }} onDoubleClick={ () => this.props.onDoubleClick() }>
                { this.state.enabled && !this.state.loading && this.props.enabled !== 'false' ?
                    <img src={ 'http://192.168.0.22/mpe/cam' + this.props.camNum + '.jpg?user=' + this.props.username + '&pass=' + this.props.password +'&ts=' + this.state.timestamp } alt='camera_stream' height={'100%'} width={'100%'} style={{ border: '1px solid grey' }} />  :
                    <img src={ 'https://cdn.clipart.email/cf083e6fbd18d88e5458a3e6e813de19_eye-icon-png-vector-pixsector_560-560.png' } alt='no_stream' height={'100%'} width={'100%'} style={{ border: '1px solid grey' }} /> 
                }
                {/*this.props.sServer*/} 
                {/* { this.state.loading && 
                    <img src={ 'https://media.giphy.com/media/l4FGtP1BqMzxz8Gbu/giphy.gif' } alt='no_stream' height={'100%'} width={'100%'} style={{ border: '1px solid grey' }} /> } */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { sSess, sServerLiveMPE, isLoggedIn, username, password } = state.auth;
    const { sServer, cameras } = state.server;
    return {
        sSess,
        sServerLiveMPE,
        isLoggedIn,
        username,
        password,
        sServer,
        cameras
    }
}

export default connect(mapStateToProps, {})(CameraStreamContainer);