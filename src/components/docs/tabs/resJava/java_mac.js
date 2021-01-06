import React from 'react';
import link from '../../../../utilities/links.json';

const top = () => {
    return(
        <div className=''>
            <h5>
                This article shows you how to install Java on Mac OSX, and also how to do Java/JDK version switching.
            </h5>
            <p>Tested with</p>
            <ul>
                <li>Mac OS 10.15.3</li>
                <li>JDK 8, 9, 10, 11, 12, 13 (AdoptOpenJDK)</li>
            </ul>
            <p><strong>Note:</strong> On Mac OSX, Java should installed in this folder; it is Mac’s standard.</p>
            <pre className='pre-code'>
                <code >
                    /Library/Java/JavaVirtualMachines/
                </code>
            </pre>
            <div>
                <h5>
                    We will show you two ways to install Java JDK on Mac, via the popular <a href={link.HOMEBREW} target="_blank" rel="noopener noreferrer">Homebrew</a> package manager and manually installation. 
                </h5>
            </div>
            <div>
                <h3>Option Number 1: Homebrew</h3>
                <p>Install <a href={link.HOMEBREW} target="_blank" rel="noopener noreferrer">Homebrew</a> and update it.</p>
                <pre className='pre-code'>
                    <code>
                        $ brew update
                    </code>
                </pre>
                <p>Add <a href={link.HOMEBREW} target="_blank" rel="noopener noreferrer">adoptopenjdk/openjdk</a>.</p>
                <pre className='pre-code'>
                    <code >
                        $ brew tap adoptopenjdk/openjdk
                    </code>
                </pre>
                <p>Find all available JDK.</p>
                <pre className='pre-code'>
                    <code >
                        $ brew search jdk
                    </code>
                </pre>
                <p>The output may vary</p>
                <pre className='pre-code'>
                    <code >
                        {'==> '}Casks <br />
                        adoptopenjdk                             adoptopenjdk12                           adoptopenjdk13-openj9                    adoptopenjdk8-openj9-jre <br />
                        adoptopenjdk10                           adoptopenjdk12-jre                       adoptopenjdk13-openj9-jre                adoptopenjdk8-openj9-jre-large <br />
                        adoptopenjdk11                           adoptopenjdk12-openj9                    adoptopenjdk13-openj9-jre-large          adoptopenjdk8-openj9-large <br />
                        adoptopenjdk11-jre                       adoptopenjdk12-openj9-jre                adoptopenjdk13-openj9-large              adoptopenjdk9 <br />
                        adoptopenjdk11-openj9                    adoptopenjdk12-openj9-jre-large          adoptopenjdk8                         oracle-jdk <br />
                        adoptopenjdk11-openj9-jre                adoptopenjdk12-openj9-large              adoptopenjdk8                          oracle-jdk-javadoc <br />
                        adoptopenjdk11-openj9-jre-large          adoptopenjdk13                           adoptopenjdk8-jre                        sapmachine-jdk <br />
                        adoptopenjdk11-openj9-large              adoptopenjdk13-jre <br />
                    </code>
                </pre>
                <p>1.4 Java 8, 9, 10, 11, 12, 13, choose one to install.</p>
                <pre className='pre-code'>
                    <code >
                        brew cask install adoptopenjdk8 <br />
                        brew cask install adoptopenjdk9 <br />
                        brew cask install adoptopenjdk10 <br />
                        brew cask install adoptopenjdk11 <br />
                        brew cask install adoptopenjdk12 <br />
                        brew cask install adoptopenjdk13 
                    </code>
                </pre>
                <p>This example will install Java 8 and 11 for testing.</p>
                <pre className='pre-code'>
                    <code >
                        $ brew cask install adoptopenjdk8 <br />
                        $ brew cask install adoptopenjdk11
                    </code>
                </pre>
                <p>
                    Where Java is installed? <code className='tag-Color'>/usr/libexec/java_home -V</code>
                </p>
                <pre className='pre-code'>
                    <code >
                        $ /usr/libexec/java_home -V <br />

                        Matching Java Virtual Machines (2): <br />
                            11.0.6, x86_64:	"AdoptOpenJDK 11"	/Library/Java/JavaVirtualMachines/adoptopenjdk-11.jdk/Contents/Home <br />
                            1.8.0_242, x86_64:	"AdoptOpenJDK 8"	/Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home
                    </code>
                </pre>
                <p>
                    Homebrew will install the JDK at folder <br />
                    <code className='tag-Color'>/Library/Java/JavaVirtualMachines/</code>, and this folder is Mac’s standard folder for Java installs.
                </p>
                <p>Test it, by default, Mac takes the highest version.</p>
                <pre className='pre-code'>
                    <code >
                        $ java -version <br />
                        openjdk version "11.0.6" 2020-01-14 <br />
                        OpenJDK Runtime Environment AdoptOpenJDK (build 11.0.6+10) <br />
                        OpenJDK 64-Bit Server VM AdoptOpenJDK (build 11.0.6+10, mixed mode)
                    </code>
                </pre>
                <p>
                    How to do version switching? Refer to below 3. version switching
                </p>
            </div>
            <div>
                <h3>Option Number 2: Manual Installation</h3>
                <p>
                    The example shows you how to download the early access JDK 14 and install it on Mac OSX.
                </p>
                <p>Steps:</p>
                <ul>
                    <li>Download JDK</li>
                    <li>Add the JDK folder at <code className='tag-Color'>/Library/Java/JavaVirtualMachines</code></li>
                    <li>Export <code className='tag-Color'>JAVA_HOME</code></li>
                </ul>
                <p>Download the early access JDK 14 from the <a href={link.JDK} target="_blank" rel="noopener noreferrer">OpenJDK</a> website.</p>
                <p>
                    Extracts tar file to <code className='tag-Color'>/Library/Java/JavaVirtualMachines</code>
                </p>
                <pre className='pre-code'>
                    <code >
                        $ cd /Library/Java/JavaVirtualMachines <br />
                        $ sudo cp ~/Downloads/openjdk-14_osx-x64_bin.tar.gz /Library/Java/JavaVirtualMachines <br />
                        $ pwd <br />
                        /Library/Java/JavaVirtualMachines <br />
                        $ sudo tar xzf openjdk-14_osx-x64_bin.tar.gz <br />
                        $ sudo rm openjdk-14_osx-x64_bin.tar.gz
                    </code>
                </pre>
                <p>
                    Export <code className='tag-Color'>JAVA_HOME</code>
                </p>
                <p>Find out where is JDK 14.</p>
                <pre className='pre-code'>
                    <code >
                        $ /usr/libexec/java_home -v14 <br />
                        /Library/Java/JavaVirtualMachines/jdk-14.jdk/Contents/Home
                    </code>
                </pre>
                <p>
                    Create or edit the existing <code className='tag-Color'>~/.bash_profile </code>with a text editor.
                </p>
                <pre className='pre-code'>
                    <code >
                        $ vi ~/.bash_profile
                    </code>
                </pre>
                <p>
                    Export <code className='tag-Color'>JAVA_HOME</code>, save and exit
                </p>
                <pre className='pre-code'>
                    <code >
                        ~/.bash_profile <br />
                        <hr />
                        export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-14.jdk/Contents/Home
                    </code>
                </pre>
                <p>Reflect the changes</p>
                <pre className='pre-code'>
                    <code >
                        $ source ~/.bash_profile
                    </code>
                </pre>
                <p>Test it.</p>
                <pre className='pre-code'>
                    <code >
                        $ java -version <br />
                        openjdk version "14" 2020-03-17 <br />
                        OpenJDK Runtime Environment (build 14+36-1461) <br />
                        OpenJDK 64-Bit Server VM (build 14+36-1461, mixed mode, sharing) <br />
                        <hr />
                        $ echo $JAVA_HOME <br />
                        /Library/Java/JavaVirtualMachines/jdk-14.jdk/Contents/Home
                    </code>
                </pre>
            </div>
            <div>
                <h3>Version Switching</h3>
                <p>
                    In this tutorial, we installed the Java 8 and Java 11 via <a href={link.HOMEBREW} target="_blank" rel="noopener noreferrer">Homebrew</a> (Step 1), and Java 14 manually (Step 2), so this Mac has three versions now. And the Mac is using the JDK 14.
                </p>
                <pre className='pre-code'>
                    <code >
                        $ /usr/libexec/java_home -V <br />
                        Matching Java Virtual Machines (3): <br />
                            14, x86_64:	"OpenJDK 14"	/Library/Java/JavaVirtualMachines/jdk-14.jdk/Contents/Home <br />
                            11.0.6, x86_64:	"AdoptOpenJDK 11"	/Library/Java/JavaVirtualMachines/adoptopenjdk-11.jdk/Contents/Home <br />
                            1.8.0_242, x86_64:	"AdoptOpenJDK 8"	/Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home <br />
                            <br />
                        /Library/Java/JavaVirtualMachines/jdk-14.jdk/Contents/Home <br />
                    </code>
                </pre>
                <p>
                    <strong>Note:</strong> There are tools like <a href={link.JRE} target="_blank" rel="noopener noreferrer">jEnv</a> to manage the Java version switching, but I prefer to manage with <code className='tag-Color'>export JAVA_HOME</code> manually, it’s simple and easy to understand, no black box magic.
                </p>
                <p>
                    Create or edit the existing <code className='tag-Color'>~/.bash_profile</code> with a text editor like vim or nano, <code className='tag-Color'>export JAVA_HOME </code>to the specified JDK we want to use on Mac. 
                </p>
                <pre className='pre-code'>
                    <code >
                        $ vi ~/.bash_profile
                    </code>
                </pre>
                <pre className='pre-code'>
                    <code >
                        ~/.bash_profile
                        <hr />
                        export JAVA_HOME_8=$(/usr/libexec/java_home -v1.8)
                        export JAVA_HOME_11=$(/usr/libexec/java_home -v11)
                        export JAVA_HOME_14=$(/usr/libexec/java_home -v14)
                        <br />
                        # Java 8
                        export JAVA_HOME=$JAVA_HOME_8
                        <br />
                        # Java 11
                        # export JAVA_HOME=$JAVA_HOME_11
                    </code>
                </pre>
                <p>
                    The above changes will make <code className='tag-Color'>JAVA_HOME </code>point to JAVA 8.
                </p>
                <p>
                    Reflect the changes. 
                </p>
                <pre className='pre-code'>
                    <code >
                        $ source ~/.bash_profile
                    </code>
                </pre>
                <pre className='pre-code'>
                    <code >
                        $ source ~/.bash_profile
                        <hr />
                        $ java -version <br />
                        <br />
                            openjdk version "1.8.0_242" <br />
                            OpenJDK Runtime Environment (AdoptOpenJDK)(build 1.8.0_242-b08) <br />
                            OpenJDK 64-Bit Server VM (AdoptOpenJDK)(build 25.242-b08, mixed mode)
                    </code>
                </pre>
                <p>Done.</p>
                <p>
                    If we want to switch JDK version again, update the <code className='tag-Color'>~/.bash_profile</code> and export <code className='tag-Color'>export JAVA_HOME </code>to other JDK version.
                </p>
            </div>
            <div>
                <h3>References</h3>
            </div>
            <div className='pt4'>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.JDK} target="_blank" rel="noopener noreferrer">
                    OpenJDK
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.ADOPT_OPEN_JDK} target="_blank" rel="noopener noreferrer">
                    AdoptOpenJDK – HomeBrew TAP
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.JRE} target="_blank" rel="noopener noreferrer">
                    jEnv
                </a>
                <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.MAC_JAVA_SETUP} target="_blank" rel="noopener noreferrer">
                    MAC Setup More Info
                </a>
            </div>
        </div>
    );
  }   
export default top;

