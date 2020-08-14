import React , {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./home/home"

class App extends Component{
  render(){
      return(
        <Router>
           <Switch>
              <Route path="/" component={Home} title='首页'/>
           </Switch>
         </Router>
      )
  }
}

export default App;


