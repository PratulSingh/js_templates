var p1button=document.querySelector("#p1");
var p2button=document.querySelector("#p2");
var reset=document.querySelector("#reset");
var p1output=document.querySelector("#p1score");
var p2output=document.querySelector("#p2score");
var num=document.querySelector("input");
var win=document.querySelector("#win");


var p1score=0;
var p2score=0;
var gameOver=false;
var winningScore=5;


p1button.addEventListener("click",function(){
	if(!gameOver){
		p1score++;
		if(p1score==winningScore){
			p1output.classList.add("winner");
			gameOver=true;
		}
		p1output.textContent=p1score;
	}	
});
p2button.addEventListener("click",function(){
	if(!gameOver){
		p2score++;
		if(p2score==winningScore){
			p2output.classList.add("winner");
			gameOver=true;
		}
		p2output.textContent=p2score;
	}	
});
reset.addEventListener("click",function(){
	p1score=0;
	p2score=0;
	p1output.textContent=0;
	p2output.textContent=0;
	gameOver=false;
	p1output.classList.remove("winner");
	p2output.classList.remove("winner");
	num.value=null;
});

function restart(){
	p1score=0;
	p2score=0;
	p1output.textContent=0;
	p2output.textContent=0;
	gameOver=false;
	p1output.classList.remove("winner");
	p2output.classList.remove("winner");
}

num.addEventListener("change",function(){
	winningScore=num.value;
	win.textContent=num.value;
	restart();

});
