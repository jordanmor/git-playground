function addCurrentDate() {
	const d = new Date();
	const today = d.getDay();
	const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	return daysOfWeek[today];
}

function Employees(name, city, carModel) {
	this.name = name;
	this.city = city;
	this.carModel = carModel;
	this.remote = true;
}

const employees = [
	new Employees('Colin', 'Hartford', 'Peugot', true),
 	new Employees('Jordan', 'New Haven', 'Toyota', false),
	new Employees('Emily', 'Stamford', 'Lexus', true)
];

function Company(employees, location) {
	this.employees = employees;
	this.location = location;
}

const telitest = new Company(employees, 'New Haven');

// const employees = [
// 	{
// 		name: 'Colin',
// 		city: 'Hartford',
// 		carModel: 'Peugot'
// 	},
// 	{
// 		name: 'Jordan',
// 		city: 'New Haven',
// 		carModel: 'Toyota'
// 	},
// 	{
// 		name: 'Emily',
// 		city: 'Stamford',
// 		carModel: 'Lexus'
// 	}
// ];


function printMessage(name, city, carModel) {
	return (`${name} lives in ${city} and drives a ${carModel}. Today is ${addCurrentDate()}.\n`);
}

function printEmployeeInfo(company) {

	for ( let i = 0,
		  employee = company.employees,
		  totalEmployees = company.employees.length; i < totalEmployees; i++) {

		console.log(printMessage(employee[i].name, employee[i].city, employee[i].carModel));
	}
}

printEmployeeInfo(telitest);