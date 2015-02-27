function add (param1, param2, param3) {
	subAnswer = param1 + param2 || param1 + param2 + param3; 
	return console.log(subAnswer);
};

add(3,5);
add(4,5,6);