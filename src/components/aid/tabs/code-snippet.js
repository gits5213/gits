import React from 'react';
import '../../../App.css';
import codeSnippetData from '../../../utilities/data/code-snippet.json';
import Footer from '../../../components/footer';

const CodeSnippet = () => {
    const codeBlockStyle = {
        backgroundColor: '#2d2d2d',
        color: '#f8f8f2',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px',
        overflowX: 'auto',
        fontFamily: 'monospace',
        fontSize: '14px',
        lineHeight: '1.6'
    };

    return(
        <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '40px 20px'
        }}>
            {/* Hero Section */}
            <div style={{
                background: 'linear-gradient(135deg, #00416A 0%, #005a8a 100%)',
                color: '#ffffff',
                padding: '60px 20px',
                textAlign: 'center',
                borderRadius: '12px',
                marginBottom: '40px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}>
                <h1 style={{
                    fontSize: '48px',
                    marginBottom: '20px',
                    fontWeight: 'bold'
                }}>
                    Code Snippets
                </h1>
                <p style={{
                    fontSize: '20px',
                    opacity: '0.95'
                }}>
                    {codeSnippetData.codeSnippent}
                </p>
            </div>
            
            {/* Programming Languages Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '30px',
                marginBottom: '40px'
            }}>
                {/* Java Section */}
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    border: '1px solid #e0e0e0'
                }}>
                    <h2 style={{
                        color: '#00416A',
                        fontSize: '28px',
                        marginBottom: '25px',
                        fontWeight: 'bold',
                        borderBottom: '3px solid #00416A',
                        paddingBottom: '10px'
                    }}>
                        JAVA
                    </h2>

                    {/* Basic Section */}
                    <div style={{ marginBottom: '30px' }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: '600',
                            borderBottom: '2px solid #e0e0e0',
                            paddingBottom: '8px'
                        }}>
                            Basic
                        </h3>
                        
                        <div style={{ marginBottom: '20px' }}>
                            <h4 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>Variable</h4>
                            <div style={codeBlockStyle}>
                            <code>
                                ======Variable======<br/>
                                    Variable type: local, instance, static<br/>
                                    int number = 25;<br/>
                                static int number = 25;
                            </code>
                            </div>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <h4 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>DataTypes</h4>
                            <div style={codeBlockStyle}>
                            <code>
                                ======DataTypes======<br/>
                                    Data type: Primitive & Non-primitive<br/>
                                    * Primitive: Define by the Program.<br/>
                                    * Non-primitive define by the programmer.<br/>
                                    - int number = 1234;<br/>
                                    - long number = 2433555L;<br/>
                                    - float decimalNumber = 23434.4f;<br/>
                                    - double decimalNumber = 232.4;<br/>
                                    - char leter = "A";<br/>
                                    - boolean onlyOne = false;
                            </code>
                            </div>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <h4 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>Operators</h4>
                            <div style={codeBlockStyle}>
                            <code>
                                ======Operators======<br/>
                                Arithmetic: Addition(+), Subtraction(-), Multiplication(x), Division(/), Modulus(%), Increment(++), Decrement(--)<br/>
                                    Assignment: =, +=, -=, *=, /=, %=, &=, |=, ^=<br/>
                                    Comparison: ==, !=<br/>
                                    Logical: &&, ||, !<br/>
                                    Bitwise:
                            </code>
                        </div>
                        </div>
                    </div>

                    {/* Control Statement Section */}
                    <div style={{ marginBottom: '30px' }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: '600',
                            borderBottom: '2px solid #e0e0e0',
                            paddingBottom: '8px'
                        }}>
                            Control Statement
                        </h3>

                        <div style={{ marginBottom: '20px' }}>
                            <h4 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>ifElseIfElse</h4>
                            <div style={codeBlockStyle}>
                            <code>
                                ======ifElseIfElseIfElse======<br/>
                                    - if: if(condition) {'{'} {/* code goes here */} {'}'}<br/>
                                    - if-else: if(condition) {'{'}{/* code goes here */}{'}'}else {'{'}{/* code goes here */}{'}'}<br/>
                                    - if-else-if: if(condition1) {'{'}{/* code goes here */}{'}'}else if(condition2) {'{'}{/* code goes here */}{'}'}else if(condition3) {'{'}{/* code goes here */}{'}'}else {'{'}{/* code goes here */}{'}'}<br/>
                                    - nested if: if(condition1) {'{'} {/* code goes here */}<br/>
                                    &nbsp;&nbsp;if(condition1) {'{'}{/* code goes here */}{'}'}<br/>
                                    {'}'}
                            </code>
                            </div>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <h4 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>Loops</h4>
                            <div style={codeBlockStyle}>
                            <code>
                                ======Loops======<br/>
                                    - for-loop: for(initialization; condition; increment) {'{'}<br/>
                                    &nbsp;&nbsp;//code to executed<br/>
                                    {'}'}<br/>
                                    - nested-for-loop: for(initialization; condition; increment) {'{'}<br/>
                                    &nbsp;&nbsp;//code to executed<br/>
                                    &nbsp;&nbsp;for(initialization; condition; increment) {'{'}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;//code to executed<br/>
                                    &nbsp;&nbsp;{'}'}<br/>
                                    {'}'}<br/>
                                    - for-each-loop: for(dataType variable : array_name) {'{'}<br/>
                                    &nbsp;&nbsp;//code to executed<br/>
                                {'}'}
                            </code>
                            </div>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <h4 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>Switch</h4>
                            <div style={codeBlockStyle}>
                            <code>
                                ======Switch======<br/>
                                    - switch(expression) {'{'}<br/>
                                    &nbsp;&nbsp;case value1:<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;//code to be executed<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;break //optional<br/>
                                    &nbsp;&nbsp;case value2:<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;//code to be executed<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;break //optional<br/>
                                    &nbsp;&nbsp;default:<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;//code to be executed<br/>
                                {'}'}
                            </code>
                            </div>
                        </div>
                        </div>

                    {/* Object Class Section */}
                    <div style={{ marginBottom: '30px' }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: '600',
                            borderBottom: '2px solid #e0e0e0',
                            paddingBottom: '8px'
                        }}>
                            Object Class
                        </h3>

                        <div style={{ marginBottom: '20px' }}>
                            <h4 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>This keyword</h4>
                            <div style={codeBlockStyle}>
                            <code>
                            ====This keyword===<br/>
                                    - Reference variable that refers to the current object.<br/>
                                    - "this" can be used to refer current class instance variable.<br/>
                                    - "this" can be used to invoke current class method(implicitly).<br/>
                                    - "this()" can be used to invoke current class constructor.
                            </code>
                        </div>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <h4 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>Method</h4>
                            <div style={codeBlockStyle}>
                            <code>
                                    ======Method======<br/>
                                    - Reusability<br/>
                                    - Easy to modification<br/>
                                    - Readability<br/>
                                    * Pre defined method: print()<br/>
                                    * User defined method: sum()<br/>
                                <br/>
                                    Method Declaration:<br/>
                                    - non-return type non-parameterize method: void sum() {'{'}<br/>
                                    &nbsp;&nbsp;//method body | Method Signature<br/>
                                    {'}'}<br/>
                                    <br/>
                                    - return type parameterize method: int sum (int a, int b) {'{'}<br/>
                                    &nbsp;&nbsp;//method body | Method Signature<br/>
                                    &nbsp;&nbsp;return a+b;<br/>
                                {'}'}
                            </code>
                            </div>
                        </div>
                        
                        <div style={{ marginBottom: '20px' }}>
                            <h4 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>Constructor</h4>
                            <div style={codeBlockStyle}>
                                <code>
                                    ======Constructor======<br/>
                                    - Constructor == Method<br/>
                                    - Instance of the Class<br/>
                                    - Default constructor is being called, during the object creation by the new() keyword<br/>
                                    - Constructor name must be the same name of Class name<br/>
                                    - No return type<br/>
                                    - Can not be abstract, static, final or synchronized<br/>
                                    - Constructor overloading is possible with different arguments.<br/>
                                    * Constructor types:<br/>
                                    - Default: {'<'} class_name {'>'} {'{'} {'}'}<br/>
                                    - Parameterized: Student {'{'}<br/>
                                    &nbsp;&nbsp;//parameterized constructor<br/>
                                    &nbsp;&nbsp;Student(int a, String b) {'{'}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;id = a;<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;name = b;<br/>
                                    &nbsp;&nbsp;{'}'}<br/>
                                    &nbsp;&nbsp;void display() {'{'}System.out.printLn(id +" "+name){'}'}<br/>
                                    <br/>
                                    &nbsp;&nbsp;public static void main(String args[]) {'{'}<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;Student s = new Student(5, "Shahnewaz");<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;s.display();<br/>
                                    &nbsp;&nbsp;{'}'}<br/>
                                    {'}'}
                                </code>
                            </div>
                        </div>
                    </div>

                    {/* OOPs Concept Section */}
                    <div style={{ marginBottom: '30px' }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: '600',
                            borderBottom: '2px solid #e0e0e0',
                            paddingBottom: '8px'
                        }}>
                            OOPs Concept
                        </h3>

                        <div style={{ marginBottom: '20px' }}>
                            <h4 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>Inheritance</h4>
                            <div style={codeBlockStyle}>
                                <code>
                                    class Subclass-name extends Superclass-name {'{'}<br/>
                                    &nbsp;&nbsp;//methods and fields<br/>
                                    {'}'}
                                </code>
                            </div>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <h4 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>Access Modifier</h4>
                            <div style={codeBlockStyle}>
                                <code>
                                    ======Access Modifier======<br/>
                                    - Public: within class | within package | outside of package<br/>
                                    - Protected: within class | within package<br/>
                                    - Default: within class | within package<br/>
                                    - Private: within class
                                </code>
                            </div>
                        </div>
                        </div>

                    {/* Collection Section */}
                    <div>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: '600',
                            borderBottom: '2px solid #e0e0e0',
                            paddingBottom: '8px'
                        }}>
                            Collection
                        </h3>
                        <p style={{ fontSize: '16px', color: '#666', fontStyle: 'italic' }}>Collection framework content...</p>
                    </div>

                    {/* Java Online Coding Link */}
                    <div style={{
                        marginTop: '30px',
                        padding: '20px',
                        backgroundColor: '#e7f3ff',
                        borderRadius: '8px',
                        borderLeft: '4px solid #00416A',
                        textAlign: 'center'
                    }}>
                        <a 
                            href='https://programiz.com/java-programming/online-compiler/'
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontSize: '16px',
                                color: '#00416A',
                                textDecoration: 'none',
                                fontWeight: '600'
                            }}
                        >
                            Java Online Coding →
                        </a>
                    </div>
                        </div>

                {/* C# Section */}
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    border: '1px solid #e0e0e0'
                }}>
                    <h2 style={{
                        color: '#00416A',
                        fontSize: '28px',
                        marginBottom: '25px',
                        fontWeight: 'bold',
                        borderBottom: '3px solid #00416A',
                        paddingBottom: '10px'
                    }}>
                        C#
                    </h2>

                    <div style={{ marginBottom: '30px' }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: '600',
                            borderBottom: '2px solid #e0e0e0',
                            paddingBottom: '8px'
                        }}>
                            Basic
                        </h3>
                        <div style={codeBlockStyle}>
                            <code>int number = 25;</code>
                        </div>
                        </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: '600',
                            borderBottom: '2px solid #e0e0e0',
                            paddingBottom: '8px'
                        }}>
                            Control Statement
                        </h3>
                        <p style={{ fontSize: '16px', color: '#666', fontStyle: 'italic' }}>Control statement content...</p>
                        </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: '600',
                            borderBottom: '2px solid #e0e0e0',
                            paddingBottom: '8px'
                        }}>
                            Object Class
                        </h3>
                        <p style={{ fontSize: '16px', color: '#666', fontStyle: 'italic' }}>Object class content...</p>
                        </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: '600',
                            borderBottom: '2px solid #e0e0e0',
                            paddingBottom: '8px'
                        }}>
                            OOPs Concept
                        </h3>
                        <p style={{ fontSize: '16px', color: '#666', fontStyle: 'italic' }}>OOPs concept content...</p>
                        </div>

                    <div>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: '600',
                            borderBottom: '2px solid #e0e0e0',
                            paddingBottom: '8px'
                        }}>
                            Collection
                        </h3>
                        <p style={{ fontSize: '16px', color: '#666', fontStyle: 'italic' }}>Collection framework content...</p>
                    </div>
                        </div>

                {/* JavaScript Section */}
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    border: '1px solid #e0e0e0'
                }}>
                    <h2 style={{
                        color: '#00416A',
                        fontSize: '28px',
                        marginBottom: '25px',
                        fontWeight: 'bold',
                        borderBottom: '3px solid #00416A',
                        paddingBottom: '10px'
                    }}>
                        JavaScript
                    </h2>

                    <div style={{ marginBottom: '30px' }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: '600',
                            borderBottom: '2px solid #e0e0e0',
                            paddingBottom: '8px'
                        }}>
                            Basic
                        </h3>
                        <div style={codeBlockStyle}>
                            <code>
                                var number = 25;<br/>
                                let number = 25;<br/>
                                const number = 25;
                            </code>
                        </div>
                        </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: '600',
                            borderBottom: '2px solid #e0e0e0',
                            paddingBottom: '8px'
                        }}>
                            Control Statement
                        </h3>
                        <p style={{ fontSize: '16px', color: '#666', fontStyle: 'italic' }}>Control statement content...</p>
                        </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: '600',
                            borderBottom: '2px solid #e0e0e0',
                            paddingBottom: '8px'
                        }}>
                            Object Class
                        </h3>
                        <p style={{ fontSize: '16px', color: '#666', fontStyle: 'italic' }}>Object class content...</p>
                        </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: '600',
                            borderBottom: '2px solid #e0e0e0',
                            paddingBottom: '8px'
                        }}>
                            OOPs Concept
                        </h3>
                        <p style={{ fontSize: '16px', color: '#666', fontStyle: 'italic' }}>OOPs concept content...</p>
                        </div>

                    <div>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: '600',
                            borderBottom: '2px solid #e0e0e0',
                            paddingBottom: '8px'
                        }}>
                            Collection
                        </h3>
                        <p style={{ fontSize: '16px', color: '#666', fontStyle: 'italic' }}>Collection framework content...</p>
                    </div>
                </div>

                {/* Python Section */}
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    border: '1px solid #e0e0e0'
                }}>
                    <h2 style={{
                        color: '#00416A',
                        fontSize: '28px',
                        marginBottom: '25px',
                        fontWeight: 'bold',
                        borderBottom: '3px solid #00416A',
                        paddingBottom: '10px'
                    }}>
                        Python
                    </h2>

                    <div style={{ marginBottom: '30px' }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: '600',
                            borderBottom: '2px solid #e0e0e0',
                            paddingBottom: '8px'
                        }}>
                            Basic
                        </h3>
                        <div style={codeBlockStyle}>
                            <code>number = 25;</code>
                        </div>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: '600',
                            borderBottom: '2px solid #e0e0e0',
                            paddingBottom: '8px'
                        }}>
                            Control Statement
                        </h3>
                        <p style={{ fontSize: '16px', color: '#666', fontStyle: 'italic' }}>Control statement content...</p>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: '600',
                            borderBottom: '2px solid #e0e0e0',
                            paddingBottom: '8px'
                        }}>
                            Object Class
                        </h3>
                        <p style={{ fontSize: '16px', color: '#666', fontStyle: 'italic' }}>Object class content...</p>
                        </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: '600',
                            borderBottom: '2px solid #e0e0e0',
                            paddingBottom: '8px'
                        }}>
                            OOPs Concept
                        </h3>
                        <p style={{ fontSize: '16px', color: '#666', fontStyle: 'italic' }}>OOPs concept content...</p>
                        </div>

                        <div>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: '600',
                            borderBottom: '2px solid #e0e0e0',
                            paddingBottom: '8px'
                        }}>
                            Collection
                        </h3>
                        <p style={{ fontSize: '16px', color: '#666', fontStyle: 'italic' }}>Collection framework content...</p>
                        </div>
                        </div>
                        </div>

            <section style={{ marginTop: '40px' }}>
                <Footer />
            </section>
        </div>
    )
}
export default CodeSnippet;
