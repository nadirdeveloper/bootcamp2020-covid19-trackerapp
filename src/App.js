import React, { Component } from 'react'
import NavBar from './components/layout/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Contact,Home,Search,Stats} from './components/pages'
import './App.css';
export default class App extends Component {
async componentDidMount(){
    const data = await this.fetchData();
    const {Global} = data;
  }
  fetchData = async () =>{
    var fetchData = await fetch('https://api.covid19api.com/summary');
        var fetched = await fetchData.json();
        return fetched
  } 
  render() {
    return (
     <Router>
       <NavBar />
       <div className="container">
         <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/stats" component={Stats} />
         <Route exact path="/" component={Search} />
         <Route exact path="/" component={Contact} />
                
         </Switch>
       </div>
     </Router>
    )
  }
}
