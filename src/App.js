import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Login from "./Login"
import './App.css';
import 'tachyons'
import Home from './Home';
import UserPage from './components/UserPage';


class App extends Component {
  render(){
    return (
      <Router>
        <Route exact path="/code/:id" component={Login}/>
        <Route exact path="/" component={Login}/>
        <Route exact path="/Home" component={Home}/>
        <Route exact path="/user/:id" component={UserPage}/>
      </Router>
      
    );
  }
  
}

export default App;
