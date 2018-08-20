let path = require('path');

let app = require(path.resolve(__dirname, '../server/server'));
let ds = app.datasources.db;

ds.automigrate(function(err) {
  if (err) throw err;
});
