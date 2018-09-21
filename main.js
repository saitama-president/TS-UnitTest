#!/usr/bin/env node

"use strict";
exports.__esModule = true;
var fs = require("fs");
var argv = require("argv");
var command = process.argv[1] || "execute-test";
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
    fs.readdir("./test/", function (e, f) {
        f.filter(function (filename) { return /\.ts$/.test(filename); })
            .forEach(function (file) { return console.log("F:" + f); });
    });
}
console.log("TEST START");
switch (command) {
    case 'execute-test':
        execute_test();
        break;
    case 'generate-test':
        generate_test();
        break;
    default: console.log("NO Action");
}
