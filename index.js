var customerName = 'bob'; 

function upperCaseCustomerName() {
  customerName = "BOB";
  return customerName;
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
  return bestCustomer;
}

const leastFavoriteCustomer = 'cherry';

function changeLeastFavoriteCustomer () {
  leastFavoriteCustomer = 'colin';
  return leastFavoriteCustomer;
}