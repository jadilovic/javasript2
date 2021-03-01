/**
 * http://usejsdoc.org/
 */
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
    // All the field values are entered, submit the form
   } else {
     alert("Please, fill out all the field values.");
   }
 });
};