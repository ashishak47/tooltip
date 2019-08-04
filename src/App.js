import React from 'react';
import './App.css';
import Tooltip from './Tooltip';

class App extends React.Component {
  render() {
    const tooltipTarget = <span> Click/hover here</span>
    return (
      <div className="container">To test the tooltip 
        <Tooltip content='this is a tooltip component example' 
            placement='bottom'
            target={tooltipTarget}
            trigger='hover'
        />
      </div>
    )
  }
}

export default App;
