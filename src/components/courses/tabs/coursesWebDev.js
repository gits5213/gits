import React from 'react';
import { Grid, Cell } from 'react-mdl';
import GoogleAd from '../../../components/GoogleAd';
import courseOutline from '../../../images/webDevProgram.png';


const coursesWebDev = () => {
    return(
        <div className='page-tab-body'>
            <Grid className='page-tab-grid'>
                <Cell className='page-tab-first-col' col={12}>
                    <div className='programOutline'>
                        <h1 className= 'tc'>Web Development Course Outline</h1>
                        <img className='courseOutline' src={courseOutline} alt="Course Outline"></img>
                    </div>
                </Cell>
                <GoogleAd slot="1541085932" classNames="page-right-side" />
                {/* <Cell className='page-tab-second-col' col={2} >
                    <GoogleAd slot="1541085932" classNames="page-right-side" />
                </Cell> */}
            </Grid>
        </div>
    )
}
export default coursesWebDev;