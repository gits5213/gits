import React, { useState } from 'react';
import link from '../../../utilities/links.json';
import linuxLogo from '../../../images/tabs/linuxLogo.png';
import linuxCheatSheet from '../../../images/tabs/linuxCheatSheet.png';
import PdfDownload from '../../shared/PdfDownload';
import { getImageSrc } from '../../../utils/getImageSrc';
import { checklistGridStyles, checklistLinkStyles, modernCardStyles, itemHeaderStyles, codeBlockStyles } from '../../../utils/globalStyles';

const ResLinux = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const scrollToCommand = (commandId) => {
        const element = document.getElementById(commandId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            const originalBgColor = element.style.backgroundColor || 'transparent';
            element.style.backgroundColor = '#fef3c7';
            element.style.transition = 'background-color 0.3s ease';
            setTimeout(() => {
                element.style.backgroundColor = originalBgColor;
            }, 2000);
        }
    };
    return(
        <div className='page-tab-body' style={{ height: 'auto', minHeight: 'auto', paddingBottom: '100px', marginBottom: '40px' }}>
            <div>
                <h3>Unix/Linux</h3>
            </div>
            <div className='tc'>
                <img className='pr4 pt4 pb4 linux-logo' src={getImageSrc(linuxLogo)} alt='Linux Logo'/>
            </div>
            <div className='tc pt3'>
              <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red' href={link.LINUX_} target="_blank" rel="noopener noreferrer">
                  <img className='pr2' src={getImageSrc(link.GITHUB_ICON)} alt='github log' /> 
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
            
            {/* Terminal Commands Section */}
            <section style={{ marginBottom: '40px' }}>
                <div style={modernCardStyles.expandable}>
                    <div 
                        onClick={() => setIsExpanded(!isExpanded)}
                        style={{
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: isExpanded ? '24px' : '0'
                        }}
                    >
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '24px',
                            fontWeight: '600',
                            margin: 0
                        }}>
                            Terminal Commands Checklist for Playwright TypeScript Course
                        </h3>
                        <span style={{
                            fontSize: '24px',
                            color: '#00416A',
                            fontWeight: 'bold'
                        }}>
                            {isExpanded ? '−' : '+'}
                        </span>
                    </div>
                    
                    {isExpanded && (
                        <div>
                            <p style={{
                                marginBottom: '24px',
                                color: '#475569',
                                lineHeight: '1.6',
                                fontSize: '16px'
                            }}>
                                Absolutely — here's an <strong>end-to-end command checklist</strong> (Windows + macOS/Linux) that students will commonly use throughout a <strong>Playwright TypeScript</strong> course.
                            </p>
                            
                            {/* Checklist Grid */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                gap: '16px',
                                marginBottom: '32px'
                            }}>
                                {/* Terminal basics */}
                                <div style={checklistGridStyles.modern}>
                                    <h4 style={{ marginBottom: '12px', color: '#1e293b', fontSize: '16px', fontWeight: '600' }}>A) Terminal basics</h4>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-1"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-1'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Show current directory
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-2"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-2'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Clear screen
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-3"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-3'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Stop a running command
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Navigation */}
                                <div style={checklistGridStyles.modern}>
                                    <h4 style={{ marginBottom: '12px', color: '#1e293b', fontSize: '16px', fontWeight: '600' }}>B) Navigation</h4>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-4"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-4'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                List files
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-5"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-5'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Change directory
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* File & folder operations */}
                                <div style={checklistGridStyles.modern}>
                                    <h4 style={{ marginBottom: '12px', color: '#1e293b', fontSize: '16px', fontWeight: '600' }}>C) File & folder operations</h4>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-6"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-6'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Create folder
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-7"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-7'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Create file
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-8"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-8'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Copy files/folders
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-9"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-9'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Move / rename
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-10"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-10'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Delete file/folder
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-11"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-11'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                View file contents
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Search & inspect */}
                                <div style={checklistGridStyles.modern}>
                                    <h4 style={{ marginBottom: '12px', color: '#1e293b', fontSize: '16px', fontWeight: '600' }}>D) Search & inspect</h4>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-12"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-12'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Search text in files
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-13"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-13'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Find files by name
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-14"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-14'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Show directory tree
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Permissions */}
                                <div style={checklistGridStyles.modern}>
                                    <h4 style={{ marginBottom: '12px', color: '#1e293b', fontSize: '16px', fontWeight: '600' }}>E) Permissions</h4>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-15"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-15'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Make script executable
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Environment variables */}
                                <div style={checklistGridStyles.modern}>
                                    <h4 style={{ marginBottom: '12px', color: '#1e293b', fontSize: '16px', fontWeight: '600' }}>F) Environment variables</h4>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-16"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-16'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Read env variable
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-17"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-17'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Set env var (session)
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-18"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-18'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Set env var (one command)
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Processes & ports */}
                                <div style={checklistGridStyles.modern}>
                                    <h4 style={{ marginBottom: '12px', color: '#1e293b', fontSize: '16px', fontWeight: '600' }}>G) Processes & ports</h4>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-19"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-19'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                List running processes
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-20"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-20'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Kill process by name
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-21"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-21'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Find what's using a port
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Networking */}
                                <div style={checklistGridStyles.modern}>
                                    <h4 style={{ marginBottom: '12px', color: '#1e293b', fontSize: '16px', fontWeight: '600' }}>H) Networking</h4>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-22"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-22'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Basic HTTP check / download (curl)
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Archives */}
                                <div style={checklistGridStyles.modern}>
                                    <h4 style={{ marginBottom: '12px', color: '#1e293b', fontSize: '16px', fontWeight: '600' }}>I) Archives</h4>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-23"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-23'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Zip a folder
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-24"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-24'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Unzip
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Git */}
                                <div style={checklistGridStyles.modern}>
                                    <h4 style={{ marginBottom: '12px', color: '#1e293b', fontSize: '16px', fontWeight: '600' }}>J) Git commands</h4>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-25"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-25'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Clone repo
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-26"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-26'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Status
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-27"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-27'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Create/switch branch
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-28"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-28'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Stage + commit
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-29"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-29'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Pull / push
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Node/NPM */}
                                <div style={checklistGridStyles.modern}>
                                    <h4 style={{ marginBottom: '12px', color: '#1e293b', fontSize: '16px', fontWeight: '600' }}>K) Node / NPM / NPX</h4>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-30"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-30'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Check versions
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-31"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-31'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Install dependencies
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-32"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-32'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Install dev dependency
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-33"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-33'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Run scripts
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-34"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-34'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Use npx
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Playwright */}
                                <div style={checklistGridStyles.modern}>
                                    <h4 style={{ marginBottom: '12px', color: '#1e293b', fontSize: '16px', fontWeight: '600' }}>L) Playwright commands</h4>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-35"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-35'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Initialize Playwright
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-36"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-36'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Install browsers
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-37"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-37'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Run all tests
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-38"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-38'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Run specific file
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-39"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-39'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Run one test by name
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-40"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-40'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Run by tag
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-41"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-41'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Headed mode
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-42"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-42'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Debug mode
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-43"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-43'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Show HTML report
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '8px' }}>
                                            <a
                                                href="#cmd-44"
                                                onClick={(e) => { e.preventDefault(); scrollToCommand('cmd-44'); }}
                                                style={checklistLinkStyles.base}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#005a8a';
                                                    e.target.style.borderBottomColor = '#005a8a';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#00416A';
                                                    e.target.style.borderBottomColor = '#00416A';
                                                }}
                                            >
                                                Run with trace enabled
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Commands Definitions Section */}
                            <div style={{ marginTop: '48px' }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '28px',
                                    fontWeight: '700',
                                    marginBottom: '32px',
                                    paddingBottom: '16px',
                                    borderBottom: '3px solid #00416A'
                                }}>
                                    Commands — Definition + Examples (Windows + macOS/Linux)
                                </h3>

                                {/* A) Terminal basics */}
                                <h4 style={{
                                    color: '#1e293b',
                                    fontSize: '22px',
                                    fontWeight: '600',
                                    marginTop: '32px',
                                    marginBottom: '20px'
                                }}>
                                    A) Terminal basics
                                </h4>

                                <div id="cmd-1" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>1) Show current directory</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Windows (PowerShell):</strong> <code>Get-Location</code><br />
                                        <strong style={{ color: '#1e293b' }}>macOS/Linux:</strong> <code>pwd</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Shows where you are in the filesystem.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`# PowerShell
Get-Location

# Bash
pwd`}
                                    </pre>
                                </div>

                                <div id="cmd-2" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>2) Clear screen</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Windows:</strong> <code>cls</code><br />
                                        <strong style={{ color: '#1e293b' }}>macOS/Linux:</strong> <code>clear</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Clears the terminal view (doesn't delete files).
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`cls    # Windows
clear  # macOS/Linux`}
                                    </pre>
                                </div>

                                <div id="cmd-3" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>3) Stop a running command</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Windows/macOS/Linux:</strong> <code>Ctrl + C</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Cancels the currently running process.
                                    </p>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Example:</strong> Stop a stuck <code>npx playwright test</code> run → press <code>Ctrl+C</code>.
                                    </p>
                                </div>

                                {/* B) Navigation */}
                                <h4 style={{
                                    color: '#1e293b',
                                    fontSize: '22px',
                                    fontWeight: '600',
                                    marginTop: '32px',
                                    marginBottom: '20px'
                                }}>
                                    B) Navigation
                                </h4>

                                <div id="cmd-4" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>4) List files</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Windows:</strong> <code>dir</code><br />
                                        <strong style={{ color: '#1e293b' }}>macOS/Linux:</strong> <code>ls</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Lists files/folders in current directory.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`# PowerShell
dir

# Bash
ls -la  # detailed`}
                                    </pre>
                                </div>

                                <div id="cmd-5" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>5) Change directory</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Windows/macOS/Linux:</strong> <code>cd &lt;path&gt;</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Move into another folder.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`cd .                    # current
cd ..                   # up one level
cd C:\\Projects\\playwright-training  # Windows
cd ~/projects/playwright-training     # Mac/Linux`}
                                    </pre>
                                </div>

                                {/* C) File & folder operations */}
                                <h4 style={{
                                    color: '#1e293b',
                                    fontSize: '22px',
                                    fontWeight: '600',
                                    marginTop: '32px',
                                    marginBottom: '20px'
                                }}>
                                    C) File & folder operations
                                </h4>

                                <div id="cmd-6" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>6) Create a folder</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Windows/macOS/Linux:</strong> <code>mkdir &lt;folder&gt;</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Creates a directory.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`mkdir playwright-ts-training`}
                                    </pre>
                                </div>

                                <div id="cmd-7" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>7) Create an empty file</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Windows:</strong> <code>New-Item README.md -ItemType File</code><br />
                                        <strong style={{ color: '#1e293b' }}>macOS/Linux:</strong> <code>touch README.md</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Creates a blank file.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`# PowerShell
New-Item README.md -ItemType File

# Bash
touch README.md`}
                                    </pre>
                                </div>

                                <div id="cmd-8" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>8) Copy files/folders</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Windows:</strong> <code>Copy-Item source.txt dest.txt</code> (folder: add <code>-Recurse</code>)<br />
                                        <strong style={{ color: '#1e293b' }}>macOS/Linux:</strong> <code>cp source.txt dest.txt</code> (folder: add <code>-r</code>)<br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Duplicates content.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`# Windows
Copy-Item .\\env.example .\\env.local

# Mac/Linux
cp env.example env.local`}
                                    </pre>
                                </div>

                                <div id="cmd-9" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>9) Move / rename</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Windows:</strong> <code>Move-Item old.txt new.txt</code><br />
                                        <strong style={{ color: '#1e293b' }}>macOS/Linux:</strong> <code>mv old.txt new.txt</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Renames or moves items.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`# Rename example
mv test.spec.ts login.spec.ts`}
                                    </pre>
                                </div>

                                <div id="cmd-10" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>10) Delete file/folder</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Windows:</strong> <code>Remove-Item file.txt</code> (folder: <code>-Recurse -Force</code>)<br />
                                        <strong style={{ color: '#1e293b' }}>macOS/Linux:</strong> <code>rm file.txt</code> (folder: <code>rm -rf folder</code>)<br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Removes files/folders.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`# Windows
Remove-Item node_modules -Recurse -Force

# Mac/Linux
rm -rf node_modules`}
                                    </pre>
                                </div>

                                <div id="cmd-11" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>11) View file contents</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Windows:</strong> <code>Get-Content package.json</code><br />
                                        <strong style={{ color: '#1e293b' }}>macOS/Linux:</strong> <code>cat package.json</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Prints file content in terminal.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`# PowerShell
Get-Content package.json

# Bash
cat package.json`}
                                    </pre>
                                </div>

                                {/* D) Search & inspect */}
                                <h4 style={{
                                    color: '#1e293b',
                                    fontSize: '22px',
                                    fontWeight: '600',
                                    marginTop: '32px',
                                    marginBottom: '20px'
                                }}>
                                    D) Search & inspect
                                </h4>

                                <div id="cmd-12" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>12) Search text inside files</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Windows:</strong> <code>Select-String -Path .\tests\*.ts -Pattern "login"</code><br />
                                        <strong style={{ color: '#1e293b' }}>macOS/Linux:</strong> <code>grep -R "login" ./tests</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Finds text occurrences (super useful for locating selectors/strings).
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`# PowerShell
Select-String -Path .\\tests\\*.ts -Pattern "login"

# Bash
grep -R "login" ./tests`}
                                    </pre>
                                </div>

                                <div id="cmd-13" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>13) Find files by name</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Windows:</strong> <code>Get-ChildItem -Recurse -Filter "*.spec.ts"</code><br />
                                        <strong style={{ color: '#1e293b' }}>macOS/Linux:</strong> <code>find . -name "*.spec.ts"</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Locate files in a project.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`# PowerShell
Get-ChildItem -Recurse -Filter "*.spec.ts"

# Bash
find . -name "*.spec.ts"`}
                                    </pre>
                                </div>

                                <div id="cmd-14" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>14) Show directory tree</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Windows:</strong> <code>tree /F</code><br />
                                        <strong style={{ color: '#1e293b' }}>macOS/Linux:</strong> <code>tree</code> (may require install) or <code>find . -maxdepth 2 -type d</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Shows project structure.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`# Windows
tree /F

# Mac/Linux
tree
# or
find . -maxdepth 2 -type d`}
                                    </pre>
                                </div>

                                {/* E) Permissions */}
                                <h4 style={{
                                    color: '#1e293b',
                                    fontSize: '22px',
                                    fontWeight: '600',
                                    marginTop: '32px',
                                    marginBottom: '20px'
                                }}>
                                    E) Permissions (macOS/Linux mainly)
                                </h4>

                                <div id="cmd-15" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>15) Make a script executable</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>macOS/Linux:</strong> <code>chmod +x script.sh</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Allows running a script.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`chmod +x script.sh
./run.sh`}
                                    </pre>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left', fontStyle: 'italic' }}>
                                        (Windows typically doesn't use chmod the same way.)
                                    </p>
                                </div>

                                {/* F) Environment variables */}
                                <h4 style={{
                                    color: '#1e293b',
                                    fontSize: '22px',
                                    fontWeight: '600',
                                    marginTop: '32px',
                                    marginBottom: '20px'
                                }}>
                                    F) Environment variables
                                </h4>

                                <div id="cmd-16" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>16) Read an environment variable</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Windows:</strong> <code>$env:NODE_ENV</code><br />
                                        <strong style={{ color: '#1e293b' }}>macOS/Linux:</strong> <code>echo $NODE_ENV</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Prints env var value.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`# PowerShell
$env:NODE_ENV

# Bash
echo $NODE_ENV`}
                                    </pre>
                                </div>

                                <div id="cmd-17" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>17) Set an env var for current terminal session</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Windows:</strong> <code>$env:BASE_URL="https://example.com"</code><br />
                                        <strong style={{ color: '#1e293b' }}>macOS/Linux:</strong> <code>export BASE_URL="https://example.com"</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Sets variables used by tests/config.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`# PowerShell
$env:BASE_URL="https://example.com"

# Bash
export BASE_URL="https://example.com"`}
                                    </pre>
                                </div>

                                <div id="cmd-18" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>18) Set env var just for one command</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Windows (PowerShell):</strong> <code>$env:BASE_URL="https://example.com"; npx playwright test</code><br />
                                        <strong style={{ color: '#1e293b' }}>macOS/Linux:</strong> <code>BASE_URL="https://example.com" npx playwright test</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Temporary for that run.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`# PowerShell
$env:BASE_URL="https://example.com"; npx playwright test

# Bash
BASE_URL="https://example.com" npx playwright test`}
                                    </pre>
                                </div>

                                {/* G) Processes & ports */}
                                <h4 style={{
                                    color: '#1e293b',
                                    fontSize: '22px',
                                    fontWeight: '600',
                                    marginTop: '32px',
                                    marginBottom: '20px'
                                }}>
                                    G) Processes & ports (debugging)
                                </h4>

                                <div id="cmd-19" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>19) List running processes</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Windows:</strong> <code>Get-Process</code><br />
                                        <strong style={{ color: '#1e293b' }}>macOS/Linux:</strong> <code>ps aux</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Shows running apps.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`# PowerShell
Get-Process

# Bash
ps aux`}
                                    </pre>
                                </div>

                                <div id="cmd-20" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>20) Kill a process by name</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Windows:</strong> <code>Stop-Process -Name node -Force</code><br />
                                        <strong style={{ color: '#1e293b' }}>macOS/Linux:</strong> <code>pkill -f node</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Force-stops a process.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`# PowerShell
Stop-Process -Name node -Force

# Bash
pkill -f node`}
                                    </pre>
                                </div>

                                <div id="cmd-21" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>21) Find what's using a port (e.g., 3000/8080)</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Windows:</strong> <code>netstat -ano | findstr :3000</code><br />
                                        <strong style={{ color: '#1e293b' }}>macOS/Linux:</strong> <code>lsof -i :3000</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Identifies process holding a port (common when app server is stuck).
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`# Windows
netstat -ano | findstr :3000

# Mac/Linux
lsof -i :3000`}
                                    </pre>
                                </div>

                                {/* H) Networking */}
                                <h4 style={{
                                    color: '#1e293b',
                                    fontSize: '22px',
                                    fontWeight: '600',
                                    marginTop: '32px',
                                    marginBottom: '20px'
                                }}>
                                    H) Networking / downloads
                                </h4>

                                <div id="cmd-22" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>22) Basic HTTP check / download (curl)</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Windows/macOS/Linux:</strong> <code>curl</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Calls URLs/APIs from terminal.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`# Check an API
curl https://api.example.com/health

# Download file
curl -L -o file.zip https://example.com/file.zip`}
                                    </pre>
                                </div>

                                {/* I) Archives */}
                                <h4 style={{
                                    color: '#1e293b',
                                    fontSize: '22px',
                                    fontWeight: '600',
                                    marginTop: '32px',
                                    marginBottom: '20px'
                                }}>
                                    I) Archives
                                </h4>

                                <div id="cmd-23" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>23) Zip a folder</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Windows (PowerShell):</strong> <code>Compress-Archive -Path .\tests -DestinationPath tests.zip</code><br />
                                        <strong style={{ color: '#1e293b' }}>macOS/Linux:</strong> <code>zip -r tests.zip ./tests</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Compress for sharing/submission.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`# PowerShell
Compress-Archive -Path .\\tests -DestinationPath tests.zip

# Bash
zip -r tests.zip ./tests`}
                                    </pre>
                                </div>

                                <div id="cmd-24" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>24) Unzip</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Windows:</strong> <code>Expand-Archive .\tests.zip -DestinationPath .\tests</code><br />
                                        <strong style={{ color: '#1e293b' }}>macOS/Linux:</strong> <code>unzip tests.zip -d ./tests</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Extract compressed packages.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`# PowerShell
Expand-Archive .\\tests.zip -DestinationPath .\\tests

# Bash
unzip tests.zip -d ./tests`}
                                    </pre>
                                </div>

                                {/* J) Git */}
                                <h4 style={{
                                    color: '#1e293b',
                                    fontSize: '22px',
                                    fontWeight: '600',
                                    marginTop: '32px',
                                    marginBottom: '20px'
                                }}>
                                    J) Git commands (daily)
                                </h4>

                                <div id="cmd-25" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>25) Clone repo</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Windows/macOS/Linux:</strong> <code>git clone &lt;repo_url&gt;</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Download project repo.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`git clone https://.../playwright-training.git`}
                                    </pre>
                                </div>

                                <div id="cmd-26" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>26) Status</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Command:</strong> <code>git status</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Shows changed files and branch state.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`git status`}
                                    </pre>
                                </div>

                                <div id="cmd-27" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>27) Create/switch branch</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Command:</strong> <code>git checkout -b feature/day2-lab</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Isolate work safely.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`git checkout -b feature/day2-lab`}
                                    </pre>
                                </div>

                                <div id="cmd-28" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>28) Stage + commit</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Commands:</strong> <code>git add .</code> and <code>git commit -m "message"</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Save your work with a message.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`git add .
git commit -m "Day 2: stable locators + fixtures"`}
                                    </pre>
                                </div>

                                <div id="cmd-29" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>29) Pull / push</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Commands:</strong> <code>git pull</code> and <code>git push -u origin branch</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Sync with remote.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`git pull
git push -u origin feature/day2-lab`}
                                    </pre>
                                </div>

                                {/* K) Node/NPM */}
                                <h4 style={{
                                    color: '#1e293b',
                                    fontSize: '22px',
                                    fontWeight: '600',
                                    marginTop: '32px',
                                    marginBottom: '20px'
                                }}>
                                    K) Node / NPM / NPX (daily)
                                </h4>

                                <div id="cmd-30" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>30) Check versions</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Commands:</strong> <code>node -v</code> and <code>npm -v</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Confirm Node toolchain.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`node -v
npm -v`}
                                    </pre>
                                </div>

                                <div id="cmd-31" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>31) Install dependencies</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Command:</strong> <code>npm install</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Installs packages from <code>package-lock.json</code>.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`npm install`}
                                    </pre>
                                </div>

                                <div id="cmd-32" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>32) Install a dev dependency</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Command:</strong> <code>npm i -D @playwright/test</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Adds Playwright test runner to the project.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`npm i -D @playwright/test`}
                                    </pre>
                                </div>

                                <div id="cmd-33" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>33) Run scripts</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Command:</strong> <code>npm run test</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Runs scripts from <code>package.json</code>.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`npm run test`}
                                    </pre>
                                </div>

                                <div id="cmd-34" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>34) Use npx (runs local binaries)</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Command:</strong> <code>npx playwright --version</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Runs Playwright installed in the project (no global install needed).
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`npx playwright --version`}
                                    </pre>
                                </div>

                                {/* L) Playwright */}
                                <h4 style={{
                                    color: '#1e293b',
                                    fontSize: '22px',
                                    fontWeight: '600',
                                    marginTop: '32px',
                                    marginBottom: '20px'
                                }}>
                                    L) Playwright commands (daily)
                                </h4>

                                <div id="cmd-35" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>35) Initialize Playwright project</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Command:</strong> <code>npm init playwright@latest</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Scaffolds Playwright test project.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`npm init playwright@latest`}
                                    </pre>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left', fontStyle: 'italic' }}>
                                        Example: Choose TypeScript, add GitHub Actions if needed.
                                    </p>
                                </div>

                                <div id="cmd-36" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>36) Install browsers</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Command:</strong> <code>npx playwright install</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Installs Playwright-managed browsers.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`npx playwright install`}
                                    </pre>
                                </div>

                                <div id="cmd-37" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>37) Run all tests</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Command:</strong> <code>npx playwright test</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Run entire suite.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`npx playwright test`}
                                    </pre>
                                </div>

                                <div id="cmd-38" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>38) Run a specific file</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Command:</strong> <code>npx playwright test tests/login.spec.ts</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Execute only one spec file.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`npx playwright test tests/login.spec.ts`}
                                    </pre>
                                </div>

                                <div id="cmd-39" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>39) Run one test by name (grep)</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Command:</strong> <code>npx playwright test -g "should login"</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Run tests matching name.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`npx playwright test -g "should login"`}
                                    </pre>
                                </div>

                                <div id="cmd-40" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>40) Run by tag (if you use tags in titles or annotations)</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Command:</strong> <code>npx playwright test -g "@smoke"</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Run smoke/regression subsets.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`npx playwright test -g "@smoke"`}
                                    </pre>
                                </div>

                                <div id="cmd-41" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>41) Headed mode (see browser)</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Command:</strong> <code>npx playwright test --headed</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Run with visible browser.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`npx playwright test --headed`}
                                    </pre>
                                </div>

                                <div id="cmd-42" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>42) Debug mode</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Command:</strong> <code>npx playwright test --debug</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Opens Playwright Inspector, step through.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`npx playwright test --debug`}
                                    </pre>
                                </div>

                                <div id="cmd-43" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>43) Show last HTML report</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Command:</strong> <code>npx playwright show-report</code><br />
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Opens the report from the last run.
                                    </p>
                                    <pre style={codeBlockStyles.dark}>
{`npx playwright show-report`}
                                    </pre>
                                </div>

                                <div id="cmd-44" style={{ marginBottom: '30px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={itemHeaderStyles}>44) Run with trace enabled (commonly via config)</h4>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left' }}>
                                        <strong style={{ color: '#1e293b' }}>Definition:</strong> Usually configured in <code>playwright.config.ts</code> (trace on first retry / on). Captures trace for debugging failures.
                                    </p>
                                    <p style={{ marginBottom: '12px', color: '#475569', lineHeight: '1.6', textAlign: 'left', fontStyle: 'italic' }}>
                                        Example (concept): After a failed run, open trace from report.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* PDF Download Section */}
            <PdfDownload
                pdfPath="LinuxWindosMacCommand.pdf"
                title="📥 Download Terminal Commands PDF Handout"
                description="Download the complete terminal commands checklist for Windows, macOS, and Linux (PDF format)"
                downloadFileName="LinuxWindosMacCommand.pdf"
            />

            <section>
                <div>
                    <h3 className=''> CMDER Install for WINDOWS</h3>
                    <p>
                        <strong>What is CMDER: </strong>
                        Cmder is a software package created out of pure frustration over the absence of nice console emulators on Windows. It is based on amazing software, and spiced up with the Monokai color scheme and a custom prompt layout, looking sexy from the start.
                    </p>
                    <ul>
                        <li><li>Navigate to the <a href={link.CMDER} target="_blank" rel="noopener noreferrer">https://cmder.net/</a></li></li>
                        <li>Click on "Download Full"</li>
                        <li>Double click on the installed software</li>
                        <li>Click, Click & Done!</li>
                    </ul>
                </div>
            </section>
            <hr />
            <section>
                <div className='tc'>
                    <img className='pr4 pt4 pb4 linux-logo' src={getImageSrc(linuxCheatSheet)} alt='Linux Logo'/>
                </div>
            </section>
            <div>
            </div>
            <section className='pt4'>
                </section>
        </div>
    )
}
export default ResLinux;
