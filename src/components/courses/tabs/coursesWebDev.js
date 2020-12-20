import React from 'react';
import GoogleAd from '../../../components/GoogleAd';
import courseOutline from '../../../images/webDevProgram.png';


const coursesWebDev = () => {
    return(
        <div className='page-tab-body'>
            <div className='programOutline'>
                <h1 className= 'tc'>Web Development Course Outline</h1>
                <img className='courseOutline' src={courseOutline} alt="Course Outline"></img>
            </div>
            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default coursesWebDev;