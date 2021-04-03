import React, { Fragment } from 'react';
import './styles.css';

export default function CandaceFlynn () {
    return(
        <Fragment>
                <div className={'head'}>
                    <div className={'hair left'}></div>
                    <div className={'hair help'}></div>
                    <div className={'hair right'}></div>
                </div>
                <div className={'hair-back'}></div>
                <div className={'eyes'}>
                    <div className={'eye left'}>
                        <div className={'pupil left'}></div>
                    </div>
                    <div className={'eye right'}>
                        <div className={'pupil right'}></div>
                    </div>
                </div>
                <div className={'face'}>
                    <div className={'nose'}></div>
                    <div className={'mouth'}></div>
                </div>
                <div className={'neck'}></div>
        </Fragment>
    )
}