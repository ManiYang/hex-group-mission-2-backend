var express = require('express');
var router = express.Router();
const Post = require('../model/posts')

router.get('/', async (req, res, next) => {
    isTimeSortAscending = (req.query.timeSort === 'asc');
    searchPattern = req.query.q;

    const posts = await Post.find(
        (searchPattern !== undefined)
        ? { content: new RegExp(searchPattern) }
        : {}
    ).sort(
        { createdAt: (isTimeSortAscending ? 1 : -1) }
    );

    res.status(200).json({
        result: true,
        data: posts
    });
});

router.post('/', async (req, res, next) => {
    // todo
})

module.exports = router;
