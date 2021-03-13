import React, {Component} from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Movies from "./components/Movies/Movies.component"

class App extends Component {
  render (){
    return (
      <Router>
        <Switch>
          <Route path="/movies" component={Movies}/>
        </Switch>
      </Router>
    )
  }
    
  
}

export default App;
