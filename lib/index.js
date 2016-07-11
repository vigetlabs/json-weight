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

var analyze = require('./analyze')
var maxDepth = process.argv[2] || Infinity
var payload = ''

process.stdin.resume()
process.stdin.setEncoding('utf8')

process.stdin.on('data', function (chunk) {
  payload += chunk
})

process.stdin.on('end', function () {
  analyze(JSON.parse(payload), maxDepth)
})
