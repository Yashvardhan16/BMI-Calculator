//Yashvardhan
var weight, height, measure, bodymassIndex, error ;

function calculate() {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	height /= 100;
	height *= height;
	bodymassIndex = weight/height;
	bodymassIndex = bodymassIndex.toFixed(1);

	if (bodymassIndex <= 18.4) {
		measure = "Your BodyMassIndex is " + bodymassIndex + " which means " + "You are Under-weight";
	} else if (bodymassIndex >= 18.5 && bodymassIndex <= 24.9) {
		measure = "Your BodyMassIndex is " + bodymassIndex + " which means " + "You are Normal";
	} else if (bodymassIndex >= 25 && bodymassIndex <= 29.9) {
		measure = "Your BodyMassIndex is " + bodymassIndex + " which means " + "You are Over-weight";
	} else if (bodymassIndex >= 30) {
		measure = "Your BodyMassIndex is " + bodymassIndex + " which means " + "You are Obese";
	}


	if (weight === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {

		document.getElementById("results").innerHTML = measure;
	}
	if (weight < 0) {
		document.getElementById("results").innerHTML = "Negative Values not Allowed";
	}
}
