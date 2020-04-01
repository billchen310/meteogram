import * as constants from './constants';

export default class CommonFunc{
    static getWeekAndMonthDayFromDate(date_val){
        return constants.WEEK_DAYS[date_val.getDay() - 1] + ' ' + constants.MONTHS[date_val.getMonth()] + ' ' + date_val.getDate();
    }
    
    static getTimeFromDate(date_val){
        let local_hour = date_val.getHours();
        let AM_PM = local_hour < 12 ? 'AM' : 'PM';
        if (local_hour === 0){
            local_hour = 12;
        } else if (local_hour > 12){
            local_hour -= 12;
        }
        return local_hour + ':00' + AM_PM;
    } 

    static getDateTimeValuesFromStr(date_str){
        let date_arr = date_str.split('T');
        let year_month_day = date_arr[0].split('-');
        let year = parseInt(year_month_day[0]);
        let month = parseInt(year_month_day[1]) - 1;
        let day = parseInt(year_month_day[2]);
        let hour = parseInt(date_arr[1].split(':')[0]);
        return new Date(year, month, day, hour);
    }
}