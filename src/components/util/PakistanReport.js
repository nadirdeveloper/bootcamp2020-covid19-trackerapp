import React, { Component } from 'react'
import Cards from './Cards';

export default class WorldReport extends Component {
    state = {
        GlobalData: []
    }
    async componentDidMount(){
        const data = await this.fetchData();
        const {Countries} = data;
        var PakistanCountry = Countries[126];
        this.setState({GlobalData:PakistanCountry});

      }
      fetchData = async () =>{
        var fetchData = await fetch('https://api.covid19api.com/summary');
            var fetched = await fetchData.json();
            return fetched
      } 
    render() {  
              
        return (
            <div className="container ">
                <Cards data={this.state.GlobalData} />
            </div>
        )
    }
}
