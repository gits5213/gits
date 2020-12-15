import React from 'react';
const WEB_DEV_SIGN_UP = 'https://msz5213.github.io/student-subscription/';
const SQA_SIGN_UP = 'https://msz5213.github.io/student-subscription/';
const CODE4KIDS_SIGN_UP = 'https://mailchi.mp/93b0b3a7293e/code4kids';
const BD_SIGN_UP = 'https://docs.google.com/forms/d/e/1FAIpQLScBX0mnlaMNJFhOGnfHcHV9TLvSK3L3aQTlYZO9LNVKidcY6w/viewform?usp=sf_link';

const headerText = () => {
    return(
        <div>
            <h1 id='htext'>Nothing to lose by learning new skill!</h1>
            <div className='sign-up'>
                <a class='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={SQA_SIGN_UP} target="_blank" rel="noopener noreferrer">
                    SQA-SignUp
                </a>
                <a class='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={WEB_DEV_SIGN_UP} target="_blank" rel="noopener noreferrer">
                    WebDev-SignUp
                </a>
                <a class='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={CODE4KIDS_SIGN_UP} target="_blank" rel="noopener noreferrer">
                    Code4Kids-SignUp
                </a>
                <a class='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={BD_SIGN_UP} target="_blank" rel="noopener noreferrer">
                    BD-SignUp
                </a>
            </div>
        </div>
        
    );
  }   
export default headerText;

