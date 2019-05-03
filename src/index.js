import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as BR, Route} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Login from './Login';
import NavBar from './NavBar';

ReactDOM.render(
  <BR>
    <NavBar />
    <Route path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} />
  </BR>,
  document.getElementById('root')
);
