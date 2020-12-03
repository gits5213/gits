import React from 'react';
import { Grid, Cell } from 'react-mdl';
import GoogleAd from '../../../components/GoogleAd';

const kidBrowserconf = () => {
    return(
        <div className='page-tab-body'>
            <Grid className='page-tab-grid'>
                <Cell className='page-tab-first-col' col={10}>
                    <div className='kidBrowserconf-first-section'>
                        <div>
                            <h5>
                                Basic & Advance Browser Skills - Class Outline
                            </h5>
                            <ol>
                                <li> Browser's Cache and Cookies Cleanup
                                    <ol>
                                        <li>Keyboard Shortcut</li>
                                        <li>From the browser</li>
                                        <li>Activity: Cleanup</li>
                                    </ol>
                                </li>
                                <li className='pt2'>Configuration browser settings
                                    <ol> 
                                        <li>Autofill form</li>
                                        <li>Default browser</li>
                                        <li>Privacy & Security</li>
                                        <li>Search Engine</li>
                                        <li>On Startup</li>
                                        <li>Download Location</li>
                                    </ol>
                                </li>
                                <li className='pt2'>Browser bookmark management
                                    <ol> 
                                        <li>Sticky bookmark</li>
                                        <li>Save address on bookmark</li>
                                        <li>File management on bookmark</li>
                                        <li>Folder management on bookmark</li>
                                        <li>Drag & Drop file & folder on bookmark</li>
                                    </ol>
                                </li>
                                <li className='pt2'>Browser extention management (Web Store)
                                    <ol>
                                        <li>Add essential extention</li>
                                        <li>Delete extention</li>
                                        <li>Customize extention</li>
                                    </ol>
                                </li>
                                <li className='pt2'> Private (Incognito) mode
                                    <ol>
                                        <li>Incognito management</li>
                                        <li>Tab Shortcut</li>
                                        <li>New Window Shortcut</li>
                                    </ol>
                                </li>
                                <li className='pt2'> Cloud Management
                                    <ol>
                                        <li>C.M: Box Drive</li>
                                        <li>C.M: DropBox Drive</li>
                                        <li>C.M: Draw.io - Drawing</li>
                                        <li>C.M: Review</li>
                                        <li>C.M: Exam</li>
                                    </ol>
                                </li>
                                <li className='pt2'>Final Review</li>
                                <li className='pt2'>Exam</li>
                            </ol>
                        </div>
                    </div>
                </Cell>
                <Cell className='page-tab-second-col' col={2}>
                    <GoogleAd slot="1541085932" classNames="page-right-side" />
                </Cell>
            </Grid>
        </div>
    )
}
export default kidBrowserconf;