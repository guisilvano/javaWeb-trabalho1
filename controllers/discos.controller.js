const Disco = require('../models/discos.model.js');

// cria e salva novo disco
exports.create = (req, res) => {
    // valida request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Campos não podem ser vazios!"
        });
    }

    // cria disco
    const disco = new Disco({
        titulo: req.body.titulo, 
        artista: req.body.artista,
        ano: req.body.ano,
        genero: req.body.genero,
        gravadora: req.body.gravadora
    });

    // salva disco na db
    disco.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Ocorreu algum erro ao criar o disco!"
        });
    });
};

// Retorna todos os discos da db
exports.findAll = (req, res) => {
    Disco.find()
    .then(disco => {
        res.send(disco);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Ocorreu algum erro ao procurar os discos!"
        });
    });
};

// procura um disco com discoId
exports.findOne = (req, res) => {
    Disco.find(req.params.discoId)
    .then(disco => {
        if(!disco) {
            return res.status(404).send({
                message: "ID não encontrado: " + req.params.discoId
            });            
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "ID não encontrado: " + req.params.discoId
            });                
        }
        return res.status(500).send({
            message: "Erro ao biscar ID" + req.params.discoId
        });
    });
};

// // Update a note identified by the noteId in the request
// exports.update = (req, res) => {
//     // Validate Request
//     if (!req.body.content) {
//         return res.status(400).send({
//             message: "Note content can not be empty"
//         });
//     }

//     // Find note and update it with the request body
//     Note.findByIdAndUpdate(req.params.noteId, {
//         title: req.body.title || "Untitled Note",
//         content: req.body.content
//     }, { new: true })
//         .then(note => {
//             if (!note) {
//                 return res.status(404).send({
//                     message: "Note not found with id " + req.params.noteId
//                 });
//             }
//             res.send(note);
//         }).catch(err => {
//             if (err.kind === 'ObjectId') {
//                 return res.status(404).send({
//                     message: "Note not found with id " + req.params.noteId
//                 });
//             }
//             return res.status(500).send({
//                 message: "Error updating note with id " + req.params.noteId
//             });
//         });
// };

// // Delete a note with the specified noteId in the request
// exports.delete = (req, res) => {
//     Note.findByIdAndRemove(req.params.noteId)
//         .then(note => {
//             if (!note) {
//                 return res.status(404).send({
//                     message: "Note not found with id " + req.params.noteId
//                 });
//             }
//             res.send({ message: "Note deleted successfully!" });
//         }).catch(err => {
//             if (err.kind === 'ObjectId' || err.name === 'NotFound') {
//                 return res.status(404).send({
//                     message: "Note not found with id " + req.params.noteId
//                 });
//             }
//             return res.status(500).send({
//                 message: "Could not delete note with id " + req.params.noteId
//             });
//         });
// };