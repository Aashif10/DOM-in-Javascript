// let element = document.getElementsByID("container");
// let sec = document.createElement("div");
// element.appendChild(sec);
// sec.textContent="section Tag ";
// console.log(sec);
// element.style.color="red"

/*
let para=document.getElementById("para");
// para.style.color="red";
para.style.border="3px solid green"
let div=document.createElement("div");
// let element=document.getElementById("para");
para.appendChild(div);
div.textContent="This is div Tag is created";

para.insertAdjacentElement('afterend',div);
para.innerHTML='<h1> This is h1 Tag</h1>'
para.setAttribute("class","paragraph");
console.log(para);


let para1=document.getElementsByClassName('paragraph')[0];
para1.style=`width:200px; border:2px solid purple;color:red`
para.removeAttribute("class","paragraph");
console.log(para1);
console.log(para);*/

// let para=document.getElementById('para');
// console.log(para.parentElement);
// console.log(para.nextElementSibling);
// console.log(para.previousElementSibling);

// let parent=document.getElementById("list");
// console.log(parent.children);
// let childNode=document.getElementById("container")
// console.log(childNode.childNodes);
let tag=document.getElementsByTagName("section")[0];
tag.remove();