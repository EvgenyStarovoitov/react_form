import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';
import Feedback from './feedback/feedback';

const propTypes = {
  initialName: PropTypes.string
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='App'>
        <Feedback/>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
