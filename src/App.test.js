import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const location = {
    pathname: 'teste'
  }
  ReactDOM.render(<App location={location} />, div);
});
