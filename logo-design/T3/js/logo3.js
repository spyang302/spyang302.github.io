function draw(){
	var c=document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	
	  //Fill Canvas Background
	  ctx.fillStyle='rgba(10,67,84,1)';
	  ctx.fillRect(0,0,300,300);  
	  
	  //Main Square Logo
	  ctx.beginPath();
	  ctx.strokeStyle = 'rgba(0,191,255,1)';
	  ctx.lineWidth = 3.5;
	  ctx.moveTo(45,125);
      ctx.lineTo(45,145);
	  ctx.moveTo(43,125);
	  ctx.lineTo(63,125);
	  ctx.moveTo(90,125);
	  ctx.lineTo(90,145);
	  ctx.moveTo(92,125);
	  ctx.lineTo(72,125);
	  ctx.moveTo(43,160);
	  ctx.lineTo(92,160);
	  ctx.moveTo(45,160);
	  ctx.lineTo(45,150);
	  ctx.moveTo(90,160);
	  ctx.lineTo(90,150);
	  ctx.moveTo(67.5,150);
	  ctx.lineTo(45,125);
	  ctx.moveTo(66.5,150);
	  ctx.lineTo(90,125);
	  ctx.stroke();
	  
	  //Text on canvas "mailshare"
	  ctx.fillStyle = 'white';
	  ctx.font = "40px sans-serif";
	  ctx.fillText('mailshare', 100, 155);
}