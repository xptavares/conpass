import React, { Component } from 'react';
import './App.css';
import Menu from './modules/components/Menu'
import Topnavbar from './modules/components/Topnavbar'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        email: "xptavares@gmail.com",
        name: "Alexandre Tavares"
      }
    }
  }
  render() {
    return (
      <div className="contentarea">
        <Menu path={this.props.location.pathname} currentUser={this.state.currentUser}>
          <Topnavbar />
          {this.props.children}
        </Menu>
      </div>
    );
  }
}

export default App;
