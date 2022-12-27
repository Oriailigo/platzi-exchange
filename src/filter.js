import numeral from "numeral";

const dollarFilter = function (value) {
  if (!value) {
    return "$ 0";
  }

  return numeral(value).format("($ 0.00a)");
};

const percentFilter = function (value) {
  if (!value) {
    return "0%";
  }
  // es un numero por si viene en string y que solo sean 2 cifras
  return `${Number(value).toFixed(2)}%`;
};

export { dollarFilter, percentFilter };
