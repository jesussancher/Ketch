import {SWITCHMODE, SWITCHMODEMANUALOFF, SWITCHMODEMANUALON} from '../types/types.js';

const INITIAL_STATE = {
    nightMode: false
};

const switchReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case SWITCHMODE:
            return {
                ...state,
                nightMode: !state.nightMode
            };

        case SWITCHMODEMANUALON:
        return {
            ...state,
            nightMode: true
        };

        case SWITCHMODEMANUALOFF:
        return {
            ...state,
            nightMode: false
        };

        default:
            return state;

    }

};

export default switchReducer;