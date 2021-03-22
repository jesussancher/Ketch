import React, { Fragment, useState } from 'react'
import './styles.css';

export default function ModernLigthSwitch (props) {

    const classNames = require('classnames');
    const { toggle, mode } = props;

    const [style, setStyle] = useState({ 
        height: props.height,
        width: props.width,
    });

    // useEffect(() => {
    //     if(props.height > 0) {
    //         const newWidth = parseInt(props.height,10) * 0.8;
    //         setStyle({...style, width: newWidth});
    //     } else {
    //         return
    //     }

    //     console.log(parseInt(props.width, 10))
    //     if(props.width > 0) {
    //         const newHeight = parseInt(props.width, 10) * 1.25;
    //         console.log(newHeight)
    //         setStyle({...style, height: newHeight});
    //     } else {
    //         return
    //     }
    // },[props, mode])


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