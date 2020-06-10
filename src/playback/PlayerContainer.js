import React from 'react';
import PlayerWindow from './PlayerWindow';
import PlayerWindowHeader from './PlayerWindowHeader';
import PlayerWindowProgressBar from './PlayerWindowProgressBar';
import PlayerWindowControls from './PlayerWindowControls';

const PlayerContainer = props => {
  return (
    <div style={ styles.playerContainerStyle }>
      <p style={{ padding: 0, fontSize: '1vw', color: 'black', backgroundColor: 'white', position: 'absolute', top: '-1.6vw', left: 20, paddingRight: '.5vw', paddingLeft: '.5vw' }}>Player</p>
      <PlayerWindowHeader />
      <PlayerWindow />
      <PlayerWindowProgressBar />
      <div style={{ position: 'absolute', bottom: '5vw', left: 0, right: 0, margin: 'auto', marginTop: '2vw' }}>
        <PlayerWindowControls />
      </div>
    </div>
  )
}

export default PlayerContainer;

const styles = {
  playerContainerStyle: {
    border: '2px solid grey',
    borderRadius: 10, 
    width: '100%',
    height: '110%',
    position: 'relative',
    marginTop: '8.5vw'
  }
}