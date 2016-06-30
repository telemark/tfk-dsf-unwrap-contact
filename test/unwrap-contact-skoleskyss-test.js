'use strict'

var tap = require('tap')
var unwrapContact = require('../index')

tap.throws(
  function () {
    unwrapContact()
  },
  {message: 'Missing required input: contact object'},
  'Throws if contact object not supplied'
)

tap.throws(
  function () {
    var malformed = require('./data/malformed.json')
    unwrapContact(malformed)
  },
  {message: 'Malformed contact object'},
  'Throws if contact object is malformed'
)

tap.test('It returns expected result', function (test) {
  var contact = require('./data/dsf.json')
  var expected = require('./data/unwrapped-skoleskyss.json')
  contact.templatePath = 'skoleskyss'
  var result = unwrapContact(contact)
  tap.equal(JSON.stringify(result), JSON.stringify(expected), 'Contact unwrapped OK')
  test.done()
})
