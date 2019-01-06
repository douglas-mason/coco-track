import React, { Component } from 'react';
import { LogEntryDashboard } from './log-entry-dashboard/log-entry-dashboard.container';
import './app.styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LogEntryDashboard />
      </div>
    );
  }
}

export default App;
