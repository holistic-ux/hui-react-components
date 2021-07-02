/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './title.css';

const Title: React.FC = () => (
  <>
    <h1 className="hui-title">
      My first ReactJS and TypeScript library! {new Date().toLocaleDateString()}
    </h1>
    <h2 className="hui-title">
      My first ReactJS and TypeScript library! {new Date().toLocaleDateString()}
    </h2>
    <h3 className="hui-title">
      My first ReactJS and TypeScript library! {new Date().toLocaleDateString()}
    </h3>
    <h4 className="hui-title">
      My first ReactJS and TypeScript library! {new Date().toLocaleDateString()}
    </h4>
    <h5 className="hui-title">
      My first ReactJS and TypeScript library! {new Date().toLocaleDateString()}
    </h5>
    <h6 className="hui-title">
      My first ReactJS and TypeScript library! {new Date().toLocaleDateString()}
    </h6>
    <p className="hui-title">
      My first ReactJS and TypeScript library! {new Date().toLocaleDateString()}
    </p>
    <a className="hui-title" href="https://google.com" target="_blank">
      My first ReactJS and TypeScript library! {new Date().toLocaleDateString()}
    </a>
  </>
);

export default Title;
