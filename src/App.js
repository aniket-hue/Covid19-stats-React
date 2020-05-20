import React, { Component } from "react";
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import Country from './components/Country/Country';
import classes from './App.module.css';
import { fetchData, fetchCountry } from './api/index';
import image from './images/image.png';
class App extends Component {
    state = {
        data: null,
        country: '',
    }
    async componentDidMount() {
        const data = await fetchData();
        this.setState({ data: data });
        // console.log(data);
        // console.log(this.state.data)
    }

    handleCountryChange = async (Country) => {
        if (Country !== "Global") {
            const data = await fetchCountry(Country);
            this.setState({ data: data, country: Country });
            console.log(data);
        }
        else {
            const data = await fetchData();
            this.setState({ data: data });
        }
    }

    render() {
        return (
            <div className={classes.container}>
                <img src={image} />
                <Cards data={this.state.data} />
                <Country handleCountry={this.handleCountryChange} />
                <Chart country = {this.state.country} />
            </div>
        );
    }
};
export default App;