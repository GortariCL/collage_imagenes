const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

//RUTA RAIZ
router.get('/', (req, res) => {
    res.render('main',{
        layout: 'main'
    })
});

module.exports = router;