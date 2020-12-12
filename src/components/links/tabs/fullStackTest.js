import React from 'react';
import { Grid, Cell } from 'react-mdl';
import GoogleAd from '../../GoogleAd';

const kidBrowserconf = () => {
    return(
        <div className='page-tab-body'>
            <Grid className='page-tab-grid'>
                <Cell className='page-tab-first-col' col={12}>
                    <div className='links-links'>
                        <h5>
                            Working on progress...
                        </h5>
                    </div>
                </Cell>
                <GoogleAd slot="1541085932" classNames="page-right-side" />
                {/* <Cell className='page-tab-second-col' col={2}>
                    <GoogleAd slot="1541085932" classNames="page-right-side" />
                </Cell> */}
            </Grid>
        </div>
    )
}
export default kidBrowserconf;