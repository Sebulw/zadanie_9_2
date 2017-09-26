var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(9, 22);
var triangle3Area = getTriangleArea(20, 4);
function getTriangleArea(a, h) {
	if (a <= 0 || h <= 0) {
		console.log('Nieprawidłowe dane');
		alert('Nieprawidłowe dane')
	}
	return a*h/2
};
console.log(triangle1Area);
alert(triangle1Area);
console.log(triangle2Area);
alert(triangle2Area);
console.log(triangle3Area);
alert(triangle3Area)