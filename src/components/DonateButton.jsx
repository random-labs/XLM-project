import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

// DonateButton
class DonateButton extends Component {
  render() {
    return (
        <RaisedButton label="Donate" style={style} />
    );
  }
}

export default DonateButton;
