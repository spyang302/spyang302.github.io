var one;
var two;
var three;
var oneValue;
var twoValue;
var threeValue;
var a = 1;
var b = 1;
var c = 1;
var chart;

window.onload = function() {
	one = document.getElementById("first");
	two = document.getElementById("second");
	three = document.getElementById("third");
	
	chart = new CanvasJS.Chart("chartContainer", {
		theme: "theme2",//theme1
		title:{
			text: "Project 4"              
		},
		animationEnabled: false,   // change to true
		data: [              
		{
			type: "column",
			dataPoints: [
				{ label: "Ln1",  y: a },
				{ label: "Ln2", y: b  },
				{ label: "Ln3", y: c  }
			]
		}
		]
	});
	chart.render();
	
};

function oneChange(){
	if(parseFloat(one.value) >= 0){
		oneValue = parseFloat(one.value);
		var x = oneValue * 5;
		var y = x * 5;
		two.value = x;
		three.value = y;
		
		a = parseFloat(one.value);
		b = parseFloat(two.value);
		c = parseFloat(three.value);
		
		//Render Chart
		chart = new CanvasJS.Chart("chartContainer", {
		theme: "theme2",//theme1
		title:{
			text: "Project 4"              
		},
		animationEnabled: false,   // change to true
		data: [              
		{
			type: "column",
			dataPoints: [
				{ label: "Ln1", y: a },
				{ label: "Ln2", y: b  },
				{ label: "Ln3", y: c  }
			]
		}
		]
	});
	chart.render();
	}
	else{
		two.value = "";
		three.value = "";
	}
}

function twoChange(){
	if(parseFloat(two.value) >= 0){
		twoValue = parseFloat(two.value);
		var x = twoValue / 5;
		var y = twoValue * 5;
		one.value = x;
		three.value = y;
		
		a = parseFloat(one.value);
		b = parseFloat(two.value);
		c = parseFloat(three.value);
		
		//Render Chart
		chart = new CanvasJS.Chart("chartContainer", {
		theme: "theme2",//theme1
		title:{
			text: "Project 4"              
		},
		animationEnabled: false,   // change to true
		data: [              
		{
			type: "column",
			dataPoints: [
				{ label: "Ln1", y: a },
				{ label: "Ln2", y: b  },
				{ label: "Ln3", y: c  }
			]
		}
		]
	});
	chart.render();
	}
	else{
		one.value = "";
		three.value = "";
	}
}

function threeChange(){
	if(parseFloat(three.value) >= 0){
		threeValue = parseFloat(three.value);
		var x = threeValue / 5;
		var y = x / 5;
		two.value = x;
		one.value = y;
		
		a = parseFloat(one.value);
		b = parseFloat(two.value);
		c = parseFloat(three.value);
		
		//Render Chart
		chart = new CanvasJS.Chart("chartContainer", {
		theme: "theme2",//theme1
		title:{
			text: "Project 4"              
		},
		animationEnabled: false,   // change to true
		data: [              
		{
			type: "column",
			dataPoints: [
				{ label: "Ln1", y: a },
				{ label: "Ln2", y: b  },
				{ label: "Ln3", y: c  }
			]
		}
		]
	});
	chart.render();
	}
	else{
		two.value = "";
		one.value = "";
	}
}