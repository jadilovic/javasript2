/**
 * http://usejsdoc.org/
 * Example methods:
 * - every
 * - some
 * - filter
 * - findIndex
 * - map
 * - forEach
 * - find
 */

// every method
window.onload = function() {
 const form = document.getElementById("registration_form");
  
 form.addEventListener('submit', function(event) {
   event.preventDefault();
   const fields = ["first_name", "last_name", "email", "city"];
   const allFieldsEntered = fields.every(function(fieldId) {
     return document.getElementById(fieldId).value.trim() !== "";
   });
   if(allFieldsEntered) {
     console.log('All the fields are entered');
     alert('All the fields are entered');
    // All the field values are entered, submit the form
   } else {
     alert("Please, fill out all the field values.");
   }
 });
 
 // sample array
 const employees = [
	  { name: 'David Carlson', age: 30 },
	  { name: 'John Cena', age: 34 },
	  { name: 'Mike Sheridon', age: 25 },
	  { name: 'John Carte', age: 50 }
	];
 
 // forEach method sample
 employees.forEach(function(employee, index, array){
	 console.log(employee.name + ", " + employee.age + ", " + index + ", " + array);
 });
 
 // map method sample
 const convMapArray = employees.map(function(employee){
	 return employee.name.toUpperCase() + ", " + (employee.age - 1);
 });
 console.log(employees);
 console.log(convMapArray);
 
 const copyArray = employees.map(function(employee){
	 return `${employee.name} is ${employee.age} years old`;
 });
 console.log(copyArray);
 
 // find method sample
 const foundEmployee = employees.find(function(employee){
	 return employee.name.indexOf("Sheridon");
 });
 console.log(foundEmployee);
 
 // findIndex method
 const index = employees.findIndex(function(employee){
	 return employee.name.indexOf("Mike") > -1;
 });
 console.log(index);
 
 // filter method
 const filteredEmployees = employees.filter(function(employee){
	 return employee.name.indexOf("Cena") > -1;
 });
 console.log(filteredEmployees);
 
 const filteredEmployeesByAge = employees.filter(function(employee){
	 return employee.age > 25;
 });
 console.log(filteredEmployeesByAge);
 
 // every method sample
 const allAbove20 = employees.every(function(employee){
	 return employee.age > 20;
 });
 console.log("All above 20: " + allAbove20);
 
 // some method
 const oneAbove49 = employees.some(function(employee){
	 return employee.age > 49;
 })
 console.log("One above 49: " + oneAbove49);
 
 let indexValue = -1;
 const employee = employees.some(function(employee, index){
	 const isFound = employee.name.indexOf("John") > -1;
	 if(isFound){
		 indexValue = index;
	 }
		 return isFound;
 });
 console.log(employee, indexValue);
 
//reduce method sample
const addAges = employees.reduce(function(accumulator, employee){
	return accumulator + employee.age;
}, 0);
console.log(addAges);


const coordinates = [
	  { x: 1, y: 2 }, 
	  { x: 2, y: 3 }, 
	  { x: 3, y: 4 }
	];
 
const sum = coordinates.reduce(function(accumulator, value){
	return accumulator + (value.x + value.y);
}, 0);
console.log("Total value: " + sum);

};
