import React from 'react';
import servers from './test_servers.json'

const ServerView = props => {
    return (
        <div style={ styles.serverViewContainerStyle }>
            <select style={{ padding: 2, border: '2px solid grey', borderRadius: 5 }}>
                <option value="none">Jump System</option>
                <option value="null">-----------</option>
                {servers.map( s => <option key={s.bSerial} value={s.bSerial}>{s.sName}</option>)}
            </select>
        </div>
    )
}

export default ServerView;

const styles = {
    serverViewContainerStyle: {
        margin: 20
    }
}