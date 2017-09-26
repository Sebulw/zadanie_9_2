var femaleNames = ['Magda', 'Karolina', 'Marta', 'Kamila'];
	maleNames = ['Maciek', 'Artur', 'Paweł', 'Rafał'];
	allNames = femaleNames.concat(maleNames);
console.log(allNames);
var newName = 'Marian';
if (allNames.indexOf(newName) === -1) {
	var namesQuantity = allNames.push(newName);
	console.log(namesQuantity)
}