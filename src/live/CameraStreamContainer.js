import React from 'react';
import { connect } from 'react-redux';

class CameraStreamContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            url: 'http://205.209.241.49:7000/',
            source: 'cam1.jpg?',
            timestamp: ''
        }

        this.updateHandler = 0;
    }

    componentDidMount = () => {
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
        return (
            // allow for component to be called with a variable height depending on our config layout
            <div style={{ height: 200, width: 200 }} onDoubleClick={ () => alert('double clicked!')}>
                <img src={ 'http://205.209.241.49:7000/mpe/cam' + this.props.camNum + '.jpg?sess=' + this.props.sSess + '&ts=' + this.state.timestamp } alt='camera_stream' height={'100%'} width={'100%'} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { sSess, sServerLiveMPE, isLoggedIn } = state.auth;
    return {
        sSess,
        sServerLiveMPE,
        isLoggedIn
    }
}

export default connect(mapStateToProps, {})(CameraStreamContainer);