import React, { Component } from 'react';
import './App.css';
import Menu from './modules/components/Menu'
import Topnavbar from './modules/components/Topnavbar'

class App extends Component {
  render() {
    return (
      <div className="contentarea">
        <Menu path={this.props.location.pathname}>
          <Topnavbar />
          {this.props.children}
        </Menu>
      </div>
    );
  }
}

export default App;
