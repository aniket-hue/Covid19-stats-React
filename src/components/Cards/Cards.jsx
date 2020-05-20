import React from 'react';
import { Card, Typography, CardContent, Grid } from '@material-ui/core';
import classes from './Cards.module.css';
import cx from 'classnames';
import CountUp from 'react-countup';
const Cards = (props) => {
    // const temp = props.data !== null ? console.log(props.data['deaths']['value']) : null;
    // console.log(props.data);
    return (
        props.data !== null ?
            <div className={classes.container}>
                <Grid container spacing={3} justify="center">

                    <Grid item component={Card} xs={12} md={3} className = {cx(classes.card, classes.infected)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Infected</Typography>
                            <Typography variant="h5"  component="h2">
                                <CountUp
                                    start={0}
                                    end={props.data['confirmed']['value']}
                                    duration={2.5}
                                    seperator=","
                                />
                            </Typography>
                            <Typography color="textSecondary">{new Date(props.data['lastUpdate']).toDateString()}</Typography>
                        </CardContent>
                    </Grid>

                    <Grid item component={Card} xs={12} md={3} className = {cx(classes.card, classes.recovered)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                            <Typography variant="h5"  component="h2">
                                <CountUp
                                    start={0}
                                    end={props.data['recovered']['value']}
                                    duration={2.5}
                                    seperator=","
                                /></Typography>
                            <Typography color="textSecondary">{new Date(props.data['lastUpdate']).toDateString()}</Typography>
                        </CardContent>
                    </Grid>

                    <Grid item component={Card} xs={12} md={3}  className = {cx(classes.card, classes.deaths)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                            <Typography variant="h5" component="h2" >
                                <CountUp
                                    start={0}
                                    end={props.data['deaths']['value']}
                                    duration={2.5}
                                    seperator=","
                                /></Typography>
                            <Typography color="textSecondary">{new Date(props.data['lastUpdate']).toDateString()}</Typography>
                        </CardContent>
                    </Grid>

                </Grid>

            </div> : <p>Loading</p>
    );
}

export default Cards;