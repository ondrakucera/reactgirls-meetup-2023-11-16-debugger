function factorial(n) {
	return n === 0 ? 1 : n * factorial(n - 1);
}

function printFactorial(n) {
	console.log(`factorial(${n}) = ${factorial(n)}`);
}

printFactorial(0);
printFactorial(1);
printFactorial(2);
printFactorial(3);
printFactorial(4);
printFactorial(5);
printFactorial(170);
printFactorial(171);
