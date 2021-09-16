// 1.

```js
console.log('First');
setTimeout(() => console.log('Second'), 0);
console.log('Third');
// First
// Third
// Second
```

// 2.

```js
console.log('First');
function secondCall() {
  console.log('Second');
}
setTimeout(secondCall, 2000); // execute this code after 1000 ms
setTimeout(() => console.log('Third'), 0); // execute this code after 1000 ms
console.log('Third');
// First
// Third
// Third
// Second   execute this code after 2000 ms

```
// 3.

```js
console.log('First');
function secondCall() {
  console.log('Second');
}
setTimeout(secondCall, 1000); // execute this code after 1000 ms
setTimeout(() => console.log('Third'), 0);
console.log('Fourth');

```
4.

```js
console.log('First');
function secondCall() {
  console.log('Second');
}
setTimeout(secondCall, 1000); // execute this code after 1000 ms
setTimeout(() => console.log('Third'), 0);
console.log('Fourth');
// First
// Fourth
// Third
// Second   execute this code after 1000 ms
```