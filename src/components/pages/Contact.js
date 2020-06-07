import React, { Component } from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import '../../App.css';
export default class Contact extends Component {
    render() {
        return (
            <div className="contact-container">
                <h1 className="sect-title">Contact Me</h1>
                <p>You can contact Me for Any Queries</p>
                <div className="contact-cards">
                <Grid container justify="center">
                    <Grid item xs={12} md={3} component={Card} className="card card-infected">
                        <CardContent>
                            <Typography color="textSecondary" className="card-heading" gutterBottom>Current Phone Number</Typography>
                            <Typography color="textSecondary" className="card-date">Sorry No Sharing</Typography>
                        </CardContent>
                    </Grid><Grid item xs={12} md={3} component={Card} className="card card-recovered">
                        <CardContent>
                            <Typography color="textSecondary" className="card-heading" gutterBottom>Current Email Address</Typography>
                            <Typography color="textSecondary" className="card-date">nadirali.41006@gmail.com</Typography>
                        </CardContent>
                    </Grid><Grid item xs={12} md={3} component={Card} className="card card-death">
                        <CardContent>
                            <Typography color="textSecondary" className="card-heading" gutterBottom>Address</Typography>
                            <Typography color="textSecondary" className="card-date">Karachi Pakistan</Typography>
                        </CardContent>
                    </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}
