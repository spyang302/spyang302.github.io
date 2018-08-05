function fillrectangle()
{
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.fillStyle = 'rgba(255,165,0,1)';
	ctx.fillRect(25,75,250,15);
	ctx.fillRect(25,175,250,15);
	ctx.fillStyle = 'red';
	ctx.font = "bold 72px sans-serif";
	ctx.fillText('Kodak', 50, 155);	
}
