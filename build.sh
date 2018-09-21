#! /bin/bash

tsc main.ts \
  --removeComments \
  --alwaysStrict \

sed -i "1i\#\!/usr/bin/env node\n" main.js

