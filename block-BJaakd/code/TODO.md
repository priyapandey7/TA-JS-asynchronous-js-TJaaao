1. Create a promise. Have it resolve with a value of `Promise Resolved!` in resolve after a delay of 1000ms, using `setTimeout`. Print the contents of the promise after it has been resolved by passing `console.log` to `.then`

```js
let promise = new Promise(resolve => {
  setTimeout(() => resolve("done!"), 1000);
});

promise.then(alert);
//done

// let number = new Promise((resolve,reject)=>{
//  resolve(typeof(5));
// }).then((value)=>{
// console.log(value,`Promise Resolved!`);
// });

//number Promise Resolved!
```

2. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch`

```js
let number = new Promise((resolve,reject)=>{
 reject('something went wrong!');
}).then((value)=>{
console.log(value,`Promise Resolved!`);
}).catch((Error)=>{
console.log(Error,`Rejected Promise!`);
});

//something went wrong! Rejected Promise!
```

3. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch` and also use `.finally` to log message `Promise Settled!`.

```js
let number = new Promise((resolve,reject)=>{
 reject('something went wrong!');
}).then((value)=>{
console.log(value,`Promise Resolved!`);
}).catch((Error)=>{
console.log(Error,`Rejected Promise!`);
}).finally(()=>{
 console.log('Finally!');
});

//something went wrong! Rejected Promise!
// Finally!
```

4. What will be the output of the code below.

```js
console.log("A");

// Asynchronous code finises in 0 seconds (Callback Queue)
setTimeout(() => console.log("B"), 0); // callback queue

// A promise that resolves right away (Microtask Queue)
Promise.resolve().then(() => console.log("C"));

console.log("D");

// A
// D
// B
// C
```

5. Write a function named `wait` that accepts `time` in ms returns a promise. The promise gets resolved after given time.

```js
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

wait(0).then(() => console.log(4));
Promise.resolve().then(() => console.log(2)).then(() => console.log(3));
console.log(1);

// 1
// 2
// 3
// 4

```

6. Do the following:

- Create a new promise
- Resolve with 21
- Use `.then` and return adding `10` to the value you will get as parameter
- Use `.then` and return adding `100` to the value you will get as parameter
- Use `.then` and check if the value you get is greater than `100` throw new error with any message
- Catch the error using `.catch`

```js
let promise = new Promise(res => res(21));
promise.then(v => {
        console.log(v);
        return v +10;
    })
    .then(v => {
        console.log(v);
        return v + 100;
    }).then(v => {
        console.log(v)
       if (v > 100){
throw new Error('Someting went wrong')}
    })
    .catch(
console.log);
```

7. Do the following:

- Create a new promise
- Resolve the promise with `['A']`
- Use `.then` and concat `B` into the parameter and return
- Use `.then` and return and object like `{0: 'A', 1: 'B'}`
- Use `.then` and log the value

```js
let promiseA = new Promise(res => res('A'));
promiseA.then(v => {
        console.log(v);
        return v.concat('B');
    })
    .then(v => {
        console.log(v);

        return v.reduce((acc,cv, i)=>{
            acc[i] = cv;
        },{});
    }).then(v => {
        console.log(v)
    });

```

8. Do the following:

- Create a new promise named `first` and resolve it with `1`
- Use `.then` on `first` and return `2` also check the value you get access to by logging
- Chain `.then` on above and return `3` also check the value you get access to by logging
- Chain `.then` on above and return `4` also check the value you get access to by logging

```js
let first = new Promise(res => res(1));
first.then(v => {
        console.log(v);
        return 2
    })
    first.then(v => {
        console.log(v);
        return 3
    }).then(v => {
        console.log(v)
       return 4;
    });

    // 2
    // 3
    // 4
```

9. Do the following:

- Create a new promise named `first` and resolve it with `1`
- Use `.then` on `first` and return `2` also check the value you get access to by logging
- Use `.then` on `first` and return `3` also check the value you get access to by logging
- Use `.then` on `first` and return `4` also check the value you get access to by logging

```js
let first = new Promise(res => res(1));
first.then(v => {
        console.log(v);
        return 2
    })
    first.then(v => {
        console.log(v);
        return 3
    })
    first.then(v => {
        console.log(v)
       return 4;
    });

//   1
//   1
//   1

```

10. Try to understand the difference between the problem 8 and 9. Write your observation.

11. Do the following

- Create a promise and resolve it with `John`
- Use `.then` and return another promise that resolves with `Arya`
- Use `.then` log the value you get access to and return another promise that resolves after 2000ms with value `Bran`
- Use `.then` to log the value

```js
let user = new Promise((res) => {
    res(`John`);
})
.then(v => {
        return Promise.resolve(`Arya`)
    })
    .then(v => {
        console.log(v)
       return new Promise((res) => {
  setTimeout(()=>res(`Bran`), 2000);
});
    }).then(console.log);
    //Arya
    //Bran
```
