import React, { Component } from 'react';
import DonateButton from './DonateButton';

class App extends Component {
  render() {
    return (
      <div className={App}>
        <header>
          <h1>Donate Pls</h1>
        </header>
        <DonateButton />
      </div>

    );
  }
}

export default App;
