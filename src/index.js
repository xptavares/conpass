import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import './index.css';
import { Router, Route, hashHistory } from 'react-router'
import Project from './modules/Project'
import Install from './modules/Install'
import Report from './modules/Report'
import Analytics from './modules/Analytics'
import Config from './modules/Config'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/projects" component={Project}/>
      <Route path="/reports" component={Report}/>
      <Route path="/Analytics" component={Analytics}/>
      <Route path="/extension" component={Install}/>
      <Route path="/config" component={Config}/>
    </Route>
  </Router>
), document.getElementById('root'));
