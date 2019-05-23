var primeNumbers = ' 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 53, 59, 61, 67, 71, 73, 79, 83, 89 y 97'

var primeNumbers2 = primeNumbers.split(",")

function nPrimes(n){
  for(i=0; i<n; i++){
    console.log(primeNumbers2[i]);
  }
}