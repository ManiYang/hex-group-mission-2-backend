var express = require('express');
var router = express.Router();
const Post = require('../model/posts')

router.get('/', async (req, res, next) => {
    res.status(200).json({
        status: 'success',
        data: []
    })
});

router.post('/', async (req, res, next) => {
    // todo
})

module.exports = router;
