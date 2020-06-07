import React, { Component } from 'react'
import Cards from './Cards';

export default class WorldReport extends Component {
   
    changeToNum = (StringNum) =>{
        var arryNum = StringNum.split(',');
        var concatNum = arryNum.join("");
        return parseInt(concatNum)
    }
    render() {
       
    console.log(this.props.reports[0])             
        return (
            <div className="container=cards ">
                <Cards data={this.props.reports} changeNum={this.changeToNum} title="World"  />
            </div>
        )
    }
}
