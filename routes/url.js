const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortId = require('shortid');
const config = require('config');

const Url = require('../models/url');

// route - POST request to /api/url/shorten
// used to create short URL
router.post('/shorten', async (req, res) => {
    const { longUrl } = req.body;
    const baseUrl = config.get('baseURL');
    // handle invalid URLs
    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json('invalid');
    }
    // create URL Code with short ID dependency
    const urlCode = shortId.generate();
    // check long version of URL
    if (validUrl.isUri(longUrl)) {
        try {
            // find given URL from DB
            let url = await Url.findOne({ longUrl });
            res.json(url)
        } catch (error) {
            console.error(err);
            res.status(500).json('server error')
        }
    }
    else {
        res.status(401).json('invalid long URL')
    }
});

module.exports = router;