import React, { Fragment } from 'react'
import './styles.css';

export default function ModernLigthSwitch (props) {

    const classNames = require('classnames');
    const { toggle, mode } = props;

    const style = { 
        height: props.height,
        width: props.width,
    };

    const toggleOn = () => {
        toggle(false)
    }

    const toggleOff = () => {
        toggle(true)
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