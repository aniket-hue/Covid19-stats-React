import React, { Component } from 'react';
import { fetchDailyData } from '../../api/index';
import Line from 'react-chartjs-2';
import Bar from 'react-chartjs-2';
import classes from '../Chart/Chart.module.css';
class Chart extends Component {
    state = {
        dailyData: {},
    }

    async componentDidMount() {
        const fetch = await fetchDailyData();
        this.setState({ dailyData: fetch });
        // console.log(JSON.stringify(fetch)+" as");
        // console.log(this.state.dailyData);
        // console.log(this.state.dailyData.map(data => data.date));
    }


    render() {
        // console.log(this.state.dailyData);



        const lineChart = (
            this.state.dailyData.length ?
                <Line
                    type='line'
                    data={{
                        labels: this.state.dailyData.map(data => data.date),
                        datasets: [{
                            data: [...this.state.dailyData.map((data) => data.confirmed)],
                            label: 'Infected',
                            borderColor: '#3333ff',
                            fill: true,
                        }, {
                            data: [...this.state.dailyData.map((data) => data.deaths)],
                            label: 'Deaths',
                            borderColor: 'red',
                            backgroundColor: 'rgba(255, 0, 0, 0.5)',
                            fill: true,
                        },
                        ],
                    }}
                /> : null
        );
        // console.log(this.state.dailyData !== null ? lineChart.data    : null);
        return (
            <h1 className={classes.container}> {lineChart} </h1>
        );
    }
}

export default Chart;