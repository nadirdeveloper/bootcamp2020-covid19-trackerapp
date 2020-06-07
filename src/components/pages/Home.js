import React, { Component } from 'react'
import WorldReport from '../util/WorldReport';
import PakistanReport from '../util/PakistanReport';
export default class Home extends Component {
    
    render() {
        return (
            <div className="home-content">
                <div className="home-header">
                    <div className="header-content">
                    <h1>BOOTCAMP 2020 PROJECT 1</h1>
                <h1>COVID19 REACT TRACKER APP</h1>
                    </div>
                </div>
                <WorldReport /> 
                <PakistanReport />
                
            </div>
        )
    }
}
