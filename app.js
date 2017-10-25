function addCurrentDate() {
	const d = new Date();
	const today = d.getDay();
	const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	return daysOfWeek[today];
}

function printMessage(name, city, carModel) {
	console.log(`${name} lives in ${city} and drives a ${carModel}. Today is ${addCurrentDate()}.`);
}

printMessage('Colin', 'Hartford', 'Peugot');

