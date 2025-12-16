console.log("SHARE ROUTES LOADED");
const express = require('express');
const router = express.Router();
const shareController = require('../controllers/shareController');

// GET /:token
router.get('/:token', shareController.downloadByToken);

module.exports = router;
