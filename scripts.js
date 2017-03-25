var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal ='Zielone słonie';
var bigAnimal = animal.toUpperCase();
var textCharsAfter = text.replace('Papugi', bigAnimal);
var newText = textCharsAfter.substr(bigAnimal, 90/2);

	console.log(newText);


