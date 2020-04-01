import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actionCreators';
import * as constants from './constants';
import Select from 'react-select';

const SelectLocation = (props) => {
    const {location, setLocation, getWeatherData} = props;

    function handleChange(selectedLocation){
        setLocation(selectedLocation.label);
        getWeatherData(selectedLocation.value);
    }

    return (
        <div id="header">
            <Select 
                options = {constants.LOCATIONS} 
                placeholder = "Select City..."
                className = "location_selection"
                onChange = {handleChange}
            />
        </div>
    )
};

const mapState = (state) => ({
    location: state.getIn(['location'])
});

const mapDispatch = (dispatch) => ({
    getWeatherData(location_code){
      dispatch(actionCreators.getWeatherData(location_code));
    },
    setLocation(location){
        dispatch(actionCreators.setLocation(location));
    }
});
 
export default connect(mapState, mapDispatch)(SelectLocation);