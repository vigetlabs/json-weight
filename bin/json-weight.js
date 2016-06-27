#!/usr/bin/env node

/**
 * json-weight
 * Output the size of every key within a JSON payload
 *
 * Usage:
 * output-command | json-weight <depth> (optional)
 *
 * Example:
 * curl -s http://site.com/api/endpoint | json-weight 2
 * cat file.json | json-weight
 */

var maxDepth = process.argv[2] || Infinity
var analyze  = require('../lib/analyze')
var payload  = ''

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
  payload += chunk
})

process.stdin.on('end', function () {
  analyze(JSON.parse(payload), maxDepth)
})
