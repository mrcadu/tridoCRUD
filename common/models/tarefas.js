'use strict';

module.exports = function(Tarefas) {
  Tarefas.createNew = function(data) {
    let newCustomerId;
    let equilibrios = null;

    if (data.equilibrios && data.equilibrios.length) {
      equilibrios = data.equilibrios;
    }

    return Tarefas
      .create(data);
  };
  Tarefas.remoteMethod('createNew', {
    accepts: [
      {arg: 'id', type: 'string', required: true},
      {arg: 'nome', type: 'string'},
      {arg: 'duracao', type: 'string'},
      {arg: 'data', type: 'date'},
      {arg: 'statusId', type: 'object'},
      {arg: 'equilibrios', type: 'array'},
      {arg: 'metas', type: 'array'},
      {arg: 'papeis', type: 'array'},
      {arg: 'triade', type: 'object'},
    ],
    returns: {arg: 'response', type: 'string'},
  });
};
