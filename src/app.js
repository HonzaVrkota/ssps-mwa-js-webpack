import { style } from "./main.css";
import lodash from "lodash";
import component from "./component.js";

console.log("Hello webpack!");

const fancyFunc = () => {
  return [1, 2];
};

const [a, b] = fancyFunc();

const randomString = "smichovska stredni prumyslova skola";

console.log(lodash.upperCase(randomString));

console.log(lodash.camelCase(randomString));

console.log(a, b);
document.body.append(component());
