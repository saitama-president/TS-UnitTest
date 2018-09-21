#!/usr/bin/env node

"use strict";
exports.__esModule = true;
var fs = require("fs");
var argv = require("argv");
var command = process.argv[2] || "execute-test";
argv.option({
    name: 'year',
    short: 'y',
    type: 'number',
    description: 'broadcasted year.'
});
var TSTest;
(function (TSTest) {
    var Executer = (function () {
        function Executer() {
        }
        Executer.ExecuteDirectory = function (dir) {
            if (dir === void 0) { dir = "./test/"; }
            console.log("TEST Execute");
            fs.readdir(dir, function (e, f) {
                console.dir(f);
                f.filter(function (filename) { return /\.ts$/.test(filename); })
                    .forEach(function (file) { return console.log("F:" + f); });
            });
        };
        return Executer;
    }());
    TSTest.Executer = Executer;
    var Generator = (function () {
        function Generator() {
        }
        return Generator;
    }());
    TSTest.Generator = Generator;
    var Parser = (function () {
        function Parser() {
        }
        return Parser;
    }());
    TSTest.Parser = Parser;
})(TSTest || (TSTest = {}));
function generate_test() {
}
switch (command) {
    case 'execute-test':
        TSTest.Executer.ExecuteDirectory();
        break;
    case 'generate-test':
        generate_test();
        break;
    default: console.log("NO Action");
}
