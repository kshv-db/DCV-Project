const vaultService = require('../services/vaultService');
const hashFile = require('../utils/hashFile');
const fs = require('fs');

const VALID_TYPES = ['credential', 'document', 'id', 'custom'];

async function uploadVaultItem(req, res) {
  try {
    console.log("===== UPLOAD HIT =====");
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);
    console.log("USER:", req.userId);
    if (!req.userId) return res.status(401).json({ error: 'Unauthorized' });
    const { type, title, description } = req.body;
    // Defensive: file must exist
    if (!req.file) return res.status(400).json({ error: 'File is required' });
    // Defensive: title must exist
    if (!title) {
      fs.unlinkSync(req.file.path);
      return res.status(400).json({ error: 'Title is required' });
    }
    // Defensive: type must exist and be valid
    if (!type || !VALID_TYPES.includes(type)) {
      fs.unlinkSync(req.file.path);
      return res.status(400).json({ error: 'Invalid type' });
    }
    const filePath = req.file.path.replace(/\\/g, '/');
    const fileHash = await hashFile(filePath);
    const item = await vaultService.createVaultItem({
      ownerId: req.userId,
      type,
      title,
      description,
      filePath,
      fileHash,
    });
    res.status(201).json({ id: item.id });
  } catch (err) {
    // If file exists and error occurs, try to clean up
    if (req.file && req.file.path && fs.existsSync(req.file.path)) {
      try { fs.unlinkSync(req.file.path); } catch (e) {}
    }
    res.status(500).json({ error: err.message });
  }
}

async function listVaultItems(req, res) {
  try {
    if (!req.userId) return res.status(401).json({ error: 'Unauthorized' });
    const items = await vaultService.listVaultItems(req.userId);
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { uploadVaultItem, listVaultItems };
