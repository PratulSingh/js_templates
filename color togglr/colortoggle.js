var button=document.querySelector("button");
var body=document.querySelector("body");
button.addEventListener("click",function(){
	if(body.style.background=="red"){
		body.style.background="white";
	}
	else{
		body.style.background="red";
	}
});

