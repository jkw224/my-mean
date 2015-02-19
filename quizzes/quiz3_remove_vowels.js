function deVowelizer(yo) {
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	var phrase = yo;
	var new_phrase = [];
	
	for( var i = 0; i < phrase.length; i++) {
		var isConsonant = true;

		for (var v=0; v < vowels.length; v++) {
			if (vowels[v] === phrase[i]) {
				isConsonant = false;
			};
		};
		if(isConsonant === true) {
			new_phrase.push(phrase[i]);
		};
	};
	console.log(new_phrase.join(''));
};

// var prompt;
var user_input = "Enter a phrase and I'll take the vowels out!";
result = deVowelizer(user_input);