import React, { useState } from 'react';
import link from '../../../utilities/links.json';
import GIT_LOGO from '../../../images/tabs/gitGitHub.png';
import  GIT_CHEATSHEET from '../../../images/tabs/gitCheatSheet.jpeg';
import PdfDownload from '../../shared/PdfDownload';
import { scrollToGitCommand } from '../../../utils/scrollHelpers';
import { checklistGridStyles, checklistLinkStyles } from '../../../utils/globalStyles';

import { getImageSrc } from '../../../utils/getImageSrc';
import { Grid, Cell } from 'react-mdl';

const ResGit = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    return(
        <div className='page-tab-body' style={{ height: 'auto', minHeight: 'auto', paddingBottom: '100px', marginBottom: '40px' }}>
            <section>
                <div>
                    <h3>GIT/GITHUB</h3>
                </div>
            </section>
            <section>
                <div className='tc'>
                    <img className='pr4 pt4 pb4 sql-logo' src={getImageSrc(GIT_LOGO)} alt='SQL Logo'/>
                </div>
                <div className='tc pt3'>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red' href={link.git} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={getImageSrc(link.GITHUB_ICON)} alt='github log' /> 
                    GIT on GitHub                 
                </a>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-green' href={link.gitHubCli} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={link.GITHUB_ICON} alt='github log' /> 
                    GitHub Manual              
                </a>
            </div>
          </section>
          <section>
                <div>
                    <h3>Introduction to GIT & GITHUB</h3>
                    <p>
                        <strong>GIT:</strong> Git is a version control system that lets you manage and keep track of your source code history.
                        <br />
                        <strong>GitHub:</strong> GitHub is a cloud-based hosting service that lets you manage Git repositories. If you have open-source projects that use Git, then GitHub is designed to help you better manage them.
                    </p>
                </div>
            </section>
            <hr />
            <section>
                <Grid className="border">
                    <Cell className='pl4' col={6}>
                        <div>
                            <h3 className=''> GIT for MAC</h3>
                            <h5> Step 1: Download & Install GIT</h5>
                            <ul>
                                <li>Navigate to the <a href={link.gtiDownload} target="_blank" rel="noopener noreferrer">https://git-scm.com/</a></li>
                                <li>Clik on <strong>Download For MAC</strong></li>
                                <li>Follow the Instruction</li>
                            </ul>
                        </div>
                        <div>
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
                            <h3 className=''> GIT for WINDOWS</h3>
                            <h5> Step 1: Download & Install GIT</h5>
                            <ul>
                                <li>Navigate to the <a href={link.gtiDownload} target="_blank" rel="noopener noreferrer">https://git-scm.com/</a></li>
                                <li>Clik on <strong>Download For WINDOWS</strong></li>
                                <li>Double Click on the installed software</li>
                                <li>Git For Windows {'>'} Yes</li>
                                <li>
                                    Next {'>'} Next {'>'} Next {'>'} Next {'>'} Next {'>'}<br />
                                    Next {'>'} Next {'>'} Next {'>'} Next {'>'} <br />
                                    Select "Use Windows default console window" {'>'} Next {'>'} <br />
                                    Next {'>'} Next {'>'} Next {'>'} Install {'>'} Finish <br />
                                    Validate: {'>'} Right Click on DeskTop {'>'} Git GUI Here & Git Bash Here <br />
                                    That's mean Git Successfully Installed.
                                </li>
                            </ul>
                        </div>
                    </Cell>
                    <Cell className='pl4' col={6}>
                    <div>
                            <h3 className=''> GITHUB for MAC & WINDOWS</h3>
                            <h5> Step 1: Create a account</h5>
                            <ul>
                                <li>Navigate to the <a href={link.gitHub} target="_blank" rel="noopener noreferrer">https://github.com/</a></li>
                                <li>Clik on <strong>SIGN UP</strong></li>
                                <li>Follow the Instruction</li>
                            </ul>
                        </div>
                        <div>
                            <h5> Step 2: Create a SSH Key</h5>
                            <ul>
                                <li>Navigate to the <a href={link.SSHKYGEN} target="_blank" rel="noopener noreferrer">Create a SSH KEY</a></li>
                                <li>Follow the Instruction</li>
                            </ul>
                        </div>
                        <div>
                            <h5> Step 3: Add SSH Key into GITHUB Account</h5>
                            <ul>
                                <li>Log into the GITHUB account</li>
                                <li>Click on Profile</li>
                                <li>Click on Settings</li>
                                <li>Click on SSH and GPG Keys</li>
                                <li>Click on New SSH Key</li>
                                <li>Past the SSH Key</li>
                                <li>Save</li>
                            </ul>
                        </div>

                    </Cell>
                </Grid>
            </section>

            {/* PDF Download Section */}
            <PdfDownload
                pdfPath="Git_Commands_Playwright_TS_Course_Handout.pdf"
                title="📥 Download Git Commands Handout"
                description="Download the complete Git Commands handout for Playwright TypeScript Course"
            />

            {/* Git Command Checklist Section - Expandable/Collapsible */}
            <section style={{ marginBottom: '40px' }}>
                <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '24px',
                    marginBottom: '24px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    border: '1px solid #e5e7eb'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        marginBottom: isExpanded ? '20px' : '0'
                    }}
                    onClick={() => setIsExpanded(!isExpanded)}
                    >
                        <h3 style={{ 
                            color: '#00416A', 
                            fontSize: '24px', 
                            margin: 0,
                            fontWeight: '600'
                        }}>
                            Git Command Checklist (Playwright TS Course)
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
                                fontSize: '16px', 
                                color: '#64748b',
                                marginBottom: '24px',
                                lineHeight: '1.6'
                            }}>
                                Below is an <strong>end-to-end Git command checklist</strong> your students can use <strong>throughout the Playwright TypeScript course</strong>. First is the <strong>checklist</strong>, then <strong>each command explained with an example</strong> (one-by-one).
                            </p>

                            {/* Checklist Grid */}
                            <div style={{
                                display: 'grid',
                                ...checklistGridStyles.modern,
                                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                gap: '16px',
                                marginBottom: '32px'
                            }}>
                                {[
                                    { 
                                        title: 'Setup & Identity', 
                                        items: [
                                            { text: 'Check Git installed', id: 'git-1' },
                                            { text: 'Configure name/email (once)', id: 'git-2' },
                                            { text: 'Generate/setup SSH key (recommended) or use HTTPS', id: 'git-3' }
                                        ]
                                    },
                                    { 
                                        title: 'Start Working (Daily)', 
                                        items: [
                                            { text: 'Clone repo', id: 'git-4' },
                                            { text: 'Enter the repo folder', id: 'git-5' },
                                            { text: 'Check remote URLs', id: 'git-6' },
                                            { text: 'See current branch', id: 'git-7' },
                                            { text: 'Create a feature branch', id: 'git-8' },
                                            { text: 'Check status', id: 'git-9' },
                                            { text: 'Pull latest changes (safe way)', id: 'git-10' },
                                            { text: 'Add changes', id: 'git-11' },
                                            { text: 'Commit changes', id: 'git-12' },
                                            { text: 'Push branch', id: 'git-13' }
                                        ]
                                    },
                                    { 
                                        title: 'Collaboration', 
                                        items: [
                                            { text: 'Update your branch from main', id: 'git-14' },
                                            { text: 'Resolve merge conflicts', id: 'git-15' },
                                            { text: 'Create Pull Request (PR) (on GitHub/Azure DevOps/Bitbucket UI)', id: 'git-15' }
                                        ]
                                    },
                                    { 
                                        title: 'Housekeeping', 
                                        items: [
                                            { text: 'View history / logs', id: 'git-16' },
                                            { text: 'Undo local mistakes (unstage, revert file, amend commit)', id: 'git-17' },
                                            { text: 'Create a tag (optional milestone)', id: 'git-18' },
                                            { text: 'Delete branches (local/remote)', id: 'git-19' }
                                        ]
                                    }
                                ].map((section, idx) => (
                                    <div key={idx} style={{
                                        backgroundColor: '#f8fafc',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '8px',
                                        padding: '20px',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>
                                        <h4 style={{
                                            color: '#00416A',
                                            fontSize: '18px',
                                            fontWeight: '600',
                                            marginBottom: '16px',
                                            paddingBottom: '12px',
                                            borderBottom: '2px solid #e5e7eb'
                                        }}>
                                            {section.title}
                                        </h4>
                                        <ul style={{ 
                                            lineHeight: '1.8', 
                                            fontSize: '14px',
                                            color: '#475569',
                                            paddingLeft: '20px',
                                            margin: 0,
                                            flex: 1
                                        }}>
                                            {section.items.map((item, itemIdx) => (
                                                <li key={itemIdx} style={{ marginBottom: '6px' }}>
                                                    <a
                                                        href={`#${item.id}`}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            scrollToGitCommand(item.id);
                                                        }}
                                                        style={checklistLinkStyles.base}
                                                        onMouseEnter={(e) => {
                                                            e.target.style.color = checklistLinkStyles.hover.color;
                                                            e.target.style.borderBottomColor = checklistLinkStyles.hover.borderBottomColor;
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.target.style.color = checklistLinkStyles.base.color;
                                                            e.target.style.borderBottomColor = checklistLinkStyles.base.borderBottomColor;
                                                        }}
                                                    >
                                                        {item.text}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            {/* Commands + Definitions + Examples */}
                            <div style={{ marginTop: '40px' }}>
                                <h3 style={{ 
                                    color: '#00416A', 
                                    fontSize: '24px', 
                                    marginBottom: '24px',
                                    fontWeight: '600'
                                }}>
                                    Commands + Definitions + Examples (One by One)
                                </h3>

                                {/* Command 1 */}
                                <div id="git-1" style={{ marginBottom: '32px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#00416A' }}>
                                        1) Check Git installed
                                    </h4>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Command:</strong> <code style={{ backgroundColor: '#f4f4f4', padding: '2px 6px', borderRadius: '4px' }}>git --version</code>
                                    </p>
                                    <p style={{ marginBottom: '12px', color: '#475569' }}>
                                        <strong>Definition:</strong> Confirms Git is installed and shows the version.
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Example:</strong>
                                    </p>
                                    <pre style={{
                                        backgroundColor: '#1e293b',
                                        color: '#e2e8f0',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        overflow: 'auto',
                                        fontSize: '14px',
                                        fontFamily: 'Monaco, "Courier New", monospace',
                                        lineHeight: '1.6',
                                        border: '1px solid #334155'
                                    }}>
{`git --version`}
                                    </pre>
                                </div>

                                {/* Command 2 */}
                                <div id="git-2" style={{ marginBottom: '32px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#00416A' }}>
                                        2) Configure your identity (one-time)
                                    </h4>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Commands:</strong>
                                    </p>
                                    <pre style={{
                                        backgroundColor: '#1e293b',
                                        color: '#e2e8f0',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        overflow: 'auto',
                                        fontSize: '14px',
                                        fontFamily: 'Monaco, "Courier New", monospace',
                                        lineHeight: '1.6',
                                        border: '1px solid #334155',
                                        marginBottom: '12px'
                                    }}>
{`git config --global user.name "Your Name"
git config --global user.email "you@email.com"`}
                                    </pre>
                                    <p style={{ marginBottom: '12px', color: '#475569' }}>
                                        <strong>Definition:</strong> Sets your identity so commits show correct author info.
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Example:</strong>
                                    </p>
                                    <pre style={{
                                        backgroundColor: '#1e293b',
                                        color: '#e2e8f0',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        overflow: 'auto',
                                        fontSize: '14px',
                                        fontFamily: 'Monaco, "Courier New", monospace',
                                        lineHeight: '1.6',
                                        border: '1px solid #334155'
                                    }}>
{`git config --global user.name "MD Zaman"
git config --global user.email "mdzaman@example.com"`}
                                    </pre>
                                </div>

                                {/* Command 3 */}
                                <div id="git-3" style={{ marginBottom: '32px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#00416A' }}>
                                        3) (Recommended) Set up SSH authentication
                                    </h4>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Command:</strong> <code style={{ backgroundColor: '#f4f4f4', padding: '2px 6px', borderRadius: '4px' }}>ssh-keygen -t ed25519 -C "you@email.com"</code>
                                    </p>
                                    <p style={{ marginBottom: '12px', color: '#475569' }}>
                                        <strong>Definition:</strong> Creates an SSH key to securely connect to GitHub/Azure DevOps/Bitbucket without typing password repeatedly.
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Example:</strong>
                                    </p>
                                    <pre style={{
                                        backgroundColor: '#1e293b',
                                        color: '#e2e8f0',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        overflow: 'auto',
                                        fontSize: '14px',
                                        fontFamily: 'Monaco, "Courier New", monospace',
                                        lineHeight: '1.6',
                                        border: '1px solid #334155'
                                    }}>
{`ssh-keygen -t ed25519 -C "mdzaman@example.com"

# Then view public key:
cat ~/.ssh/id_ed25519.pub`}
                                    </pre>
                                </div>

                                {/* Command 4 */}
                                <div id="git-4" style={{ marginBottom: '32px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#00416A' }}>
                                        4) Clone the training repo
                                    </h4>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Command:</strong> <code style={{ backgroundColor: '#f4f4f4', padding: '2px 6px', borderRadius: '4px' }}>git clone &lt;repo_url&gt;</code>
                                    </p>
                                    <p style={{ marginBottom: '12px', color: '#475569' }}>
                                        <strong>Definition:</strong> Downloads the remote repository to your computer.
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Example:</strong>
                                    </p>
                                    <pre style={{
                                        backgroundColor: '#1e293b',
                                        color: '#e2e8f0',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        overflow: 'auto',
                                        fontSize: '14px',
                                        fontFamily: 'Monaco, "Courier New", monospace',
                                        lineHeight: '1.6',
                                        border: '1px solid #334155'
                                    }}>
{`git clone git@github.com:org/playwright-ts-training.git`}
                                    </pre>
                                </div>

                                {/* Command 5 */}
                                <div id="git-5" style={{ marginBottom: '32px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#00416A' }}>
                                        5) Enter the repo folder
                                    </h4>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Command:</strong> <code style={{ backgroundColor: '#f4f4f4', padding: '2px 6px', borderRadius: '4px' }}>cd &lt;folder&gt;</code>
                                    </p>
                                    <p style={{ marginBottom: '12px', color: '#475569' }}>
                                        <strong>Definition:</strong> Moves into the cloned project directory.
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Example:</strong>
                                    </p>
                                    <pre style={{
                                        backgroundColor: '#1e293b',
                                        color: '#e2e8f0',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        overflow: 'auto',
                                        fontSize: '14px',
                                        fontFamily: 'Monaco, "Courier New", monospace',
                                        lineHeight: '1.6',
                                        border: '1px solid #334155'
                                    }}>
{`cd playwright-ts-training`}
                                    </pre>
                                </div>

                                {/* Command 6 */}
                                <div id="git-6" style={{ marginBottom: '32px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#00416A' }}>
                                        6) Check remote URLs
                                    </h4>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Command:</strong> <code style={{ backgroundColor: '#f4f4f4', padding: '2px 6px', borderRadius: '4px' }}>git remote -v</code>
                                    </p>
                                    <p style={{ marginBottom: '12px', color: '#475569' }}>
                                        <strong>Definition:</strong> Shows where the repo is pulling/pushing from.
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Example:</strong>
                                    </p>
                                    <pre style={{
                                        backgroundColor: '#1e293b',
                                        color: '#e2e8f0',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        overflow: 'auto',
                                        fontSize: '14px',
                                        fontFamily: 'Monaco, "Courier New", monospace',
                                        lineHeight: '1.6',
                                        border: '1px solid #334155'
                                    }}>
{`git remote -v`}
                                    </pre>
                                </div>

                                {/* Command 7 */}
                                <div id="git-7" style={{ marginBottom: '32px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#00416A' }}>
                                        7) See current branch
                                    </h4>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Command:</strong> <code style={{ backgroundColor: '#f4f4f4', padding: '2px 6px', borderRadius: '4px' }}>git branch</code>
                                    </p>
                                    <p style={{ marginBottom: '12px', color: '#475569' }}>
                                        <strong>Definition:</strong> Lists local branches and shows the current one.
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Example:</strong>
                                    </p>
                                    <pre style={{
                                        backgroundColor: '#1e293b',
                                        color: '#e2e8f0',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        overflow: 'auto',
                                        fontSize: '14px',
                                        fontFamily: 'Monaco, "Courier New", monospace',
                                        lineHeight: '1.6',
                                        border: '1px solid #334155'
                                    }}>
{`git branch`}
                                    </pre>
                                </div>

                                {/* Command 8 */}
                                <div id="git-8" style={{ marginBottom: '32px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#00416A' }}>
                                        8) Create a new branch (daily work)
                                    </h4>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Command:</strong> <code style={{ backgroundColor: '#f4f4f4', padding: '2px 6px', borderRadius: '4px' }}>git checkout -b &lt;branch_name&gt;</code>
                                    </p>
                                    <p style={{ marginBottom: '12px', color: '#475569' }}>
                                        <strong>Definition:</strong> Creates and switches to a new branch.
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Example (use a consistent naming style):</strong>
                                    </p>
                                    <pre style={{
                                        backgroundColor: '#1e293b',
                                        color: '#e2e8f0',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        overflow: 'auto',
                                        fontSize: '14px',
                                        fontFamily: 'Monaco, "Courier New", monospace',
                                        lineHeight: '1.6',
                                        border: '1px solid #334155'
                                    }}>
{`git checkout -b day02-locators-and-fixtures`}
                                    </pre>
                                </div>

                                {/* Command 9 */}
                                <div id="git-9" style={{ marginBottom: '32px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#00416A' }}>
                                        9) Check what changed
                                    </h4>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Command:</strong> <code style={{ backgroundColor: '#f4f4f4', padding: '2px 6px', borderRadius: '4px' }}>git status</code>
                                    </p>
                                    <p style={{ marginBottom: '12px', color: '#475569' }}>
                                        <strong>Definition:</strong> Shows modified/new files and what's staged for commit.
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Example:</strong>
                                    </p>
                                    <pre style={{
                                        backgroundColor: '#1e293b',
                                        color: '#e2e8f0',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        overflow: 'auto',
                                        fontSize: '14px',
                                        fontFamily: 'Monaco, "Courier New", monospace',
                                        lineHeight: '1.6',
                                        border: '1px solid #334155'
                                    }}>
{`git status`}
                                    </pre>
                                </div>

                                {/* Command 10 */}
                                <div id="git-10" style={{ marginBottom: '32px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#00416A' }}>
                                        10) Pull latest changes (safe recommended approach)
                                    </h4>
                                    <p style={{ marginBottom: '12px', color: '#475569' }}>
                                        <strong>Option A (simple):</strong>
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Command:</strong> <code style={{ backgroundColor: '#f4f4f4', padding: '2px 6px', borderRadius: '4px' }}>git pull</code>
                                    </p>
                                    <p style={{ marginBottom: '12px', color: '#475569' }}>
                                        <strong>Definition:</strong> Fetches and merges latest changes from remote branch into your current branch.
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Example:</strong>
                                    </p>
                                    <pre style={{
                                        backgroundColor: '#1e293b',
                                        color: '#e2e8f0',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        overflow: 'auto',
                                        fontSize: '14px',
                                        fontFamily: 'Monaco, "Courier New", monospace',
                                        lineHeight: '1.6',
                                        border: '1px solid #334155',
                                        marginBottom: '16px'
                                    }}>
{`git pull`}
                                    </pre>
                                    <p style={{ marginBottom: '12px', color: '#475569' }}>
                                        <strong>Option B (recommended for clean history):</strong>
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Command:</strong> <code style={{ backgroundColor: '#f4f4f4', padding: '2px 6px', borderRadius: '4px' }}>git pull --rebase</code>
                                    </p>
                                    <p style={{ marginBottom: '12px', color: '#475569' }}>
                                        <strong>Definition:</strong> Fetches changes and replays your commits on top (reduces merge commits).
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Example:</strong>
                                    </p>
                                    <pre style={{
                                        backgroundColor: '#1e293b',
                                        color: '#e2e8f0',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        overflow: 'auto',
                                        fontSize: '14px',
                                        fontFamily: 'Monaco, "Courier New", monospace',
                                        lineHeight: '1.6',
                                        border: '1px solid #334155'
                                    }}>
{`git pull --rebase`}
                                    </pre>
                                </div>

                                {/* Command 11 */}
                                <div id="git-11" style={{ marginBottom: '32px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#00416A' }}>
                                        11) Stage files for commit
                                    </h4>
                                    <p style={{ marginBottom: '12px', color: '#475569' }}>
                                        <strong>Stage one file:</strong>
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Command:</strong> <code style={{ backgroundColor: '#f4f4f4', padding: '2px 6px', borderRadius: '4px' }}>git add &lt;file&gt;</code>
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Example:</strong>
                                    </p>
                                    <pre style={{
                                        backgroundColor: '#1e293b',
                                        color: '#e2e8f0',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        overflow: 'auto',
                                        fontSize: '14px',
                                        fontFamily: 'Monaco, "Courier New", monospace',
                                        lineHeight: '1.6',
                                        border: '1px solid #334155',
                                        marginBottom: '16px'
                                    }}>
{`git add tests/login.spec.ts`}
                                    </pre>
                                    <p style={{ marginBottom: '12px', color: '#475569' }}>
                                        <strong>Stage everything:</strong>
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Command:</strong> <code style={{ backgroundColor: '#f4f4f4', padding: '2px 6px', borderRadius: '4px' }}>git add .</code>
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Example:</strong>
                                    </p>
                                    <pre style={{
                                        backgroundColor: '#1e293b',
                                        color: '#e2e8f0',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        overflow: 'auto',
                                        fontSize: '14px',
                                        fontFamily: 'Monaco, "Courier New", monospace',
                                        lineHeight: '1.6',
                                        border: '1px solid #334155'
                                    }}>
{`git add .`}
                                    </pre>
                                </div>

                                {/* Command 12 */}
                                <div id="git-12" style={{ marginBottom: '32px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#00416A' }}>
                                        12) Commit your changes
                                    </h4>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Command:</strong> <code style={{ backgroundColor: '#f4f4f4', padding: '2px 6px', borderRadius: '4px' }}>git commit -m "message"</code>
                                    </p>
                                    <p style={{ marginBottom: '12px', color: '#475569' }}>
                                        <strong>Definition:</strong> Saves a snapshot of staged changes with a message.
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Example (use meaningful messages):</strong>
                                    </p>
                                    <pre style={{
                                        backgroundColor: '#1e293b',
                                        color: '#e2e8f0',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        overflow: 'auto',
                                        fontSize: '14px',
                                        fontFamily: 'Monaco, "Courier New", monospace',
                                        lineHeight: '1.6',
                                        border: '1px solid #334155'
                                    }}>
{`git commit -m "Add stable locators and login fixture"`}
                                    </pre>
                                </div>

                                {/* Command 13 */}
                                <div id="git-13" style={{ marginBottom: '32px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#00416A' }}>
                                        13) Push your branch to remote
                                    </h4>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Command:</strong> <code style={{ backgroundColor: '#f4f4f4', padding: '2px 6px', borderRadius: '4px' }}>git push -u origin &lt;branch_name&gt;</code>
                                    </p>
                                    <p style={{ marginBottom: '12px', color: '#475569' }}>
                                        <strong>Definition:</strong> Uploads your branch to remote and sets upstream tracking.
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Example:</strong>
                                    </p>
                                    <pre style={{
                                        backgroundColor: '#1e293b',
                                        color: '#e2e8f0',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        overflow: 'auto',
                                        fontSize: '14px',
                                        fontFamily: 'Monaco, "Courier New", monospace',
                                        lineHeight: '1.6',
                                        border: '1px solid #334155'
                                    }}>
{`git push -u origin day02-locators-and-fixtures`}
                                    </pre>
                                </div>

                                {/* Command 14 */}
                                <div id="git-14" style={{ marginBottom: '32px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#00416A' }}>
                                        14) Update your branch with latest main (common during course)
                                    </h4>
                                    <p style={{ marginBottom: '12px', color: '#475569' }}>
                                        <strong>Step 1: Fetch latest</strong>
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Command:</strong> <code style={{ backgroundColor: '#f4f4f4', padding: '2px 6px', borderRadius: '4px' }}>git fetch origin</code>
                                    </p>
                                    <p style={{ marginBottom: '12px', color: '#475569' }}>
                                        <strong>Definition:</strong> Downloads remote changes without merging.
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Example:</strong>
                                    </p>
                                    <pre style={{
                                        backgroundColor: '#1e293b',
                                        color: '#e2e8f0',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        overflow: 'auto',
                                        fontSize: '14px',
                                        fontFamily: 'Monaco, "Courier New", monospace',
                                        lineHeight: '1.6',
                                        border: '1px solid #334155',
                                        marginBottom: '16px'
                                    }}>
{`git fetch origin`}
                                    </pre>
                                    <p style={{ marginBottom: '12px', color: '#475569' }}>
                                        <strong>Step 2: Rebase your branch on main (recommended)</strong>
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Command:</strong> <code style={{ backgroundColor: '#f4f4f4', padding: '2px 6px', borderRadius: '4px' }}>git rebase origin/main</code>
                                    </p>
                                    <p style={{ marginBottom: '12px', color: '#475569' }}>
                                        <strong>Definition:</strong> Moves your commits on top of the latest main branch.
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Example:</strong>
                                    </p>
                                    <pre style={{
                                        backgroundColor: '#1e293b',
                                        color: '#e2e8f0',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        overflow: 'auto',
                                        fontSize: '14px',
                                        fontFamily: 'Monaco, "Courier New", monospace',
                                        lineHeight: '1.6',
                                        border: '1px solid #334155'
                                    }}>
{`git rebase origin/main

# (If your default branch is master, use origin/master)`}
                                    </pre>
                                </div>

                                {/* Command 15 */}
                                <div id="git-15" style={{ marginBottom: '32px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#00416A' }}>
                                        15) Resolve conflicts (when Git stops)
                                    </h4>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Commands:</strong>
                                    </p>
                                    <p style={{ marginBottom: '12px', color: '#475569' }}>
                                        <code style={{ backgroundColor: '#f4f4f4', padding: '2px 6px', borderRadius: '4px' }}>git status</code> (see conflicted files)<br />
                                        Edit files → remove conflict markers → then:<br />
                                        <code style={{ backgroundColor: '#f4f4f4', padding: '2px 6px', borderRadius: '4px' }}>git add &lt;file&gt;</code><br />
                                        Continue rebase: <code style={{ backgroundColor: '#f4f4f4', padding: '2px 6px', borderRadius: '4px' }}>git rebase --continue</code>
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Example:</strong>
                                    </p>
                                    <pre style={{
                                        backgroundColor: '#1e293b',
                                        color: '#e2e8f0',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        overflow: 'auto',
                                        fontSize: '14px',
                                        fontFamily: 'Monaco, "Courier New", monospace',
                                        lineHeight: '1.6',
                                        border: '1px solid #334155'
                                    }}>
{`git status
# open and fix conflicts in VS Code
git add playwright.config.ts
git rebase --continue`}
                                    </pre>
                                </div>

                                {/* Command 16 */}
                                <div id="git-16" style={{ marginBottom: '32px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#00416A' }}>
                                        16) View commit history
                                    </h4>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Command:</strong> <code style={{ backgroundColor: '#f4f4f4', padding: '2px 6px', borderRadius: '4px' }}>git log --oneline --decorate --graph --all</code>
                                    </p>
                                    <p style={{ marginBottom: '12px', color: '#475569' }}>
                                        <strong>Definition:</strong> Shows a readable history with branches.
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Example:</strong>
                                    </p>
                                    <pre style={{
                                        backgroundColor: '#1e293b',
                                        color: '#e2e8f0',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        overflow: 'auto',
                                        fontSize: '14px',
                                        fontFamily: 'Monaco, "Courier New", monospace',
                                        lineHeight: '1.6',
                                        border: '1px solid #334155'
                                    }}>
{`git log --oneline --decorate --graph --all`}
                                    </pre>
                                </div>

                                {/* Command 17 */}
                                <div id="git-17" style={{ marginBottom: '32px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#00416A' }}>
                                        17) Undo common mistakes (very important)
                                    </h4>
                                    <p style={{ marginBottom: '12px', color: '#475569' }}>
                                        <strong>Unstage a file (keep changes):</strong>
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Command:</strong> <code style={{ backgroundColor: '#f4f4f4', padding: '2px 6px', borderRadius: '4px' }}>git restore --staged &lt;file&gt;</code>
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Example:</strong>
                                    </p>
                                    <pre style={{
                                        backgroundColor: '#1e293b',
                                        color: '#e2e8f0',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        overflow: 'auto',
                                        fontSize: '14px',
                                        fontFamily: 'Monaco, "Courier New", monospace',
                                        lineHeight: '1.6',
                                        border: '1px solid #334155',
                                        marginBottom: '16px'
                                    }}>
{`git restore --staged tests/login.spec.ts`}
                                    </pre>
                                    <p style={{ marginBottom: '12px', color: '#475569' }}>
                                        <strong>Discard local changes in a file (danger):</strong>
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Command:</strong> <code style={{ backgroundColor: '#f4f4f4', padding: '2px 6px', borderRadius: '4px' }}>git restore &lt;file&gt;</code>
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Example:</strong>
                                    </p>
                                    <pre style={{
                                        backgroundColor: '#1e293b',
                                        color: '#e2e8f0',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        overflow: 'auto',
                                        fontSize: '14px',
                                        fontFamily: 'Monaco, "Courier New", monospace',
                                        lineHeight: '1.6',
                                        border: '1px solid #334155',
                                        marginBottom: '16px'
                                    }}>
{`git restore tests/login.spec.ts`}
                                    </pre>
                                    <p style={{ marginBottom: '12px', color: '#475569' }}>
                                        <strong>Amend last commit (fix message or add missed files):</strong>
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Commands:</strong>
                                    </p>
                                    <pre style={{
                                        backgroundColor: '#1e293b',
                                        color: '#e2e8f0',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        overflow: 'auto',
                                        fontSize: '14px',
                                        fontFamily: 'Monaco, "Courier New", monospace',
                                        lineHeight: '1.6',
                                        border: '1px solid #334155'
                                    }}>
{`git add .
git commit --amend -m "Improve locator strategy and add fixtures"`}
                                    </pre>
                                </div>

                                {/* Command 18 */}
                                <div id="git-18" style={{ marginBottom: '32px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#00416A' }}>
                                        18) Create a tag (optional milestone)
                                    </h4>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Command:</strong> <code style={{ backgroundColor: '#f4f4f4', padding: '2px 6px', borderRadius: '4px' }}>git tag -a v1.0 -m "Course milestone"</code>
                                    </p>
                                    <p style={{ marginBottom: '12px', color: '#475569' }}>
                                        <strong>Definition:</strong> Marks a point in history (useful after Week 4/8).
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Example:</strong>
                                    </p>
                                    <pre style={{
                                        backgroundColor: '#1e293b',
                                        color: '#e2e8f0',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        overflow: 'auto',
                                        fontSize: '14px',
                                        fontFamily: 'Monaco, "Courier New", monospace',
                                        lineHeight: '1.6',
                                        border: '1px solid #334155'
                                    }}>
{`git tag -a v1.0 -m "End of Playwright Fundamentals"
git push origin v1.0`}
                                    </pre>
                                </div>

                                {/* Command 19 */}
                                <div id="git-19" style={{ marginBottom: '32px', scrollMarginTop: '100px', transition: 'background-color 0.3s ease' }}>
                                    <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#00416A' }}>
                                        19) Delete branches after PR merge
                                    </h4>
                                    <p style={{ marginBottom: '12px', color: '#475569' }}>
                                        <strong>Delete local branch:</strong>
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Command:</strong> <code style={{ backgroundColor: '#f4f4f4', padding: '2px 6px', borderRadius: '4px' }}>git branch -d &lt;branch&gt;</code>
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Example:</strong>
                                    </p>
                                    <pre style={{
                                        backgroundColor: '#1e293b',
                                        color: '#e2e8f0',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        overflow: 'auto',
                                        fontSize: '14px',
                                        fontFamily: 'Monaco, "Courier New", monospace',
                                        lineHeight: '1.6',
                                        border: '1px solid #334155',
                                        marginBottom: '16px'
                                    }}>
{`git branch -d day02-locators-and-fixtures`}
                                    </pre>
                                    <p style={{ marginBottom: '12px', color: '#475569' }}>
                                        <strong>Delete remote branch:</strong>
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Command:</strong> <code style={{ backgroundColor: '#f4f4f4', padding: '2px 6px', borderRadius: '4px' }}>git push origin --delete &lt;branch&gt;</code>
                                    </p>
                                    <p style={{ marginBottom: '8px', color: '#475569' }}>
                                        <strong>Example:</strong>
                                    </p>
                                    <pre style={{
                                        backgroundColor: '#1e293b',
                                        color: '#e2e8f0',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        overflow: 'auto',
                                        fontSize: '14px',
                                        fontFamily: 'Monaco, "Courier New", monospace',
                                        lineHeight: '1.6',
                                        border: '1px solid #334155'
                                    }}>
{`git push origin --delete day02-locators-and-fixtures`}
                                    </pre>
                                </div>

                                {/* Suggested Daily Routine */}
                                <div style={{ 
                                    marginTop: '40px',
                                    padding: '24px',
                                    backgroundColor: '#f0f7fa',
                                    borderRadius: '8px',
                                    border: '1px solid #cbd5e1'
                                }}>
                                    <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#00416A' }}>
                                        Suggested Daily Student Routine (copy/paste)
                                    </h4>
                                    <pre style={{
                                        backgroundColor: '#1e293b',
                                        color: '#e2e8f0',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        overflow: 'auto',
                                        fontSize: '14px',
                                        fontFamily: 'Monaco, "Courier New", monospace',
                                        lineHeight: '1.6',
                                        border: '1px solid #334155'
                                    }}>
{`git checkout main
git pull --rebase
git checkout -b dayXX-topic-name

# do work...
git status
git add .
git commit -m "Day XX: <what you did>"
git push -u origin dayXX-topic-name`}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <section>
                <div class="pr3"> 
                    <h3>References</h3>
                </div>
                <div className='sql-btn'>
                    <a className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green' href={link.setUpGitGitHub} target="_blank" rel="noopener noreferrer">
                        Git GitHub SetUp
                    </a>
                </div>
            </section>
            <section>
            <hr />
                <div className='tc'>
                    <img className='pr4 pt4 pb4 linux-logo' src={getImageSrc(GIT_CHEATSHEET)} alt='Linux Logo'/>
                </div>
            </section>
            <div>
            </div>
            <section className='pt4'>
                </section>
        </div>
    )
}
export default ResGit;