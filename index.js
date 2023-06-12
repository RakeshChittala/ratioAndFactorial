const factorialfunc = require("../factorial/index.js");
const ratiofunc = require("../ratio/index.js");
const ratioAndFactorial = (n1, n2, n3) => {
  const factorial = factorialfunc(n3);
  const ratio = ratiofunc(n1, n2);
  return { ratio, factorial };
};
module.exports = ratioAndFactorial;
