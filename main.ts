import * as fs from "fs";
import * as argv from "argv";

const command = process.argv[2] || "execute-test";

argv.option({
  name: 'year',
  short: 'y',
  type: 'number',
  description: 'broadcasted year.'
});

namespace TSTest{
  export class TestCase(){
  

  }

  export class Executer{
    public static ExecuteDirectory(dir:string="./test/"){
      
      console.log("TEST Execute");

      var tests=Array<Executer>[]
      fs.readdir(dir, (e, files) => {
        
        console.dir(files);
        files.filter(
          filename=> /\.ts$/.test(filename)
        ).forEach(
          
          file =>console.log("F:" + file)
        )
      });
      
    }

    public constructor(path:string){
      
    }

    public test(){
      
    }

  }

  export class Generator{
  }

  export class Parser{


  }
}


function generate_test() {
}





switch (command){
  case 'execute-test':TSTest.Executer.ExecuteDirectory();break;
  case 'generate-test':generate_test();break;
  default:console.log("NO Action");
}
