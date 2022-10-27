window.onscroll=function(){
    changeColor()
};
function changeColor(){
    if(document.documentElement.scrollTop>200){
        document.getElementById("head").style.backgroundColor="orange";
    }
   }
let menu=document.getElementById("nav-icon");
menu.addEventListener("click", showMenu);
function showMenu(){
    let x=document.getElementById("minmenu"); 
    //if display none, display block
    x.style.display="block";
}