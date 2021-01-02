import React from 'react';

const MAVEN = 'http://maven.apache.org/download.cgi';
const SETTINGS_XML = 'https://maven.apache.org/settings.html';
const JAVA = 'https://www.oracle.com/java/technologies/javase-downloads.html';
const MAVEN_INSTALLATION_INSTRUCTION = 'https://maven.apache.org/install.html';
const CONFIGURATION_GUIDE = 'https://maven.apache.org/guides/mini/guide-configuring-maven.html';
const WINDOWS_PRE = 'https://maven.apache.org/guides/getting-started/windows-prerequisites.html';
const STANDARD_PROJECT_STRUCTURE = 'https://maven.apache.org/guides/introduction/introduction-to-the-standard-directory-layout.html';
const POM = 'https://maven.apache.org/guides/introduction/introduction-to-the-pom.html#:~:text=A%20Project%20Object%20Model%20or,default%20values%20for%20most%20projects.';
const MVN_REPOSITORY = 'https://mvnrepository.com/';
const MSZ_POM_XML = 'https://github.com/msz5213/POM_TestNG_CompleteFramework/blob/master/pom.xml';
const MAVEN_DOCS = 'https://maven.apache.org/guides/getting-started/index.html';
const MAVEN_GITHUB = 'https://github.com/msz5213/Maven';

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
                <h5>Download Maven</h5>
                <p>
                    Download the <a href={MAVEN} target="_blank" rel="noopener noreferrer">Maven</a>, for example 
                    <code className='tag-Color'>apache-maven-3.6.3-bin.tar.gz</code> Extracts it,
                </p>
                <pre className='pre-code'>
                    <code>  
                        tar -xvf apache-maven-3.1.1-bin.tar.gz <br />
                        <br />
                        $pwd
                        /Users/mkyong/apache-maven-3.1.1
                    </code>
                </pre>
                <h5>Set Maven command in environment variable.</h5>
                <p>
                    Update <code className='tag-Color'>~/. bash_profile</code> – create this file if doesn’t exist.
                </p>
                <pre className='pre-code'>
                    <code>  
                        $ vi ~/.bash_profile
                    </code>
                </pre>
                <pre className='pre-code'>
                    <code>  
                        ~/.bash_profile <br />
                        <hr />
                        export M2_HOME=/Users/mkyong/apache-maven-3.1.1
                        export PATH=$PATH:$M2_HOME/bin
                    </code>
                </pre>
                <p>
                    Restart the terminal. Test it.
                </p>
                <pre className='pre-code'>
                    <code>  
                    $mvn -version <br />
                    <br />
                    Apache Maven 3.1.1 (0728685237757ffbf44136acec0402957f723d9a; 2013-09-17 23:22:22+0800) <br />
                    Maven home: /Users/mkyong/apache-maven-3.1.1 <br />
                    Java version: 1.7.0_05, vendor: Oracle Corporation <br />
                    Java home: /Library/Java/JavaVirtualMachines/1.7.0.jdk/Contents/Home/jre <br />
                    Default locale: en_US, platform encoding: UTF-8 <br />
                    OS name: "mac os x", version: "10.9", arch: "x86_64", family: "mac" 
                    </code>
                </pre>
                <h5>Post Configuration For <a href={SETTINGS_XML} target="_blank" rel="noopener noreferrer">Seetings.xml</a></h5>
                <p>
                    A common post-installation for Maven, change the local repository to another location.
                </p>
                <pre className='pre-code'>
                    <code>  
                        $sudo vim /usr/share/maven/conf/settings.xml <br />
                        <br />
                        $vim /usr/mkyong/maven/conf/settings.xml
                    </code>
                </pre>
                <pre className='pre-code'>
                    <code>  
                        settings.xml <br />
                        <hr />
                        {'<!--'} localRepository <br />
                        | The path to the local repository maven will use to store artifacts. <br />
                        | <br />
                        | Default: ~/.m2/repository <br />
                        <localRepository>/path/to/local/repo</localRepository> <br />
                        {'-->'} <br />
                        <localRepository>/Users/mkyong//maven/repo/</localRepository>
                    </code>
                </pre>
                <p>
                    Above example changed the default repository from <code className='tag-Color'>~/.m2/repository</code> to <code className='tag-Color'>/Users/mkyong//maven/repo/</code>.
                </p>
            </div>
            <hr />
            <div>
                <h3>Maven in 5 Minutes</h3>
                <h5>Installation</h5>
                <p>
                    Maven is a Java tool, so you must have <a href={JAVA} target="_blank" rel="noopener noreferrer">Java</a> installed in order to proceed.
                </p>
                <p>
                    First, <a href={MAVEN} target="_blank" rel="noopener noreferrer">download Maven</a> and follow the <a href={MAVEN_INSTALLATION_INSTRUCTION} target="_blank" rel="noopener noreferrer">installation instructions</a>. After that, type the following in a terminal or in a command prompt:
                </p>
                    <pre className='pre-code'>
                    <code>
                        mvn --version <br />
                        <hr />
                        It should print out your installed version of Maven, for example: <br />
                        <br />
                        Apache Maven 3.6.3 (cecedd343002696d0abb50b32b541b8a6ba2883f) <br />
                        Maven home: D:\apache-maven-3.6.3\apache-maven\bin\.. <br />
                        Java version: 1.8.0_232, vendor: AdoptOpenJDK, runtime: C:\Program Files\AdoptOpenJDK\jdk-8.0.232.09-hotspot\jre <br />
                        Default locale: en_US, platform encoding: Cp1250 <br />
                        OS name: "windows 10", version: "10.0", arch: "amd64", family: "windows" 
                    </code>
                </pre>
                <p>
                    Depending upon your network setup, you may require extra configuration. Check out the <a href={CONFIGURATION_GUIDE} target="_blank" rel="noopener noreferrer">Guide to Configuring Maven</a> if necessary.
                </p>
                <p>
                    If you are using Windows, you should look at <a href={WINDOWS_PRE} target="_blank" rel="noopener noreferrer"> Windows Prerequisites</a> to ensure that you are prepared to use Maven on Windows.
                </p>
            </div>
            <div>
                <h3>Creating a Project</h3>
                <p>
                    You will need somewhere for your project to reside, create a directory somewhere and start a shell in that directory. On your command line, execute the following Maven goal:
                </p>
                <pre className='pre-code'>
                    <code>
                        mvn archetype:generate -DgroupId=com.mycompany.app -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4 -DinteractiveMode=false
                    </code>
                </pre>
                <p>
                    If you have just installed Maven, it may take a while on the first run. This is because Maven is downloading the most recent artifacts (plugin jars and other files) into your local repository. You may also need to execute the command a couple of times before it succeeds. This is because the remote server may time out before your downloads are complete. Don't worry, there are ways to fix that.
                </p>
                <p>
                    You will notice that the generate goal created a directory with the same name given as the artifactId. Change into that directory.
                </p>
                <pre className='pre-code'>
                    <code>
                        $ cd my-app <br />
                        $ my-app mvn clean <br />
                        $ my-app mvn compile <br />
                        $ my-app mvn eclipse:eclipse (only for Eclipse IDE)
                    </code>
                </pre>
                <p>
                    Under this directory you will notice the following <a href={STANDARD_PROJECT_STRUCTURE} target="_blank" rel="noopener noreferrer">standard project structure</a>.
                </p>
                <pre className='pre-code'>
                    <code>
                        my-app <br />
                        |-- pom.xml <br />
                        `-- src <br />
                            |-- main <br />
                            |   `-- java <br />
                            |       `-- com <br />
                            |           `-- mycompany <br />
                            |               `-- app <br />
                            |                   `-- App.java <br />
                            `-- test <br />
                            |   `-- java <br />
                            |       `-- com <br />
                            |           `-- mycompany <br />
                            |               `-- app <br />
                            |                   `-- AppTest.java
                    </code>
                </pre>
                <p>
                    The <code className='tag-Color'>src/main/java</code> directory contains the project source code, the <code className='tag-Color'>src/test/java</code> directory contains the test source, and the <code className='tag-Color'> pom.xml</code>file is the project's Project Object Model, or POM.
                </p>
                <h5>The <a href={POM} target="_blank" rel="noopener noreferrer">POM</a></h5>POM
                <p>
                    The <code className='tag-Color'><a href={MSZ_POM_XML} target="_blank" rel="noopener noreferrer">pom.xml</a></code>  file is the core of a project's configuration in Maven. It is a single configuration file that contains the majority of information required to build a project in just the way you want. The POM is huge and can be daunting in its complexity, but it is not necessary to understand all of the intricacies just yet to use it effectively.
                </p>
                <h5>Importing project into Eclipse</h5>
                <ul>
                    <li>Open Eclipse</li>
                    <li>File {'>'} Import... {'>'} General {'>'} Existing Project into Workspace</li>
                    <li>Next {'>'} Browse... {'>'} Select Project from the computer</li>
                    <li>Finish</li>
                </ul>
                <h5>Project In Eclipse</h5>
                <ul>
                    <li>Right Click on the Project {'>'} Configure {'>'} Convert to Maven Project</li>
                    <li>Right Click on the Project {'>'} Maven {'>'} Update Project</li>
                    <li>Right Click on the Project {'>'} Refresh</li>
                    <li>Double Click on pom.xml file {'>'} Based on the Requirments Copy and Paste List of Dependencies From the <a href={MVN_REPOSITORY} target="_blank" rel="noopener noreferrer">MVN Repository</a></li>
                </ul>
                <h5>Dependencies List</h5>
                <ul>
                    <li>TestNG</li>
                    <li>Chrome | Firefox | Depends on the Requirments</li>
                    <li>Selenium</li>
                    <li>Depends on the Requirments</li>
                    <li>Or Copy and paste from the <a href={MSZ_POM_XML} target="_blank" rel="noopener noreferrer">exisisting project</a></li>
                    <li>Right Click on the Project {'>'} Refresh</li>
                </ul>
            </div>
            <div>
                <h3>References</h3>
            </div>
            <div className='pt4 scrummountain-btn'>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={MAVEN_DOCS} target="_blank" rel="noopener noreferrer">
                    Maven Docs
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={MAVEN_GITHUB} target="_blank" rel="noopener noreferrer">
                    Maven GitHub
                </a>
            </div>
        </div>
    );
  }   
export default maven;
