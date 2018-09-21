import * as fs from "fs";
import * as argv from "argv";

const command = process.argv[1] || "execute-test";

argv.option({
  name: 'year',
  short: 'y',
  type: 'number',
  description: 'broadcasted year.'
});



function generate_test() {
}

function execute_test() {
  console.log("");
  fs.readdir("./test/", (e, f) => {
    f.filter(filename=> /\.ts$/.test(filename))
    .forEach(file =>console.log("F:" + f))
  });
}

console.log("TEST START");



switch (command){
  case 'execute-test':execute_test();break;
  case 'generate-test':generate_test();break;
  default:console.log("NO Action");
}
