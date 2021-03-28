import React, {Fragment} from 'react';
import './../styles.css';
import './bottleStyles.css';

export default function BottleHeader() {
    return (
        <Fragment>
            <div className={'header-container background'}>
                {/* Table */}
                <div className={'table-background'}>
                    <div className={'table-base upleft'}></div>
                    <div className={'table-base upright'}></div>
                    <div className={'table-base downleft'}></div>
                    <div className={'table-base downright'}></div>

                    <div className={'card base'}></div>
                    <div className={'card-flipped base diamond-a'}></div>
                    <div className={'card-flipped base'}>
                        <div className={'heart-a'}></div>
                        <div className={'heart-b'}></div>
                        <div className={'heart-c'}></div>
                        <div className={'heart-d'}></div>
                    </div>
                    <div className={'card-flipped base'}>
                        <div className={'diamond-b-1'}></div>
                        <div className={'diamond-b-2'}></div>
                        <div className={'diamond-b-3'}></div>
                        <div className={'diamond-b-4'}></div>
                        <div className={'diamond-b-5'}></div>

                    </div>
                    <div className={'card-flipped base'}>
                        <div className={'picas-body'}>
                            <div className={'picas-tail'}></div>
                        </div>
                    </div>

                </div>
                <div className={'chair-vertical left'}>
                    <div className={'chair-base-vertical left'}></div>
                </div>
                <div className={'chair-vertical right'}>
                    <div className={'chair-base-vertical right'}></div>
                </div>
                <div className={'chair-horizontal up'}>
                    <div className={'chair-base-horizontal up'}></div>
                </div>
                <div className={'chair-horizontal down'}>
                    <div className={'chair-base-horizontal down'}></div>
                </div>
                <div className={'sign'}>@jesussancher</div>
            </div>
        </Fragment>
    )
}