import React from 'react';
import Fade from 'react-reveal/Fade'

const Switch = (props) => {

  const toggleSwitch = () => {
    props.active ? props.off() : props.on();
  };

    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', height: 20 }}>
        <Fade>
          <div style={{ height: 14, 
                        width: props.width || 35,
                        display: 'flex',
                        flexDirection: 'row',
                        border: props.active ? '2px solid #135ba2' :' 2px solid lightgrey', 
                        borderRadius: 20, 
                        backgroundColor: props.active ?  '#135ba2' : 'lightgrey',
                        position: 'relative',
                      }}
                onClick={ toggleSwitch }>

            { props.active ? 
                <div style={{ height: 14, width: 14, borderRadius: '50%', backgroundColor: 'white', position: 'absolute', top: 0, right: 0 }}></div> :
                <div style={{ height: 14, width: 14, borderRadius: '50%', backgroundColor: 'white', top: 0, left: 0  }}></div>
            }
          </div>
          <p style={{ width: 100, marginTop: 0, marginLeft: 10, fontSize: 11, fontWeight: 500 }}>{ props.label }</p>
        </Fade>
      </div>
    );
};

export default Switch;