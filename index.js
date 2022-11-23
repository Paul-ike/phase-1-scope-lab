var customerName = 'bob'

 function upperCaseCustomerName() {
     return customerName = customerName.toUpperCase()
 }

function setBestCustomer() {
    return bestCustomer = customerName = 'not bob'
}

function overwriteBestCustomer() {
    return bestCustomer = bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'hi!'

function changeLeastFavoriteCustomer() {
    return leastFavoriteCustomer = 'bye!'
}