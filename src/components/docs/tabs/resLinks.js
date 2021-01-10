import React from 'react';
import link from '../../../utilities/links.json';
import { Grid, Cell } from 'react-mdl';
import GoogleAd from '../../../components/GoogleAd';
import linklogo from '../../../images/tabs/linkLogo.png';

const resLinks = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>TechStack</h3>
            </div>
            <div className='tc'>
                <img className='pr4 pt4 pb4 react-logo' src={linklogo} alt='react Logo' height='192' width='575'/>
            </div>
            <div>
                <h3>TechStack GitHub</h3>
            </div>
            <hr />
            <div>
                <Grid className="border">
                    <Cell className='pl4' col={4}>
                        <div className='pt4'>
                            <a class='f6 link dim ph3 pv2 mb2 dib white bg-mid-gray' href={link.SWAGGER} target="_blank" rel="noopener noreferrer">
                                Swagger Docs                
                            </a>
                        </div>
                    </Cell>
                    <Cell className='pl4' col={4}>
                        <div className='pt4'>
                            <a class='f6 link dim ph3 pv2 mb2 dib white bg-dark-blue' href={link.SWAGGER} target="_blank" rel="noopener noreferrer">
                                Swagger Docs                
                            </a>
                        </div>
                    </Cell>
                    <Cell className='pl4' col={4}>
                        <div className='pt4'>
                            <a class='f6 link dim ph3 pv2 mb2 dib white bg-dark-green' href={link.SWAGGER} target="_blank" rel="noopener noreferrer">
                                Swagger Docs                
                            </a>
                        </div>
                    </Cell>
                </Grid>
            </div>
            <hr />
            <div>
                <p>Technology Stack Releated Website References Announcement and News</p>
            </div>
            <div>
                <h3>TechStack Website</h3>
            </div>
            <hr />
            <div>
                <Grid className="border">
                    <Cell className='pl4' col={4}>
                        <div className='pt4'>
                            <a class='f6 link dim ph3 pv2 mb2 dib white bg-mid-gray' href={link.JIRA_CLOUD} target="_blank" rel="noopener noreferrer">
                                Jira Cloud               
                            </a>
                        </div>
                    </Cell>
                    <Cell className='pl4' col={4}>
                        <div className='pt4'>
                            <a class='f6 link dim ph3 pv2 mb2 dib white bg-dark-blue' href={link.SWAGGER} target="_blank" rel="noopener noreferrer">
                                Swagger Docs                
                            </a>
                        </div>
                    </Cell>
                    <Cell className='pl4' col={4}>
                        <div className='pt4'>
                            <a class='f6 link dim ph3 pv2 mb2 dib white bg-dark-green' href={link.SWAGGER} target="_blank" rel="noopener noreferrer">
                                Swagger Docs                
                            </a>
                        </div>
                    </Cell>
                </Grid>
            </div>
            <hr />
            <div>
                <p>Technology Stack Releated Download References Announcement and News</p>
            </div>
            <div>
                <h3>TechStack Download</h3>
            </div>
            <hr />
            <div>
                <Grid className="border">
                    <Cell className='pl4' col={4}>
                        <div className='pt4'>
                            <a class='f6 link dim ph3 pv2 mb2 dib white bg-mid-gray' href={link.SWAGGER} target="_blank" rel="noopener noreferrer">
                                Swagger Docs                
                            </a>
                        </div>
                    </Cell>
                    <Cell className='pl4' col={4}>
                        <div className='pt4'>
                            <a class='f6 link dim ph3 pv2 mb2 dib white bg-dark-blue' href={link.SWAGGER} target="_blank" rel="noopener noreferrer">
                                Swagger Docs                
                            </a>
                        </div>
                    </Cell>
                    <Cell className='pl4' col={4}>
                        <div className='pt4'>
                            <a class='f6 link dim ph3 pv2 mb2 dib white bg-dark-green' href={link.SWAGGER} target="_blank" rel="noopener noreferrer">
                                Swagger Docs                
                            </a>
                        </div>
                    </Cell>
                </Grid>
            </div>
            <hr />
            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default resLinks;