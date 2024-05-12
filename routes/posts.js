var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.status(200).json({
        status: 'success',
        data: []
    })
});

router.post('/', (req, res, next) => {
    // todo
})

module.exports = router;
