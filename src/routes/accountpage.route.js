const express = require('express');
const router = express.Router();
const path = require('path')

router.route('/app/accountpage/').get(function (req, res, next) {
    res.sendFile(path.join(__dirname.slice(0,-11), 'public/accountpage/index.html'));
})

router.route('/app/accountpage/style.css').get(function (req, res, next) {
    res.sendFile(path.join(__dirname.slice(0,-11), 'public/accountpage/style.css'));
})

router.route('/app/accountpage/script.js').get(function (req, res, next) {
    res.sendFile(path.join(__dirname.slice(0,-11), 'public/accountpage/script.js'));
})

module.exports = router;