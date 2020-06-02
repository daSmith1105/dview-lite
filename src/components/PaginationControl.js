import React from 'react';

const PaginationControl = props => {

  const { currentPage, pageCount, onIncrement, onDecrement, onStart, onEnd } = props;

  const { paginationContainerStyle, paginationButtonStyle, paginationButtonDisabledStyle } = styles;

  return (
    <div style={ paginationContainerStyle }>
      { currentPage > 1  ?
        <div>
          <button style={ paginationButtonStyle } onClick={ onStart }>First</button>
          <button style={ paginationButtonStyle } onClick={ onDecrement }>Previous</button>
        </div> :  
        <div>
          <button style={ paginationButtonDisabledStyle } onClick={() => console.log('not gonna do it.')}>First</button>
          <button style={ paginationButtonDisabledStyle }onClick={() => console.log('not gonna do it.')}>Previous</button>
        </div>
      }

      <span style={{ marginRight: 10, marginLeft: 10, width: 160 }}>Page { currentPage } of { pageCount }</span>

      { currentPage.toString() !== pageCount.toString() ? 
        <div>
          <button style={ paginationButtonStyle } onClick={ onIncrement }>Next</button>  
          <button style={ paginationButtonStyle } onClick={ onEnd }>Last</button>
        </div> :
        <div>
          <button style={ paginationButtonDisabledStyle } onClick={() => console.log('not gonna do it.')}>Next</button> 
          <button style={ paginationButtonDisabledStyle } onClick={() => console.log('not gonna do it.')}>Last</button>
        </div>
      }
    </div>

  )
};

export default PaginationControl;

const styles = {
  paginationContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  paginationButton: {
    marginRight: 5,
    marginLeft: 5
  },
  pagginationButtonDisabled: {
    marginRight: 5,
    marginLeft: 5
  }
};