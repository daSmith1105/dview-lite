import React from 'react';
import DateContainer from './DateContainer';
import '../App.css';

const SearchContainer = props => {

  const handleCameraSelect = e => {
    e.preventDefault();
    console.log(e.target.value);
  }

  return (
    <div style={{ position: 'relative', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  padding: '.5vw', 
                  width: '98%', 
                  // backgroundColor: 'red',
                  border: '2px solid grey',
                  borderRadius: 10,
                  paddingTop: '1vw'
                }}>
      <p style={{ padding: 0, fontSize: '1vw', color: 'black', backgroundColor: 'white', position: 'absolute', top: '-1.8vw', left: 20, paddingRight: '.5vw', paddingLeft: '.5vw' }}>Search</p>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <div style={{ marginLeft: '4vw' }}>
            <p style={{ margin: 0, fontSize: '1vw', textAlign: 'left', marginBottom: '.1vw', marginLeft: '.1vw'  }}>Camera: </p>
            <select value='1' onChange={ handleCameraSelect } style={{ margin: 'auto',  padding: '.1vw', fontSize: '.8vw' }}>
              <option value='1'>Camera view - 1</option>
              <option value='2'>Camera view - 2</option>
              <option value='3'>Camera view - 3</option>
              <option value='4'>Camera view - 4</option>
            </select>
          </div>

          <div style={ styles.rowStyle }>
            <p style={{ margin: 0, fontSize: '1vw', marginLeft: '.5vw' }}>Filter(s): </p>
              <input type='checkbox' style={{ marginLeft: '.2vw' }} /> 
              <p style={{ margin: 0, fontSize: '1vw', marginLeft: '.1vw' }}>Archived</p>
            </div>

            <div style={ styles.rowStyle }>
              <input type='checkbox' style={{ marginLeft: '9vw' }} /> 
              <p style={{ margin: 0, fontSize: '1vw', marginLeft: '.1vw' }}>Flagged for Export</p>
            </div>
          </div>

          <div style={{ marginTop: '-.5vw' }}>
            <DateContainer />
          </div>
        </div>
        <div style={ styles.rowCenterStyle }>
              <button className="hoverableButton" style={ styles.buttonGroupButtonStyle } onClick={ () => alert('Find video clicked')}>
                Find Video
              </button>
              <button className="hoverableButton" style={ styles.buttonGroupButtonStyle } onClick={ () => alert('POS search clicked')}>
                POS Search
              </button>
            </div>
      </div>
  )
}

export default SearchContainer;


const styles = {
  rowStyle: {
    display: 'flex',
    alignItems: 'center', 
    justifyContent:'center',
    marginTop: '1vw',
  },
  rowCenterStyle: {
    display: 'flex',
    alignItems: 'center', 
    justifyContent:'center',
    marginTop: '2vw',
    marginBottom: '.5vw',
    width: '100%'
  },
  buttonGroupButtonStyle: {
    fontSize: '1vw',
    margin: '.2vw',
    borderRadius: 5,
    padding: '.2vw',
    paddingRight: '.4vw', 
    paddingLeft : '.4vw',
    border: 'none'
  },

}