import React from 'react';
import { Grid, Cell } from 'react-mdl';
import GoogleAd from '../../../components/GoogleAd';

const link = 'https://swagger.io/';

const resLinks = () => {
    return(
        <div className='page-tab-body'>
            <Grid className='page-tab-grid'>
                <Cell className='page-tab-first-col' col={12}>
                    <div className='resLinks-'>
                        <a href={link}>Resource Coming Soon!</a>;
                    </div>
                    <GoogleAd slot="1541085932" classNames="page-right-side" />
                </Cell>
                {/* <Cell className='page-tab-second-col' col={2}>
                    <GoogleAd slot="1541085932" classNames="page-right-side" />
                </Cell> */}
            </Grid>
        </div>
    )
}
export default resLinks;