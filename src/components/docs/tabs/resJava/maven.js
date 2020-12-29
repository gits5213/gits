import React from 'react';

const maven = () => {
    return(
        <div >
            <div>
            <h3>How to install Maven on Mac OSX</h3> 
            <p>
                    Since Lion 10.6.8 MacOSx Snow Leopard, Mac OS X comes with Apache Maven 3 built in, and can be located at 
                    <code className='tag-Color'>/usr/share/maven</code>
            </p>
            <h3>Option Number 1: Maven Built-In</h3>
            <p>
                To verify the Maven installation, in terminal, issue the command <code className='tag-Color'>mvn -version</code>.
            </p>
            <pre className='pre-code'>
                    <code>
                        $mvn -version <br />
                        <br />
                        Apache Maven 3.0.3 (r1075438; 2011-03-01 01:31:09+0800) <br />
                        Maven home: /usr/share/maven <br />
                        Java version: 1.6.0_33, vendor: Apple Inc. <br />
                        Java home: /System/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home <br />
                        Default locale: en_US, platform encoding: MacRoman <br />
                        OS name: "mac os x", version: "10.7.4", arch: "x86_64", family: "mac"
                    </code>
                </pre>
                <h5>Where is Maven installed?</h5>
                <p>
                    A quick check with <code className='tag-Color'>whereis</code> command :
                </p>
                <pre className='pre-code'>
                    <code>
                        $ whereis mvn <br />
                        /usr/bin/mvn
                    </code>
                </pre>
                <pre className='pre-code'>
                    <code>
                        $ cd /usr/bin <br />
                        $$ ls -ls | grep mvn <br />
                        8 lrwxr-xr-x   1 root   wheel        24 May 23 15:57 mvn {'->'} /usr/share/maven/bin/mvn
                    </code>
                </pre>
                <p>
                    By default, Maven is installed at <code className='tag-Color'>/usr/share/maven</code>. No configuration is needed.
                </p>
            </div>
            <div>
                <h3>Option Number 2: Install Maven Manually</h3>
                <p>
                    After the upgrade of Mac OS X Mavericks, Maven was removed (no idea why). So, You have to install it manually.
                </p>
            </div>
        </div>
    );
  }   
export default maven;
