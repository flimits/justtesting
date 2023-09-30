window.document.bgColor = "aqua";

const text = prompt("enter text you want on screen");
const h1 = document.querySelector('h1');
h1.textContent = text;
const p = document.getElementsByClassName('details');
p[0].textContent = "document type:" + document.contentType;
p[1].textContent = "url :" + document.bgColor;
p[2].textContent = "title :" + document.title;

const p1 = document.getElementsByClassName('myown');
const newcontent = prompt("get some more of your own");
p1.textContent = newcontent;









// function myFunction() {

//     var someword = "abcd";
//     var answer = prompt("enter a character");
//     for (var i = 0; i < someword.length; i++) {
        
// if (someword[i] )

//     }
//     alert("Hello! I am an alert box!");
//   }
//   myFunction();

// let getMyButton = document.getElementById("dosomething").addEventListener("click",dosomething);

// // console.log(getMyButton);
// function checkGetMyButton() {

//     document.getElementById("dosomething").addEventListener("click",dosomething)
// }



