function triangularNumber(n) {
	return n === 0 ? 0 : n + triangularNumber(n - 1);
}

function printTriangularNumber(n) {
	console.log(`triangularNumber(${n}) = ${triangularNumber(n)}`);
}

printTriangularNumber(0);
printTriangularNumber(1);
printTriangularNumber(2);
printTriangularNumber(3);
printTriangularNumber(4);
printTriangularNumber(5);
printTriangularNumber(10000);
// printTriangularNumber(100000);
