import React from 'react';
import { connect } from 'react-redux';

const ServerView = props => {

    return (
        <div style={ styles.serverViewContainerStyle }>
            <select value={''} 
                    onChange={ e => { if(e.target.value !== ''){alert(e.target.value)} } }
                    style={{ fontSize: 12, height: 24, padding: 2, border: '2px solid grey', borderRadius: 5, textAlign: 'left' }}>
                <option value="">Jump System</option>
                <option value="">-----------</option>
                { props.authServers.map( server => 
                                            <option key={server.bSerial} value={server.bSerial}>
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
        margin: 20
    }
}