const express = require('express');

const router = express.Router();
const {
    getImages,
    getDetail,
    getPreviousPage,
    getResults
} = require('../controllers/routing')

router.get('/', getImages)
    .get('/detail/:id', getDetail)
    .get('/back', getPreviousPage)
    .post('/search', getResults)

module.exports = router;