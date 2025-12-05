(function() {
	"use strict";
	
	/**
	* The starting point in our program, setting up a listener
	* for the "load" event on the window, signalling the HTML DOM has been constructed
	* on the page. When this event occurs, the attached function (init) will be called.
	*/
	
	window.addEventListener("load", init);
	
	// TODO: Write a function comment using JSDoc.
	
	function init() {	// Note: In this function, we usually want to set up our event handlers for UI elements on the page.
		console.log("Window loaded!"); 					// 1. Tests JS is loaded
		
		const encryptButton = document.getElementById("encrypt-it");	// 2. Encrypt-It button
		encryptButton.addEventListener("click", handleClick);
		
		const resetButton = document.getElementById("reset");		// 3. Reset button
		resetButton.addEventListener("click", handleReset);
	}

  	// Functions
	function handleClick() {	// 2. & 4.
		console.log("Button clicked!"); // Tests that button click works
		
		const inputText = document.getElementById("input-text").value;	// User input saved to inputText
		const encryptedText = shiftCipher(inputText);			// Shift Cypher the inputText and saved to encryptedText
		document.getElementById("result").textContent = encryptedText;	// Save the resulted encryptedText to the "result" text box
  	}
	
	function handleReset() {	// 3.
		document.getElementById("input-text").value = "";		// Sets the user input text to nothing ""
		document.getElementById("result").textContent = "";		// Sets the result text box to nothing ""
	}

	function shiftCipher(text) {	// 4 takes the text variable
		text = text.toLowerCase();					// Makes the users input lowercase
		let output = "";
		for (let i = 0; i < text.length; i++) {
			const char = text[i];
			if (char < 'a' || char > 'z') {				// If the character is outside of a-z dont change
				output += char;
			} else if (char === 'z') {				// Special case: If the character is 'z' just make it 'a'
				output += 'a';
			} else {						// Otherwise, all characters between a-y get turned into their charCode
				const code = char.charCodeAt(0);		// Index at 0 because its just one character each time
				output += String.fromCharCode(code + 1);	// Append to output var as a string from the newly saved charCode but incremented by 1
			}
		}
		return output;
	}
})();
