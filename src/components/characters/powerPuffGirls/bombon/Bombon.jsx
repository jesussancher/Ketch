import React, { Fragment } from 'react';
import './styles.css';

export default function Bombon () {
    return(
        <Fragment>
            <div className={'bombon-background'}>
                <div className={'bombon-head'}>
                    <div className={'bombon-hair-decoration'}>
                    </div>
                    <div className={'bombon-hair-decor'}>
                    </div>
                </div>
                <div className={'bombon-head-outline'}>
                    <div className={'bombon-hair-top'}>
                        <div className={'bombon-hair-top-cut left'}></div>
                        <div className={'bombon-hair-top-cut right'}></div>
                    </div>
                    <div className={'bombon-eye left'}>
                        <div className={'bombon-iris left'}></div>
                        <div className={'bombon-pupil left'}></div>
                        <div className={'bombon-pupil-light left'}></div>
                    </div>
                    <div className={'bombon-eye right'}>
                        <div className={'bombon-iris right'}></div>
                        <div className={'bombon-pupil right'}></div>
                        <div className={'bombon-pupil-light right'}></div>
                    </div>
                    <div className={'bombon-mouth'}></div>
                </div>
                <div className={'bombon-body'}>
                </div>
                <div className={'bombon-body-outline'}>
                    <div className={'bombon-body-decor'}></div>
                    <div className={'bombon-arm left'}></div>
                    <div className={'bombon-arm right'}></div>
                    <div className={'bombon-right-foot'}></div>
                    <div className={'bombon-left-foot'}></div>
                </div>
                <div className={'bombon-hair-back'}>
                    <div className={'bombon-hair-back-fleco'}></div>
                </div>
            </div>
        </Fragment>
    )
}