// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals :

''''
1+2 = ${1+2}`);
console.log("kim\'s \n\tnote");


// 2. Numeric operations
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);


// 3. Increment and decrement operations
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`);
const postIncrement = counter++;
console.log(`preIncrement : ${postIncrement}, counter : ${counter}`);
const preDecrement = --counter;
console.log(`preIncrement : ${preDecrement}, counter : ${counter}`);
const postDecrement = counter--;
console.log(`preIncrement : ${postDecrement}, counter : ${counter}`);


// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;


// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);


// 6. Logical operators : || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or) 최초 true가 되는 값까지 비교함
console.log(`or : ${ value1 || value2 || check()}`);

// || (and) 최초 false가 되는 값까지 비교함
console.log(`and : ${ value1 && value2 && check()}`);

// 무거운 연산 또는 시간복잡도가 큰 함수들은 후위로 지정하고 빠른 연산을 전위로 지정하여 효율적으로 수행하자
function check() {
    for(let i = 0 ; i < 10 ; i++){
        console.log(' >_< ');
    }
    return true;
}

// !(not)
console.log(!value1);


// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion [ 타입 무시 검사 ]
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion [ 타입 유효 검사 ]
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const kim1 = { name: 'kim'};
const kim2 = { name: 'kim'};
const kim3 = kim1;
console.log(kim1 == kim2);
console.log(kim1 == kim3);
console.log(kim1 === kim2);
console.log(kim1 === kim3);

// equality
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);


// 8. Conditional operators : if
// if, else if, else
const name = 'mk'
if(name === 'kim'){
    console.log('Welcome, kim');
}
else if(name === 'coder'){
    console.log('You are amazing coder')
}
else{
    console.log('unknown');
}


// 9. Ternary operator : ?
// condition ? val1 : va12
console.log(name === 'kim' ? 'yes' : 'no');


// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE'
switch (browser) {
    case 'IE':
        console.log('go');
        break;
    case 'chrome':
    case 'firefox':
        console.log('love');
        break;
    default:
        console.log('unknown browser');
        break;
}


// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while ( i > 0 ){
    console.log(`while : ${i}`);
    i--;
}

// do - while loop, body code is executed first,
// then check the condition.
do{
    console.log(`do while : ${i}`);
    i--;
}while(i > 0);

// for loop, for(begin; condition; step
for(i = 3; i > 0 ; i--){
    console.log(`for : ${i}`)
}

// nested loops
for(let i = 0 ; i < 10; i++){
    for(let j = 0 ; j < 10; j++){
        console.log(`i : ${i}, j : ${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for(let x = 0 ; x <= 10 ; x++){
    if(x%2 !== 0){
        continue;
    }
    else
        console.log(`짝수 출력 : ${x}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break_
for(let x = 0 ; x <= 10 ; x++){
    if(x === 8)
        break;
    else
        console.log(`숫자 출력 : ${x}`);
}