import React, { Component } from 'react'
import Cards from './Cards';

export default class WorldReport extends Component {
    state = {
        allPakistanData: []
    }
    async componentDidMount(){
        var getGlobalData = await this.fetchData();
        let allGetData = []
        allGetData.push(getGlobalData);
        this.setState({allPakistanData:allGetData})
      }
      fetchData = async () =>{
        var fetchedReport = await fetch('https://covid-19.dataflowkit.com/v1/pakistan',{
            method: "GET",
           
        })
       var fetchData = await fetchedReport.json()
       console.log(fetchData)
        return fetchData
    }
    changeToNum = (StringNum) =>{
        var arryNum = StringNum.split(',');
        var concatNum = arryNum.join("");
        return parseInt(concatNum)
    }
    render() {
       
    console.log(this.props.reports[0])             
        return (
            <div className="container=cards ">
                <Cards data={this.state.allPakistanData} changeNum={this.changeToNum} title="Pakistan" />
                
            </div>
        )
    }
}