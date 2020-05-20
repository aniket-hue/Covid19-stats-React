import React, { Component } from "react";
import { NativeSelect, FormControl } from '@material-ui/core';
import classes from './Country.module.css';
import { country } from '../../api/index';
class Country extends Component {
    state = {
        countries: null
    }

    async componentDidMount() {
        const res = await country();
        // console.log(res);
        this.setState({ countries: res });
    }
    
    render() {
        let c = 0;

        const country = this.state.countries !== null ?
            this.state.countries.map(data => {
                // console.log(data);
                return <option key={c++} value={data}>{data}</option>
            }) : null;


        return (
            <FormControl className= {classes.FormControl}>
                <NativeSelect defaultValue="Global" onChange={e => this.props.handleCountry(e.target.value)}>
                    <option value="">Global</option>
                    {country}
                </NativeSelect>
            </FormControl>
        );
    }
}

export default Country;