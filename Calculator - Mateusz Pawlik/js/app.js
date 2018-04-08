var element = document.getElementById('operation');
var elementScore = document.getElementById('score');

function addtoscore(x){
	elementScore.value = 0;
	element.value += x;
	if(x==="C"){
		element.value = "";
	}
	if(x==='%'){

	}
}

function answer(){
	x = element.value
	x = eval(x);
	elementScore.value = x;
}

