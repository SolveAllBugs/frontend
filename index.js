import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import home from "./components/client/home";

import * as serviceWorker from "./serviceWorker";
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const Routing = () => {
  return(
    <Router>
      <Switch>
      <Route exact path="/admin" component={App} />

        <Route path="/home" component={home} />

      </Switch>
    </Router>
  )
}


ReactDOM.render(
  
  <React.StrictMode>
    <Routing /> 
  </React.StrictMode>   
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 