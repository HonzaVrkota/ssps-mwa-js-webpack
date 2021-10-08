import lodash from "lodash";
console.log("Hello webpack!");

const fancyFunc = () => {
  return [1, 2];
};

const [a, b] = fancyFunc();

const randomString = "smichovska stredni prumyslova skola";

console.log(lodash.upperCase(randomString));
