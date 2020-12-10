import React from 'react';
import { Grid, Cell } from 'react-mdl';
import GoogleAd from '../../../components/GoogleAd';

const webdevelopment = () => {
    return(
        <div className='page-tab-body'>
            <Grid className='page-tab-grid'>
                <Cell className='page-tab-first-col' col={12}>
                    <div className='webdevelopment-outline'>
                        <h1>Working in progress...</h1>
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
export default webdevelopment;