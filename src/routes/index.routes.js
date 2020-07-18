const { Router } = require('express');
const { route } = require('../server');
const router = Router();

router.get('/', (req, res) => {
    res.render('index')
})

module.exports = router;