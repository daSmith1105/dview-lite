import React from 'react';

const ServerView = props => {
    return (
        <div style={ styles.serverViewContainerStyle }>
            <select style={{ padding: 2, border: '2px solid grey', borderRadius: 5 }}>
                <option value="none">Jump System</option>
                <option value="null">-----------</option>
                <option value="s1">Server 1</option>
                <option value="s2">Server 2</option>
                <option value="s3">Server 3</option>
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