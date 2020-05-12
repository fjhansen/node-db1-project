const db = require('./dbConfig');

db.select('*').from('accounts');