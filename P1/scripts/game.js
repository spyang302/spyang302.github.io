/*……(\_/)
……( ‘_’)  - Look at me, I'm a bunny in a tank HAHAHAHAHAHAHAHAHAHAHAAHAHAHAHA!
…./”"”"”"”"”"”"\======░     
/”"”"”"”"”"”"”"”"”"”\
\_@_@_@_@_@_/*/

//Global Variables
var ctx;
var playerX = 182;
var playerY = 500;
var posXOne = 10;
var posXTwo = 61;
var posXThree = 150;
var posXFour = 342;
var posXFive = 274;
var posYOne = 325;
var posYTwo = 360;
var posYThree = 395;
var posYFour = 430;
var posYFive = 465;
var logXPos = [30, 160, 20, 340, 245, 80];
var logYPos = [110, 140, 170, 200, 230, 260];
var finishedPlayerX = [1000, 1001, 1002, 1003, 1004];
var finishedPlayerY = [1000, 1001, 1002, 1003, 1004];
var winGame = [false, false, false, false ,false];
var nextRound = false;
var rightPressed = false;
var leftPressed = false;
var downPressed = false;
var upPressed = false;
var enterPressed = false;
var gamemusic = new Audio('sounds/gamemusic.mp3');
var deathmusic = new Audio('sounds/death.mp3');
var finishedmusic = new Audio('sounds/finished.mp3');
var defeatmusic = new Audio('sounds/defeat.mp3');
var victorymusic = new Audio('sounds/victory.wav');
var score = 0;
var lives;
var x;
var y;
var c;

//Main Game Loop
function mainGameLoop(){
	level = 1;
	lives = 5;
	canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
	sprites = new Image();
	player = new Image();
	sprites.src = 'images/spritesheet.png';
    player.src = 'images/player.png';
	
	
	window.addEventListener('keydown',onKeyDown,true);
	window.addEventListener('keyup',onKeyUp,true);


	sprites.onload = function(){
		c = setInterval(gameLoop, 50);
	}
}

//Game Manager
function gameLoop(){
	gamemusic.play();
	drawBackground();
	drawLogs();
	drawCars();
	drawInfo();
	drawPlayer();
}

//Set keys when pressed
function onKeyDown(evt){
 		  if (evt.keyCode == 39) 		rightPressed = true; // rigth arrow key
		  else if (evt.keyCode == 37) 	leftPressed = true;  // left arrow key
		  else if (evt.keyCode == 40) 	downPressed = true; // down arrow key
		  else if (evt.keyCode == 38) 	upPressed = true;  // up arrow key
		  else if (evt.keycode == 13 && nextRound == true) enterPressed = true; // enter key
}

//Unset Keys When Released
function onKeyUp(evt){
 		  if (evt.keyCode == 39) 		rightPressed = false; // rigth arrow key
		  else if (evt.keyCode == 37) 	leftPressed = false;  // left arrow key
		  else if (evt.keyCode == 40) 	downPressed = false; // down arrow key
		  else if (evt.keyCode == 38) 	upPressed = false;  // up arrow key
		  else if (evt.keyCode == 13) 	enterPressed = false;  // enter key
}

//Reset The Game
function resetGame(){
	this.playerX = 182;
	this.playerY = 500;
	drawCars();
	drawLogs();
}
	
//Handles Car Collision	
function carCollision(){
		if((playerX <= posXFive + 25 && playerX >= posXFive - 25) && (playerY <= posYFive + 15 && playerY >= posYFive - 15)){
				lives--;
				deathmusic.play();
				resetGame();	
		}
		else if((playerX <= posXFour + 25 && playerX >= posXFour - 25) && (playerY <= posYFour + 15 && playerY >= posYFour - 15)){
				lives--;
				deathmusic.play();
				resetGame();
		}
		else if((playerX <= posXThree + 25 && playerX >= posXThree - 25) && (playerY <= posYThree + 15 && playerY >= posYThree - 15)){
				lives--;
				deathmusic.play();
				resetGame();
		}
		else if((playerX <= posXTwo + 25 && playerX >= posXTwo - 25) && (playerY <= posYTwo + 15 && playerY >= posYTwo - 15)){
				lives--;
				deathmusic.play();
				resetGame();
		}
		else if((playerX <= posXOne + 30 && playerX >= posXOne - 30) && (playerY <= posYOne + 15 && playerY >= posYOne - 15)){
				lives--;
				deathmusic.play();
				resetGame();
		}
}

//Handles Log Collision
function logCollision(){
		if((playerX <= logXPos[5] + 100 && playerX >= logXPos[5] - 25) && (playerY <= logYPos[5] + 13 && playerY >= logYPos[5] - 13)){
			playerX+=2;
			if(playerX > 351){
				playerX -= 2;
			}
		}
		else if((playerX <= logXPos[4] + 70 && playerX >= logXPos[4] - 3) && (playerY <= logYPos[4] + 13 && playerY >= logYPos[4] - 13)){
			playerX-=2;
			if(playerX < 0){
				playerX += 2;
			}
		}
		else if((playerX <= logXPos[3] + 155 && playerX >= logXPos[3] - 30) && (playerY <= logYPos[3] + 13 && playerY >= logYPos[3] - 13)){
			playerX+=6;
			if(playerX > 351){
				playerX -= 6;
			}
		}
		else if((playerX <= logXPos[2] + 100 && playerX >= logXPos[2] - 25) && (playerY <= logYPos[2] + 13 && playerY >= logYPos[2] - 13)){
			playerX+=2;
			if(playerX > 351){
				playerX -= 2;
			}
		}
		else if((playerX <= logXPos[1] + 155 && playerX >= logXPos[1] - 30) && (playerY <= logYPos[1] + 13 && playerY >= logYPos[1] - 13)){
			playerX-=6;
			if(playerX < 0){
				playerX += 6;
			}
		}
		else if((playerX <= logXPos[0] + 100 && playerX >= logXPos[0] - 25) && (playerY <= logYPos[0] + 13 && playerY >= logYPos[0] - 13)){
			playerX+=2;
			if(playerX > 351){
				playerX -= 2;
			}
		}
		else if(playerY < 270 && playerY > 90){
				lives--;
				deathmusic.play();
				resetGame();
		}
			
}

//Draws the player based on which buttons pressed and conditions	
function drawPlayer(){
		if(rightPressed){
			playerX += 28;
			if(playerX > 351){
				playerX -= 28;
			}
			rightPressed = false;
		}
		if(leftPressed){
			playerX -= 28;
			if(playerX < 0){
				playerX += 28;
			}
			leftPressed = false;
		}
		if(upPressed){
			playerY -= 30;
			if((playerY < 90 && (playerX > 41 && playerX < 72)) || (playerY < 90 && (playerX > 101 && playerX < 160)) || (playerY < 90 && (playerX > 200 && playerX < 240)) || (playerY < 90 && (playerX > 200 && playerX < 240)) || (playerY < 90 && (playerX > 270 && playerX < 340))){
				playerY += 30;
			}
			else if(playerY < 90 && playerX < 41){
				finishedPlayerX[0] = playerX;
				finishedPlayerY[0] = playerY;
				finishedmusic.play();
				winGame[0] = true;
				score+=100;
				resetGame();
			}
			else if(playerY < 90 && playerX > 41 && playerX < 101){
				finishedPlayerX[1] = playerX;
				finishedPlayerY[1] = playerY;
				finishedmusic.play();
				winGame[1] = true;
				score+=100;
				resetGame();
			}
			else if(playerY < 90 && playerX > 101 && playerX < 200){
				finishedPlayerX[2] = playerX;
				finishedPlayerY[2] = playerY;
				finishedmusic.play();
				winGame[2] = true;
				score+=100;
				resetGame();
			}
			else if(playerY < 90 && playerX > 200 && playerX < 340){
				finishedPlayerX[3] = playerX;
				finishedPlayerY[3] = playerY;
				finishedmusic.play();
				winGame[3] = true;
				score+=100;
				resetGame();
			}
			else if(playerY < 90 && playerX > 340){
				finishedPlayerX[4] = playerX;
				finishedPlayerY[4] = playerY;
				finishedmusic.play();
				winGame[4] = true;
				score+=100;
				resetGame();
			}
			upPressed = false;
		}

	    if(downPressed){
			playerY += 30;
			if(playerY > 500){
				playerY -= 30;
			}
			downPressed = false;
		}
		
		ctx.drawImage(player, 0, 0, 42.5, 36, finishedPlayerX[0], finishedPlayerY[0], .7*42.5, .7*36);
		ctx.drawImage(player, 0, 0, 42.5, 36, finishedPlayerX[1], finishedPlayerY[1], .7*42.5, .7*36);
		ctx.drawImage(player, 0, 0, 42.5, 36, finishedPlayerX[2], finishedPlayerY[2], .7*42.5, .7*36);
		ctx.drawImage(player, 0, 0, 42.5, 36, finishedPlayerX[3], finishedPlayerY[3], .7*42.5, .7*36);
		ctx.drawImage(player, 0, 0, 42.5, 36, finishedPlayerX[4], finishedPlayerY[4], .7*42.5, .7*36);
		ctx.drawImage(player, 0, 0, 42.5, 36, playerX, playerY, .7*42.5, .7*36);
		carCollision();
		logCollision();
}


//Draws the background
function drawBackground(){
	ctx.fillStyle='#191970';
    ctx.fillRect(0,0,399,284);
    ctx.fillStyle='#000000';
    ctx.fillRect(0,284,399,283);
    ctx.drawImage(sprites, 0, 0, 399, 113, 0, 0, 399, 113);
    ctx.drawImage(sprites, 0, 119, 399, 34, 0, 283, 399, 34);
    ctx.drawImage(sprites, 0, 119, 399, 34, 0, 495, 399, 34);
	

}

//Draws the information such as lives left and score
function drawInfo(){
	//Draw Score Text
	ctx.font = 'bold 8pt Monospace';
    ctx.fillStyle = 'white';
    ctx.fillText('Score: ', 74, 545);
    ctx.fillText(score, 120, 545);
	
	//Draw Lives Text and Images
	ctx.font = 'bold 8pt Monospace';
    ctx.fillStyle = 'white';
	ctx.fillText('Lives: ', 230, 545);
	var imageStart = 276;
    for(var i = 0; i<lives; i++){
		ctx.drawImage(sprites, 13, 334, 17, 23, imageStart, 534, 11, 15);
        imageStart += 14;
	}
	if(lives == 0){
		clearInterval(c);
		ctx.font = "30px Monospace";	
		ctx.fillText("NO MORE LIVES BABY",65,275 );
		ctx.fillStyle = 'red';
		ctx.fillText("YOU LOSE!",65,300 );
		ctx.fillStyle = 'orange';
		ctx.fillText("Highscore: ",65,325 );
		ctx.fillText(score,240,325 );
		gamemusic.pause();
		gamemusic.currentTime = 0;
		defeatmusic.play();
	}
	
	for(var i = 0; i<5; i++){
		if(winGame[i] == false){
			return -1;
		}
	}
	clearInterval(c);
	ctx.font = "30px Monospace";
	ctx.fillStyle = 'white';	
	ctx.fillText("YOU WIN!",87,275 );
	ctx.fillStyle = 'orange';
	ctx.fillText("Highscore: ",60,300 );
	ctx.fillText(score,260,300 );
	nextRound = true;
	gamemusic.pause();
	gamemusic.currentTime = 0;
	victorymusic.play();
	
	if(enterPressed){
		c = setInterval(gameLoop, 50);
	}
}

//Draw Cars
function drawCars(){
	//First Car
	ctx.drawImage(sprites, 105, 301, 46, 19, this.posXOne, this.posYOne, 46, 19);
	posXOne -= 6;
	if(posXOne < -30){
		posXOne = 430;
	}
	
	//Second Car
	ctx.drawImage(sprites, 9, 300, 24, 21, this.posXTwo, this.posYTwo, 24, 21);
		posXTwo += 6;
	if(posXTwo > 399){
		posXTwo = -30;
	}
	
	//Third Car
	ctx.drawImage(sprites, 45, 264, 29, 24, this.posXThree, this.posYThree, 29, 24);
	posXThree += 4;
	if(posXThree > 399){
		posXThree = -30;
	}
	
	//FourthCar
	ctx.drawImage(sprites, 81, 263, 24, 26, this.posXFour, this.posYFour, 24, 26);
	posXFour -= 8;
	if(posXFour < -15){
		posXFour = 430;
	}
	
	//Fifth Car
	ctx.drawImage(sprites, 8, 265, 30, 22, this.posXFive, this.posYFive, 30, 22);
	posXFive += 10;
	if(posXFive > 399){
		posXFive = -30;
	}

}

//Draw Logs
function drawLogs(){
	//First Log
	ctx.drawImage(sprites, 5, 197, 118, 21, logXPos[0], logYPos[0], 118, 21);
	logXPos[0] += 2;
	if(logXPos[0] > 399){
		logXPos[0] = -160;
	}
	
	//Second Log
	ctx.drawImage(sprites, 6, 165, 179, 21, logXPos[1], logYPos[1], 179, 21);
	logXPos[1] -= 6;
	if(logXPos[1] < -200){
		logXPos[1] = 550;
	}
	
	//Third Log
	ctx.drawImage(sprites, 5, 197, 118, 21, logXPos[2], logYPos[2], 118, 21);
	logXPos[2] += 2;
	if(logXPos[2] > 399){
		logXPos[2] = -230;
	}
	
	//Fourth Log
	ctx.drawImage(sprites, 6, 165, 179, 21, logXPos[3], logYPos[3], 179, 21);
	logXPos[3] += 6;
	if(logXPos[3] > 399){
		logXPos[3] = -230;
	}
	
	//Fifth Log
	ctx.drawImage(sprites, 6, 229, 85, 21, logXPos[4], logYPos[4], 85, 22);
	logXPos[4] -= 2;
	if(logXPos[4] < -100){
		logXPos[4] = 500;
	}
	
	//Sixth Log
	ctx.drawImage(sprites, 5, 197, 118, 21, logXPos[5], logYPos[5], 118, 21);
	logXPos[5] += 2;
	if(logXPos[5] > 399){
		logXPos[5] = -230;
	}
	
}

//Execute-------
mainGameLoop();
//Execute-------