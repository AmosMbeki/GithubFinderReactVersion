import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

import './App.css';
import {Navbar} from './components/layout/Navbar';
import {Alert} from './components/layout/Alert'

import {User} from './components/users/User';
import {Home} from './components/layout/pages/Home';
import {About} from './components/layout/pages/About';
import {NotFound} from './components/layout/pages/NotFound';
 

const App = () => {

    return (
      <GithubState>
        <AlertState>
          <Router>
            <div className="App">
              <Navbar />
              <div className="container">
                  <Alert />
                  <Switch>
                  <Route exact path="/" component={Home} /> 
                    <Route exact path="/about" component={About} />
                    <Route exact path="/user/:login" component={User}/>
                    <Route component={NotFound} />
                  </Switch>          
              </div>
            </div>
          </Router>
        </AlertState>
      </GithubState>
    );
  
 
}

export default App;
