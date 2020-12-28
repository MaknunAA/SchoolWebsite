document.write(Date());
function myFunction(){
	var x = document.forms["deal"];
	var text = "";
	var i;
	for (i = 0; i < x.length; i++){
		text += x.elements[i].value + "<br>";
	}
	document.getElementById("demo").innerHTML = text;
}

function myMove(){
	var elem = document.getElementById("animate");
	var pos = 0;
	var id = setInterval(frame, 5);
	function frame(){
		if (pos == 350){
			clearInterval(id)
		}else {
			pos++;
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
		}
	}
}	

function clickIt (id){
	id.innerHTML = "Bose je niyen!";
}

function myEffect (){
	alert ("Hello world!");
}

var effect = document.getElementById("thisButton");
effect.addEventListener("click", myEffect);

document.getElementById("thisButton").addEventListener("click", myEffect);

document.getElementById("")
