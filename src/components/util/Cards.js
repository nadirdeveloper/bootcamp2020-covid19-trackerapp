import React from 'react';
import '../../App.css';
import CountUp from 'react-countup'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
function Cards(props) {
    if (!props.data.NewConfirmed) {
        return (
            <div className="loading">
                <p>Loading Data From API</p>
            </div>
        )
    }
    return (
        <div className="card-container">
            <h3 className="sect-title">Global Condition Of The World</h3>

            <Grid container justify="center">
            <Grid item xs={12} md={3} component={Card} className="card card-infected">
                    <CardContent>
                        <Typography color="textSecondary" className="card-heading" gutterBottom>New Confirmed Cases</Typography>
                        <Typography varient="h1" className="card-count"><CountUp separator=" ," start={0} end={props.data.NewConfirmed} duration="4"></CountUp></Typography>
                        <Typography color="textSecondary" className="card-date">{new Date().toDateString()}</Typography>
                        <Typography varient="body2" className="card-category">World</Typography>
                    </CardContent>
                </Grid><Grid item xs={12} md={3} component={Card} className="card card-recovered">
                    <CardContent>
                        <Typography color="textSecondary" className="card-heading" gutterBottom>New Recovered Cases</Typography>
                        <Typography varient="h1" className="card-count"><CountUp separator=" ," start={0} end={props.data.NewRecovered} duration="4"></CountUp></Typography>
                        <Typography color="textSecondary" className="card-date">{new Date().toDateString()}</Typography>
                        <Typography varient="body2" className="card-category">World</Typography>
                    </CardContent>
                </Grid><Grid item xs={12} md={3} component={Card} className="card card-death">
                    <CardContent>
                        <Typography color="textSecondary" className="card-heading" gutterBottom>New Deaths</Typography>
                        <Typography varient="h1" className="card-count"><CountUp separator=" ," start={0} end={props.data.NewDeaths} duration="4"></CountUp></Typography>
                        <Typography color="textSecondary" className="card-date">{new Date().toDateString()}</Typography>
                        <Typography varient="body2" className="card-category">World</Typography>
                    </CardContent>
                </Grid><Grid item xs={12} md={3} component={Card} className="card card-infected">
                    <CardContent>
                        <Typography color="textSecondary" className="card-heading" gutterBottom>Total Confirmed</Typography>
                        <Typography varient="h1" className="card-count"><CountUp separator=" ," start={0} end={props.data.TotalConfirmed} duration="4"></CountUp></Typography>
                        <Typography color="textSecondary" className="card-date">{new Date().toDateString()}</Typography>
                        <Typography varient="body2" className="card-category">World</Typography>
                    </CardContent>
                </Grid><Grid item xs={12} md={3} component={Card} className="card card-recovered">
                    <CardContent>
                        <Typography color="textSecondary" className="card-heading" gutterBottom>Total Recovered</Typography>
                        <Typography varient="h1" className="card-count"><CountUp separator=" ," start={0} end={props.data.TotalRecovered} duration="4"></CountUp></Typography>
                        <Typography color="textSecondary" className="card-date">{new Date().toDateString()}</Typography>
                        <Typography varient="body2" className="card-category">World</Typography>
                    </CardContent>
                </Grid><Grid item xs={12} md={3} component={Card} className="card card-death">
                    <CardContent>
                        <Typography color="textSecondary" className="card-heading" gutterBottom>Total Deaths</Typography>
                        <Typography varient="h1" className="card-count"><CountUp separator=" ," start={0} end={props.data.TotalDeaths} duration="4"></CountUp></Typography>
                        <Typography color="textSecondary" className="card-date">{new Date().toDateString()}</Typography>
                        <Typography varient="body2" className="card-category">World</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards;