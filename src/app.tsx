import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
import './assets/styles/main.css';
import { Shape } from './components/utils/types';

const App: React.FC = () => {
  const shape: Shape[] = ['normal', 'squared', 'rounded'];
  const [index, setIndex] = useState(0);

  const changeProp = () => {
    setIndex((prevCount) => {
      return prevCount === shape.length - 1 ? 0 : prevCount + 1;
    });
  };

  return (
    <section>
      <Button tabIndex={-1} onClick={changeProp} shape={shape[index]}>
        Clic me to do an action
      </Button>
      {shape[index]}
    </section>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
