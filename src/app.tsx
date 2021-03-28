import React from "react";
import ReactDOM from "react-dom";
import './styles/main.css'

const App = () => (
  <h1 className="text-4xl">My React and TypeScript App!</h1>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);