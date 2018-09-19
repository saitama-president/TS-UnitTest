#!/usr/bin/env node

"use strict";

const fs = require("fs");
const argv = require('argv');

const command=process.argv[1]||"execute-test";



argv.option({
    name: 'year',
    short: 'y',
    type: 'number',
    description: 'broadcasted year.'
});
fs.readdir("./test/",(e,f)=>{
    f.forEach(file=>{
        console.log("F:"+f);
    });
});

function main(command,args=[]) {
    console.log("MAIN!");
}
console.log("TEST START");
main();
