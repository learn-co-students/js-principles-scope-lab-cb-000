// declare customerName to be bob in global scope
var customerName = 'bob';

// modifies the customerName variable
function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase();
}

// Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// See the consequences of declaring a variable in global scope,
// by writing a new function called overwriteBestCustomer() that changes that bestCustomer variable
function overwriteBestCustomer(newFave) {
  bestCustomer = newFave;
}

// declare a constant in global scope called leastFavoriteCustomer, be sure to assign it some initial value
// see what happens when you attempt to change that constant --> AssertionError: expected [Function: changeLeastFavoriteCustomer] to throw TypeError
const leastFavoriteCustomer = 'that guy';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'that other guy';
}
