//HTML
const html = document.querySelector("html");
//html.style.overflow = hidden;

//Body
const body = document.querySelector("body");
body.style.padding=0;
body.style.margin=0;

//content
const wrapper = document.querySelector(".wrapper");
const child = document.querySelector(".child");
wrapper.setAttribute("style","display:grid;  grid-template-columns: 3fr;overflow-x:hidden;overflow-y:scroll;");

//Header
const headerContainer = document.querySelector(".header-container");
const headerIcons = document.querySelectorAll(".header");
headerContainer.setAttribute("style","display:flex;margin:8px 5px 3px 0px;");
headerIcons[0].setAttribute("style", "flex: 1 1 auto;padding:5px 700px 3px 5px;");
headerIcons[1].setAttribute("style", "padding:5px 2px 0 0px ;flex: 1 1 auto;");
headerIcons[2].setAttribute("style", "padding:5px 2px 0 0;flex: 1 1 auto;");
headerIcons[3].setAttribute("style", "padding:5px 2px 0 0;flex: 1 1 auto;display:none;");


//navigation
const navContainer = document.querySelector(".navigation");
navContainer.setAttribute("style","display:flex;");
const navEle = document.querySelectorAll(".navEle"); 
for(let i = 0; i< navEle.length;i++){
    navEle[i].setAttribute("style","padding:30px; flex: 1 1 auto; background-color:white;color:blue;");
}
const span = document.getElementsByTagName("span");
for(let i = 0; i< span.length;i++){
    span[i].setAttribute("style","padding:10px;");
}
//section1
const section1Container = document.querySelector(".section1-container");
const section1Child = document.querySelectorAll(".section1-child");
const focusSection1Child = document.querySelectorAll(".section1-child:focus");

section1Container.setAttribute("style","padding:160px;display:grid; grid-template-columns: repeat(3, 1fr);grid-gap:100px;align-items:center;");
for(let i = 0; i< section1Child.length;i++){
    section1Child[i].setAttribute("style","height:200px;padding:-50px 20px 10px 60px; border:2px solid white;box-shadow:0 0 10px 3px;");
}
const img = document.getElementsByTagName('img');
for(let i = 0; i< img.length;i++){
img[i].style.marginLeft= '20px';
}
const ptag = document.getElementsByTagName('p');
for(let i = 0; i< ptag.length;i++){
ptag[i].setAttribute("style","margin-left:20px;color:blue;background-color:white;");
}


//section2

const section2Container = document.querySelector(".section2-container");
const section2Elements = document.querySelectorAll(".section2-elements");
section2Container.setAttribute("style","padding:30px 40px 0 40px;display:grid; grid-template-columns:repeat(7,1fr);  grid-auto-rows:minmax(5px, auto);grid-gap:10px;align-items:center;");
const button = document.querySelector(".section2-container").children[0];
button.setAttribute("style","grid-column-start:7;grid-column-end:8;background-color:blue;color:white;");
