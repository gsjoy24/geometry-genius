function colorGenerator() {
	const symbols = '0123456789ABCDEF';
	let color = '#';

	for (i = 0; i < 6; i++) {
		color += symbols[Math.floor(Math.random() * 16)];
	}
	return color;
}

function setBackgroundColor(id) {
	document.getElementById(id).addEventListener('mouseenter', function () {
		// first  call of colorGenerator()
		const bgColor = colorGenerator();
		document.getElementById(id).style.backgroundColor = bgColor;
	});
}

// * The task is done in two ways to call the function 'colorGenerator()' at least twice.
setBackgroundColor('card-1');
setBackgroundColor('card-2');
setBackgroundColor('card-3');
setBackgroundColor('card-4');
setBackgroundColor('card-5');

document.getElementById('card-6').addEventListener('mouseenter', function () {
	// second  call of colorGenerator()
	const bgColor = colorGenerator();
	document.getElementById('card-6').style.backgroundColor = bgColor;
});
