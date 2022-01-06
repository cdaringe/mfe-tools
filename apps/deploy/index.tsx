import ReactDOM from "react-dom";
import React from "react";
import Home from "./components/pages/home";
window.React = React;
setTimeout(() => {
  ReactDOM.render(<Home />, window.document.body);
}, 100);
