'use client'

import React from 'react'
import PythonTopicLayout from '../PythonTopicLayout'

const codeBlockStyle = { background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px', marginTop: '8px', marginBottom: '20px' }
const pointSection = { marginBottom: '28px', paddingBottom: '24px', borderBottom: '1px solid #e9ecef' }
const linkStyle = { color: '#3776ab', fontWeight: '600' }

export default function PythonGitGithub() {
  return (
    <PythonTopicLayout title="Git and GitHub" week={10} month={3}>
      <p style={{ marginBottom: '24px' }}>Use Git for version control: repositories, commit, push, pull. Build a portfolio on GitHub. Below is a detailed breakdown with examples.</p>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>1. Git basics and repositories</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>Git tracks changes in your project. A repository (repo) is a folder with a <code>.git</code> directory. Initialize with <code>git init</code> in your project folder. Use <code>git status</code> to see modified and untracked files. Git is run from the terminal (or IDE); Python code can call Git via <code>subprocess</code> if you need to automate it.</p>
        <pre style={codeBlockStyle}>{`# In terminal (not Python):
# cd my_project
# git init
# git status

# From Python you can run shell commands:
import subprocess
subprocess.run(["git", "status"], check=True)`}</pre>
      </section>

      <section style={pointSection}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>2. Commit, push, pull</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}><code>git add .</code> or <code>git add file.py</code> stages changes. <code>git commit -m "Message"</code> saves a snapshot. <code>git remote add origin &lt;url&gt;</code> links to a GitHub repo. <code>git push -u origin main</code> uploads commits (use <code>master</code> if your branch is master). <code>git pull</code> downloads and merges changes from the remote. Workflow: add → commit → push.</p>
        <pre style={codeBlockStyle}>{`# Terminal workflow:
# git add .
# git commit -m "Add Python exercises"
# git remote add origin https://github.com/user/repo.git
# git branch -M main
# git push -u origin main
# Later: git add . && git commit -m "Update" && git push`}</pre>
      </section>

      <section style={{ ...pointSection, borderBottom: 'none' }}>
        <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }}>3. Portfolio thinking and organizing code</h3>
        <p style={{ marginBottom: '8px', lineHeight: '1.75' }}>Use GitHub to show projects to employers. Keep repos organized: clear README, one project or topic per repo (or one repo with folders). Commit often with meaningful messages. Add a <code>.gitignore</code> to exclude <code>__pycache__</code>, <code>.env</code>, virtualenv folders, and large data files. Pin key repos on your GitHub profile.</p>
        <pre style={codeBlockStyle}>{`# .gitignore example:
# __pycache__/
# *.pyc
# .env
# venv/
# *.db`}</pre>
      </section>

      <p style={{ marginTop: '24px', color: '#64748b', fontSize: '15px' }}>
        For the full curriculum and step-by-step labs, see the <a href="/docs/python" style={linkStyle}>Python curriculum</a>. Git is not part of Python; for Git documentation see <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer" style={linkStyle}>git-scm.com</a>. For running shell commands from Python, see <a href="https://docs.python.org/3/library/subprocess.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>subprocess</a> (python.org).
      </p>
    </PythonTopicLayout>
  )
}
