var zlib = require('zlib')
var util = require('util')

// Thanks, substack:
// https://github.com/substack/utf8-length
function kilobytes (string) {
  return (~-encodeURI(string).split(/%..|./).length / 1000).toFixed(2)
}

function indent (depth) {
  return Array(depth).join('  ')
}

module.exports = function analyze (object, maxDepth, depth) {
  depth = depth || 1

  if (depth > maxDepth) return

  for (var key in object) {
    var value = object[key]
    var raw = JSON.stringify(value)
    var compressed = zlib.gzipSync(raw)

    console.log('%s%s: %skb (%skb gzip)',
                indent(depth),
                key,
                kilobytes(raw),
                kilobytes(compressed))

    if (util.isObject(value)) {
      analyze(object[key], maxDepth, depth + 1)
    }
  }
}
