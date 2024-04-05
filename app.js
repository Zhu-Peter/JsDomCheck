// let listItem = document.querySelector('li');

let hello = document.getElementById("hello1");
// let hello2 = document.querySelector('#hello1');

// let helloClass = document.querySelectorAll('.hello_world');
// let helloClass2 = document.getElementsByClassName('hello_world');

// console.log({hello, hello2, helloClass, helloClass2})

// hello.style.border = '2px solid orange'

// let list = document.querySelectorAll('.hello_world');

// for(let i = 0; i < list.length; i++){
//     list[i].innerHTML = 'hacked';
// }

hello.insertAdjacentHTML("afterbegin", "<h1>Hi! this is the first child</h1>");
hello.insertAdjacentHTML(
  "afterend",
  '<li><img id="catimage" src="https://plus.unsplash.com/premium_photo-1677101221533-52b45823a2dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8fDB8fHww"></li>'
);
hello.insertAdjacentHTML(
  "beforebegin",
  "<li>Hi! this is before the element</li>"
);
hello.insertAdjacentHTML("beforeend", "<h1>Hi! this is the last child</h1>");

let catimage = document.getElementById("catimage");
catimage.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww"
);
