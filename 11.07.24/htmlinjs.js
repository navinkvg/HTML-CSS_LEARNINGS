const divele=document.getElementById("mydiv");
divele.textContent="hello hey";//text
document.body.appendChild(divele);//same as inner html

//accessing id and add html tag
const divee=document.getElementById("mydiv1");
divee.innerHTML="<h1>oogy and tha coackroaches</h1>";//invokes HTML tags
document.body.appendChild(divee);

//accessing div class and html tag
const div1class=document.getElementsByClassName("myclass");
for(let i=0;i<div1class.length;i++){
    div1class[i].innerHTML="hello";//here we doesnot need appending to add its works based on indexing
    div1class[i].style.border="2px solid black"
}
// divclass.innerHTML="hey I'm class and I'm working properly";
// document.body.appendChild(divclass);


//get elemenst by tag name
const para=document.getElementsByTagName("p")[0];
para.textContent="paragraph";
document.body.appendChild(para);

//get element by name
const name1=document.getElementsByName("field")[0];
name1.value="fill it";
console.log(name1.value);