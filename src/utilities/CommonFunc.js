import * as constants from './constants';

export default class CommonFunc{
    static getWeekAndMonthDayFromDate(date_val){
        return constants.WEEK_DAYS[date_val.getDay()] + ' ' + constants.MONTHS[date_val.getMonth()] + ' ' + date_val.getDate();
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
}