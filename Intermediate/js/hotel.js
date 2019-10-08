var button = document.getElementById("button");
button.addEventListener("click",submit)

var hotel1 = {
	name: "One",
	availableNights: Math.floor(Math.random()*10)+1
}

var hotel2 = {
	name: "Two",
	availableNights: Math.floor(Math.random()*10)+1
}

var hotel3 = {
	name: "Three",
	availableNights: Math.floor(Math.random()*10)+1
}

function submit () {
	var input = Number(document.getElementById("input").value);
	ava1 = hotel1.availableNights - input;
	ava2 = hotel2.availableNights - input;
	ava3 = hotel3.availableNights - input;
	console.log(ava1, ava2, ava3)

	document.getElementById('outputa').innerHTML = hotel1.availableNights
	document.getElementById('outputb').innerHTML = hotel2.availableNights
	document.getElementById('outputc').innerHTML = hotel3.availableNights

	function check(ava,output) {
	
		if (ava >= 0) {
			var btn = document.createElement("Button");
			var text = document.createTextNode("I'll reserve");
			document.getElementById(output).appendChild(btn).appendChild(text);
		} else {
			var txt = document.createTextNode("Sorry, no room for " + input + " nights.");
			document.getElementById(output).appendChild(txt);
		}
	}
	check(ava1, "output1")
	check(ava2, "output2")
	check(ava3, "output3")

	}
/*
	if (ava1 >= 0) {
		var btn = document.createElement("Button");
		var text = document.createTextNode("I'll reserve");
		document.getElementById("output1").appendChild(btn).appendChild(text);
	} else {
		document.getElementById("output1").innerHTML = "Hotel 1: Sorry, no free room for " + input + " nights."
	}
	if (ava2 >= 0) {
		var btn = document.createElement("Button");
		var text = document.createTextNode("I'll reserve");
		document.getElementById("output2").appendChild(btn).appendChild(text);
	} else {
		document.getElementById("output2").innerHTML = "Hotel 2: Sorry, no free room for " + input + " nights."
	}
	if (ava3 >= 0) {
		var btn = document.createElement("Button");
		var text = document.createTextNode("I'll reserve");
		document.getElementById("output3").appendChild(btn).appendChild(text);
	} else {
		document.getElementById("output3").innerHTML = "Hotel 3: Sorry, no free room for " + input + " nights."
	}
}*/
