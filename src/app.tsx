import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import Button from './components/Button';

const App = () => {
  const [loading, setLoading] = useState(false);
  const toggleLoading = () => {
    setLoading((value) => !value);
    setTimeout(() => {
      setLoading((value) => !value);
    }, 2000);
  };
  return (
    <Button icon="plus" loading={loading} onClick={toggleLoading}>
      Hi
    </Button>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
