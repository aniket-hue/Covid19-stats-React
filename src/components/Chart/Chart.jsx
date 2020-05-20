import React, { Component } from 'react';
import { fetchDailyData, fetchCountry, country } from '../../api/index';
import Line from 'react-chartjs-2';
import Bar from 'react-chartjs-2';
import classes from '../Chart/Chart.module.css';
class Chart extends Component {
    state = {
        dailyData: null,
        countryData: null
    }

    async componentDidMount() {
        const fetch = await fetchDailyData();
        const countries = await country();
        const promises = countries.map(async data => await fetchCountry(data))

        const countryD = await Promise.all(promises);

        console.log(countryD);


        this.setState({ dailyData: fetch, countryData: countryD });


    }


    render() {
        console.log(this.props.country);
        const barChart = (
            this.props.country !== '' ?
                <Bar
                    type='Bar'
                    data={{
                        labels: ['Confirmed', 'Infected', 'Deaths'],
                        datasets: [{
                            label: 'Covid19 Country Stats',
                            data: [

                                this.state.countryData
                                [this.state.countryData.findIndex(data => data !== undefined && data.country === this.props.country)]
                                ['confirmed']
                                ['value'],

                                this.state.countryData
                                [this.state.countryData.findIndex(data => data !== undefined && data.country === this.props.country)]
                                ['recovered']
                                ['value'],

                                this.state.countryData
                                [this.state.countryData.findIndex(data => data !== undefined && data.country === this.props.country)]
                                ['deaths']
                                ['value'],

                            ],

                            backgroundColor: [
                                'rgba(40, 160, 100, 0.2)'
                            ],
                            borderWidth: 1
                        }
                        ],

                    }} /> : <p>Loading...</p >
        );

        const lineChart = (
            this.state.dailyData ?
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
                /> : <p>Loading</p>
        );
        // console.log(this.state.dailyData !== null ? lineChart.data    : null);
        return (
            <h1 className={classes.container}>{this.props.country === '' ? lineChart : barChart}</h1>
        );
    }
}

export default Chart;