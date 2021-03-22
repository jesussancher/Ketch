import {SWITCHMODE, SWITCHMODEMANUALON, SWITCHMODEMANUALOFF} from '../types/types.js';

export const switchMode = () => ({
    type: SWITCHMODE
});

export const switchModeManualOn = () => ({
    type: SWITCHMODEMANUALON
});

export const switchModeManualOff = () => ({
    type: SWITCHMODEMANUALOFF
});