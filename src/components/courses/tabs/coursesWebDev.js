import React from 'react';
import { Grid, Cell } from 'react-mdl';
import HtmlContainer from '../../container/html';
import CssContainer from '../../container/css';
import GoogleAd from '../../../components/GoogleAd';


const coursesWebDev = () => {
    return(
        <div className='page-tab-body'>
            <Grid className='page-tab-grid'>
                <Cell className='page-tab-first-col' col={10}>
                    <div>
                        <h5>
                            Basic & Advance Web Development - course Outline
                        </h5>
                        <div className='webDev-html-section'>
                            <HtmlContainer />
                        </div>
                        <hr />
                        <div className='webDev-css-section'>
                            <CssContainer />
                        </div>
                        <hr />
                    </div>
                </Cell>
                <Cell className='page-tab-second-col' col={2} >
                    <GoogleAd slot="1541085932" classNames="page-right-side" />
                </Cell>
            </Grid>
        </div>
    )
}
export default coursesWebDev;