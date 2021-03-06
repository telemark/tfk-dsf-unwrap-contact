'use strict'

var unwrapContact = require('./index')
var data = {
  RESULT: {
    HOV: {
      FODT: '220486',
      PERS: '12345',
      INR: '22048612345',
      FODTAR: '1986',
      'STAT-KD': '1',
      STAT: 'BOSATT',
      'NAVN-S': 'GRÅ',
      'NAVN-F': 'GANDALF',
      'NAVN-M': {},
      NAVN: 'GRÅ GANDALF',
      'NAVN-D': {},
      ADRR: '20060822',
      ADRF: '20060818',
      ADR: 'SNIPPETSTADSTREDET 24',
      POSTN: '1732',
      POSTS: 'HØTTEN',
      KOMNR: '0707',
      KOMNA: 'HØTTEN',
      GATE: '01880',
      HUS: '0024',
      ADRTYPE: 'O',
      FKOM: '0501',
      'FKOM-N': 'LILLEHAMMER',
      'FKOM-R': '19990713',
      'FKOM-F': '19990701',
      UTVT: {},
      'UTVT-N': {},
      'UTVT-R': {},
      'UTVT-F': {},
      AARSADR: '24',
      'SPES-KD': '0',
      SPES: 'VANLIG BOSATT',
      SKKR: '0005',
      VAKR: '0010',
      GRUNNKR: '0411',
      MELD: {},
      'K-FAMNR': '22048612345',
      'FAMNR-D': '19980718',
      PERSKODE: '1',
      'EKT-FODT': '050180',
      'EKT-PERS': '54321',
      'EKT-INR': '05018054321',
      Barn: [
        {
          'BAR-FODT': '080907',
          'BAR-PERS': '98765',
          'BAR-INR': '08090798765',
          'BAR-KJO': 'K'
        },
        {
          'BAR-FODT': '070603',
          'BAR-PERS': '56789',
          'BAR-INR': '07060356789',
          'BAR-KJO': 'M'
        }
      ],
      'MOR-FODT': '030450',
      'MOR-PERS': '19285',
      'MOR-INR': '03045019285',
      'FAR-FODT': '020850',
      'FAR-PERS': '91825',
      'FAR-INR': '1928591825',
      KJONN: 'M',
      FODKNR: '1201',
      FODK: 'BERGEN',
      FODS: {}
    }
  }
}

data.templatePath = 'skoleskyssa'
console.log(unwrapContact(data))
