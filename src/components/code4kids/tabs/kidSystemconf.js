import React from 'react';
import '../style/kidSystemconf.css';
import { Grid, Cell } from 'react-mdl';
import GoogleAd from '../../../components/GoogleAd';

const kidSystemconf = () => {
    return(
        <div className='page-tab-body'>
            <Grid className='page-tab-grid'>
                <Cell className='page-tab-first-col' col={12}>
                    <div className='sysconf-outline'>
                    <h5>
                        Basic & Advance Computer Skills - Class Outline
                    </h5>
                    <ol className='kid-sysconf-course-outline'>
                        <li>General Introduction</li>
                            <ol>
                                <li>Instructor Introduction</li>
                                <li>Student introductions (name, skill level, expectations)</li>
                                <li>Pre-class Basic Computer Skills Survey</li>
                                <li>Teacher Notes for Lessons 1 thru 4</li>
                            </ol>
                        <li className='pt2'>Introduction to the computer</li>
                            <ol>
                                <li>Basic components of a computer (monitor, CPU, storage, etc.)</li>
                                <li>Keyboard vs. mouse</li>
                                <li>Desktop vs. laptop</li>
                                <li>Activity:  power off/on computers</li>
                            </ol>
                        <li className='pt2'>Introduction to Windows</li>
                            <ol>
                                <li>Operating Systems (brief explanation of O/S, application and data layers)</li>
                                <li>Desktop (icons, Start button, taskbar)</li>
                                <li>Cursor/mouse</li>
                                <li>Activity:  click & drag desktop icons</li>
                                <li>Programs (3 ways to start programs (icon, Start, All Programs))</li>
                                <li>Activity:  use Play with Paint to show how to use the mouse and icons</li>
                                <li>Handout:  Tips for Using the Mouse and Keyboard</li>
                            </ol>
                        <li className='pt2'>Introduction to typing</li>
                            <ol>
                                <li>Benefits of typing skills</li>
                                <li>Explain “ghost fingers” and green keys</li>
                                <li>Activity:  open Mavis Beacon, show sign in, lessons and games</li>
                            </ol>
                        <li className='pt2'>Review Windows and Typing</li>
                            <ol>
                                <li>Review the desktop and how to open programs (desktop icons, Start menu)</li>
                            </ol>
                        <li className='pt2'>Windows Navigation</li>
                            <ol>
                                <li>Window features (minimize, resize, exit, click & drag)</li>
                                <li>Menu bar (drop down arrow)</li>
                                <li>Tool bar (icons) (roll cursor over to ID)</li>
                                <li>Scrolling</li>
                                <li>Multiple ways to do same thing (menu, icon, keyboard)</li>
                            </ol>
                        <li className='pt2'>Windows File Management</li>
                            <ol>
                                <li>Options for storage (internal drive, flash drive, CD/DVD)</li>
                                <li>Introduce Flash Drive</li>
                                <li>Files and Folders</li>
                                <li>My Computer</li>
                                <li>Activity:  find flash drive, find a specific folder and then find the file</li>
                                <li>Save As, Save and Exit without changes</li>
                            </ol>
                        <li className='pt2'>Review Formatting and File Management</li>
                            <ol>
                                <li>Activity:  Pop Quiz</li>
                            </ol>
                        <li className='pt2'>Control pannel Management</li>
                            <ol>
                                <li>Network and Sharing Center</li>
                                <li>Data and Time</li>
                                <li>Keyboard</li>
                                <li>Device Manager</li>
                                <li>User Accounts</li>
                                <li>Devices and Printer</li>
                                <li>Mouse</li>
                                <li>Programs and Features</li>
                                <li>Sound</li>
                                <li>System</li>
                                <li>Window Defender Firewall</li>
                                <li>System clean Management</li>
                            </ol>
                        <li className='pt2'>CMD & Terminal Introduction</li>
                        <li className='pt2'>Final Review</li>
                        <li  className='pt2'>Exam</li>
                    </ol>
                </div>
                </Cell>
                <GoogleAd slot="1541085932" classNames="page-right-side" />

                {/* <Cell className='page-tab-second-col' col={2}>
                    <GoogleAd slot="1541085932" classNames="page-right-side" />
                </Cell> */}
            </Grid>
            
            

        </div>
    )
}
export default kidSystemconf;