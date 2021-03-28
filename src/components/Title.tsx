import React from 'react';

const Title: React.FC = () => (
  <h1 className="text-4xl">
    My first ReactJS and TypeScript library! {new Date().toLocaleDateString()}
  </h1>
);

export default Title;
