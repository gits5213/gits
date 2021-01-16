import React from 'react'
import Card from '../components/card';
import codeForkids from '../images/codeForKids.png';
import webDev from '../images/webDev.png';
import uiManualTest from '../images/uiManualTest.png';
import uiAutoTest from '../images/uiAutoTest.png';
import apiManualTest from '../images/apiManualTest.png';
import apiAutoTest from '../images/apiAutoTest.png';

const COURSES = '/courses';

const cardList = ({cardDetails}) => {
    return(
        <div className='tc' >
            <Card img={<a href={COURSES} target="_blank" rel="noopener noreferrer" onclick="window.open(‘/courses’, ‘_self’);"><img alt='codeForkids' src={codeForkids} width='200' height='200'/></a>} id={cardDetails[4].id} courseName={cardDetails[4].courseName} techStack={cardDetails[4].techStack}/>
            <Card img={<a href={COURSES} target="_blank" rel="noopener noreferrer"><img alt='webDev' src={webDev} width='200' height='200'/></a>} id={cardDetails[5].id} courseName={cardDetails[5].courseName} techStack={cardDetails[5].techStack}/>
            <Card img={<a href={COURSES} target="_blank" rel="noopener noreferrer"><img alt='uiManualTest' src={uiManualTest} width='200' height='200'/></a>} id={cardDetails[0].id} courseName={cardDetails[0].courseName} techStack={cardDetails[0].techStack}/>
            <Card img={<a href={COURSES} target="_blank" rel="noopener noreferrer"><img alt='apiManualTest' src={apiManualTest} width='200' height='200'/></a>} id={cardDetails[1].id} courseName={cardDetails[1].courseName} techStack={cardDetails[1].techStack}/>
            <Card img={<a href={COURSES} target="_blank" rel="noopener noreferrer"><img alt='uiAutoTest' src={uiAutoTest} width='200' height='200'/></a>} id={cardDetails[2].id} courseName={cardDetails[2].courseName} techStack={cardDetails[2].techStack}/>
            <Card img={<a href={COURSES} target="_blank" rel="noopener noreferrer"><img alt='apiAutoTest' src={apiAutoTest} width='200' height='200'/></a>} id={cardDetails[3].id} courseName={cardDetails[3].courseName} techStack={cardDetails[3].techStack}/>
        </div> 
    );
}
export default cardList;




