import React from 'react';
import GoogleAd from '../../../components/GoogleAd';
import courseOutline from '../../../images/webDevProgram.png';
import Frontend from '../tabs/frontend';

const coursesWebDev = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h1 className= 'pl5 tl'>Web Development Course Outline</h1>
            </div>
            <div>
                <Frontend />
            </div>
            <div className='programOutline'>
                <img className='pt4 courseOutline' src={courseOutline} alt="Course Outline"></img>
            </div>
            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default coursesWebDev;