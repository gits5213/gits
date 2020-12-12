import React from 'react';
import { Grid, Cell } from 'react-mdl';
import GoogleAd from '../../../components/GoogleAd';

const scrum = () => {
    return(
        <div className='page-tab-body'>
            <Grid className='page-tab-grid'>
                <Cell className='page-tab-first-col' col={12}>
                    <div className='scrum-'>
                        <h1>Scrum work in progress...</h1>
                    </div>
                    <GoogleAd slot="1541085932" classNames="page-right-side" />
                </Cell>
            </Grid>
        </div>
    )
}
export default scrum;