

let element=document.getElementById("container");
element.style=`background-color:red;
  width:300px;
  height:300px;
  position:absolute;
  top:20%;
  left:20%;
  font-size:30px;
//   text-align:center;


  border-radius:20px;
  
  `
let items=document.getElementsByClassName('items')
for(let i in items){
    items[i].style=`color:white;list-style:circle;
    margin-left:70px;
    
    `
}
  