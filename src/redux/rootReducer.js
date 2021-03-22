import {combineReducers} from 'redux';
import switchReducer from './reducers/switchModeReducer.js';

export const rootReducer = combineReducers({
    switchNight: switchReducer
});

