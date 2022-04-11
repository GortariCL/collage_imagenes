const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

//RUTA RAIZ
router.get('/', (req, res) => {
    res.render('main', {
        layout: 'main'
    })
});
//RUTA IMAGEN
router.get('/imagen', (req, res) => {
    res.render('collage', {
        layout: 'collage'
    });
});

//Requerimiento 4
router.post('/imagen', (req, res) => {
    try {
        const { target_file } = req.files;
        const { posicion } = req.body;
        target_file.mv(path.join(__dirname, '..', 'imgs', `imagen-${posicion}.jpg`), (err) => {
            err ? res.send('Error al subir el archivo') : res.redirect('/imagen');
        });
    } catch (err) {
        res.status = 500;
        res.send('<script>alert("Debe seleccionar una imagen");window.location.href="/";</script>');
    }

});

module.exports = router;