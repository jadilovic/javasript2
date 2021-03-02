/**
 * http://usejsdoc.org/
 * Example methods:
 * - every
 * - some
 * - filter
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
 
 // some method
 let indexValue = -1;
 const employee = employees.some(function(employee, index){
	 const isFound = employee.name.indexOf("John") > -1;
	 if(isFound){
		 indexValue = index;
	 }
		 return isFound;
 });
 console.log(employee, indexValue);
};