
function draw()
{
	var c=document.getElementById("myCanvas");

	var context = c.getContext("2d");
	
	  //Rectangle
	  context.beginPath();
	  context.fillStyle = 'rgba(218,165,32,1)';
	  context.fillRect(64,145,8,8);
	    
	  //Outer circle
	  context.beginPath();
	  context.arc(100, 150, 30, .7,1.8 * Math.PI);
      context.fillStyle = 'white';
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = 'rgba(218,165,32,1)';
      context.stroke();
	  
	  //Inner circle
	  context.beginPath();
	  context.fillStyle = 'rgba(218,165,32,1)';
      context.arc(100, 150, 3, 0,2 * Math.PI);
	  context.fill();
	  
	  //Thin line out of Inner circle
	  context.beginPath();
	  context.lineWidth = 1;
	  context.moveTo(100,150);
      context.lineTo(87,163);
	  context.stroke();
	  
	  //Line out of Inner circle
	  context.beginPath();
	  context.lineWidth = 2.5;
	  context.moveTo(100,150);
      context.lineTo(115,136);
	  context.stroke();
	  
	  //Second line out of Inner circle
	  context.beginPath();
	  context.lineWidth = 2.5;
	  context.moveTo(100,150);
      context.lineTo(115,165);
	  context.stroke();
	  
	  //Text on canvas "CAPITAL"
	  context.fillStyle = 'black';
	  context.font = "bold 25px sans-serif";
	  context.fillText('CAPITAL', 132, 160);
	  
	  //Text on canvas "TIMEPIECES"
	  context.fillStyle = 'grey';
	  context.font = "25px sans-serif";
	  context.fillText('TIMEPIECES', 236, 160);
}
