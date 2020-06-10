import React from 'react';
import moment from 'moment';
import '../App.css';

const ClipContainer = props => {

  const previewBlock = <div style={{ height: '8.3vw', width: '11vw', border: 'none', borderRadius: 5, backgroundColor: 'rgba(0,0,0,0.8)', margin: '1vw', float: 'left', position: 'relative' }}
                            className="hoverable"
                            onClick={ () => alert('preview clip clicked')}>
                          <img src={"https://www.bmw-yemen.com/content/dam/bmw/common/all-models/4-series/gran-coupe/2017/images-and-videos/images/BMW-4-series-gran-coupe-images-and-videos-1920x1200-11.jpg.asset.1519121502322.jpg"} alt='image' height="86%" width="100%" style={{ borderTopRightRadius: 5, borderTopLeftRadius: 5 }} />
                          <p style={{ textAlign: 'center', color: 'white', fontSize: '.8vw', margin: 0, marginTop: '-.2vw', marginBottom: 2 }}>{ moment(new Date()).format('MM/DD/yyy hh:mm:ss a') }</p>
                       </div>

  return (
    <div style={ styles.clipContainerStyle }>
      <p style={{ padding: 0, fontSize: '1vw', color: 'black', backgroundColor: 'white', position: 'absolute', top: '-1.6vw', left: 20, paddingRight: '.5vw', paddingLeft: '.5vw' }}>Preview Clips</p>
      <div style={ styles.rowStyle }>
        <button className="hoverableButton" style={ styles.buttonGroupButtonStyle } onClick={ () => alert('back clicked')}>
          Back
        </button>
        <button className="hoverableButton" style={ styles.buttonGroupButtonStyle }  onClick={ () => alert('forward clicked')}>
          Forward
        </button>
      </div>
        {previewBlock}
        {previewBlock}
        {previewBlock}
        {previewBlock}
        {previewBlock}
        {previewBlock}
        {previewBlock}
        {previewBlock}
        {previewBlock}
    </div>
  )
}

export default ClipContainer;

const styles = {
  clipContainerStyle: {
    height: '59%',
    width: '100%',
    border: '2px solid grey',
    borderRadius: 10,
    position: 'relative',
    // backgroundColor: 'lightblue'
  },
  rowStyle: {
    display: 'flex',
    alignItems: 'center', 
    justifyContent:'space-between',
    marginTop: '2vw',
    marginBottom: 10,
    paddingRight: 14,
    paddingLeft: 14
  },
  buttonGroupButtonStyle: {
    fontSize: '1vw',
    margin: 5,
    borderRadius: 5,
    padding: 4,
    paddingRight: 8, 
    paddingLeft : 8,
    border: 'none'
  },
}