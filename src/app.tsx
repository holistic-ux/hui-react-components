import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './components/Loader';
import './assets/styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Loader kind="primary" size="normal" />
  </React.StrictMode>,
  document.getElementById('root')
);
