import React, { Fragment, useEffect } from 'react'
import './styles.css';
import './../../../styles/dayStyles/dayStyles.css';
import './../../../styles/nightStyles/nightStyles.css';
import {useDispatch} from 'react-redux';
import {switchModeManualOff, switchModeManualOn} from './../../../redux/actions/switchModeActions';

export default function ModernLigthSwitch (props) {

    const classNames = require('classnames');
    const dispatch = useDispatch();

    const { mode } = props;

    const switchModeFn = (state) => {
        if (state) {
            dispatch(switchModeManualOn())
        } else {
            dispatch(switchModeManualOff())
        }
    }

    const style = { 
        height: props.height,
        width: props.width,
    };

    const toggleOn = () => {
        switchModeFn(false)
        localStorage.setItem('lightMode', false)
    }

    const toggleOff = () => {
        switchModeFn(true)
        localStorage.setItem('lightMode', true)
    }

    return (
        <Fragment>
            <div style={style} className={classNames('mls-container', {'off': !mode}, {'on': mode})}>
                <div className={classNames('mls-state-container', {'off': !mode}, {'on': mode})}>
                    <div onClick={toggleOn} className={classNames('mls-state', {'inactive-on': mode}, {'active-on': !mode})}> 
                        <div className={classNames('mls-state-title', {'active': !mode})}>ON</div>
                    </div>
                    <div onClick={toggleOff} className={classNames('mls-state', {'inactive-off': !mode}, {'active-off': mode})}> 
                        <div className={classNames('mls-state-title', {'active': mode})}>OFF</div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}