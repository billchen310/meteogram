import React from 'react';
import { connect } from 'react-redux';
import HourInfoCard from './HourInfoCard';

const MainContent = (props) => {
    const {location, forecasts} = props;

    return (
        location && forecasts && forecasts.length > 0 ?
        <div id="content">
            <h1 className="location_title">{location} Weather</h1>
            <h3 className="details_title">Next 48 Hours in {location}</h3>
            <table className="weather_list">
                <tbody>
                    {
                        forecasts.map((hourly_weather, index) => (
                            <HourInfoCard
                                key={hourly_weather.timestamp}
                                hour_info={hourly_weather}
                                data_index={index} />
                        ))
                    }
                </tbody>
            </table>
        </div>
        : <h3 className="errorInfo">No weather data</h3>
    )
}

const mapState = (state) => ({
    location: state.getIn(['location']),
    forecasts: state.getIn(['forecasts'])
});

export default connect(mapState, null)(MainContent);
