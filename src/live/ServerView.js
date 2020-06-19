import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';



// example of single authServer params 
//      bTimestamp: 1591825597
//      sIP: "47.51.193.54"
//      bSerial: 256
//      sLocalIP: "192.168.0.22"
//      bPort: 8888
//      sName: "Dividia Benbrook Office"
//      fLocal: false
//      sVersion: "5.2.90"
//      bRtspPort: 554

const ServerView = props => {

    const initiateServerJump = (e) => {
        let value = JSON.parse(e.target.value);
        console.log(value)
        if(value !== ''){
            alert(JSON.stringify(value));
            if( value.sName.charAt( value.sName.length - 1 ) === '*' ) {
                // server we are jumping to is an incompatible version
                // alert user and push back to previous server
                return;
            }
            // if we check and can get to the new system, then ----->
            // we need to logout of this dvr and then push to the jump system url set that ip in our state so that we can append our '/JSON' calls and force a login to the new system
            // props.logoutUser(props.sSess, '/JSON/');
        }
    }

    return (
        <div style={ styles.serverViewContainerStyle }>
            <select value={''} 
                    onChange={ e => initiateServerJump(e) }
                    style={{ fontSize: '1.5vmin', padding: '.2vw', border: '2px solid grey', width: '100%', borderRadius: 5, textAlign: 'left' }}>
                <option value="">Jump System</option>
                <option value="">-----------</option>
                { props.authServers.map( server => 
                                            <option key={server.bSerial} value={JSON.stringify(server)}> {/*use the value to call this.props.getServer(value + '/JSON/'); */} 
                                                {props.sVersionMajor !== server.sVersion.split('.')[0] ? `* ${server.sName}` : server.sName }
                                            </option>)}
                {/* need to handle nvrs that are offline in the dropdown */}
            </select>
        </div>
    )
}
const mapStateToProps = state => {
    const { authServers, sVersionMajor } = state.server;
    const { sSess } = state.auth;
    return{
        authServers,
        sVersionMajor,
        sSess
    }
}
export default connect(mapStateToProps, { logoutUser })(ServerView);

const styles = {
    serverViewContainerStyle: {
        margin:'3vw',
        width: '90%'
    }
}