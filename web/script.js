var posx = 590;
var posy = 280;
var speed = 0;

//speed correcting----------------------------------
while(speed == 0){
	a = Number(prompt("Set difficult from 1 to 3"));
	if (a == 1){
		speed = 2;
	}
	else if (a == 2){
		speed = 5;
	}
	else if (a == 3){
		speed = 10;
	}
	else{
		alert("Uncorrect number!");
	}
}
//-------------------------------------------------
//ball phys----------------------------------------
var ball = document.getElementById('ball');

ball.style.marginLeft = String(posx)+"px";
ball.style.marginTop = String(posy)+"px";

r = Math.floor(Math.random()*4);

if (r == 0){
	var aposx = true;
	var aposy = true;
}
else if (r == 1){
	var aposx = true;
	var aposy = false;
}
else if (r == 2){
	var aposx = false;
	var aposy = true;
}
else if (r == 3){
	var aposx = false;
	var aposy = false;
}

//lose---------------------------------------------
function lose1(){
	ball.parentNode.removeChild(ball);
	alert("Player 1 WIN!");
	document.location.reload();
}
function lose2(){
	ball.parentNode.removeChild(ball);
	alert("Player 2 WIN!");
	document.location.reload();
}
//-------------------------------------------------

function moving(){
	if(posy == 590 || posy == 589){
		aposy = false;
	}
	else if(posy == 1 || posy == 0){
		aposy = true;
	}
	if((posx == 1110 || posx == 1111) && (posy >= bpos2-110 && posy < bpos2+306)){
		aposx = false;
	}
	else if((posx == 60 || posx == 59) && (posy >= bpos1-110 && posy < bpos1+306)){
		aposx = true;
	}
	if(posx > 1140 || posx > 1141){
		lose1();
	}
	else if(posx < 10 || posx < 9){
		lose2();
	}
	if(aposx == true && aposy == true){
		ball.style.marginLeft = String(posx)+"px";
		ball.style.marginTop = String(posy)+"px";
		posx += speed;
		posy += speed;	
	}
	else if(aposx == true && aposy == false){
		ball.style.marginLeft = String(posx)+"px";
		ball.style.marginTop = String(posy)+"px";
		posx += speed;
		posy -= speed;
	}
	else if(aposx == false && aposy == true){
		ball.style.marginLeft = String(posx)+"px";
		ball.style.marginTop = String(posy)+"px";
		posx -= speed;
		posy += speed;
	}
	else if(aposx == false && aposy == false){
		ball.style.marginLeft = String(posx)+"px";
		ball.style.marginTop = String(posy)+"px";
		posx -= speed;
		posy -= speed;
	}
}

setInterval(moving, 10);
//------------------------------------------------
//bat phys----------------------------------------
var bpos1 = 200;
var bpos2 = 200;

var bat1 = document.getElementById('bat1');
var bat2 = document.getElementById('bat2');

document.addEventListener('keydown', key1);

function key1(event) {
	if (event.code == 'KeyW' && bpos1-50 >= 0){
		bpos1 -= 50;
		bat1.style.marginTop = String(bpos1)+"px";
	}
	else if (event.code == 'KeyS' && bpos1+50 <= 440){
		bpos1 += 50;
		bat1.style.marginTop = String(bpos1)+"px";
	}
}

document.addEventListener('keydown', key2);

function key2(event) {
	if (event.code == 'ArrowUp' && bpos2-50 >= 0){
		bpos2 -= 50;
		bat2.style.marginTop = String(bpos2)+"px";
	}
	else if (event.code == 'ArrowDown' && bpos2+50 <= 440){
		bpos2 += 50;
		bat2.style.marginTop = String(bpos2)+"px";
	}
}