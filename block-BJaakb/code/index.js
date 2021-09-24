// let xhr = new XMLHttpRequest();
// xhr.open('get', 'https://jsonplaceholder.typicode.com/posts/1');
// xhr.send();

// xhr.onload = function() {
//     console.log(xhr.response);
// };
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(json => console.log(json));
    
function fetch(url){
    return new Promise((Resolve,reject)=>{
    let xhr = new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.onload = () => {
    console.log(JSON.parse(xhr.response));
    };
    xhr.onerror = () => setTimeout(() => reject ('Something  went wrong'))
    xhr.send();
    
    });
    }
    let data = fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((data) => {
    console.log(data.title);
    
    })
    .catch((Error)=> alert('error msg'))
    