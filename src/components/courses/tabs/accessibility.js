import React from 'react';
import GoogleAd from '../../GoogleAd';
import courseOutline from '../../../images/CourseOutline.png';
import Footer from '../../footer';

const accessibility = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h1 className= 'pl5 tl'>Accessibility Testing</h1>
            </div>
            <div className='programOutline'>
                <img className='courseOutline' src={courseOutline} alt="Course Outline"></img>
            </div>
            <div>
                <GoogleAd slot="1541085932" classNames="page-right-side" />
            </div>
            <section className='pt4'>
                <Footer />
            </section>
        </div>
    )
}
export default accessibility;