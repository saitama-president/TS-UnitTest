#! /bin/bash

tsc main.ts --strict --removeComments --alwaysStrict --outFile main.js
sed -i "1i\#\!/usr/bin/env node\n" main.js

