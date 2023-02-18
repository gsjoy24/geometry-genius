// to grabbing the value of first input.
function getFirstNum(id) {
	const firstInputStr = document.getElementById(id).parentNode.children[2].children[0].value;
	const firstInput = parseFloat(firstInputStr);
	return firstInput;
}

// to grabbing the value of second input.
function getSecondNum(id) {
	const secondInputStr = document.getElementById(id).parentNode.children[2].children[1].value;
	const secondInput = parseFloat(secondInputStr);
	return secondInput;
}

// for Triangle, Rhombus and Pentagon
function calculation1(id) {
	document.getElementById(id).addEventListener('click', function (e) {
		const nameOfShape = e.target.parentNode.children[0].innerText;

		const num1 = getFirstNum(id);
		const num2 = getSecondNum(id);
		const area = (0.5 * num1 * num2).toFixed(2);

		setData(nameOfShape, area, id);
	});
}
// for Rectangle and Parallelogram
function calculation2(id) {
	document.getElementById(id).addEventListener('click', function (e) {
		const nameOfShape = e.target.parentNode.children[0].innerText;
		const num1 = getFirstNum(id);
		const num2 = getSecondNum(id);
		const area = (num1 * num2).toFixed(2);

		setData(nameOfShape, area, id);
	});
}
// for Ellipse
document.getElementById('btn-ellipse').addEventListener('click', function (e) {
	const nameOfShape = e.target.parentNode.children[0].innerText;
	const num1 = getFirstNum('btn-ellipse');
	const num2 = getSecondNum('btn-ellipse');
	const area = (3.14 * num1 * num2).toFixed(2);

	setData(nameOfShape, area, 'btn-ellipse');
});

// data setting in the table

let serial = 0;
function setData(nameOfShape, area, id) {
	document.getElementById(id).parentNode.children[2].children[0].value = '';
	document.getElementById(id).parentNode.children[2].children[1].value = '';

	if (isNaN(area)) {
		alert('please recheck the input fields and provide valid numbers.');
	} else if (area < 0) {
		alert('please provide positive numbers.');
	} else {
		serial += 1;
		const dataContainer = document.getElementById('table-body');
		const tr = document.createElement('tr');
		tr.innerHTML = `
		<td class="font-semibold">${serial}.</td>
		<td>${nameOfShape}</td>
		<td>${area} cm<sup>2</sup></td>
		<td>
			<button class="text-xs bg-blue-600 text-white p-2 rounded">Covert to m<sup>2</sup></button>
		</td>
	`;
		dataContainer.appendChild(tr);
	}
}

calculation1('btn-triangle');
calculation1('btn-rhombus');
calculation1('btn-pentagon');

calculation2('btn-rectangle');
calculation2('btn-parallelogram');
