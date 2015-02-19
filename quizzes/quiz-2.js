factorial(x) {
	while(x > 0){
		numero = x * (x - 1);
		x -= 1;
		factorial(x)
	};
};

result = factorial(5);
console.log(result);




// function factorial(x) {
// 	if (!x) return 1;
// 	var product = x * factorial(x-1);
// 	return product;
// }

// var result = factorial(5);

// console.log(result);