import React from 'react';
import '../../App.css';
import CountUp from 'react-countup'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import LineGraph from './LineGraph'
function CardsSearch(props) {
    if (!props.data[0]) {
        return (
            <div className="loading-container">
                <h3 className="sect-title">Please Select A Country Name</h3>
            </div>
        )
    }
    return (
        <React.Fragment>
            <div className="card-container">
    <h3 className="sect-title">Global Condition Of The {props.title}</h3>

                <Grid container justify="center">
                    <Grid item xs={12} md={3} component={Card} className="card card-infected">
                        <CardContent>
                            <Typography color="textSecondary" className="card-heading" gutterBottom>Currently Active Cases</Typography>
                            <Typography varient="h1" className="card-count"><CountUp separator=" ," start={0} end={props.changeNum(props.data[0]["Active Cases_text"])} duration="4"></CountUp></Typography>
                            <Typography color="textSecondary" className="card-date">{new Date().toDateString()}</Typography>
                            <Typography varient="body2" className="card-category">World</Typography>
                        </CardContent>
                    </Grid><Grid item xs={12} md={3} component={Card} className="card card-recovered">
                        <CardContent>
                            <Typography color="textSecondary" className="card-heading" gutterBottom>New Cases</Typography>
                            <Typography varient="h1" className="card-count"><CountUp separator=" ," start={0} end={props.changeNum(props.data[0]["New Cases_text"])} duration="4"></CountUp></Typography>
                            <Typography color="textSecondary" className="card-date">{new Date().toDateString()}</Typography>
                            <Typography varient="body2" className="card-category">World</Typography>
                        </CardContent>
                    </Grid><Grid item xs={12} md={3} component={Card} className="card card-death">
                        <CardContent>
                            <Typography color="textSecondary" className="card-heading" gutterBottom>New Death Cases</Typography>
                            <Typography varient="h1" className="card-count"><CountUp separator=" ," start={0} end={props.changeNum(props.data[0]["New Deaths_text"])} duration="4"></CountUp></Typography>
                            <Typography color="textSecondary" className="card-date">{new Date().toDateString()}</Typography>
                            <Typography varient="body2" className="card-category">World</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12} md={3} component={Card} className="card card-infected">
                        <CardContent>
                            <Typography color="textSecondary" className="card-heading" gutterBottom>Total Cases</Typography>
                            <Typography varient="h1" className="card-count"><CountUp separator=" ," start={0} end={props.changeNum(props.data[0]["Total Cases_text"])} duration="4"></CountUp></Typography>
                            <Typography color="textSecondary" className="card-date">{new Date().toDateString()}</Typography>
                            <Typography varient="body2" className="card-category">World</Typography>
                        </CardContent>
                    </Grid><Grid item xs={12} md={3} component={Card} className="card card-recovered">
                        <CardContent>
                            <Typography color="textSecondary" className="card-heading" gutterBottom>Total Recovered Cases</Typography>
                            <Typography varient="h1" className="card-count"><CountUp separator=" ," start={0} end={props.changeNum(props.data[0]["Total Recovered_text"])} duration="4"></CountUp></Typography>
                            <Typography color="textSecondary" className="card-date">{new Date().toDateString()}</Typography>
                            <Typography varient="body2" className="card-category">World</Typography>
                        </CardContent>
                    </Grid><Grid item xs={12} md={3} component={Card} className="card card-death">
                        <CardContent>
                            <Typography color="textSecondary" className="card-heading" gutterBottom>Total Deaths Cases</Typography>
                            <Typography varient="h1" className="card-count"><CountUp separator=" ," start={0} end={props.changeNum(props.data[0]["Total Deaths_text"])} duration="4"></CountUp></Typography>
                            <Typography color="textSecondary" className="card-date">{new Date().toDateString()}</Typography>
                            <Typography varient="body2" className="card-category">World</Typography>
                        </CardContent>
                    </Grid>
                </Grid>
                <div className="linegraph-container">
                    <h3 className="sect-title">Graphical Representation Of Corona Virus Victims</h3>
                    <LineGraph data={props.data[0]} convertNum={props.changeNum} title={props.title} />
                </div>
            </div>
        </React.Fragment>

    )
}
export default CardsSearch;