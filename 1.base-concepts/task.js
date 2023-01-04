"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  let D = b ** 2 - 4 * a * c;

  if (D < 0) {
    arr = [];
  } else if (D === 0) {
    arr = [-b / (2 * a)];
  } else {
    arr = [(-b + Math.sqrt(D) ) / (2 * a), (-b - Math.sqrt(D) ) / (2 * a),];
  }
  
  return arr;
}

function calculateTotalMortgage( percent, contribution, amount, countMonths) {
  
  if (isNaN(percent) === true) {
    return false;
  }else if (isNaN(contribution) === true) {
    return false;
  }else if (isNaN(amount) === true) {
    return false;
  }

  let percentInMonths = (percent / 100) / 12;

  let creditBody = amount - contribution;

  let paymentInMonths = creditBody * (percentInMonths + (percentInMonths /(((1 + percentInMonths) ** countMonths) - 1)));

  let allPayment = +((paymentInMonths * countMonths).toFixed(2));

  return allPayment;

  console.log(allPayment);
}

