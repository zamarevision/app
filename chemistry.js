var questions = [];

var options = [];

var answers = [];

function questionsArray(){

var request = new XMLHttpRequest();

request.onreadystatechange = function(){

if(this.readyState==this.DONE && this.status==200){

loader.innerHTML = "";

parseData(this.responseText);

}
else{

loader.innerHTML = "loading....";

}

};

request.open("GET","https://questions.aloc.ng/api/q/25?subject=chemistry&type=utme");

request.send();

}

function parseData(returnedjson){

if(!returnedjson){

return;

}

var questionsObject = JSON.parse(returnedjson);

var dataArray = questionsObject.data;

for(var i = 0;i<dataArray.length;++i){

var question = dataArray[i].question;

var option = dataArray[i].option;

var answer = dataArray[i].answer;

questions.push(question);

options.push(option);

answers.push(answer);

}

displayQuestions(questions,options,answers);

}

function displayQuestions(arg1,arg2,arg3){

for(var l = 0;l<arg1.length;++l){

}

for(var k = 0;k<arg3.length;++k){

}

for(var j = 0;j<arg2.length;++j){

var a = j+1;

document.body.innerHTML += "<p>"+a+"."+arg1[j]+"<br>"+"a."+arg2[j].a+"<br>"+"b."+arg2[j].b+"<br>"+"c."+arg2[j].c+"<br>"+"d."+arg2[j].d+"</p>";

var pee1 = document.createElement("p");

pee1.id = "s"+a;

pee1.setAttribute("class","sho");

pee1.setAttribute("onclick","showAns(this.id)");

var txt1 = document.createTextNode("Show answer");

pee1.appendChild(txt1);

document.body.appendChild(pee1);

var pee = document.createElement("p");

pee.id = "p"+a;

pee.setAttribute("class","ans");

var txt = document.createTextNode("Ans: "+arg3[j]);

pee.appendChild(txt);

document.body.appendChild(pee);

pee.style.display = "none";

}

}

function showAns(arg){

var a = document.getElementById(arg);

a.style.display = "none";

a.nextElementSibling.style.display = "block";

}

window.onload = questionsArray;