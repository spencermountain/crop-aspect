#!/usr/bin/env node
var cropAspect = require('../src');
var inputImg = process.argv[2]
var ratio = process.argv[3] || null

cropAspect(inputImg, ratio)
