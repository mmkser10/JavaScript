// 1. Use strict
// added in ES 5
// use this for Valina Javascript
// 'use strict';

// 2. 변수 //RW(Read/Write)
// mutable data type
// let (added in ES6)

// 전역변수 : 어느곳에서나 접근이 가능, 프로그램이 끝날 때 까지 항상 메모리에 존재
// 가능하면 필요한 부분에서만 정의해서 사용하는 것이 좋음
let globalName = 'global name';
console.log(age);
{
    let name = 'kim';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var
// var hoisting (항상 선언문을 제일 위로 끌어 올림)
// has no block scope
// 선언하지도 않은 값이 활성화 되거나, 블록에 감출 수 없게됨
{
    age = 4;
    var age;
    console.log(age);
}
console.log(age);


// 3. Constant [값이 변하지 않음] // Read(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Immutable data types : primitive types, frozen objects (i.e. object.freeze());
// Mutable data types : all objects by default are mutalbe in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive, single item : number, string, boolean, null...
// object, box container
// function, first-class function
// C, C++, Java 같은 경우는 Data의 크기에 따라 다양한 변수할당이 가능함(int, float, long등)
// Javascript는 number type으로만 사용하면 됨. 선언도 필요가 없다. (let a = 12, let b = 1.2)
const count = 17; // integer
const size = 17.1; //decimal number

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity); // return infinity
console.log(negativeInfinity); // return -infinity
console.log(nAn); // return NaN


// bigInt (fairly new, don't use it yet)
const bigInt = 123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);


// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBoB = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBoB}, type: ${typeof helloBoB}`);
console.log('value: ' + helloBoB + ' type: ' + typeof helloBoB);


// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value : ${canRead}, type: ${typeof canRead}`);
console.log(`value : ${test}, type: ${typeof test}`);


// null
let nothing = null;
console.log(`value : ${nothing}, type: ${typeof nothing}`);


// undefined
let x;
console.log(`value : ${x}, type: ${typeof x}`);


// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 == gSymbol2);
console.log(`value : ${symbol1.description}, type : ${typeof symbol1}`);


// object, real-life object, data structure
const kim = { name : 'kim', age : 25};
console.log(`value : ${kim.name}, type : ${typeof kim.name}`);
kim.age = 21;


// 5. Dynamic typing : dynamically typed language [이 문제를 해결하기 위해 TypeScript가 생김]
let text = 'hello';
console.log(text.charAt(0));
console.log(`value : ${text}, type : ${typeof text}`);
text = 1; // number형
console.log(`value : ${text}, type : ${typeof text}`);
text = '7' + 5; // string + number = string으로 인식
console.log(`value : ${text}, type : ${typeof text}`);
text = '8' / '2'; // string / string = number로 인식 (문자끼리 나누기 vs 숫자끼리 나누기)
console.log(`value : ${text}, type : ${typeof text}`);
//console.log(text.charAt(0));