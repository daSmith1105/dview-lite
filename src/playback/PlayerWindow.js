import React from 'react';

const PlayerWindow = props => {
  return (
    <div style={ styles.clipContainerStyle }>
      <img src={"https://www.bmw-yemen.com/content/dam/bmw/common/all-models/4-series/gran-coupe/2017/images-and-videos/images/BMW-4-series-gran-coupe-images-and-videos-1920x1200-11.jpg.asset.1519121502322.jpg"} alt='image' height="100%" width="100%" style={{ borderRadius: 5 }} />
    </div>
  )
}

export default PlayerWindow;

const styles = {
  clipContainerStyle: {
    height: '34vw',
    width: '95%',
    // border: '2px solid grey',
    borderRadius: 10,
    backgroundColor: 'grey',
    margin: 'auto',
    marginTop: '1vw'
  }
}