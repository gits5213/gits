import React from 'react';
import '../module/dtd.css';

const dtd = () => {
    return(
        <div>
            <form>
                <fieldset>
                    <h5>Sign up Form</h5>

                    <label>
                        <div className='first-name'>
                            First Name:
                            <input type='text' placeholder="firstname" />
                        </div>
                        <div className='last-name'>
                        Last Name:
                            <input type='text' placeholder="lastname" />
                        </div>
                        <div className='email-phone-number'>
                            Email/Phone Number:
                            <input type='email' placeholder="email/phone number" />
                        </div>
                        <div className='password'>
                        Password:
                            <input type='password' placeholder="password" />
                        </div>
                        <div className='birthday'>
                            Birthday:
                            <select className='month'>
                                <option>----</option>
                                <option>Janruary</option>
                                <option>Fabruary</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                            </select>
                            Day:
                            <select className='day'>
                                <option>----</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </select>
                            Year:
                            <select className='year'>
                                <option>----</option>
                                <option>2018</option>
                                <option>2019</option>
                                <option>2020</option>
                                <option>2020</option>
                                <option>2020</option>
                                <option>2020</option>
                                <option>2020</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </select>
                        </div>

                        <div className='gender'>
                            Gender:
                            <div>
                                Female: 
                                <input className='female' type='radio'  />
                                Male:
                                <input className='male' type='radio'  />
                                Custom:
                                <input className='custom' type='radio'  />
                            </div>
                        </div>
                        
                        <div class="para">
                            <p>
                                By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time
                            </p>
                        </div>
  
                        <div class="signup-btn"> 
                            <input class='button' type='Submit' value='Sign Up'  />
                        </div>
                    </label>
                </fieldset>
            </form>
        </div>
    );
  }   
export default dtd;
