import React from 'react';
import link from '../../../utilities/links.json';
import Footer from '../../footer';
import GoogleAd from '../../GoogleAd';
import { uncountable } from 'i/lib/inflections';

const performance = () => {
    return(
        <main className = 'page-tab-body'>
          <h3>Performance Testing</h3>
          <p>
            <a href='https://stackify.com/ultimate-guide-performance-testing-and-software-testing/'>Performance testing</a> is a series of tests conducted to identify issues that inhibit a software’s speed, scalability, and stability. This is the ideal way to ensure that the software system is built with the capacity to meet business demand while simultaneously serving all necessary users in a timely and reliable manner.
          </p>
          <h3>6 reasons to do Performance Testing</h3>
          <ol>
            <li>Identify glitches and eliminate bottlenecks</li>
            <li>Provide visibility for stakeholders</li>
            <li>Deliver a higher quality UI and functionality</li>
            <li>Unlock greater scalability</li>
            <li>Generate more revenue</li>
            <li>Create sound benchmarks for future regression testing</li>
          </ol>
          <h3>The most common web app performance issues</h3>
            <ul>
              <li>Issues with DNS and network connectivity </li>
              <li>Poor code</li>
              <li>Poor load balance</li>
              <li>Slower servers </li>
              <li>Spikes in traffic</li>
              <li>Unoptimized databases</li>
            </ul>
          <h3>Best Practices for Load or Performance Testing</h3>
          <ol>
            <li>Start recording a new scenario from the web browser’s start</li>
            <li>Clear browser cache and cookies before recording traffic</li>
            <li>Parameterize scenarios to simulate more realistic load on the server</li>
            <li>Verify user scenarios</li>
            <li>Arrange user scenarios in your tests so that critical functionality is tested first. And remember to analyze and report on your results!</li>
            <li>During test runs, monitor the tested server metrics as well as resource usage on the client computer</li>
          </ol>
          <h3>Most Common Problems Observed in Performance Testing</h3>
          <p>
            During performance testing of software, developers are looking for performance symptoms and issues. Speed issues — slow responses and long load times for example — often are observed and addressed. Other performance problems can be observed:
          </p>
          <ul>
            <li><b> Bottlenecking </b> — This occurs when data flow is interrupted or halted because there is not enough capacity to handle the workload.</li>
            <li><b>Poor scalability</b> — If software cannot handle the desired number of concurrent tasks, results could be delayed, errors could increase, or other unexpected behavior could happen that affects:</li>
              <ul>
                <li>Disk usage</li>
                <li>CPU usage</li>
                <li>Memory leaks</li>
                <li>Operating system limitations</li>
                <li>Poor network configuration</li>
              </ul>
            <li><b>Software configuration issues</b> — Often settings are not set at a sufficient level to handle the workload.</li>
            <li><b>Insufficient hardware resources</b> — Performance testing may reveal physical memory constraints or low-performing CPUs.</li>
          </ul>
          <div>
            <a href='https://stackify.com/ultimate-guide-performance-testing-and-software-testing/'>More details</a>
          </div>
      

          <section>
            <h2>Peformance Strategy</h2>
            <p> - <a href='https://github.com/gits5213/company/tree/master/dx/Standards/Confluence/Performance%20Standards'>Template</a></p>
          </section>
          <section>
            <h2>JMeter Configuration </h2>
            <p> - <a href='https://docs.google.com/document/d/1gaVLfRUJtLaSf_HA4ay_7YkadrykT4hfXPoLinj8hfE/edit'>Step by step process</a></p>
          </section>
            
            <div>
                <GoogleAd slot="1541085932" classNames="page-right-side" />
            </div>
            <section className='pt4'>
                <Footer />
            </section>
            
        </main>
    );
  }   
export default performance;