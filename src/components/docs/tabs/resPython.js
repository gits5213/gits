import React, { useState } from 'react';
import link from '../../../utilities/links.json';
import BackToTop from '../../backToTop';
import python_logo from '../../../images/tabs/python_logo.png';
import python_CHEAT_SHEET from '../../../images/tabs/Python_CheatSheet.jpeg';
import { getImageSrc } from '../../../utils/getImageSrc';
import { leftAlignStyles } from '../../../utils/globalStyles';

const sectionBox = {
    backgroundColor: '#f8f9fa',
    padding: '20px 24px',
    borderRadius: '8px',
    borderLeft: '4px solid #00416A',
    marginBottom: '16px',
    fontSize: '15px',
    lineHeight: '1.7',
    color: '#333'
};

const stepBox = {
    backgroundColor: '#f0f7fa',
    padding: '16px 20px',
    borderRadius: '8px',
    borderLeft: '4px solid #00416A',
    marginTop: '12px',
    marginBottom: '16px',
    fontSize: '15px',
    lineHeight: '1.7',
    color: '#333'
};

const resPython = () => {
    const [openWeek, setOpenWeek] = useState(null);
    const [openNested, setOpenNested] = useState(null); // e.g. "0-sat-1" = weekIndex-sat/sun-bulletIndex

    const getNestedContent = (w, type, bulletIndex, bullet) => {
        const details = type === 'sat' ? w.satDetails : w.sunDetails;
        if (details && details[bulletIndex]) return details[bulletIndex];
        return { detail: `Practice "${bullet}" in the Exercise/Lab section above. Apply the step-by-step instructions at the bottom of this week.`, sample: `# ${bullet}\n# Try this in your editor and run the file.` };
    };

    const weekPlan = [
        { week: 1, month: 1, sat: 'Introduction to Python', satBullets: ['What is Python', 'Why Python for career growth', 'Python installation', 'VS Code / Jupyter Notebook setup', 'First Python program', 'Syntax basics', 'Comments and print statements'], satDetails: [
            { detail: 'Python is a high-level, interpreted programming language. It emphasizes readability and lets you write clear code for small and large projects. Used in web dev, data science, automation, and more.', sample: '# Python is run line by line\nprint("Hello, World")' },
            { detail: 'Python is in high demand for jobs in data science, automation, and security. Learning Python opens paths to roles like Data Analyst, Automation Engineer, and Security Analyst.', sample: '# Check your version in terminal: python --version' },
            { detail: 'Download the installer from python.org. Run it and check "Add Python to PATH" so you can run Python from the terminal. Restart the terminal after install.', sample: '# After install, open Terminal and type: python --version' },
            { detail: 'Install VS Code from code.visualstudio.com. Install the "Python" extension. For Jupyter, run: pip install jupyter. Use New File > Save as .py or .ipynb.', sample: '# In VS Code: New File > Save As hello.py' },
            { detail: 'Your first program: create a file, write one line that prints text, save, then run it with python filename.py.', sample: 'print("Hello")\n# Save as hello.py, then: python hello.py' },
            { detail: 'Syntax basics: one statement per line (or use ;). Indentation matters for blocks. Use a colon before blocks (e.g. after if, for).', sample: 'x = 5\nif x > 0:\n    print("positive")' },
            { detail: 'Comments start with # and are ignored by Python. Use them to explain your code. print() sends text to the screen.', sample: '# This is a comment\nprint("This is output")' }
        ], sun: 'Variables and Data Types', sunBullets: ['Variables', 'int, float, string, boolean', 'Type casting', 'User input', 'Naming conventions'], sunDetails: [
            { detail: 'Variables hold values. You assign with =. Name variables clearly so others (and you) can read the code.', sample: 'name = "Ali"\nage = 25\nprint(name, age)' },
            { detail: 'int = whole numbers, float = decimals, string = text in quotes, boolean = True/False. Python infers the type.', sample: 'a = 10          # int\nb = 3.14        # float\nc = "hello"     # string\nd = True        # boolean' },
            { detail: 'Type casting converts one type to another: int("42"), float("3.14"), str(100). Use when you need a number from user input.', sample: 's = "42"\nn = int(s)   # n is 42\nprint(n + 1)  # 43' },
            { detail: 'input("Prompt: ") waits for the user to type and press Enter. It returns a string. Store it in a variable.', sample: 'name = input("Enter your name: ")\nprint("Hello,", name)' },
            { detail: 'Use lowercase and underscores: user_name, not userName. Avoid names that match built-ins like print, list.', sample: 'user_age = 20\nmax_count = 100' }
        ], satLab: 'Environment setup, First 10 small Python programs, Input/output exercises', sunLab: 'User input programs, Basic calculator, Conversion exercises', steps: '1. Download Python from python.org; run installer and check "Add Python to PATH." 2. Install VS Code and the Python extension. 3. Create a new file hello.py, type print("Hello") and save. 4. Open Terminal in VS Code and run: python hello.py. 5. Create variables: name = "Your Name", age = 25; print them. 6. Use input("Enter your name: ") to read from the user and print the result.' },
        { week: 2, month: 1, sat: 'Operators and Expressions', satBullets: ['Arithmetic operators', 'Comparison operators', 'Logical operators', 'Assignment operators', 'Practice logic building'], sun: 'Conditional Statements', sunBullets: ['if, elif, else', 'Nested conditions', 'Real-life decision logic'], satLab: 'Math and decision exercises, Comparison-based mini tasks', sunLab: 'Grade checker, Age checker, Eligibility checker', steps: '1. In a new file try: print(10 + 3), print(10 > 3), print(True and False). 2. Write if age >= 18: print("Adult") else: print("Minor"). Run and change age to see both. 3. Build a grade checker: if score >= 90 print "A", elif score >= 80 print "B", etc.' },
        { week: 3, month: 1, sat: 'Loops', satBullets: ['for loop', 'while loop', 'range()', 'break, continue, pass'], sun: 'Strings', sunBullets: ['String basics', 'Indexing and slicing', 'String methods', 'f-strings and formatting'], satLab: 'Multiplication table, Repetition tasks, Loop-based mini problems', sunLab: 'Text cleaner, Username/password validation, Email formatting tasks', steps: '1. Run: for i in range(5): print(i) to see 0,1,2,3,4. 2. Write a loop that prints "7 x 1 = 7" through "7 x 10 = 70". 3. Try s = "Hello"; print(s[0]), print(s.upper()), print(f"Hi {s}").' },
        { week: 4, month: 1, sat: 'Lists and Tuples', satBullets: ['List creation', 'List methods', 'Tuple basics', 'Differences and use cases'], sun: 'Dictionaries and Sets', sunBullets: ['Key-value data structure', 'Dictionary methods', 'Set basics', 'Removing duplicates'], satLab: 'Student marks system, Shopping cart list tasks', sunLab: 'Student profile dictionary, Duplicate remover, Data storage exercises', steps: '1. Create grades = [85, 90, 78]; use .append(92), print(grades[0]). 2. Create student = {"name": "Ali", "age": 20}; print(student["name"]). 3. Create nums = {1, 2, 2, 3} and print(nums) to see duplicates removed.' },
        { week: 5, month: 2, sat: 'Functions', satBullets: ['Defining functions', 'Parameters and arguments', 'Return values', 'Scope basics'], sun: 'Advanced Functions', sunBullets: ['Default arguments', 'Keyword arguments', '*args and **kwargs', 'Lambda basics'], satLab: 'Calculator functions, Validation functions, Practice problems', sunLab: 'Function utility tasks, Reusable code practice', steps: '1. Define def greet(name): return "Hello, " + name. Call print(greet("Sam")). 2. Write def say(msg="Hi"): print(msg); call say() and say("Bye"). 3. Try a lambda: double = lambda x: x * 2; print(double(5)).' },
        { week: 6, month: 2, sat: 'Modules and Packages', satBullets: ['Importing built-in modules', 'Creating custom modules', 'Organizing Python code'], sun: 'File Handling', sunBullets: ['Read files', 'Write files', 'Append files', 'Working with file paths'], satLab: 'Build a utility module, Split code into reusable files', sunLab: 'Read reports, Write summaries, File processing tasks', steps: '1. Create my_module.py with a function; in another file write import my_module and call it. 2. Use open("test.txt", "w").write("Hello") then print(open("test.txt").read()). 3. Use with open("file.txt") as f: for line in f: print(line.strip()).' },
        { week: 7, month: 2, sat: 'Exception Handling', satBullets: ['Errors vs exceptions', 'try, except, else, finally', 'Raise exceptions', 'Safe coding practice'], sun: 'Object-Oriented Programming Part 1', sunBullets: ['Classes and objects', 'Attributes and methods', 'Constructor __init__'], satLab: 'Fix broken scripts, Input validation with exception handling', sunLab: 'Student class, Employee class, Product class', steps: '1. Wrap risky code: try: x = int("abc") except: print("Invalid"). 2. Define class Student: with def __init__(self, name): self.name = name. 3. Create s = Student("Jane") and print(s.name).' },
        { week: 8, month: 2, sat: 'Object-Oriented Programming Part 2', satBullets: ['Inheritance', 'Encapsulation', 'Polymorphism', 'Method overriding'], sun: 'Mini Project 1', sunBullets: ['Console-based real project design', 'Code structure', 'Problem solving'], satLab: 'User role management classes, Banking or school system classes', sunLab: 'Choose one: Student management system, Inventory system, Library management system', steps: '1. Create class Person and class Student(Person) that adds a grade attribute. 2. Build a menu: "1. Add student 2. List students"; use a list to store students; print the list.' },
        { week: 9, month: 3, sat: 'Working with JSON and CSV', satBullets: ['CSV reading/writing', 'JSON basics', 'Data conversion', 'Parsing structured data'], sun: 'APIs with Python', sunBullets: ['What is an API', 'requests library', 'GET methods', 'Parsing JSON response'], satLab: 'CSV reader tool, JSON formatter, Data extraction tasks', sunLab: 'Fetch data from public APIs, Clean and display results', steps: '1. Use import csv to read a CSV and print rows. 2. pip install requests; use requests.get("https://api.github.com").json() and print one key.' },
        { week: 10, month: 3, sat: 'SQLite Database Basics', satBullets: ['Database concepts', 'SQLite connection', 'Create tables', 'Insert, update, delete, fetch'], sun: 'Git and GitHub', sunBullets: ['Git basics', 'Repositories', 'Commit, push, pull', 'Portfolio thinking'], satLab: 'Build a simple database app, Store student or employee records', sunLab: 'Create GitHub repo, Upload Python exercises, Organize code professionally', steps: '1. Use sqlite3.connect("test.db"); create a table, insert one row, fetch and print. 2. In terminal: git init, git add ., git commit -m "First commit". 3. Create a repo on GitHub and push your code.' },
        { week: 11, month: 3, sat: 'Debugging and Testing', satBullets: ['Debugging strategies', 'Using print and debugger', 'Intro to unittest', 'Assertions and validation'], sun: 'Python Automation', sunBullets: ['Automating repetitive tasks', 'OS module basics', 'shutil basics', 'File/folder automation'], satLab: 'Debug broken code, Write unit tests for simple functions', sunLab: 'File organizer, Automated renaming script, Simple report generator', steps: '1. Set a breakpoint in VS Code and run "Debug Python File." 2. Use import os; print(os.listdir(".")) to list files. 3. Write a small unittest that asserts 2+2 == 4.' },
        { week: 12, month: 3, sat: 'Problem Solving with Python', satBullets: ['Logic building', 'Pattern problems', 'Coding challenge strategy', 'Breaking down problems'], sun: 'Mini Project 2', sunBullets: ['Intermediate project planning', 'Code organization', 'Real-world utility building'], satLab: 'Beginner-to-intermediate coding problems', sunLab: 'Choose one: Expense tracker, To-do app, Contact manager, CSV report generator', steps: '1. Break your project into steps on paper (inputs, outputs, data stored). 2. Build a to-do app: list to store tasks; loop asking "add / list / quit"; perform the action.' },
        { week: 13, month: 4, sat: 'Introduction to Data Science', satBullets: ['What is data science', 'Workflow overview', 'Python in data science', 'Types of datasets'], sun: 'NumPy Basics', sunBullets: ['Arrays', 'Array operations', 'Mathematical computation', 'Why NumPy matters'], satLab: 'Explore sample datasets, Identify rows, columns, features', sunLab: 'Create arrays, Perform calculations, Practice transformations', steps: '1. pip install numpy. 2. import numpy as np; a = np.array([1,2,3]); print(a * 2). 3. Create a 2D array and try .shape and .sum().' },
        { week: 14, month: 4, sat: 'Pandas Part 1', satBullets: ['Series and DataFrames', 'Loading CSV', 'Inspecting data', 'Selecting columns and rows'], sun: 'Pandas Part 2', sunBullets: ['Cleaning missing values', 'Sorting and filtering', 'Groupby basics', 'Simple summary statistics'], satLab: 'Open and inspect datasets, Filter basic records', sunLab: 'Clean a messy dataset, Create basic analysis report', steps: '1. import pandas as pd; df = pd.read_csv("yourfile.csv"); print(df.head()). 2. Try df["column_name"], df.describe(), df.dropna().' },
        { week: 15, month: 4, sat: 'Data Visualization', satBullets: ['Matplotlib basics', 'Line chart', 'Bar chart', 'Histogram', 'Chart interpretation'], sun: 'Advanced Data Analysis', sunBullets: ['Aggregation', 'Correlation basics', 'Data slicing', 'Trend analysis'], satLab: 'Build charts from sample data', sunLab: 'Analyze a dataset and present insights', steps: '1. import matplotlib.pyplot as plt; plt.plot([1,2,3],[4,5,6]); plt.show(). 2. Use pandas to compute mean of a column and plt.bar() to plot it.' },
        { week: 16, month: 4, sat: 'Intro to Machine Learning Concepts', satBullets: ['What is machine learning', 'Supervised vs unsupervised', 'Features and target', 'Training and testing data'], sun: 'Scikit-learn Basics', sunBullets: ['Importing simple models', 'Train/test split', 'Fitting a basic model', 'Prediction concept'], satLab: 'Prepare simple ML-ready dataset', sunLab: 'Simple classification or regression practice', steps: '1. pip install scikit-learn. 2. from sklearn.datasets import load_iris; X, y = load_iris(return_X_y=True). 3. Use train_test_split, fit a model, and print accuracy.' },
        { week: 17, month: 5, sat: 'Introduction to Cyber Security with Python', satBullets: ['Python in cyber security', 'Legal and ethical boundaries', 'Common security automation use cases', 'Security engineer mindset'], sun: 'Log Analysis with Python', sunBullets: ['Reading log files', 'Searching patterns', 'Extracting suspicious events', 'Reporting findings'], satLab: 'Read sample security logs, Identify suspicious entries', sunLab: 'Build a basic log analyzer', steps: '1. Open a log file with open("log.txt") and print lines containing "error" or "failed". 2. Count how many times a keyword appears in the file.' },
        { week: 18, month: 5, sat: 'Networking Basics for Python', satBullets: ['IP addresses', 'Ports', 'Protocols', 'DNS basics', 'Intro to sockets'], sun: 'Security Scripting', sunBullets: ['File checks', 'Process checks', 'Security report scripting', 'Alert logic concepts'], satLab: 'Hostname to IP lookup, Basic network data tasks', sunLab: 'Build a file monitoring script, Build a simple alert script', steps: '1. Use a library or socket to resolve a hostname to IP. 2. Check if a file exists and report its size and last-modified time using os.path.' },
        { week: 19, month: 5, sat: 'Regular Expressions for Security and Data Parsing', satBullets: ['Pattern matching', 'Searching logs and text', 'Extracting structured information'], sun: 'Hashing and Basic Cryptography Concepts', sunBullets: ['Hashing basics', 'SHA concepts', 'File integrity idea', 'Password security basics'], satLab: 'Extract IPs, emails, dates from logs and files', sunLab: 'File hash checker, Integrity comparison tool', steps: '1. import re; re.findall(r"\\d+", "a1b22c") returns ["1","22"]. 2. import hashlib; print(hashlib.sha256(b"hello").hexdigest()).' },
        { week: 20, month: 5, sat: 'API Security and Data Collection Basics', satBullets: ['API data collection', 'Headers and tokens overview', 'Responsible automation', 'Security data feeds concept'], sun: 'Cyber Security Mini Project', sunBullets: ['Project planning', 'Script structure', 'Reporting output'], satLab: 'Work with sample API data, Parse security-style JSON feeds', sunLab: 'Choose one: Log analyzer, File integrity monitor, Password policy checker, Authorized local port checker', steps: '1. Call a security-style API (or use mock JSON) and parse the response. 2. Build a small log analyzer that counts errors/warnings and writes a short report to a file.' },
        { week: 21, month: 6, sat: 'Advanced Python Concepts', satBullets: ['List comprehensions', 'Dictionary comprehensions', 'Generators', 'Iterators', 'Decorators overview'], sun: 'Clean Code and Project Architecture', sunBullets: ['Folder structure', 'Naming standards', 'Reusable components', 'Documentation basics'], satLab: 'Advanced Python coding tasks', sunLab: 'Refactor old projects, Improve code quality', steps: '1. Try squares = [x*x for x in range(5)]. 2. Organize a project into folders (e.g. src/, tests/) and add a README.' },
        { week: 22, month: 6, sat: 'Career Project Planning – Data Science', satBullets: ['Dataset selection', 'Problem definition', 'Analysis plan', 'Visualization plan'], sun: 'Career Project Planning – Cyber Security', sunBullets: ['Define security problem', 'Script objective', 'Input/output design', 'Reporting and evidence'], satLab: 'Start capstone project for data science', sunLab: 'Start capstone project for cyber security', steps: '1. Pick a dataset (e.g. Kaggle) and write 3 questions you want to answer. 2. Define one security task: inputs (e.g. log file), outputs (e.g. report).' },
        { week: 23, month: 6, sat: 'Capstone Development', satBullets: ['Guided build session', 'Problem solving', 'Debugging and improvement'], sun: 'Capstone Development', sunBullets: ['Testing', 'Final polishing', 'Prepare presentation'], satLab: 'Continue capstone work', sunLab: 'Finalize code and GitHub upload', steps: '1. Implement your project step by step; run and fix errors. 2. Push to GitHub and add a README with screenshots or sample output.' },
        { week: 24, month: 6, sat: 'Final Project Presentation', satBullets: ['Data Science project presentation', 'Cyber Security project presentation', 'Feedback and improvements'], sun: 'Career Readiness and Interview Preparation', sunBullets: ['Resume building', 'LinkedIn profile ideas', 'GitHub portfolio review', 'Mock interview questions', 'Career roadmap'], satLab: 'Final documentation update, Resume project summary writing', sunLab: 'Presentation practice, Portfolio finalization, Job application strategy', steps: '1. Prepare a 5–10 minute presentation (problem, what you built, what you learned). 2. Add projects to your resume and LinkedIn; list Python and tool skills.' }
    ];

    return(
        <div style={leftAlignStyles.pageContainer}>
            {/* Hero Section */}
            <div style={{
                ...leftAlignStyles.heroSection,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '40px',
                flexWrap: 'wrap'
            }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <h1 style={leftAlignStyles.heroTitle}>
                        PYTHON
                    </h1>
                    <p style={leftAlignStyles.heroSubtitle}>
                        A Popular Programming Language for Web Development and More
                    </p>
                </div>
                <div style={{
                    flex: '0 0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }}>
                    <img 
                        src={getImageSrc(python_logo)} 
                        alt='Python Logo'
                        style={{
                            maxWidth: '300px',
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            filter: 'brightness(1.1)'
                        }}
                    />
                </div>
            </div>

            {/* GitHub Links */}
            <div style={leftAlignStyles.linksContainer}>
                <a 
                    href={link.PY_GITHUB} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '12px 30px',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#ffffff',
                        backgroundColor: '#dc3545',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#c82333';
                        e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#dc3545';
                        e.target.style.transform = 'translateY(0)';
                    }}
                >
                    <img src={getImageSrc(link.GITHUB_ICON)} alt='github' style={{ marginRight: '10px', width: '20px', height: '20px' }} />
                        Python on GitHub                 
                    </a>
                <a 
                    href={link.PY_STYLE_GUIDE} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '12px 30px',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#ffffff',
                        backgroundColor: '#28a745',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#218838';
                        e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#28a745';
                        e.target.style.transform = 'translateY(0)';
                    }}
                >
                    <img src={link.GITHUB_ICON} alt='github' style={{ marginRight: '10px', width: '20px', height: '20px' }} />
                        Google Python Style Guide              
                    </a>
                </div>

            {/* Main Content */}
            <div style={{
                backgroundColor: '#ffffff',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                marginBottom: '40px'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    fontWeight: 'bold'
                }}>
                    What is Python?
                </h2>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '30px'
                }}>
                        Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.
                    </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold'
                }}>
                    It is used for:
                </h3>
                <ul style={{
                    fontSize: '16px',
                    lineHeight: '2',
                    color: '#333',
                    paddingLeft: '20px',
                    marginBottom: '30px'
                }}>
                        <li>Web development (server-side)</li>
                        <li>Software development</li>
                        <li>Mathematics</li>
                        <li>System scripting</li>
                    </ul>

                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    marginTop: '40px',
                    fontWeight: 'bold'
                }}>
                    What Can Python do?
                </h2>
                <ul style={{
                    fontSize: '16px',
                    lineHeight: '2',
                    color: '#333',
                    paddingLeft: '20px',
                    marginBottom: '30px'
                }}>
                        <li>Python can be used on a server to create web applications.</li>
                        <li>Python can be used alongside software to create workflows.</li>
                        <li>Python can connect to database systems. It can also read and modify files.</li>
                        <li>Python can be used to handle big data and perform complex mathematics.</li>
                        <li>Python can be used for rapid prototyping, or for production-ready software development.</li>
                    </ul>

                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    marginTop: '40px',
                    fontWeight: 'bold'
                }}>
                    Why Python?
                </h2>
                <ul style={{
                    fontSize: '16px',
                    lineHeight: '2',
                    color: '#333',
                    paddingLeft: '20px'
                }}>
                        <li>Python works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc).</li>
                        <li>Python has a simple syntax similar to the English language.</li>
                        <li>Python has syntax that allows developers to write programs with fewer lines than some other programming languages.</li>
                        <li>Python runs on an interpreter system, meaning that code can be executed as soon as it is written. This means that prototyping can be very quick.</li>
                        <li>Python can be treated in a procedural way, an object-oriented way or a functional way.</li>
                    </ul>

                {/* Learning Outcomes */}
                <h2 id="python-learning-outcomes" style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    marginTop: '40px',
                    fontWeight: 'bold'
                }}>
                    Learning Outcomes
                </h2>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', marginBottom: '16px' }}>
                    By the end of this 6-month program, students will be able to:
                </p>
                <ul style={{ fontSize: '16px', lineHeight: '2', color: '#333', paddingLeft: '20px', marginBottom: '40px' }}>
                    <li>Understand Python fundamentals with confidence</li>
                    <li>Write clean, structured, reusable Python code</li>
                    <li>Use functions, OOP, modules, files, exceptions, and databases</li>
                    <li>Work with APIs, JSON, CSV, and automation scripts</li>
                    <li>Analyze and visualize data using Python libraries</li>
                    <li>Build practical security-focused tools using Python</li>
                    <li>Understand basic networking and log analysis</li>
                    <li>Complete multiple real-world projects</li>
                    <li>Build a GitHub portfolio for job readiness</li>
                    <li>Prepare for junior roles in Python, Data Science, and Cyber Security</li>
                </ul>

                {/* Full 6-Month Course Plan — Collapsible by Week */}
                <h2 id="python-6-month-plan" style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '24px',
                    marginTop: '40px',
                    fontWeight: 'bold'
                }}>
                    Full 6-Month Course Plan
                </h2>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', marginBottom: '24px' }}>
                    Each week below is a collapsible section with Saturday/Sunday topics, Exercise/Lab, and step-by-step implementation details for non-technical learners.
                </p>

                {weekPlan.map((w, wi) => {
                    const nestedKey = (type, i) => `${wi}-${type}-${i}`;
                    const isNestedOpen = (type, i) => openNested === nestedKey(type, i);
                    const getContent = (type, i, bullet) => {
                        const d = type === 'sat' ? w.satDetails && w.satDetails[i] : w.sunDetails && w.sunDetails[i];
                        if (d && d.detail) return d;
                        return getNestedContent(w, type, i, bullet);
                    };
                    return (
                    <div key={w.week} style={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        marginBottom: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.06)'
                    }}>
                        <button
                            type="button"
                            onClick={() => setOpenWeek(openWeek === w.week ? null : w.week)}
                            style={{
                                width: '100%',
                                padding: '16px 20px',
                                textAlign: 'left',
                                border: 'none',
                                background: openWeek === w.week ? '#e8f4f8' : '#f8f9fa',
                                cursor: 'pointer',
                                fontSize: '18px',
                                fontWeight: '600',
                                color: '#00416A',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                fontFamily: 'inherit'
                            }}
                        >
                            <span>Month {w.month} — Week {w.week}: {w.sat} / {w.sun}</span>
                            <span style={{ fontSize: '24px', lineHeight: 1 }}>{openWeek === w.week ? '−' : '+'}</span>
                        </button>
                        {openWeek === w.week && (
                            <div style={{ padding: '20px', borderTop: '1px solid #e0e0e0' }}>
                                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '12px', marginTop: '0' }}>Saturday: {w.sat}</h4>
                                {w.satBullets.map((b, i) => {
                                    const key = nestedKey('sat', i);
                                    const content = getContent('sat', i, b);
                                    return (
                                        <div key={key} style={{ marginBottom: '8px', border: '1px solid #e8e8e8', borderRadius: '6px', overflow: 'hidden' }}>
                                            <button type="button" onClick={() => setOpenNested(isNestedOpen('sat', i) ? null : key)} style={{ width: '100%', padding: '12px 16px', textAlign: 'left', border: 'none', background: isNestedOpen('sat', i) ? '#e8f4f8' : '#fafafa', cursor: 'pointer', fontSize: '15px', color: '#333', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'inherit' }}>
                                                <span style={{ fontWeight: '500' }}>• {b}</span>
                                                <span style={{ fontSize: '18px', color: '#00416A' }}>{isNestedOpen('sat', i) ? '−' : '+'}</span>
                                            </button>
                                            {isNestedOpen('sat', i) && (
                                                <div style={{ padding: '14px 16px', borderTop: '1px solid #e8e8e8', backgroundColor: '#fff', fontSize: '14px', lineHeight: '1.7' }}>
                                                    <p style={{ margin: '0 0 10px 0', color: '#333' }}>{content.detail}</p>
                                                    {content.sample && (
                                                        <pre style={{ margin: 0, padding: '12px', backgroundColor: '#1e293b', color: '#e2e8f0', borderRadius: '6px', fontSize: '13px', overflowX: 'auto' }}><code>{content.sample}</code></pre>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                                <p style={{ marginBottom: '8px', marginTop: '16px', fontWeight: '600', fontSize: '15px' }}>Exercise / Lab</p>
                                <div style={sectionBox}>{w.satLab}</div>

                                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '12px', marginTop: '16px' }}>Sunday: {w.sun}</h4>
                                {w.sunBullets.map((b, i) => {
                                    const key = nestedKey('sun', i);
                                    const content = getContent('sun', i, b);
                                    return (
                                        <div key={key} style={{ marginBottom: '8px', border: '1px solid #e8e8e8', borderRadius: '6px', overflow: 'hidden' }}>
                                            <button type="button" onClick={() => setOpenNested(isNestedOpen('sun', i) ? null : key)} style={{ width: '100%', padding: '12px 16px', textAlign: 'left', border: 'none', background: isNestedOpen('sun', i) ? '#e8f4f8' : '#fafafa', cursor: 'pointer', fontSize: '15px', color: '#333', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'inherit' }}>
                                                <span style={{ fontWeight: '500' }}>• {b}</span>
                                                <span style={{ fontSize: '18px', color: '#00416A' }}>{isNestedOpen('sun', i) ? '−' : '+'}</span>
                                            </button>
                                            {isNestedOpen('sun', i) && (
                                                <div style={{ padding: '14px 16px', borderTop: '1px solid #e8e8e8', backgroundColor: '#fff', fontSize: '14px', lineHeight: '1.7' }}>
                                                    <p style={{ margin: '0 0 10px 0', color: '#333' }}>{content.detail}</p>
                                                    {content.sample && (
                                                        <pre style={{ margin: 0, padding: '12px', backgroundColor: '#1e293b', color: '#e2e8f0', borderRadius: '6px', fontSize: '13px', overflowX: 'auto' }}><code>{content.sample}</code></pre>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                                <p style={{ marginBottom: '8px', marginTop: '16px', fontWeight: '600', fontSize: '15px' }}>Exercise / Lab</p>
                                <div style={sectionBox}>{w.sunLab}</div>

                                <p style={{ marginBottom: '8px', marginTop: '20px', fontWeight: '600', fontSize: '15px', color: '#00416A' }}>Step-by-step for non-technical learners</p>
                                <div style={stepBox}>{w.steps}</div>
                            </div>
                        )}
                    </div>
                    );
                })}

                {/* Suggested Capstone Projects */}
                <h2 id="python-capstone" style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    marginTop: '48px',
                    fontWeight: 'bold'
                }}>
                    Suggested Capstone Projects
                </h2>
                <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '12px' }}>Data Science Projects</h3>
                <ul style={{ fontSize: '16px', lineHeight: '2', color: '#333', paddingLeft: '20px', marginBottom: '20px' }}>
                    <li>Sales data analysis dashboard</li>
                    <li>Student performance analyzer</li>
                    <li>Customer churn exploratory report</li>
                    <li>CSV reporting and visualization tool</li>
                    <li>Employee data insights project</li>
                </ul>
                <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '12px' }}>Cyber Security Projects</h3>
                <ul style={{ fontSize: '16px', lineHeight: '2', color: '#333', paddingLeft: '20px', marginBottom: '40px' }}>
                    <li>Security log analyzer</li>
                    <li>File integrity monitoring tool</li>
                    <li>Password strength and policy checker</li>
                    <li>Local authorized port monitoring tool</li>
                    <li>Suspicious activity detector from logs</li>
                </ul>

                {/* Daily Session Structure */}
                <h2 id="python-session-structure" style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    marginTop: '40px',
                    fontWeight: 'bold'
                }}>
                    Daily Session Structure
                </h2>
                <p style={{ fontWeight: '600', marginBottom: '8px', fontSize: '16px' }}>Live Class — 3 Hours</p>
                <ul style={{ marginBottom: '20px', paddingLeft: '20px', lineHeight: '1.8', fontSize: '16px' }}>
                    <li>Hour 1: Theory and concept discussion</li>
                    <li>Hour 2: Instructor live coding</li>
                    <li>Hour 3: Guided walkthrough and Q&A</li>
                </ul>
                <p style={{ fontWeight: '600', marginBottom: '8px', fontSize: '16px' }}>Exercise / Lab — 2 Hours</p>
                <ul style={{ marginBottom: '40px', paddingLeft: '20px', lineHeight: '1.8', fontSize: '16px' }}>
                    <li>Hands-on task · Practice problems · Pair or individual coding · Project/lab work</li>
                </ul>

                {/* Recommended Tools */}
                <h2 id="python-tools" style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '16px',
                    marginTop: '40px',
                    fontWeight: 'bold'
                }}>
                    Recommended Tools
                </h2>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', marginBottom: '40px' }}>
                    Python 3 · VS Code · Jupyter Notebook · Google Colab · Git and GitHub · SQLite · NumPy · Pandas · Matplotlib · requests
                </p>

                {/* Target Audience */}
                <h2 id="python-audience" style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '16px',
                    marginTop: '40px',
                    fontWeight: 'bold'
                }}>
                    Target Audience
                </h2>
                <ul style={{ fontSize: '16px', lineHeight: '2', color: '#333', paddingLeft: '20px', marginBottom: '40px' }}>
                    <li>Absolute beginners</li>
                    <li>Students wanting a Python career path</li>
                    <li>Future Data Analysts / Junior Data Scientists</li>
                    <li>Future Cyber Security Analysts / Security Engineers</li>
                    <li>QA / Automation professionals moving into Python-based roles</li>
                </ul>

                {/* Career Outcomes */}
                <h2 id="python-career" style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '16px',
                    marginTop: '40px',
                    fontWeight: 'bold'
                }}>
                    Career Outcomes
                </h2>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', marginBottom: '12px' }}>
                    After completing this program, learners can prepare for roles like:
                </p>
                <ul style={{ fontSize: '16px', lineHeight: '2', color: '#333', paddingLeft: '20px', marginBottom: '40px' }}>
                    <li>Junior Python Developer · Data Analyst · Python Automation Engineer</li>
                    <li>Junior Data Science Intern · Security Analyst · Cyber Security Engineer</li>
                    <li>SOC Support Analyst · QA Automation Engineer with Python skills</li>
                </ul>

                {/* Short Weekly Summary Table */}
                <h2 id="python-summary-table" style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    marginTop: '40px',
                    fontWeight: 'bold'
                }}>
                    Short Weekly Summary Table
                </h2>
                <div style={{ overflowX: 'auto', marginBottom: '40px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#00416A', color: '#fff' }}>
                                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #e0e0e0' }}>Week</th>
                                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #e0e0e0' }}>Saturday</th>
                                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #e0e0e0' }}>Sunday</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                [1, 'Python Intro', 'Variables & Data Types'],
                                [2, 'Operators', 'Conditional Statements'],
                                [3, 'Loops', 'Strings'],
                                [4, 'Lists & Tuples', 'Dictionaries & Sets'],
                                [5, 'Functions', 'Advanced Functions'],
                                [6, 'Modules & Packages', 'File Handling'],
                                [7, 'Exception Handling', 'OOP Part 1'],
                                [8, 'OOP Part 2', 'Mini Project 1'],
                                [9, 'JSON & CSV', 'APIs'],
                                [10, 'SQLite', 'Git & GitHub'],
                                [11, 'Debugging & Testing', 'Automation'],
                                [12, 'Problem Solving', 'Mini Project 2'],
                                [13, 'Data Science Intro', 'NumPy'],
                                [14, 'Pandas 1', 'Pandas 2'],
                                [15, 'Data Visualization', 'Advanced Analysis'],
                                [16, 'ML Concepts', 'Scikit-learn Basics'],
                                [17, 'Cyber Security Intro', 'Log Analysis'],
                                [18, 'Networking Basics', 'Security Scripting'],
                                [19, 'Regex', 'Hashing & Integrity'],
                                [20, 'API Security Basics', 'Cyber Mini Project'],
                                [21, 'Advanced Python', 'Clean Code'],
                                [22, 'Data Science Capstone Plan', 'Cyber Capstone Plan'],
                                [23, 'Capstone Build', 'Capstone Build'],
                                [24, 'Final Presentation', 'Career Readiness']
                            ].map((row, i) => (
                                <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f8f9fa' }}>
                                    <td style={{ padding: '10px', border: '1px solid #e0e0e0', fontWeight: '600' }}>{row[0]}</td>
                                    <td style={{ padding: '10px', border: '1px solid #e0e0e0' }}>{row[1]}</td>
                                    <td style={{ padding: '10px', border: '1px solid #e0e0e0' }}>{row[2]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </div>

            {/* Python Cheat Sheet */}
            <div style={{
                textAlign: 'center',
                marginBottom: '40px',
                backgroundColor: '#f8f9fa',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '30px',
                    fontWeight: 'bold'
                }}>
                    Python Cheat Sheet
                </h2>
                <img 
                    src={getImageSrc(python_CHEAT_SHEET)} 
                    alt='Python Cheat Sheet'
                    style={{
                        width: '100%',
                        maxWidth: '800px',
                        height: 'auto',
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                />
                </div>

                <div>
                    <BackToTop />
                </div> 
            <div>
            </div>
            <section style={{ marginTop: '40px' }}>
                </section>
        </div>
    )
}
export default resPython;
