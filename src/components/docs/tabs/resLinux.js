import React from 'react';
import GoogleAd from '../../../components/GoogleAd';
import linuxLogo from '../../../images/tabs/linuxLogo.png';
import linuxCheatSheet from '../../../images/tabs/linuxCheatSheet.png';

const GITHUB_ICON ='http://www.protractortest.org/img/GitHub-Mark-Light-32px.png';
const LINUX_ = 'https://gist.github.com/riipandi/3097780';

const resLinux = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>Unix/Linux</h3>
            </div>
            <div className='tc'>
                <img className='pr4 pt4 pb4 linux-logo' src={linuxLogo} alt='Linux Logo'/>
            </div>
            <div className='tc pt3'>
              <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red' href={LINUX_} target="_blank" rel="noopener noreferrer">
                  <img className='pr2' src={GITHUB_ICON} alt='github log' /> 
                  Linux Command on GitHub                 
              </a>
          </div>
            <div>
                <h3>What is Linux?</h3>
                <p>
                    Just like Windows, iOS, and Mac OS, Linux is an operating system. In fact, one of the most popular platforms on the planet, Android, is powered by the Linux operating system. An operating system is software that manages all of the hardware resources associated with your desktop or laptop. To put it simply, the operating system manages the communication between your software and your hardware. Without the operating system (OS), the software wouldn?t function.
                </p>
                <p>The Linux operating system comprises several different pieces:</p>
                <ol>
                    <li>
                        <strong>Bootloader - </strong>
                        The software that manages the boot process of your computer. For most users, this will simply be a splash screen that pops up and eventually goes away to boot into the operating system.
                    </li>
                    <li>
                        <strong>Kernel – </strong>
                        This is the one piece of the whole that is actually called ?Linux?. The kernel is the core of the system and manages the CPU, memory, and peripheral devices. The kernel is the lowest level of the OS.
                    </li>
                    <li>
                        <strong>Init system – </strong>
                        This is a sub-system that bootstraps the user space and is charged with controlling daemons. One of the most widely used init systems is systemd? which also happens to be one of the most controversial. It is the init system that manages the boot process, once the initial booting is handed over from the bootloader (i.e., GRUB or GRand Unified Bootloader).
                    </li>
                    <li>
                        <strong>Daemons – </strong>
                        These are background services (printing, sound, scheduling, etc.) that either start up during boot or after you log into the desktop.
                    </li>
                    <li>
                        <strong>Graphical server – </strong>
                        This is the sub-system that displays the graphics on your monitor. It is commonly referred to as the X server or just X.
                    </li>
                    <li>
                        <strong>Desktop environment – </strong>
                        This is the piece that the users actually interact with. There are many desktop environments to choose from (GNOME, Cinnamon, Mate, Pantheon, Enlightenment, KDE, Xfce, etc.). Each desktop environment includes built-in applications (such as file managers, configuration tools, web browsers, and games).
                    </li>
                    <li>
                        <strong>Applications – </strong>
                        Desktop environments do not offer the full array of apps. Just like Windows and macOS, Linux offers thousands upon thousands of high-quality software titles that can be easily found and installed. Most modern Linux distributions (more on this below) include App Store-like tools that centralize and simplify application installation. For example, Ubuntu Linux has the Ubuntu Software Center (a rebrand of GNOME Software? Figure 1) which allows you to quickly search among the thousands of apps and install them from one centralized location.
                    </li>
                </ol>
            </div>
            <div>
                <h3>Open source</h3>
                <p>
                    Linux is also distributed under an open source license. Open source follows these key tenants:
                </p>
                <ul>
                    <li>The freedom to run the program, for any purpose.</li>
                    <li>The freedom to study how the program works, and change it to make it do what you wish.</li>
                    <li>The freedom to redistribute copies so you can help your neighbor.</li>
                    <li>The freedom to distribute copies of your modified versions to others.</li>
                </ul>
                <p>
                    These points are crucial to understanding the community that works together to create the Linux platform. Without a doubt, Linux is an operating system that is ?by the people, for the people?. These tenants are also a main factor in why many people choose Linux. It?s about freedom and freedom of use and freedom of choice.
                </p>
            </div>
            <div>
                <h3>Basic Unix Commands for Terminal</h3>
                <p>
                    <code><strong>ls -R</strong></code>: List all the files in the sub-directories as well <br />
                    <code><strong>ls -a</strong></code>: ShowS the hidden files<br />
                    <code><strong>ls al</strong></code>: List the files and directories with detailed information like the permissions, size, owner, etc.<br />
                    <code><strong>pwd</strong></code>: Present working directory<br />
                    <code><strong>cd</strong></code>: Change directory: to go straight to the home folder<br />
                    <code><strong>cd-</strong></code>: to move to your previous directory<br />
                    <code><strong>cd Desktop</strong></code>: Change directory to the Desktop<br />
                    <code><strong>cd ..</strong></code>: One directory up (back)<br />
                    <code><strong>clear</strong></code>: Clear up the terminal<br />
                    <code><strong>cd /</strong></code>: Change directory to the root directory of MAC<br />
                    <code><strong>cd ~</strong></code>: Change directory to the User directory<br />
                    <code><strong>cd Desktop/test</strong></code>: Change directory to the test folder on the Desktop<br />
                    <code><strong>open .</strong></code>: Folder will open<br />
                    <code><strong>mkdir Test</strong></code>: Make Directory - Test Folder will create<br />
                    <code><strong>cd Test</strong></code>: Change directory into Test Folder<br />
                    <code><strong>touch index.html</strong></code>: Index.html file will created<br />
                    <code><strong>open index.html</strong></code>: Index.html file will open<br />
                    <code><strong>open -a "Sublime Text"</strong></code>: Open only Sublime editor<br />
                    <code><strong>open -a "Sublime Text" Index.html</strong></code>: Index.html file will open with Sublime Text<br />
                    <code><strong>mv index.html about.html</strong></code>: Rename the File<br />
                    <code><strong>rm about.html</strong></code>: Delete the file(Only works for file)<br />
                    <code><strong>rm -r Test</strong></code>: Delete the Folder<br />
                    <code><strong>echo "Print statement"</strong></code>: Print statement<br />
                    <code><strong>zip, unzip</strong></code>: to Zip and Extract the file<br />
                    <code><strong>Keyboard: Up arrow and Down arrow</strong></code>: Will bring up the entire history<br />
                    <code><strong>Keyboard: Ctrl + C</strong></code>: Terminate any command<br />
                    <code><strong>Keyboard: Tab</strong></code>: Autofill what you are typing<br />
                    <code><strong>Keyboard: Ctrl + Z</strong></code>: Pause any command<br />
                    <code><strong>Keyboard: Ctrl+ S</strong></code>: Freeze Terminal<br />
                    <code><strong>Keyboard: Ctrl + Q</strong></code>: Unfreeze Terminal<br />
                </p>
                <p>
                    You can run multiple commands in one single command by using the “;” to separate them. For example Command1; Command2; Command3. Or use && if you only want the next command to run when the first one is successful.
                </p>
                <h3>Basic Unix Advanced Command for Terminal</h3>
                <p>
                    <code><strong>cat(short for concatenate)</strong></code>: Is one of the most frequently used commands in Linux. It is used to list the contents of a file on the standard output (sdout). To run this command, type cat followed by the file’s name and its extension. For instance: cat file.txt.<br />
                    <code><strong>cp</strong></code>: Use the cp command to copy files from the current directory to a different directory. For instance, the command cp scenery.jpg /home/username/Pictures would create a copy of scenery.jpg (from your current directory) into the Pictures directory.<br />
                    <code><strong>mv</strong></code>: The primary use of the mv command is to move files, although it can also be used to rename files. For example: mv file.txt /home/username/Documents.<br />
                    <code><strong>grep</strong></code>: It lets you search through all the text in a given file. grep blue notepad.txt will search for the word blue in the notepad file.<br />
                    <code><strong>sudo</strong></code>: Short for “SuperUser Do”, this command enables you to perform tasks that require administrative or root permissions.<br />
                    <code><strong>head</strong></code>: The head command is used to view the first lines of any text file. For example, if you only want to show the first five lines, type head -n 5 filename.ext.<br />
                    <code><strong>tail</strong></code>: This one has a similar function to the head command, but instead of showing the first lines, the tail command will display the last ten lines of a text file. For example, tail -n filename.ext.<br />
                    <code><strong>diff</strong></code>: Short for difference, the diff command compares the contents of two files line by line. After analyzing the files, it will output the lines that do not match. Programmers often use this command when they need to make program alterations instead of rewriting the entire source code.
                                        The simplest form of this command is diff file1.ext file2.ext<br />
                    <code><strong>chmod</strong></code>: chmod is another Linux command, used to change the read, write, and execute permissions of files and directories. i,e [chmod 754 myfile](https://www.computerhope.com/unix/uchmod.htm)<br />
                    <code><strong>chown</strong></code>: transfer the ownership of a file to the specified username<br />
                    <code><strong>kill</strong></code>: process identification number (PID) of the program you want to kill. i.e. kill [signal option] PID.<br />
                    <code><strong>ps ux</strong></code>: process identification number (PID) of the program <br />
                    <code><strong>man</strong></code>: Manual Instruction of any command<br />
                </p>
            </div>
            <hr />
            <div className='tc'>
                <img className='pr4 pt4 pb4 linux-logo' src={linuxCheatSheet} alt='Linux Logo'/>
            </div>
            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default resLinux;
