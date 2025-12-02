import React from 'react';
import GoogleAd from '../../../components/GoogleAd';
import courseOutline from '../../../images/CourseOutline.png';
import QaCareer from '../tabs/qaCareer';
import Footer from '../../../components/footer';

const coursesAutomation = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h1 className= 'pl5 tl'>Software Quality Assurance Full Stack Course Outline</h1>
            </div>
            <div>
                <QaCareer />
            </div>
            <div style={{ 
                overflow: 'auto', 
                padding: '20px 0', 
                width: '100%',
                margin: '20px 0',
                textAlign: 'center'
            }}>
                <img 
                    src={courseOutline} 
                    alt="Course Outline"
                    style={{ 
                        width: '100%', 
                        height: 'auto',
                        display: 'block',
                        margin: '0 auto',
                        maxWidth: '100%',
                        minWidth: '100%'
                    }}
                />
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
export default coursesAutomation;