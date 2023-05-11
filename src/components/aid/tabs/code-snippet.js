import React from 'react';
import '../../../App.css';
import { Grid, Cell } from 'react-mdl';
import codeSnippetData from '../../../utilities/data/code-snippet.json';
import Footer from '../../../components/footer';


const CodeSnippet = () => {
    return(
        <section className='page-tab-body'>
            <div>
                <h3>{codeSnippetData.codeSnippent}</h3>
            </div>
            
            <Grid className="border">
                <Cell id="java" className='pl4' col={3}>
                    <div>
                        <h3>JAVA</h3>
                        <hr/>
                    </div>
                    <secttion id="basic">
                        <div>
                            <h5>Basic</h5>
                            <hr/>
                        </div>
                        <div id="variable">
                            <code>
                                ======Variable======<br/>
                                Variable type: local, instance, static <br/>
                                int number = 25; <br/>
                                static int number = 25;
                               
                            </code>
                        </div>
                        <div id="datatype">
                            <code>
                                <br/>
                                ======DataTypes======<br/>
                                Data type: Primitive & Non-primitive <br/>
                                * Primitive: Define by the Program. <br/>
                                * Non-primitive define by the programmer. <br/>
                                - int number = 1234; <br/>
                                - long number = 2433555L; <br/>
                                - float decimalNumber = 23434.4f; <br/>
                                - double decimalNumber = 232.4; <br/>
                                - char leter = "A"; <br/>
                                - boolean onlyOne = false; <br/>
                            </code>
                        </div>
                        <div id="operators">
                            <code>
                                <br/>
                                ======Operators======<br/>
                                Arithmetic: Addition(+), Subtraction(-), Multiplication(x), Division(/), Modulus(%), Increment(++), Decrement(--)<br/>
                                Assignment: =, +=, -=, *=, /=, %=, &=, |=, ^= <br/>
                                Comparison: ==, != <br/>
                                Logical: &&, ||, ! <br/>
                                Bitwise: <br/>
                               
                            </code>
                        </div>
                    </secttion>
                    <section id="Constrol Statement">
                        <div>
                            <h5>Constrol Statement</h5>
                            <hr/>
                        </div>
                        <div id="ifElseIf">
                            <code>
                                <br/>
                                ======ifElseIfElseIfElse======<br/>
                                - if: if(condition){'{'} '/* code goes here */' {'}'} <br/> 
                                - if-else: if(condition){'{'}'/* code goes here */'{'}'}else{'{'}'/* code goes here */'{'}'} <br/> 
                                - if-else-if: if(condition1){'{'}'/* code goes here */'{'}'}else if(condition2){'{'}'/* code goes here */'{'}'}else if(condition3){'{'}'/* code goes here */'{'}'}else{'{'}'/* code goes here */'{'}'} <br/> 
                                - nested if: if(condition1){'{'} '/* code goes here */' <br/> if(condition1){'{'}'/* code goes here */'{'}'} <br/> {'}'} <br/>  
                            </code>
                        </div>
                        <div id="loops">
                            <code>
                                <br/>
                                ======Loops======<br/>
                                - for-loop: for(initialization; condition; increment){'{'} <br/>
                                    '//code to executed'<br/>
                                {'}'} <br/>
                                - nested-for-loop:for(initialization; condition; increment){'{'} <br/>
                                    '//code to executed' <br/>
                                    for(initialization; condition; increment){'{'} <br/>
                                    '//code to executed'<br/>
                                    {'}'} <br/>
                                {'}'} <br/>
                                - for-each-loop: for(dataType variable : array_name){'{'} <br/>
                                    '//code to executed'<br/>
                                {'}'}
                            </code>
                        </div>
                        <div id="switch">
                            <code>
                                <br/>
                                ======Switch======<br/>
                                - switch(expression){'{'}<br/>
                                case value1:<br/>
                                    '//code to be executed'<br/>
                                    break '//optinal'<br/>
                                case value2:<br/>
                                    '//code to be executed'<br/>
                                    break '//optinal'<br/>
                                case value2:<br/>
                                    '//code to be executed'<br/>
                                    break '//optinal'<br/>
                                .......<br/>
                                default:<br/>
                                    '//code to be executed'<br/>
                                {'}'}
                            </code>

                        </div>
                    </section>
                    <section id="objectClass">
                        <div>
                            <h5>Object Class</h5>
                            <hr/>
                        </div>
                        <div id="this">
                            <code>
                            ====This keyword===<br/>
                            - Refeerence variable that refers to the current object. <br/>
                            - "this" can be used to refer current class instance variable. <br/>
                            - "this" can be used to invoke current class method(implicitly). <br/>
                            - "this()" can be used to invoke current class constructor. <br/>
                            </code>
                        </div>
                        <div id="method">
                            <code>
                                <br/>
                                ======Method======<br/>
                                - Reusability <br/>
                                - Easy to modification <br/>
                                - Readability <br/>
                                * Pre defined method: print() <br/>
                                * User defined method: sum() <br/>

                                Method Declaration: <br/>
                                - non-return type non-parameterize method: void sum (){'{'} <br/>
                                    '//method body | Method Signature'<br/>
                                {'}'}<br/>

                                - return type parameterize method: int sum (int a, int b){'{'} <br/>
                                    '//method body | Method Signature'<br/>
                                    return a+b;<br/>
                                {'}'}<br/>
                            </code>
                        </div>
                        <div id="constructors">
                            <code>
                                <br/>
                                ======Constructor======<br/>
                                - Constructor == Method <br/>
                                - Instance of the Class <br/>
                                - Default constructor is being called, during the object creattion by the new() keyword <br/>
                                - Constructor name must be the same name of Class name <br/>
                                - No return type <br/>
                                - Can not be abstract, static, final or synchronized <br/>
                                - Constructor overloading is possible with different arguments.<br/>
                                * Constructor types:
                                - Default: {'<'} class_name{'>'}{'{'}{'}'} <br/>
                                - Parameterized: Student{'{'} <br/>
                                    '//parameterized constructor'<br/>
                                    Student(int a, String b){'{'} <br/>
                                        id = a;<br/>
                                        name = b;<br/>
                                    {'}'}<br/>
                                    void display(){'{'}System.out.printLn(id +" "+name){'{'}<br/>

                                    public static void main(String args[]){'{'}<br/>
                                        Student s = new Student(5, "Shahnewaz");<br/>
                                        s.display();<br/>
                                    {'}'} <br/>
                                {'}'}
                            </code>
                        </div>
                        
                    </section>
                    <section id="oppsConcept">
                        <div>
                            <h5>Opps Concept</h5>
                            <hr/>
                        </div>
                        <div id="inherittance">
                            <div id="accessmodifier">
                                <code>
                                    ======Access Modifier======<br/>
                                    - Public: within class | within package | outside of package <br/>
                                    - Protected: within class | within package<br/>
                                    - Default: within class | within package <br/>
                                    - Private: within class  <br/>
                                </code>
                            </div>
                        </div>
                    </section>
                    <section id="collection">
                        <div>
                            <h5>Collection</h5>
                            <hr/>
                        </div>
                    </section>
                </Cell>
                <Cell id="csharp" className='pl4 verticalLine' col={3}>
                    <div>
                        <h3>C#</h3>
                        <hr/>
                    </div>
                    <secttion id="basic">
                        <div>
                            <h5>Basic</h5>
                            <hr/>
                        </div>
                        <div id="variable">
                            <code>
                                int number = 25; 
                                
                            </code>
                        </div>
                    </secttion>
                    <section id="constrolStatement">
                        <div>
                            <h5>Constrol Statement</h5>
                            <hr/>
                        </div>
                    </section>
                    <section id="objectClass">
                        <div>
                            <h5>Object Class</h5>
                            <hr/>
                        </div>
                    </section>
                    <section id="oppsConcept">
                        <div>
                            <h5>Opps Concept</h5>
                            <hr/>
                        </div>
                    </section>
                    <section id="collection">
                        <div>
                            <h5>Collection</h5>
                            <hr/>
                        </div>
                    </section>
                </Cell>
                <Cell id="javascript" className='pl4 verticalLine' col={3}>
                    <div>
                        <h3>JavaScript</h3>
                        <hr/>
                    </div>
                    <secttion id="basic">
                        <div>
                            <h5>Basic</h5>
                            <hr/>
                        </div>
                        <div id="variable">
                            <code>
                                var number = 25; <br/>
                                let number = 25; <br/>
                                const number = 25;
                            </code>
                        </div>
                    </secttion>
                    <section id="constrolStatement">
                        <div>
                            <h5>Constrol Statement</h5>
                            <hr/>
                        </div>
                    </section>
                    <section id="objectClass">
                        <div>
                            <h5>Object Class</h5>
                            <hr/>
                        </div>
                    </section>
                    <section id="oppsConcept">
                        <div>
                            <h5>Opps Concept</h5>
                            <hr/>
                        </div>
                    </section>
                    <section id="collection">
                        <div>
                            <h5>Collection</h5>
                            <hr/>
                        </div>
                    </section>
                </Cell>
                <Cell id="python" className='pl4 verticalLine' col={3}>
                    <div>
                        <h3>Python</h3>
                        <hr/>
                    </div>
                    <secttion id="basic">
                        <div>
                            <h5>Basic</h5>
                            <hr/>
                        </div>
                        <div id="variable">
                            <code>
                                number = 25; 
                                
                            </code>
                        </div>
                    </secttion>
                    <section id="constrolStatement">
                        <div>
                            <h5>Constrol Statement</h5>
                            <hr/>
                        </div>
                    </section>
                    <section id="objectClass">
                        <div>
                            <h5>Object Class</h5>
                            <hr/>
                        </div>
                    </section>
                    <section id="oppsConcept">
                        <div>
                            <h5>Opps Concept</h5>
                            <hr/>
                        </div>
                    </section>
                    <section id="collection">
                        <div>
                            <h5>Collection</h5>
                            <hr/>
                        </div>
                    </section>
                </Cell>
            </Grid>
            <hr/>
            <section className='pt4'>
                <Footer />
            </section>
        </section>
    )
}
export default CodeSnippet;