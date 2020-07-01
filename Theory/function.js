// Function
// - fundamental building block in the program
// - subprogram can be use multiple times
// - performs a task or calculates a value


// 1. Function declaration
// function name (para1, para2) {body... return;}
// one function === one thing
// naming : doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint [세분화하자]
// function is object in JS

function printHello() {
    console.log('Hello')
}
printHello();

//Javascript의 한계점 : 정확히 어떤 값을 리턴하고 어떤 값을 받아오는지 불명확함
function log(message) {
    console.log(message)
}
log('Hello@');
log(1234);


// 2. Parameters
// premitive parameters : passed by value
// object parameters : passed by reference
function changeName(obj) {
    obj.name = 'coder'
}
const kim = { name : 'kim' };
changeName(kim);
console.log(kim);


// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
 /*   if (from === undefined) {
        from = 'unknown';
    }*/
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');


// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for(let i = 0 ; i < args.length; i++){
        console.log(args[i]);
    } // 출력 방법 1

    for(const arg of args){
        console.log(arg);
    } // 출력 방법 2

    args.forEach((arg) => console.log(arg));
    // 출력 방법 3
}
printAll('KIM', 'SEONG', 'JUN');


// 5. Local scope
let globalMessage = 'global';
function printMessage() {
    let message = 'hello'
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hola'
    }
}
printMessage();

// 6. Return a value
function sum(a, b){
    return a + b;
}
const result = sum(1, 2);
console.log(`sum : ${sum(1, 2)}`);

// 7. Early return, early exit\
//bad
function upgradeUser(user){
    if (user.point > 10){
        // long upgrade logic..
    }
}

// good
function upgradeUser(user){
    if (user.point <= 10){
        return;
    }
    // long upgrade logic..
}