import React, { Component } from 'react'

export default class ListCountries extends Component {
    render() {
        let i = 0;
        if(!this.props.data[0]){
            return (<div className="loading-container">
            <div className="loader"></div>
            <p>Loading Data From API</p>
        </div>)
        }
        return (
            <div className="list-table">
                <table>
                    <thead>
                        <tr>
                        <td>S.No</td>
                        <td>Country</td>
                        <td>Active Cases</td>
                        <td>New Cases</td>
                        <td>New Death Cases</td>
                        <td>Total Cases</td>
                        <td>Total Recovered Cases</td>
                        <td>Total Death Cases</td>
                        </tr>
                        
                    </thead>
                    
                    <tbody>
                        {
                            this.props.data.map((item) => {
                                i++
                                
                                return <tr key={i}>
                                    <td>{i}</td>
                            <td>{item["Country_text"]}</td>
                                    <td>{item["Active Cases_text"]}</td>
                                    <td>{item["New Cases_text"]}</td>
                                    <td>{item["New Deaths_text"]}</td>
                                    <td>{item["Total Cases_text"]}</td>
                                    <td>{item["Total Recovered_text"]}</td>
                                    <td>{item["Total Deaths_text"]}</td>
                                   
                                </tr>
                                // console.log(item["Country_text"])
                            })}
                    </tbody>
                    <tfoot></tfoot>

                </table>
            </div>
        )
    }
}
