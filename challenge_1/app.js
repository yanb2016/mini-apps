var counter = 0;
var mark = "X";
var records = Array(9).fill(null);
var inputAvailable = true;

var elements = document.getElementsByClassName("square");
var winOrNot = function() {
	var possibleResults = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7 ,8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5 ,8],
		[0, 4, 8],
		[2, 4, 6]
	];
	for(var i = 0; i < possibleResults.length; i++) {
		[a, b, c] = possibleResults[i];
		if(records[a] && records[a] === records[b] && records[a] === records[c]) {
			document.getElementById("warning").innerHTML = 'You win!'
			inputAvailable = false;
		}
	}
};

var restart = function() {
	console.log('passed in');
	for(var i = 0; i < elements.length; i++) {
		elements[i].innerHTML = "";
	}
}

for(var i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", function() {
	if(!inputAvailable) {
		document.getElementById("warning").innerHTML = "You Win! Please restart a new game!";
	} else {
			if(records[Number(this.id)]) {
			document.getElementById("warning").innerHTML = "You are not allowed to put here!";
		} else {
			document.getElementById("warning").innerHTML = "";
			if(counter % 2) {
				mark = "O";
			}
			this.innerHTML = mark;
			records[Number(this.id)] = mark;
			winOrNot();
			mark = "X";
	  	counter++;
		}
	}
	});
}

