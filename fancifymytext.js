// Increase font size
function makeBigger() {
	document.getElementById("userText").style.fontSize = "24pt";
}

// Apply FancyShmancy or BoringBetty styles
function applyStyle() {
	var textArea = document.getElementById("userText");	// Saves the text box to textArea var
	var fancy = document.getElementById("fancy");		// Saves the state of the fancy button
	var boring = document.getElementById("boring");		// Saves the state of the boring button

	if(fancy.checked) {
		alert("Fancy style selected!");
		textArea.style.fontWeight = "bold";
		textArea.style.color = "blue";
		textArea.style.textDecoration = "underline";
	} else if(boring.checked) {
		alert("Boring style selected!");
		textArea.style.fontWeight = "normal";
		textArea.style.color = "black";
		textArea.style.textDecoration = "none";
	}
}

// Moo button functionality
function mooText() {
	var textArea = document.getElementById("userText");	// [the dog jumpped. he jumpped over the log. he landing in water.]
	var text = textArea.value;				// *store to the variable text*
	var sentences = text.split('.');			// [the dog jumpped., he jumpped over the log., he landing in water.]

	for(var i = 0; i < sentences.length; i++) {
		var sentence = sentences[i].trim();		// removes whitespace
		if(sentence.length > 0) {
			var words = sentence.split(' ');	// splits to each word [the, dog, jumpped]
			words[words.length - 1] = words[words.length - 1] + "-Moo"; 	// makes the last word +"-Moo" [the, dog, jompped-Moo]
			sentences[i] = words.join(' ');		// Joins back together and saved at original index [the, dog, jumpped] -> [the, dog, jumpped-Moo]
		}
	}
	textArea.value = sentences.join('. ');			// Recombines all sentences and stores in textArea text field.
}