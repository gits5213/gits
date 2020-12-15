import React from 'react';

const card = ({img, courseName, techStack}) => {
    return(
        <div className = 'tc dib br-100 pa2 ma2 grow bw2'>
            <div className='img-style'>
                {img}
            </div>
            <div className='course-details'>
                <h4><strong>{courseName}</strong></h4>
                <p>{techStack}</p>
            </div>
        </div>
    );
  }   
export default card;
