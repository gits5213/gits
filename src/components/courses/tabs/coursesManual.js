import React from 'react';
import GoogleAd from '../../../components/GoogleAd';
import courseOutline from '../../../images/CourseOutline.png';
import QaCareer from '../tabs/qaCareer';
import Footer from '../../../components/footer';

const coursesManual = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h1 className= 'pl5 tl'>Software Quality Assurance Full Stack Course Outline</h1>
            </div>
            <div>
                <QaCareer />
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
export default coursesManual;