import React from 'react';
import ServerSearchDescription from './ServerSearchDescription';
import { FaSearch } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import Fade from 'react-reveal/Fade'
import '../../App.css';

class SearchBar extends React.Component {

  state = {
    showDescription: false,
    searchInputValue: '',
    placeholder: 'search ' + this.props.type + 's'
  };

  showDescription = () => {
    this.setState({ showDescription: true })
  };

  hideDescription = () => {
    this.setState({ showDescription: false })
  };

  checkKeyPress = e => {
    if( e.keyCode === 13 ){ // enter has been pressed
      if( this.state.searchInputValue.length > 0 ) {
      switch ( this.props.type ) {
        case "nvr": 
          this.props.searchNvrs(this.state.searchInputValue); 
          this.setState({ searchInputValue: '' });
        break;
        case "jetengine": 
          this.props.searchJetEngines(this.state.searchInputValue); 
          this.setState({ searchInputValue: '' });
        break;
        case "jobsite": 
          this.props.searchJobsites(this.state.searchInputValue); 
          this.setState({ searchInputValue: '' });
        break;
        default:
          this.setState({ searchInputValue: '' });
        }
      } else {
        switch ( this.props.type ) {
          case "nvr": 
            this.props.getNvrList();
            this.setState({ searchInputValue: '' });
          break;
          case "jetengine": 
            this.props.getJetEngineList();
            this.setState({ searchInputValue: '' });
          break;
          case "jobsite": 
            this.props.getJobsiteList();
            this.setState({ searchInputValue: '' });
          break;
          default:
            this.setState({ searchInputValue: '' });
        }
        this.setState({ searchInputValue: '' });
      }
    };
    return
  };

  render() {
    const { searchBarStyle, rowStyle, searchInputStyle, infoStyle, descriptionContainerStyle } = styles;

    return (
      <div style={ searchBarStyle }>
        <div style={ rowStyle }>
          <FaSearch color='grey' />
          <input  type='text' 
                  onChange={ e => { this.setState({ searchInputValue: e.target.value }, () => console.log( this.state.searchInputValue )) }}
                  placeholder={ this.state.placeholder }
                  value={ this.state.searchInputValue }
                  onKeyDown={ this.checkKeyPress }
                  style={ searchInputStyle } />
        </div>
        <div style={ infoStyle }>

        { this.props.type === 'server' ?
          <div>
              {this.state.showDescription && 
                <div style={ descriptionContainerStyle }>
                  <Fade>
                    <ServerSearchDescription />
                  </Fade>
                </div> 
            }

              <FaInfoCircle className="info"
                            style={{ height: 13, width: 'auto' }}
                            onMouseEnter={ this.showDescription }
                            onMouseLeave={ this.hideDescription } />
          </div> :
          null }

        </div>

      </div>
    );
  };
};

export default SearchBar;

const styles = {
  searchBarStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: 260,
    marginBottom: 5,
    marginTop: 0
  },
  rowStyle: {
    display: 'flex',
    flexDirection: 'row',
    height: 24,
    width: 240,
    border: '2px solid grey',
    borderRadius: 8,
    paddingLeft: 10,
    paddingRight: 5,
    alignItems: 'center'
  },
  searchInputStyle: {
    height: 16,
    width: '100%',
    padding: 2,
    paddingLeft: 5,
    borderWidth: 0,
    borderRadius: 15,
    marginLeft: 5,
    fontSize: 14,
    outline: 'none'
  },
  infoStyle: {
    marginLeft: 10,
    height: 10,
    width: 10
  },
  descriptionContainerStyle: {
    position: 'absolute',
    zIndex: 10,
    marginTop: 18
  }
};