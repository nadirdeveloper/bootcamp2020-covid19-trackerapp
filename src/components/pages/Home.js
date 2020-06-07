import React, { Component } from 'react'
import WorldReport from '../util/WorldReport';
import PakistanReport from '../util/PakistanReport';
export default class Home extends Component {
    state = {
        allData: []
    }
    async componentDidMount(){
        var getGlobalData = await this.fetchData();
        this.setState({allData:getGlobalData})
      }
      fetchData = async () =>{
        var fetchedReport = await fetch('https://covid-19.dataflowkit.com/v1',{
            method: "GET",
           
        })
       var fetchData = await fetchedReport.json()
        return fetchData
    }
    render() {
        return (
            <div className="home-content">
                <div className="home-header">
                    <div className="header-content">
                    <h1>BOOTCAMP 2020 PROJECT 1</h1>
                <h1>COVID19 REACT TRACKER APP</h1>
                    </div>
                </div>
                <WorldReport reports={this.state.allData} /> 
                <PakistanReport reports={this.state.allData} />
                
            </div>
        )
    }
}
