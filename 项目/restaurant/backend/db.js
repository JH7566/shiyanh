const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')

const dbPromise = sqlite.open({
  filename: __dirname + '/db/restaurant.sqlite3',
  driver:sqlite3.Database
})
//应该是这没导出
module.exports = dbPromise
