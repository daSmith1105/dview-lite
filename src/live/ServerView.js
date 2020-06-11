import React from 'react';
import { connect } from 'react-redux';



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

    return (
        <div style={ styles.serverViewContainerStyle }>
            <select value={''} 
                    onChange={ e => { if(e.target.value !== ''){alert(e.target.value)} } }
                    style={{ fontSize: '1.5vmin', padding: '.2vw', border: '2px solid grey', width: '100%', borderRadius: 5, textAlign: 'left' }}>
                <option value="">Jump System</option>
                <option value="">-----------</option>
                { props.authServers.map( server => 
                                            <option key={server.bSerial} value={server.sIP + "-" + server.sLocalIP}> {/*use the value to call this.props.getServer(value + '/JSON/'); */} 
                                                {props.sVersionMajor !== server.sVersion.split('.')[0] ? `* ${server.sName}` : server.sName }
                                            </option>)}
                {/* need to handle nvrs that are offline in the dropdown */}
            </select>
        </div>
    )
}
const mapStateToProps = state => {
    const { authServers, sVersionMajor } = state.server;
    return{
        authServers,
        sVersionMajor
    }
}
export default connect(mapStateToProps, {})(ServerView);

const styles = {
    serverViewContainerStyle: {
        margin:'3vw',
        width: '90%'
    }
}