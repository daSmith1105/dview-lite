import React from 'react';
import { 
  FaPlay, 
  FaPause, 
  FaBackward, 
  FaStepBackward, 
  FaForward, 
  FaStepForward,
  FaVolumeOff,
  FaVolumeMute,
  FaVolumeDown,
  FaVolumeUp,
  FaExpand,
  FaStop
} from 'react-icons/fa'


// player speed, fullscreen, audio, start, stop, ff, rew<

const PlayerWindowControls = props => {
  return (
      <div style={{ height: '1.2vw', width: '94%', margin: 'auto', marginTop: '.6vw' }}>
        <div style={{ marginTop: '1vw' }}>
          <p style={{ margin: 0, marginBottom: '.2vw', textAlign: 'center', fontSize: '1vw' }}> speed</p>
          <input type="radio" name="speed" style={{ marginRight: '.2vw' }} /><span style={{ fontSize: '.8vw'  }}>1/4</span>
          <input type="radio" name="speed" style={{ marginRight: '.2vw', marginLeft: '.5vw' }} /><span style={{ fontSize: '.8vw'  }}>1/2</span>
          <input type="radio" name="speed" style={{ marginRight: '.2vw', marginLeft: '.5vw' }} /><span style={{ fontSize: '.8vw'  }}>1</span>
          <input type="radio" name="speed" style={{ marginRight: '.2vw', marginLeft: '.5vw'  }} /><span style={{ fontSize: '.8vw'  }}>2</span>
          <input type="radio" name="speed" style={{ marginRight: '.2vw', marginLeft: '.5vw'  }} /><span style={{ fontSize: '.8vw'  }}>4</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '.5vw', border: '2px solid grey', borderRadius: 5, padding: '.2vw'  }}>
          <FaExpand style={{ fontSize: '1.3vw' }} className="hoverable" onClick={() => alert('expand clicked')} />
          <FaBackward style={{ fontSize: '1.3vw' }} className="hoverable" onClick={() => alert('backward clicked')} />
          <FaStepBackward style={{ fontSize: '1.3vw' }} className="hoverable" onClick={() => alert('step backward clicked')} />
          <FaPlay style={{ fontSize: '1.3vw' }} className="hoverable" onClick={() => alert('play clicked')} />
          {/* <FaPause style={{ fontSize:' 1.3vw' }} className="hoverable" onClick={() => alert('pause clicked')} /> */}
          <FaStop style={{ fontSize: '1.3vw' }} className="hoverable" onClick={() => alert('stop clicked')} />
          <FaForward style={{ fontSize: '1.3vw' }} className="hoverable" onClick={() => alert('forward clicked')} />
          <FaStepForward style={{ fontSize: '1.3vw' }} className="hoverable" onClick={() => alert('step forward clicked')} />
          {/* <FaVolumeOff style={{ fontSize: '1.3vw' }} className="hoverable" onClick={() => alert('volume clicked')} /> */}
          <FaVolumeMute style={{ fontSize: '1.3vw' }} className="hoverable" onClick={() => alert('expand clicked')} />
          {/* <FaVolumeDown style={{ fontSize: '1.3vw' }} className="hoverable" onClick={() => alert('expand clicked')} /> */}
          {/* <FaVolumeUp style={{ fontSize: '1.3vw' }} className="hoverable" onClick={() => alert('expand clicked')} /> */}
        </div>
      </div>
  )
}

export default PlayerWindowControls;
