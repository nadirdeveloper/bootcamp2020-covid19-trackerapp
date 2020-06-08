import React, { Component } from 'react';
import ListCountries from '../util/ListCountries'
import '../../App.css'
export default class Search extends Component {
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
            <div className="search-container">
                <h3 className="sect-title">All Countries Statistics</h3>
                <ListCountries data={this.state.allData} />
            </div>
        )
    }
}
