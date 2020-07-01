'use strict'

// Promise is a JavaScript object for asynchronous operation.
// State : pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the excutor rns automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('Doing something....')
    setTimeout(() => {
        resolve('kim')
        //reject(new Error('network Error'))
        }, 2000);
});

// 2. Consumers: then, catch, finally
promise
    .then(value => {
    console.log(value);
    })
    .catch(error => {
    console.log(error);
    })
    .finally(() => {
    console.log('finally');
    });

// 3. Promise chaning
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num*2)
    .then(num => num*3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout( () => resolve('닭'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout( () => resolve(`${hen} => 계란`), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout( () => resolve(`${egg} => 프라이`), 1000);
    });

getHen()
    .then(hen => getEgg(hen)) //간략화 가능 .then(getEgg)
    .catch(error => {
        return '에러 발생';
    })
    .then(egg => cook(egg)) //간략화 가능 .then(cook)
    .then(meal => console.log(meal))
    .catch(console.log);