'use strict'

var fs = require('fs')
var path = require('path')

function repackContact (data, filePath) {
  if (!data) {
    throw new Error('Missing required input: data object')
  }
  var temp = filePath || 'template'
  var templatePath = __dirname + '/data/' + temp + '.json'
  if (fs.existsSync(templatePath)) {
    var template = require(templatePath)
  } else {
    throw new Error('File does not exist: ' + templatePath)
  }

  Object.keys(template).forEach(function (key) {
    template[key] = data[key] || ''
  })

  return JSON.parse(JSON.stringify(template))
}

module.exports = repackContact
