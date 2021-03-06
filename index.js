'use strict'

var repackContact = require('./lib/repack-contact')

function unwrapContact (contact) {
  if (!contact) {
    throw new Error('Missing required input: contact object')
  }

  var templatePath = contact.templatePath || ''

  if (contact.RESULT && contact.RESULT.HOV) {
    return repackContact(contact.RESULT.HOV, templatePath)
  } else {
    throw new Error('Malformed contact object')
  }
}

module.exports = unwrapContact
