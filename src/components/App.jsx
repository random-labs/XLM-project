import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DonateButton from './DonateButton';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <DonateButton />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
