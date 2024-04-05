// let listItem = document.querySelector('li');

let hello = document.getElementById('hello1');
// let hello2 = document.querySelector('#hello1');

// let helloClass = document.querySelectorAll('.hello_world');
// let helloClass2 = document.getElementsByClassName('hello_world');

// console.log({hello, hello2, helloClass, helloClass2})


hello.style.border = '2px solid orange'

let list = document.querySelectorAll('.hello_world');

for(let i = 0; i < list.length; i++){
    list[i].innerHTML = 'hacked';
}