import React from 'react';
import './title.css';

const Title: React.FC = () => (
  <h1 className="hui-title">
    My first ReactJS and TypeScript library! {new Date().toLocaleDateString()}
  </h1>
);

export default Title;
