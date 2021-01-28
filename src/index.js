import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import reportWebVitals from './reportWebVitals';

import App from './App';
import Home from './components/Home';
import About from './components/About'
import Samples from './components/Samples'
import Contact from './components/Contact';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="home" component={Home} />
      <Route path="about" component={About} />
      <Route path="portfolio" component={Samples} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
