import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

// Navigation Bar/App Bar, might change to Toolbar later
class NavBar extends Component {
  render(){
    return (
        <AppBar
            title="Donate Pls"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
    );
  }
}

export default NavBar;
