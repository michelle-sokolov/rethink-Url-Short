const express = require('express');
const router = express.Router();

const Url = require('../models/url');

// route GET /:code
// redirect to original URL 
router.get('/:code', async (req, res) => {
    try {
        const url = await Url.findOne({ urlCode: req.params.code });
        return res.redirect(url.longUrl);
    } catch (error) {
        console.log(error);
        res.status(500).json('server error')
    }
})
module.exports = router;