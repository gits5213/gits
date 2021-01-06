import React from 'react';
import link from '../utilities/links.json';

const headerText = () => {
    return(
        <div>
            <div className='pl4 pb3 sign-up'>
                <a class='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.SQA_SIGN_UP} target="_blank" rel="noopener noreferrer">
                    SQA-SignUp
                </a>
                <a class='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.WEB_DEV_SIGN_UP} target="_blank" rel="noopener noreferrer">
                    WebDev-SignUp
                </a>
                <a class='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.CODE4KIDS_SIGN_UP} target="_blank" rel="noopener noreferrer">
                    Code4Kids-SignUp
                </a>
                <a class='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.BD_SIGN_UP} target="_blank" rel="noopener noreferrer">
                    BD-SignUp
                </a>
            </div>
        </div>
        
    );
  }   
export default headerText;

