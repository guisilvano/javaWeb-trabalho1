module.exports = (app) => {
    const disco = require('../controllers/discos.controller.js');

    // cria novo disco
    app.post('/discos', disco.create);

    // retorna todos os discos
    app.get('/discos', disco.findAll);

    // Retrieve a single Note with noteId
    app.get('/discos/:discoId', disco.findOne);

    // Update a Note with noteId
    app.put('/discos/:discoId', disco.update);

    // Delete a Note with noteId
    app.delete('/discos/:discoId', disco.delete);
}