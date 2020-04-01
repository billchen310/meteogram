import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    forecasts: null,
    location: null,
    error: ''
});

const reducer = (state = defaultState, action) => {
    switch (action.type){
        case constants.UPDATE_DATA:
            return state.merge({
                'forecasts': action.forecasts,
                'error': action.err
            });
        case constants.SET_LOCATION:
            return state.set('location', action.value);
        default:
            return state;
    }

}

export default reducer;