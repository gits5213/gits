import React from 'react';
import '../../../App.css';
import codeSnippetData from '../../../utilities/data/code-snippet.json';

const CodeSnippet = () => {
    const codeBlockStyle = {
        backgroundColor: '#f6f8fa',
        color: '#24292e',
        padding: '12px',
        borderRadius: '6px',
        overflowX: 'auto',
        fontFamily: 'monospace',
        fontSize: '12px',
        lineHeight: '1.4',
        marginTop: '8px',
        border: '1px solid #e1e4e8',
        textAlign: 'left',
        direction: 'ltr',
        maxHeight: '400px',
        overflowY: 'auto'
    };

    const tableStyle = {
        width: '100%',
        minWidth: '1400px',
        borderCollapse: 'collapse',
        marginTop: '30px',
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        tableLayout: 'fixed',
        display: 'table'
    };

    const headerCellStyle = {
        backgroundColor: '#00416A',
        color: '#ffffff',
        padding: '12px 8px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '14px',
        border: '1px solid #003050',
        verticalAlign: 'middle',
        width: '269px',
        minWidth: '269px',
        maxWidth: '269px',
        whiteSpace: 'nowrap',
        boxSizing: 'border-box'
    };

    const sectionHeaderCellStyle = {
        backgroundColor: '#e7f3ff',
        color: '#00416A',
        padding: '4px 4px',
        textAlign: 'left',
        fontWeight: '600',
        fontSize: '10px',
        border: '1px solid #c0d9f0',
        verticalAlign: 'top',
        width: '55px',
        maxWidth: '55px',
        minWidth: '55px',
        position: 'sticky',
        left: 0,
        zIndex: 10,
        boxSizing: 'border-box',
        lineHeight: '1.1',
        whiteSpace: 'normal',
        wordWrap: 'break-word',
        overflow: 'hidden'
    };

    const codeCellStyle = {
        padding: '12px 8px',
        border: '1px solid #e0e0e0',
        verticalAlign: 'top',
        backgroundColor: '#fafafa',
        textAlign: 'left',
        width: '269px',
        minWidth: '269px',
        maxWidth: '269px',
        boxSizing: 'border-box'
    };

    // Code snippets organized by section (row) and language (column)
    const codeSnippets = {
        'Basic': {
            'Java': `===========================================
Variable
===========================================
Variable type: local, instance, static
int number = 25;
static int number = 25;

===========================================
DataTypes
===========================================
Data type: Primitive & Non-primitive
* Primitive: Define by the Program.
* Non-primitive define by the programmer.
- int number = 1234;
- long number = 2433555L;
- float decimalNumber = 23434.4f;
- double decimalNumber = 232.4;
- char leter = "A";
- boolean onlyOne = false;

===========================================
Operators
===========================================
Arithmetic: Addition(+), Subtraction(-), Multiplication(x), Division(/), Modulus(%), Increment(++), Decrement(--)
Assignment: =, +=, -=, *=, /=, %=, &=, |=, ^=
Comparison: ==, !=
Logical: &&, ||, !
Bitwise:`,
            'C#': `===========================================
Variable
===========================================
Variable type: local, instance, static
int number = 25;
static int number = 25;
string name = "John";

===========================================
DataTypes
===========================================
Data type: Value types & Reference types
* Value types: int, long, float, double, char, bool, decimal
* Reference types: string, object, array, class
- int number = 1234;
- long number = 2433555L;
- float decimalNumber = 23434.4f;
- double decimalNumber = 232.4;
- char letter = 'A';
- bool onlyOne = false;
- string text = "Hello";

===========================================
Operators
===========================================
Arithmetic: +, -, *, /, %, ++, --
Assignment: =, +=, -=, *=, /=, %=
Comparison: ==, !=, <, >, <=, >=
Logical: &&, ||, !
Bitwise: &, |, ^, ~, <<, >>`,
            'JavaScript': `===========================================
Variable
===========================================
Variable type: var, let, const
var number = 25;
let number = 25;
const number = 25;

===========================================
DataTypes
===========================================
- number: 1234, 23.4
- string: "Hello"
- boolean: true, false
- object: {key: "value"}
- array: [1, 2, 3]
- undefined, null

===========================================
Operators
===========================================
Arithmetic: +, -, *, /, %, **, ++, --
Assignment: =, +=, -=, *=, /=, %=
Comparison: ==, ===, !=, !==, <, >, <=, >=
Logical: &&, ||, !
Ternary: condition ? value1 : value2`,
            'TypeScript': `===========================================
Variable
===========================================
Variable type: let, const (with type annotations)
let number: number = 25;
const name: string = "John";
let isActive: boolean = true;
let data: any = "can be any type";

===========================================
DataTypes
===========================================
- number: let num: number = 1234;
- string: let text: string = "Hello";
- boolean: let flag: boolean = true;
- array: let arr: number[] = [1, 2, 3];
- tuple: let tuple: [string, number] = ["hello", 42];
- enum: enum Color {Red, Green, Blue}
- any: let value: any = "anything";
- void: function log(): void { }
- null/undefined: let n: null = null;
- object: let obj: {name: string, age: number} = {name: "John", age: 25};

===========================================
Operators
===========================================
Arithmetic: +, -, *, /, %, **, ++, --
Assignment: =, +=, -=, *=, /=, %=
Comparison: ==, ===, !=, !==, <, >, <=, >=
Logical: &&, ||, !
Ternary: condition ? value1 : value2
Type assertion: <Type>value or value as Type`,
            'Python': `===========================================
Variable
===========================================
Variable type: local, instance, class
number = 25
name = "John"
is_active = True
_private_var = "private"  # convention

===========================================
DataTypes
===========================================
Data type: Mutable & Immutable
* Mutable: list, dict, set
* Immutable: int, float, str, tuple, bool
- int: number = 1234
- float: decimal_number = 232.4
- str: text = "Hello"
- bool: flag = True or False
- list: items = [1, 2, 3]
- tuple: items = (1, 2, 3)
- dict: data = {'key': 'value'}
- set: unique = {'1', '2', '3'}

===========================================
Operators
===========================================
Arithmetic: +, -, *, /, //, %, **
Assignment: =, +=, -=, *=, /=, //=, %=, **=
Comparison: ==, !=, <, >, <=, >=
Logical: and, or, not
Identity: is, is not
Membership: in, not in`
        },
        'Control Statement': {
            'Java': `===========================================
ifElseIfElseIfElse
===========================================
- if: if(condition) { /* code goes here */ }
- if-else: if(condition) {/* code goes here */}else {/* code goes here */}
- if-else-if: if(condition1) {/* code goes here */}else if(condition2) {/* code goes here */}else if(condition3) {/* code goes here */}else {/* code goes here */}
- nested if: if(condition1) { /* code goes here */
    if(condition1) {/* code goes here */}
}

===========================================
Loops
===========================================
- for-loop: for(initialization; condition; increment) {
    //code to executed
}
- nested-for-loop: for(initialization; condition; increment) {
    //code to executed
    for(initialization; condition; increment) {
        //code to executed
    }
}
- for-each-loop: for(dataType variable : array_name) {
    //code to executed
}

===========================================
Switch
===========================================
- switch(expression) {
    case value1:
        //code to be executed
        break //optional
    case value2:
        //code to be executed
        break //optional
    default:
        //code to be executed
}`,
            'C#': `===========================================
ifElseIfElse
===========================================
- if: if(condition) { /* code goes here */ }
- if-else: if(condition) {/* code goes here */} else {/* code goes here */}
- if-else-if: if(condition1) {/* code goes here */} else if(condition2) {/* code goes here */} else {/* code goes here */}
- nested if: if(condition1) {
    if(condition2) {/* code goes here */}
}

===========================================
Loops
===========================================
- for-loop: for(int i = 0; i < 10; i++) {
    //code to executed
}
- nested-for-loop: for(int i = 0; i < 10; i++) {
    for(int j = 0; j < 5; j++) {
        //code to executed
    }
}
- foreach-loop: foreach(var item in collection) {
    //code to executed
}
- while-loop: while(condition) {
    //code to executed
}
- do-while-loop: do {
    //code to executed
} while(condition);

===========================================
Switch
===========================================
- switch(expression) {
    case value1:
        //code to be executed
        break;
    case value2:
        //code to be executed
        break;
    default:
        //code to be executed
        break;
}`,
            'JavaScript': `===========================================
ifElseIfElse
===========================================
- if: if(condition) { /* code goes here */ }
- if-else: if(condition) {/* code goes here */} else {/* code goes here */}
- if-else-if: if(condition1) {/* code goes here */} else if(condition2) {/* code goes here */} else {/* code goes here */}
- nested if: if(condition1) {
    if(condition2) {/* code goes here */}
}
- ternary: condition ? value1 : value2;

===========================================
Loops
===========================================
- for-loop: for(let i = 0; i < 10; i++) {
    //code to executed
}
- nested-for-loop: for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 5; j++) {
        //code to executed
    }
}
- for-in-loop: for(let key in object) {
    //code to executed
}
- for-of-loop: for(let item of array) {
    //code to executed
}
- while-loop: while(condition) {
    //code to executed
}
- do-while-loop: do {
    //code to executed
} while(condition);

===========================================
Switch
===========================================
- switch(expression) {
    case value1:
        //code to be executed
        break;
    case value2:
        //code to be executed
        break;
    default:
        //code to be executed
}`,
            'Python': `===========================================
ifElseIfElse
===========================================
- if: if condition:
    # code goes here
- if-else: if condition:
    # code goes here
else:
    # code goes here
- if-elif-else: if condition1:
    # code goes here
elif condition2:
    # code goes here
else:
    # code goes here
- nested if: if condition1:
    if condition2:
        # code goes here

===========================================
Loops
===========================================
- for-loop: for i in range(10):
    # code to executed
- nested-for-loop: for i in range(10):
    for j in range(5):
        # code to executed
- for-in-loop: for item in list:
    # code to executed
- while-loop: while condition:
    # code to executed
- List comprehension: [x for x in range(10)]`,
            'TypeScript': `===========================================
ifElseIfElse
===========================================
- if: if(condition: boolean) { /* code goes here */ }
- if-else: if(condition) {/* code goes here */} else {/* code goes here */}
- if-else-if: if(condition1) {/* code goes here */} else if(condition2) {/* code goes here */} else {/* code goes here */}
- nested if: if(condition1) {
    if(condition2) {/* code goes here */}
}
- ternary: condition ? value1 : value2;

===========================================
Loops
===========================================
- for-loop: for(let i: number = 0; i < 10; i++) {
    //code to executed
}
- nested-for-loop: for(let i: number = 0; i < 10; i++) {
    for(let j: number = 0; j < 5; j++) {
        //code to executed
    }
}
- for-in-loop: for(let key in object) {
    //code to executed
}
- for-of-loop: for(let item of array: number[]) {
    //code to executed
}
- while-loop: while(condition: boolean) {
    //code to executed
}
- do-while-loop: do {
    //code to executed
} while(condition);

===========================================
Switch
===========================================
- switch(expression) {
    case value1:
        //code to be executed
        break;
    case value2:
        //code to be executed
        break;
    default:
        //code to be executed
}`
        },
        'Object Class': {
            'Java': `===========================================
This keyword
===========================================
- Reference variable that refers to the current object.
- "this" can be used to refer current class instance variable.
- "this" can be used to invoke current class method(implicitly).
- "this()" can be used to invoke current class constructor.

===========================================
Method
===========================================
- Reusability
- Easy to modification
- Readability
* Pre defined method: print()
* User defined method: sum()

Method Declaration:
- non-return type non-parameterize method: void sum() {
    //method body | Method Signature
}

- return type parameterize method: int sum (int a, int b) {
    //method body | Method Signature
    return a+b;
}

===========================================
Constructor
===========================================
- Constructor == Method
- Instance of the Class
- Default constructor is being called, during the object creation by the new() keyword
- Constructor name must be the same name of Class name
- No return type
- Can not be abstract, static, final or synchronized
- Constructor overloading is possible with different arguments.
* Constructor types:
- Default: < class_name > { }
- Parameterized: Student {
    //parameterized constructor
    Student(int a, String b) {
        id = a;
        name = b;
    }
    void display() {System.out.printLn(id +" "+name)}
    
    public static void main(String args[]) {
        Student s = new Student(5, "Shahnewaz");
        s.display();
    }
}`,
            'C#': `===========================================
This keyword
===========================================
- Reference variable that refers to the current object.
- "this" can be used to refer current class instance variable.
- "this" can be used to invoke current class method(implicitly).
- "this()" can be used to invoke current class constructor.

===========================================
Method
===========================================
- Reusability
- Easy to modification
- Readability
* Pre defined method: Console.WriteLine()
* User defined method: Sum()

Method Declaration:
- non-return type non-parameterize method: void Sum() {
    //method body | Method Signature
}

- return type parameterize method: int Sum(int a, int b) {
    //method body | Method Signature
    return a + b;
}

===========================================
Constructor
===========================================
- Constructor == Method
- Instance of the Class
- Default constructor is being called, during the object creation by the new() keyword
- Constructor name must be the same name of Class name
- No return type
- Constructor overloading is possible with different arguments.
* Constructor types:
- Default: public ClassName() { }
- Parameterized: public Student(int a, string b) {
    id = a;
    name = b;
}`,
            'JavaScript': `===========================================
Object
===========================================
- Object literal: const obj = {
    name: "John",
    age: 25
};
- Access property: obj.name or obj["name"]
- Add property: obj.city = "NYC";
- Delete property: delete obj.age;

===========================================
Function
===========================================
- Function declaration: function sum(a, b) {
    return a + b;
}
- Function expression: const sum = function(a, b) {
    return a + b;
};
- Arrow function: const sum = (a, b) => a + b;
- Anonymous function: (function() {/* code */})();

===========================================
Class
===========================================
- Class declaration: class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(this.name);
    }
}
- Create instance: const student = new Student("John", 25);`,
            'TypeScript': `===========================================
Object
===========================================
- Object literal: const obj: {name: string, age: number} = {
    name: "John",
    age: 25
};
- Interface: interface Person {
    name: string;
    age: number;
}
const person: Person = {name: "John", age: 25};
- Access property: obj.name or obj["name"]
- Add property: obj.city = "NYC";
- Delete property: delete obj.age;

===========================================
Function
===========================================
- Function declaration: function sum(a: number, b: number): number {
    return a + b;
}
- Function expression: const sum = function(a: number, b: number): number {
    return a + b;
};
- Arrow function: const sum = (a: number, b: number): number => a + b;
- Optional parameters: function greet(name: string, age?: number): void { }
- Default parameters: function greet(name: string = "Guest"): void { }
- Rest parameters: function sum(...numbers: number[]): number { }

===========================================
Class
===========================================
- Class declaration: class Student {
    private name: string;
    public age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    display(): void {
        console.log(this.name);
    }
}
- Create instance: const student: Student = new Student("John", 25);
- Access modifiers: public, private, protected, readonly`,
            'Python': `===========================================
Self keyword
===========================================
- Reference variable that refers to the current instance.
- "self" can be used to refer current class instance variable.
- "self" can be used to invoke current class method.
- First parameter in instance methods.

===========================================
Method
===========================================
- Reusability
- Easy to modification
- Readability
* Built-in method: print()
* User defined method: def sum():

Method Declaration:
- non-return type non-parameterize method:
    def sum(self):
        # method body

- return type parameterize method:
    def sum(self, a, b):
        return a + b

===========================================
Constructor
===========================================
- Constructor == __init__ method
- Instance of the Class
- Default constructor is being called, during the object creation
- Constructor name must be __init__
- Constructor overloading is possible with different arguments.
* Constructor types:
- Default: def __init__(self):
    pass
- Parameterized: def __init__(self, a, b):
    self.id = a
    self.name = b`
        },
        'OOPs Concept': {
            'Java': `class Subclass-name extends Superclass-name {
    //methods and fields
}

===========================================
Access Modifier
===========================================
- Public: within class | within package | outside of package
- Protected: within class | within package
- Default: within class | within package
- Private: within class`,
            'C#': `class SubclassName : SuperclassName {
    //methods and fields
}

===========================================
Access Modifier
===========================================
- Public: within class | within assembly | outside of assembly
- Protected: within class | within derived class
- Internal: within class | within assembly
- Private: within class`,
            'JavaScript': `class SubclassName extends SuperclassName {
    constructor(...args) {
        super(...args);
    }
    //methods and fields
}

===========================================
Encapsulation
===========================================
- Private fields: #privateField = value;
- Getter: get propertyName() { }
- Setter: set propertyName(value) { }
- Public: this.publicField = value;`,
            'Python': `class SubclassName(SuperclassName):
    # methods and fields
    pass

===========================================
Access Modifier
===========================================
- Public: within class | within package | outside of package
- Protected: within class | within derived class (convention: _name)
- Private: within class (convention: __name)`,
            'TypeScript': `class SubclassName extends SuperclassName {
    constructor(...args: any[]) {
        super(...args);
    }
    //methods and fields
}

===========================================
Access Modifier
===========================================
- Public: public property: string; (default)
- Private: private property: string; (only within class)
- Protected: protected property: string; (within class and subclasses)
- Readonly: readonly property: string; (cannot be modified after initialization)

===========================================
Interfaces & Types
===========================================
- Interface: interface Person {
    name: string;
    age: number;
    greet(): void;
}
- Type alias: type Point = {x: number, y: number};
- Union types: let value: string | number;
- Intersection types: type Combined = Type1 & Type2;
- Generics: function identity<T>(arg: T): T { return arg; }`
        },
        'Collection': {
            'Java': `===========================================
List
===========================================
- ArrayList: List<String> list = new ArrayList<String>();
    list.add("item");
    list.get(0);
    list.remove(0);
- LinkedList: List<String> list = new LinkedList<String>();
- Vector: Vector<String> vec = new Vector<String>();

===========================================
Set
===========================================
- HashSet: Set<String> set = new HashSet<String>();
    set.add("item");
    set.contains("item");
- LinkedHashSet: Set<String> set = new LinkedHashSet<String>();
- TreeSet: Set<String> set = new TreeSet<String>();

===========================================
Map
===========================================
- HashMap: Map<String, Integer> map = new HashMap<String, Integer>();
    map.put("key", 1);
    map.get("key");
    map.remove("key");
- LinkedHashMap: Map<String, Integer> map = new LinkedHashMap<String, Integer>();
- TreeMap: Map<String, Integer> map = new TreeMap<String, Integer>();`,
            'C#': `===========================================
List
===========================================
- List: List<string> list = new List<string>();
    list.Add("item");
    list[0];
    list.Remove("item");
- ArrayList: ArrayList list = new ArrayList();
- LinkedList: LinkedList<string> list = new LinkedList<string>();

===========================================
Set
===========================================
- HashSet: HashSet<string> set = new HashSet<string>();
    set.Add("item");
    set.Contains("item");
- SortedSet: SortedSet<string> set = new SortedSet<string>();

===========================================
Dictionary
===========================================
- Dictionary: Dictionary<string, int> dict = new Dictionary<string, int>();
    dict.Add("key", 1);
    dict["key"];
    dict.Remove("key");
- Hashtable: Hashtable table = new Hashtable();`,
            'JavaScript': `===========================================
Array
===========================================
- Array literal: const arr = [1, 2, 3];
- Array constructor: const arr = new Array(1, 2, 3);
- Add element: arr.push(4);
- Remove element: arr.pop();
- Access element: arr[0];
- Array methods: map(), filter(), reduce(), forEach()

===========================================
Set
===========================================
- Create Set: const set = new Set([1, 2, 3]);
- Add element: set.add(4);
- Check element: set.has(2);
- Remove element: set.delete(2);
- Size: set.size;

===========================================
Map
===========================================
- Create Map: const map = new Map();
- Add element: map.set("key", "value");
- Get element: map.get("key");
- Check key: map.has("key");
- Remove element: map.delete("key");
- Size: map.size;`,
            'TypeScript': `===========================================
Array
===========================================
- Array literal: const arr: number[] = [1, 2, 3];
- Array with type: const arr: Array<number> = [1, 2, 3];
- Generic array: const arr: Array<string> = ["a", "b", "c"];
- Add element: arr.push(4);
- Remove element: arr.pop();
- Access element: arr[0];
- Array methods: map(), filter(), reduce(), forEach(), find(), some(), every()

===========================================
Set
===========================================
- Create Set: const set: Set<number> = new Set([1, 2, 3]);
- Add element: set.add(4);
- Check element: set.has(2);
- Remove element: set.delete(2);
- Size: set.size;
- Iterate: for(let item of set) { }

===========================================
Map
===========================================
- Create Map: const map: Map<string, number> = new Map();
- Add element: map.set("key", 1);
- Get element: map.get("key");
- Check key: map.has("key");
- Remove element: map.delete("key");
- Size: map.size;
- Iterate: for(let [key, value] of map) { }

===========================================
Tuple
===========================================
- Tuple: let tuple: [string, number] = ["hello", 42];
- Access: tuple[0]; // "hello"
- Tuple with optional: let tuple: [string, number?] = ["hello"];
- Readonly tuple: let tuple: readonly [string, number] = ["hello", 42];`,
            'Python': `===========================================
List
===========================================
- List: list = [1, 2, 3]
    list.append(4)
    list[0]
    list.remove(1)
    list.pop()
- List methods: append(), extend(), insert(), remove(), pop(), index(), count(), sort(), reverse()

===========================================
Set
===========================================
- Set: set = {'1', '2', '3'}
    set.add('4')
    '2' in set
    set.remove('2')
    set.discard('2')
- Set methods: add(), remove(), discard(), pop(), clear(), union(), intersection(), difference()

===========================================
Dictionary
===========================================
- Dictionary: dict = {'key': 'value'}
    dict['key'] = 'value'
    dict.get('key')
    dict.pop('key')
    dict.keys()
    dict.values()
    dict.items()
- Dictionary methods: get(), pop(), popitem(), update(), keys(), values(), items(), clear()`
        }
    };

    const sections = ['Basic', 'Control Statement', 'Object Class', 'OOPs Concept', 'Collection'];
    const languages = ['Java', 'C#', 'JavaScript', 'TypeScript', 'Python'];

    return (
        <div style={{
            maxWidth: '100%',
            margin: '0 auto',
            padding: '40px 20px',
            overflowX: 'auto'
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

            {/* Code Snippets Table */}
            <div style={{ 
                overflowX: 'auto', 
                overflowY: 'visible',
                width: '100%',
                marginBottom: '20px',
                WebkitOverflowScrolling: 'touch'
            }}>
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={headerCellStyle}>Section</th>
                            <th style={headerCellStyle}>Java</th>
                            <th style={headerCellStyle}>C#</th>
                            <th style={headerCellStyle}>JavaScript</th>
                            <th style={headerCellStyle}>TypeScript</th>
                            <th style={headerCellStyle}>Python</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sections.map((section, index) => (
                            <tr key={section}>
                                <td style={{
                                    ...sectionHeaderCellStyle,
                                    width: '55px',
                                    maxWidth: '55px',
                                    minWidth: '55px'
                                }}>
                                    {section}
                                </td>
                                {languages.map((lang) => (
                                    <td key={lang} style={codeCellStyle}>
                                        <div style={codeBlockStyle}>
                                            <code style={{ 
                                                whiteSpace: 'pre-wrap',
                                                textAlign: 'left',
                                                display: 'block',
                                                width: '100%'
                                            }}>
                                                {codeSnippets[section]?.[lang] || 'Content coming soon...'}
                                            </code>
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Online Coding Links */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px',
                marginTop: '40px'
            }}>
                <div style={{
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
                <div style={{
                    padding: '20px',
                    backgroundColor: '#e7f3ff',
                    borderRadius: '8px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'center'
                }}>
                    <a 
                        href='https://dotnetfiddle.net/'
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontSize: '16px',
                            color: '#00416A',
                            textDecoration: 'none',
                            fontWeight: '600'
                        }}
                    >
                        C# Online Coding →
                    </a>
                </div>
                <div style={{
                    padding: '20px',
                    backgroundColor: '#e7f3ff',
                    borderRadius: '8px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'center'
                }}>
                    <a 
                        href='https://jsfiddle.net/'
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontSize: '16px',
                            color: '#00416A',
                            textDecoration: 'none',
                            fontWeight: '600'
                        }}
                    >
                        JavaScript Online Coding →
                    </a>
                </div>
                <div style={{
                    padding: '20px',
                    backgroundColor: '#e7f3ff',
                    borderRadius: '8px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'center'
                }}>
                    <a 
                        href='https://www.programiz.com/python-programming/online-compiler/'
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontSize: '16px',
                            color: '#00416A',
                            textDecoration: 'none',
                            fontWeight: '600'
                        }}
                    >
                        Python Online Coding →
                    </a>
                </div>
                <div style={{
                    padding: '20px',
                    backgroundColor: '#e7f3ff',
                    borderRadius: '8px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'center'
                }}>
                    <a 
                        href='https://www.typescriptlang.org/play'
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontSize: '16px',
                            color: '#00416A',
                            textDecoration: 'none',
                            fontWeight: '600'
                        }}
                    >
                        TypeScript Online Coding →
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CodeSnippet;
