import React, { Component } from 'react'
import NavBar from './components/layout/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Contact,Home,Search,Stats} from './components/pages'
import './App.css';
import Footer from './components/util/Footer'
export default class App extends Component {
// async componentDidMount(){
//     const data = await this.fetchData();
//     const {GlobalData} = data;
//   }
//   fetchData = async () =>{
//     var fetchData = await fetch('https://api.covid19api.com/summary');
//         var fetched = await fetchData.json();
//         return fetched
//   } 
  render() {
    return (
     <Router>
       <NavBar />
       <div className="container">
         <Switch>
         <Route exact path="/" component={Home} />
         <Route  path="/stats" component={Stats} />
         <Route  path="/search" component={Search} />
         <Route  path="/contact" component={Contact} />
                
         </Switch>
         <Footer />
       </div>
     </Router>
    )
  }
}
