import React from 'react';
import { Grid, Cell } from 'react-mdl';
import HTMLContainer from '../../container/html';
import GoogleAd from '../../../components/GoogleAd';

const html = () => {
    return(
        <div className='page-tab-body'>
            <Grid className='page-tab-grid'>
                <Cell className='page-tab-first-col' col={10}>
                    <div>
                        <HTMLContainer />
                    </div>
                </Cell>

                <Cell className='page-tab-second-col' col={2}>
                    <GoogleAd slot="1541085932" classNames="page-right-side" />
                </Cell>
            </Grid>
        </div>
    )
}
export default html;