import React, {Fragment} from 'react';
import CommonFunc from '../utilities/CommonFunc';

const HourInfoCard = (props) => {
    const {hour_info, data_index} = props;
    const localDate = new Date(hour_info.local_time);

    function getClassForHourInfoCard(index, is_first_row){
        let class_first_row_of_day = '';
        if (is_first_row){
            class_first_row_of_day = localDate.getHours() < 3 ? 'day_split' : '';
        }
        let row_no = index + 1;
        let class_card_bg =  row_no % 2 === 0 ? 'even' : 'odd';
        return class_card_bg + ' ' + class_first_row_of_day; 
    }

    return (
        <Fragment>
            <tr className={getClassForHourInfoCard(data_index, true)}>
                <th width="13%" rowSpan="4" className="table_date_time">
                    <small>{CommonFunc.getWeekAndMonthDayFromDate(localDate)}</small>
                    <br/>
                    {CommonFunc.getTimeFromDate(localDate)}
                </th>
                <td width="72%">
                    <strong>{hour_info.precis}</strong>
                </td>
                <td width="15%" rowSpan="4">
                    <span className="temp">
                    {hour_info.temperature + '°C'}
                    </span>
                </td>
            </tr>
            <tr className={getClassForHourInfoCard(data_index, false)}>
                <td className="info">
                    Rain: <strong>{hour_info.rain_prob + '%' + ' (' + hour_info.rate.toFixed(1) + 'mm/hr)'}</strong>
                </td>
            </tr>
            <tr className={getClassForHourInfoCard(data_index, false)}>
                <td className="info">
                    Humidity: <strong>{hour_info.relative_humidity + '%'}</strong>
                </td>
            </tr>
            <tr className={getClassForHourInfoCard(data_index, false)}>
                <td className="info">
                    Wind: <strong>{hour_info.wind_direction_compass + ' ' + hour_info.wind_speed + 'km/h'}</strong>
                </td>
            </tr>
        </Fragment>
    )
};

export default HourInfoCard;