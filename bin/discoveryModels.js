let path = require('path');
let app = require(path.resolve(__dirname, '../server/server'));
let ds = app.datasources.db;

ds.discoverAndBuildModels('equilibrio',{relations: true},
  function(err, models) {
    for (const modelName in models) {
      app.model(models[modelName], {dataSource: ds});
    }
});
