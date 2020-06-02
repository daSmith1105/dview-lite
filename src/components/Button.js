import React from 'react';
import '../App.css';

const Button = props => {

  return (
    <button 
            style={{
              height: props.height || 30,
              width: props.height * 4 || 120,
              borderRadius: props.radius ? 5 : 0,
              backgroundColor: props.background ? props.background : 'transparent',
              color: props.textColor ? props.textColor : 'black',
              borderColor: props.borderColor ? props.borderColor : 'transparent',
              borderWidth: props.borderWidth ? props.borderWidth : 2,
              padding: 2,
              fontSize: props.fontSize || 11,
              fontWeight: 'bold',
              marginRight: 5,
              marginLeft: 5
            }}
            className='generalButton'
            onClick={ props.onClick } >
      { props.buttonText }
    </button>
  );
};

export default Button;
