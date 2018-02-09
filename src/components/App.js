import React, { Component } from 'react';

import './App.css';
import Feedback from './feedback/feedback';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='App'>
        <Feedback
          options = {[
            { value: '0', text: 'Служба безопасности' },
            { value: '1', text: 'Топ Менеджмент' },
            { value: '2', text: 'Старовойтов И.А.' }
          ]}
        />
      </div>
    );
  }
}

export default App;
