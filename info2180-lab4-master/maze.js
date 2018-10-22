let bound;
let touchWall =false;
let endMessage;
let starter;
let checker = false;
let oob;
window.onload = function(){
	gameStatus = document.getElementById('status');
	endMessage= document.getElementById('end');
	endMessage.onmouseover = win;
	starter = document.getElementById('start');
	oob = document.getElementById("maze");
  starter.onclick = restart;
	oob.onmouseleave = outOfBounds;
	bound = document.querySelectorAll('.boundary');
	for (var i = 0; i < bound.length - 1; i++){
	bound[i].onmouseover = changeColor;
	}

 }



function changeColor(){
	if(!checker){
	if(!touchWall){
	touchWall = true;
	bound = document.querySelectorAll('.boundary');
	gameStatus.innerHTML = "You lose";
	for (var i = 0; i < bound.length - 1; i++){
	bound[i].className += " youlose";
 }
 }
	}
}


function win(){
	if(!touchWall){
	testwin =true;
	gameStatus.innerHTML = "You win";
	}
}

function restart(){
	touchWall= false;
	checker = false;
	bound = document.querySelectorAll('.boundary');
	gameStatus.innerHTML = "Move your mouse over S to begin";
	for (var i = 0; i < bound.length - 1; i++){
	bound[i].className = "boundary";
	}
}

function outOfBounds(){
	if(!checker){
	changeColor();
	}
}
