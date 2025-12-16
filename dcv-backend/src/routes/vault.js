const express = require('express');
const router = express.Router();
const vaultController = require('../controllers/vaultController');
const shareController = require('../controllers/shareController');
const auth = require('../middlewares/auth');
const upload = require('../utils/multerConfig');

// POST /vault/upload
router.post('/upload', auth, upload.single('file'), vaultController.uploadVaultItem);

// GET /vault/items
router.get('/items', auth, vaultController.listVaultItems);

// POST /vault/share/:id
router.post('/share/:id', auth, shareController.createShareLink);

// POST /vault/share/revoke/:token
router.post('/share/revoke/:token', auth, shareController.revokeShareLink);

module.exports = router;
