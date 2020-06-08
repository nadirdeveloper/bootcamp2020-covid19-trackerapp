import React, { Component } from 'react'
import Cards from './Cards';

export default class WorldReport extends Component {
   
    changeToNum = (StringNum) =>{
    
        var arryNum = StringNum.split(',');
        var concatNum = arryNum.join("");
        if(concatNum === "") {
          return 0;
        }else{
          return parseInt(concatNum);
        }
    }
    render() {
       
        return (
            <div className="container=cards ">
                <Cards data={this.props.reports} changeNum={this.changeToNum} title="World"  />
            </div>
        )
    }
}
