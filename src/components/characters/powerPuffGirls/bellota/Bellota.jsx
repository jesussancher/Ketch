import React, { Fragment } from 'react';
import './styles.css';

export default function Bellota () {
    return(
        <Fragment>
            <div className={'bellota-background'}>
                <div className={'bellota-head'}>
                </div>
                <div className={'bellota-hair-back'}></div>
                <div className={'bellota-head-outline'}>
                    <div className={'bellota-hair-top'}></div>
                    <div className={'bellota-face-mood'}></div>
                    <div className={'bellota-eye left'}>
                        <div className={'bellota-iris left'}></div>
                        <div className={'bellota-pupil left'}></div>
                        <div className={'bellota-pupil-light left'}></div>
                    </div>
                    <div className={'bellota-eye right'}>
                        <div className={'bellota-iris right'}></div>
                        <div className={'bellota-pupil right'}></div>
                        <div className={'bellota-pupil-light right'}></div>
                    </div>
                    <div className={'bellota-mouth'}></div>
                </div>
                <div className={'bellota-body'}>
                </div>
                <div className={'bellota-body-outline'}>
                    <div className={'bellota-body-decor'}></div>
                    <div className={'bellota-arm left'}></div>
                    <div className={'bellota-arm right'}></div>
                    <div className={'bellota-right-foot'}></div>
                    <div className={'bellota-left-foot'}></div>
                </div>
            </div>
        </Fragment>
    )
}