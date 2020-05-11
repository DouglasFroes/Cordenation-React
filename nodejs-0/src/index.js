"use strict";

const fibonacci = () => {
  let previou = 0;
  let current = 1;
  const fibonacciList = [previou, current];

  for (current; current <= 350; current + previou) {
    [current, previou] = [previou + current, current];
    fibonacciList.push(current);
  }

  return fibonacciList;
};

const isFibonnaci = (num) => {
  let status = false;
  fibonacci().forEach((n) => {
    if (n === num) {
      status = true;
    }
  });
  return status;
};

module.exports = {
  fibonacci,
  isFibonnaci,
};
