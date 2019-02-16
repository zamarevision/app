function init(){

a1.style.display = "none";

}

function showAns(arg){

var a = document.getElementById(arg);

a.style.display = "none";
a.nextElementSibling.style.display = "block";

}

window.onload = init;