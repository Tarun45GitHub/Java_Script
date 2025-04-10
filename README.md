# Java_Script
## what is Javascript ?
- JavaScript is a scripting or programming language that allows you to implement complex features on web pages,
- java script synchronous ,single threaded
- java script high level language
- js is Dynamically typed language-> the data type of variables are determind by the value not by programmer
## 01 Variable
**1.1:** Which type of variables (var, let or const) must be **initialized** at the time of declaration?

**Ans:** var and let can be declared without being initialized, **const** must be initialized during declaration

## 02 DataType
**2.1:** Create a code to check difference between `null` and `undefined` data type. Also check their type using `typeof`. 

**Ans:**
```js
let x=null;    //value of x is null and its type object
let y;        // value of y is undefine and its type undefine
console.log(x,typeof(x));
console.log(typeof(y));
```
**2.2:** Guess the **Output** and Explain Why?


```js
let languages = 'java javaScript python cSharp';

let result = languages.lastIndexOf('S');

console.log(result);
```
**Ans:** 24

## higher order functon:
- that function can take a functon as input and return a function as output
- example: map , forEach ,filter
## differenc between map and foreach
- forEach have no return value
- map return a new array