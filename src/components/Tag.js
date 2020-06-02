import React from 'react';
import { FaMinusCircle } from 'react-icons/fa';
import '../../App.css';

class Tag extends React.Component {

  state = {
    hover: false
  }

  render() {

  const { tagContainerStyle, tagTextStyle } = styles;

    return (
      <div style={ tagContainerStyle } 
          className="tag" 
          onClick={ this.props.onClick } 
          title="Click to remove tag."
          onMouseEnter={ () => this.setState({ hover: true }) }
          onMouseLeave={ () => this.setState({ hover: false }) } >
        { this.state.hover ? 
 
            <FaMinusCircle style={{ height: 21, 
                                    width: 'auto', 
                                    position: 'absolute', 
                                    top: -2, 
                                    left: -2, 
                                    color: 'rgb(250,128,114)', 
                                    backgroundColor: 'white', 
                                    borderRadius: 100,
                                    border: '1px solid rgb(250,128,114)' 
                                  }} /> :
            null 
        }
        <p style={ tagTextStyle }>{ this.props.tagText }</p>
      </div>
    )
  };
};

export default Tag;

const styles = {
  tagContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 12,
    padding: 2,
    paddingLeft: 26,
    textAlign: 'center',
    width: 120,
    position: 'relative',
    margin: 5,
  },
  tagTextStyle: {
    margin: 0,
    textAlign: 'center',
    fontSize: 12,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontWeight: 'bold'
  }
};