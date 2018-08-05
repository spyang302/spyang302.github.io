var limit = 0;
var temp;
var firstClick = true;
var startIndex;
var endIndex;
var currentIndex;
var gX = 0;
var hX;
var leftfX;
var rightfX;
var bottomfX;
var topfX;
var topLeftfX;
var topRightfX;
var bottomLeftfX;
var bottomRightfX;
var leftgX;
var rightgX;
var bottomgX;
var topgX;
var topLeftgX;
var topRightgX;
var bottomLeftgX;
var bottomRightgX;
var leftCellIndex;
var rightCellIndex;
var topLeftCellIndex;
var topCellIndex;
var topRightCellIndex;
var bottomLeftCellIndex;
var bottomCellIndex;
var bottomRightCellIndex;
var leftCellCoord = [0,0];
var rightCellCoord = [0,0];
var topCellCoord = [0,0];
var bottomCellCoord = [0,0];
var bottomLeftCellCoord = [0,0];
var	bottomRightCellCoord = [0,0];
var topLeftCellCoord = [0,0];
var topRightCellCoord = [0,0];
var endCoord = [0,0];
var openList = [];
var closeList = [];
var updateList = [];
var rows = 20;
var cols = 25;
var totalSteps = 0;
var totalLength;

/*var grid = clickableGrid(10,20,function(el,row,col,i){
    console.log("You clicked on element:",el);
    console.log("You clicked on row:",row);
    console.log("You clicked on col:",col);
    console.log("You clicked on item #:",i);

    el.className='clicked';
    if (lastClicked) lastClicked.className='';
    lastClicked = el;
});*/

var grid = clickableGrid(rows,cols);

document.body.appendChild(grid);
     
function clickableGrid( rows, cols/*,callback*/ ){
    var i=1;
    var grid = document.createElement('table');
    grid.id = "grid";
    for (var r=0;r<rows;r++){
        var tr = grid.appendChild(document.createElement('tr'));
		tr.className = 'rows';
		tr.id = r+99999999;
        for (var c=0;c<cols;c++){
            var cell = tr.appendChild(document.createElement('td'));
			cell.id = i;
            cell.innerHTML = i++;
            /*cell.addEventListener('click',(function(el,r,c,i){
                return function(){
                    callback(el,r,c,i);
                }
            })(cell,r,c,i),false);*/
			cell.addEventListener('click', onClick);
        }
    }
    return grid;
}

function calculateDistance(x1,y1,x2,y2){
	return (Math.abs(x1-x2) + Math.abs(y1-y2));
}

function findLeft(){
		//Find index of left cell
		var r = parseInt(currentIndex);
		r -= 1;		
		leftCellIndex = r.toString();
}

function findLeftM(){
		//Find h(x) (manhattan distance) of left cell to end cell
		var x = document.getElementById(leftCellIndex);
		var y = document.getElementById(x.parentNode.id);
		
		leftCellCoord[0] = x.cellIndex + 1;
		leftCellCoord[1] = y.rowIndex + 1;
		
		return calculateDistance(leftCellCoord[0],leftCellCoord[1],endCoord[0],endCoord[1]);
}

function findRight(){
		var r = parseInt(currentIndex);
		r += 1;
		rightCellIndex = r.toString();
}

function findRightM(){
		//Find h(x) (manhattan distance) of right cell to end cell
		var x = document.getElementById(rightCellIndex);
		var y = document.getElementById(x.parentNode.id);
		
		rightCellCoord[0] = x.cellIndex + 1;
		rightCellCoord[1] = y.rowIndex + 1;
		
		return calculateDistance(rightCellCoord[0],rightCellCoord[1],endCoord[0],endCoord[1]);
}

function findTopLeft(){
		var r = parseInt(currentIndex);	
		r -= (cols + 1);
		topLeftCellIndex = r.toString();
}

function findTopLeftM(){
		//Find h(x) (manhattan distance) of top left cell to end cell
		var x = document.getElementById(topLeftCellIndex);
		var y = document.getElementById(x.parentNode.id);
		
		topLeftCellCoord[0] = x.cellIndex + 1;
		topLeftCellCoord[1] = y.rowIndex + 1;
		
		return calculateDistance(topLeftCellCoord[0],topLeftCellCoord[1],endCoord[0],endCoord[1]);
}

function findTop(){
		var r = parseInt(currentIndex);	
		r -= (cols);
		topCellIndex = r.toString();
}

function findTopM(){
		//Find h(x) (manhattan distance) of top cell to end cell
		var x = document.getElementById(topCellIndex);
		var y = document.getElementById(x.parentNode.id);
		
		topCellCoord[0] = x.cellIndex + 1;
		topCellCoord[1] = y.rowIndex + 1;
		
		return calculateDistance(topCellCoord[0],topCellCoord[1],endCoord[0],endCoord[1]);
}

function findTopRight(){
		var r = parseInt(currentIndex);	
		r -= (cols - 1);
		topRightCellIndex = r.toString();
}

function findTopRightM(){
		//Find h(x) (manhattan distance) of top right cell to end cell
		var x = document.getElementById(topRightCellIndex);
		var y = document.getElementById(x.parentNode.id);
		
		topRightCellCoord[0] = x.cellIndex + 1;
		topRightCellCoord[1] = y.rowIndex + 1;
		
		return calculateDistance(topRightCellCoord[0],topRightCellCoord[1],endCoord[0],endCoord[1]);
}

function findBottomLeft(){
		var r = parseInt(currentIndex);	
		r += (cols - 1);
		bottomLeftCellIndex = r.toString();
}

function findBottomLeftM(){
		//Find h(x) (manhattan distance) of bottom left cell to end cell
		var x = document.getElementById(bottomLeftCellIndex);
		var y = document.getElementById(x.parentNode.id);
		
		bottomLeftCellCoord[0] = x.cellIndex + 1;
		bottomLeftCellCoord[1] = y.rowIndex + 1;
		
		return calculateDistance(bottomLeftCellCoord[0],bottomLeftCellCoord[1],endCoord[0],endCoord[1]);
}

function findBottom(){
		var r = parseInt(currentIndex);	
		r += (cols);
		bottomCellIndex = r.toString();
}

function findBottomM(){
		//Find h(x) (manhattan distance) of bottom cell to end cell
		var x = document.getElementById(bottomCellIndex);
		var y = document.getElementById(x.parentNode.id);
		
		bottomCellCoord[0] = x.cellIndex + 1;
		bottomCellCoord[1] = y.rowIndex + 1;
		
		return calculateDistance(bottomCellCoord[0],bottomCellCoord[1],endCoord[0],endCoord[1]);
}

function findBottomRight(){
		var r = parseInt(currentIndex);	
		r += (cols + 1);
		bottomRightCellIndex = r.toString();
}

function findBottomRightM(){
		//Find h(x) (manhattan distance) of left cell to end cell
		var x = document.getElementById(bottomRightCellIndex);
		var y = document.getElementById(x.parentNode.id);
		
		bottomRightCellCoord[0] = x.cellIndex + 1;
		bottomRightCellCoord[1] = y.rowIndex + 1;
		
		return calculateDistance(bottomRightCellCoord[0], bottomRightCellCoord[1],endCoord[0],endCoord[1]);
}

function updateCells(){
	
	//Main animation loop
	while((parseInt(currentIndex) != parseInt(endIndex)) && limit >= 2){
		var smallest;
		var x;
		var p;
		var q;
		
		findLeft();
		findRight();
		findTop();
		findBottom();
		findTopLeft();
		findTopRight();
		findBottomLeft();
		findBottomRight();
		
		
		//Update Left Cell 
			hX = findLeftM();
			x = document.getElementById(leftCellIndex);
			p = document.createElement("sub"); //g(x)
			q = document.createElement("sup"); //h(x)
			c = document.createElement("sub");
			p.innerHTML = gX + 10;
			//tempHx = gX;
			q.innerHTML = hX;
			leftgX = parseInt(p.innerHTML);
			leftfX = leftgX + parseInt(q.innerHTML);
					c.innerHTML = leftfX;
		c.style.color = "blue";
			if(updateList.indexOf(leftCellIndex) == -1){
					x.appendChild(p);
				if(x != null){
					x.appendChild(q);
				}
				x.appendChild(c);
				updateList.push(leftCellIndex);
			}
			
		//Update Right Cell
			hX = findRightM()
			x = document.getElementById(rightCellIndex);
			p = document.createElement("sub"); //g(x)
			q = document.createElement("sup"); //h(x)
			c = document.createElement("sub");
			p.innerHTML = gX + 10;
			//tempHx = gX;
			q.innerHTML = hX;
			rightgX = parseInt(p.innerHTML);
			rightfX = rightgX + parseInt(q.innerHTML);
					c.innerHTML = rightfX;
		c.style.color = "blue";
			if(updateList.indexOf(rightCellIndex) == -1){
				x.appendChild(p);
			if(x != null){
				x.appendChild(q);
			}
			x.appendChild(c);
			updateList.push(rightCellIndex);
			}
		
		
		//Update Top Left Cell
			hX = findTopLeftM();
			x = document.getElementById(topLeftCellIndex);
			p = document.createElement("sub"); //g(x)
			q = document.createElement("sup"); //h(x)
			c = document.createElement("sub");
			p.innerHTML = gX + 14;
			//tempHx = gX;
			q.innerHTML = hX;
			topLeftgX = parseInt(p.innerHTML);
			topLeftfX = topLeftgX + parseInt(q.innerHTML);
			c.innerHTML = topLeftfX;
			c.style.color = "blue";
			if(updateList.indexOf(topLeftCellIndex) == -1){
				x.appendChild(p);
			if(x != null){
				x.appendChild(q);
			}
			x.appendChild(c);
			updateList.push(topLeftCellIndex);
			}

		
		//Update Top Cell
		hX = findTopM();
		x = document.getElementById(topCellIndex);
		p = document.createElement("sub"); //g(x)
		q = document.createElement("sup"); //h(x)
		c = document.createElement("sub");
		p.innerHTML = gX + 10;
		//tempHx = gX;
		q.innerHTML = hX;
		topgX = parseInt(p.innerHTML);
		topfX = topgX + parseInt(q.innerHTML);
		c.innerHTML = topfX;
		c.style.color = "blue";
			if(updateList.indexOf(topCellIndex) == -1){
					x.appendChild(p);
				if(x != null){
					x.appendChild(q);
				}
				x.appendChild(c);
				updateList.push(topCellIndex);
			}
		
		//Update Top Right Cell
		hX = findTopRightM();
		x = document.getElementById(topRightCellIndex);
		var p = document.createElement("sub"); //g(x)
		var q = document.createElement("sup"); //h(x)
		c = document.createElement("sub");
		p.innerHTML = gX + 14;
		//tempHx = gX;
		q.innerHTML = hX;
		topRightgX = parseInt(p.innerHTML);
		topRightfX = topRightgX + parseInt(q.innerHTML);
		c.innerHTML = topRightfX;
		c.style.color = "blue";
		if(updateList.indexOf(topRightCellIndex) == -1){
				x.appendChild(p);
			if(x != null){
				x.appendChild(q);
			}
			x.appendChild(c);
		updateList.push(topRightCellIndex);
		}
		
		//Update Bottom Left Cell
		hX = findBottomLeftM();
		x = document.getElementById(bottomLeftCellIndex);
		p = document.createElement("sub"); //g(x)
		q = document.createElement("sup"); //h(x)
		c = document.createElement("sub");
		p.innerHTML = gX + 14;
		//tempHx = gX;
		q.innerHTML = hX;
		bottomLeftgX = parseInt(p.innerHTML);
		bottomLeftfX = bottomLeftgX + parseInt(q.innerHTML);
		c.innerHTML = bottomLeftfX;
		c.style.color = "blue";
		if(updateList.indexOf(bottomLeftCellIndex) == -1){
			x.appendChild(p);
		if(x != null){
			x.appendChild(q);
		}
		x.appendChild(c);
		updateList.push(bottomLeftCellIndex);
		}

		
		//Update Bottom Cell
			hX = findBottomM();
			x = document.getElementById(bottomCellIndex);
			p = document.createElement("sub"); //g(x)
			q = document.createElement("sup"); //h(x)
			c = document.createElement("sub");
			p.innerHTML = gX + 10;
			//tempHx = gX;
			q.innerHTML = hX;
			bottomgX = parseInt(p.innerHTML);
			bottomfX = bottomgX + parseInt(q.innerHTML);
			c.innerHTML = bottomfX;
			c.style.color = "blue";
			if(updateList.indexOf(bottomCellIndex) == -1){
				x.appendChild(p);
			if(x != null){
				x.appendChild(q);
			}
			x.appendChild(c);
			updateList.push(bottomCellIndex);
			}

		
		//Update Bottom Right Cell
		hX = findBottomRightM();
		x = document.getElementById(bottomRightCellIndex);
		p = document.createElement("sub"); //g(x)
		q = document.createElement("sup"); //h(x)
		c = document.createElement("sub");
		p.innerHTML = gX + 14;
		//tempHx = gX;
		q.innerHTML = hX;
		bottomRightgX = parseInt(p.innerHTML);
		bottomRightfX = bottomRightgX + parseInt(q.innerHTML);
		c.innerHTML = bottomRightfX;
		c.style.color = "blue";
		if(updateList.indexOf(bottomRightCellIndex) == -1){
			x.appendChild(p);
		if(x != null){
			x.appendChild(q);
		}
		x.appendChild(c);
		updateList.push(bottomRightCellIndex);
		}

		
		//Conditions to check if the surrounding cells of current cell is not in the closed list, if not then push them to the open list
		if(closeList.indexOf(leftCellIndex) == -1){
			openList.push(leftfX);
		}
		if(closeList.indexOf(rightCellIndex) == -1){
			openList.push(rightfX);
		}
		if(closeList.indexOf(topCellIndex) == -1){
			openList.push(topfX);
		}
		if(closeList.indexOf(bottomCellIndex) == -1){
			openList.push(bottomfX);
		}
		if(closeList.indexOf(topLeftCellIndex) == -1){
			openList.push(topLeftfX);
		}
		if(closeList.indexOf(topRightCellIndex) == -1){
			openList.push(topRightfX);
		}
		if(closeList.indexOf(bottomLeftCellIndex) == -1){
			openList.push(bottomLeftfX);
		}
		if(closeList.indexOf(bottomRightCellIndex) == -1){
			openList.push(bottomRightfX);
		}
		
		smallest = Math.min.apply(Math, openList);
		openList = [];

		if(smallest == leftfX){
			closeList.push(leftCellIndex);
			currentIndex = leftCellIndex;
			gX = leftgX;
		}
		else if(smallest == rightfX){
			closeList.push(rightCellIndex);
			currentIndex = rightCellIndex;
			gX = rightgX;
		}
		else if(smallest == topfX){
			closeList.push(topCellIndex);
			currentIndex = topCellIndex;
			gX = topgX;
		}
		else if(smallest == bottomfX){
			closeList.push(bottomCellIndex);
			currentIndex = bottomCellIndex;
			gX = bottomgX;
		}
		else if(smallest == topLeftfX){
			closeList.push(topLeftCellIndex);
			currentIndex = topLeftCellIndex;
			gX = topLeftgX;
		}
		else if(smallest == topRightfX){
			closeList.push(topRightCellIndex);
			currentIndex = topRightCellIndex;
			gX = topRightgX;
		}
		else if(smallest == bottomLeftfX){
			closeList.push(bottomLeftCellIndex);
			window.alert(bottomLeftCellIndex);
			currentIndex = bottomLeftCellIndex;
			gX = bottomLeftgX;
		}
		else if(smallest == bottomRightfX){
			closeList.push(bottomRightCellIndex);
			currentIndex = bottomRightCellIndex;
			gX = bottomRightgX;
		}
		
		var e = document.getElementById(currentIndex);
		e.style.backgroundColor = "grey";
		e.style.fontWeight = "bold";
		e.style.color = "yellow";
		totalSteps++;
	}
	totalSteps -= 1;
	totalLength = totalSteps + 2;
	var steps = document.getElementById("steps");
	var length = document.getElementById("length");
	steps.innerHTML = "Total Steps: " + totalSteps;
	length.innerHTML = "Total Length: " + totalLength;
}

function onClick(e){
	if(firstClick){
		temp = parseInt(e.target.innerHTML);
		limit++;
		firstClick = false;
		startIndex = e.target.id;
		currentIndex = startIndex;
		closeList.push(currentIndex);
	}
	else if(firstClick == false){
		if(parseInt(e.target.innerHTML) != temp){
			limit++;
			endIndex = e.target.id;
			
			//Find coordinates of destination cell
			var x = document.getElementById(endIndex);
			var y = document.getElementById(x.parentNode.id);
		
			endCoord[0] = x.cellIndex + 1;
			endCoord[1] = y.rowIndex + 1;
			
			updateCells();
			
		}
		else{
			return;
		}
	}
	if(limit < 3){
		e.target.style.backgroundColor = "green";
		e.target.style.fontWeight = "bold";
		e.target.style.color = "red";
		e.target.style.visibility = "hidden";
	}
}

function reset(){
	limit = 0;
	firstClick = true;
	var rows = document.getElementsByClassName("rows");
	var c = 1;
    for (i = 0; i < rows.length; i++) {
        var cols = rows[i].getElementsByTagName("td");
        for (j = 0; j < cols.length; j++) {
            cols[j].style.backgroundColor = "white";
			cols[j].style.fontWeight = "normal";
			cols[j].style.color = "black";
			cols[j].innerHTML = c++;
        }
    }
}

function configureGrid(){
	var newRows = parseInt(document.getElementById("rows").value);
	var newCols = parseInt(document.getElementById("cols").value);
	rows = newRows;
	cols = newCols;
	closeList = [];
	openList = [];
	updateList = [];
	totalLength = 0;
	totalSteps = 0;
	var grid = document.getElementById("grid");
	var rows = document.getElementsByClassName("rows");
	while(rows.length > 1){
		grid.deleteRow(0);
	}
	grid.deleteRow(0); 
	var i = 1;
	for (var r=0;r<newRows;r++){
        var tr = grid.appendChild(document.createElement('tr'));
		tr.className = 'rows';
		tr.style.bgcolor = '#008080';
		tr.id = r+99999999;
        for (var c=0;c<newCols;c++){
            var cell = tr.appendChild(document.createElement('td'));
			cell.id = i;
            cell.innerHTML = i++;
            /*cell.addEventListener('click',(function(el,r,c,i){
                return function(){
                    callback(el,r,c,i);
                }
            })(cell,r,c,i),false);*/
			cell.addEventListener('click', onClick);
        }
    }
	reset();
}

function setObstacle(){
	var objIndex = document.getElementById("index").value;
	closeList.push(objIndex.toString());
	var x = document.getElementById(objIndex);
	x.style.backgroundColor = "green";
}