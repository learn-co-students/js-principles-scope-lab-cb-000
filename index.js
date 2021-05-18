var customerName = "bob";

const leastFavoriteCustomer = "test";



function upperCaseCustomerName() {
  customerName = customerName.toUpperCase()
}

function setBestCustomer() {
  bestCustomer = 'not bob'
}

function overwriteBestCustomer(input) {
  bestCustomer = input
}

function changeLeastFavoriteCustomer(input) {
  leastFavoriteCustomer = input
}