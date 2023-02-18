// to grabbing the value of first input.
function getFirstNum(id) {
	const firstInputStr = document.getElementById(id).parentNode.children[2].children[0].value;
	return firstInputStr;
}
// to grabbing the value of second input.
function getSecondNum(id) {
	const secondInputStr = document.getElementById(id).parentNode.children[2].children[1].value;
	return secondInputStr;
}

// for Triangle, Rhombus and Pentagon
function calculation1(id) {
	document.getElementById(id).addEventListener('click', function (e) {
		const nameOfShape = e.target.parentNode.children[0].innerText;
		const num1 = parseFloat(getFirstNum(id));
		const num2 = parseFloat(getSecondNum(id));


		const area = (0.5 * num1 * num2).toFixed(2);
		setData(nameOfShape, area);
		
}
// for Rectangle and Parallelogram
function calculation2(id) {
	document.getElementById(id).addEventListener('click', function (e) {
		const nameOfShape = e.target.parentNode.children[0].innerText;
		const num1 = getFirstNum(id);
		const num2 = getSecondNum(id);
		const area = (num1 * num2).toFixed(2);
		setData(nameOfShape, area);
	});
}
// for Ellipse
document.getElementById('btn-ellipse').addEventListener('click', function (e) {
	const nameOfShape = e.target.parentNode.children[0].innerText;
	const num1 = getFirstNum('btn-ellipse');
	const num2 = getSecondNum('btn-ellipse');
	const area = (3.14159265359 * num1 * num2).toFixed(2);
	setData(nameOfShape, area);
});

// data setting in the table
function setData(nameOfShape, area) {
	const dataContainer = document.getElementById('table-body');
	const tr = document.createElement('tr');
	tr.innerHTML = `
		<td class="font-semibold">1</td>
		<td>${nameOfShape}</td>
		<td>${area} cm<sup>2</sup></td>
		<td>
			<button class="text-xs bg-blue-600 text-white p-2 rounded">Covert to m<sup>2</sup></button>
		</td>
	`;
	dataContainer.appendChild(tr);
}

calculation1('btn-triangle');
calculation1('btn-rhombus');
calculation1('btn-pentagon');
calculation2('btn-rectangle');
calculation2('btn-parallelogram');
