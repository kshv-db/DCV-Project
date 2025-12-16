const shareService = require('../services/shareService');
const vaultService = require('../services/vaultService');
const path = require('path');
const fs = require('fs');

// POST /vault/share/:id
async function createShareLink(req, res) {
  try {
    const { id } = req.params;
    const { expiresAt } = req.body;
    if (!req.userId) return res.status(401).json({ error: 'Unauthorized' });
    const item = await vaultService.getVaultItemById(id);
    if (!item) return res.status(404).json({ error: 'VaultItem not found' });
    if (item.ownerId !== req.userId) return res.status(403).json({ error: 'Forbidden' });
    const shareLink = await shareService.createShareLink({ vaultItemId: id, expiresAt });
    res.status(201).json({
      shareUrl: `${req.protocol}://${req.get('host')}/share/${shareLink.token}`,
      expiresAt: shareLink.expiresAt,
      revoked: shareLink.revoked
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// GET /share/:token
async function downloadByToken(req, res) {
  try {
    const { token } = req.params;
    const link = await shareService.getShareLinkByToken(token);
    if (!link || link.revoked === true) return res.status(404).json({ error: 'Link not found' });
    if (link.expiresAt && new Date(link.expiresAt) < new Date()) {
      return res.status(404).json({ error: 'Link expired' });
    }
    const item = link.vaultItem;
    if (!item || !item.filePath || !fs.existsSync(item.filePath)) {
      return res.status(404).json({ error: 'File not found' });
    }
    res.setHeader('Content-Disposition', `attachment; filename="${item.title || 'file'}"`);
    res.download(path.resolve(item.filePath));
  } catch (err) {
    res.status(404).json({ error: 'Invalid or expired link' });
  }
}

// POST /vault/share/revoke/:token
async function revokeShareLink(req, res) {
  try {
    const { token } = req.params;
    if (!req.userId) return res.status(401).json({ error: 'Unauthorized' });
    const link = await shareService.getShareLinkByToken(token);
    if (!link) return res.status(404).json({ error: 'Link not found' });
    if (link.revoked) return res.status(400).json({ error: 'Link already revoked' });
    const item = link.vaultItem;
    if (!item || item.ownerId !== req.userId) return res.status(403).json({ error: 'Forbidden' });
    await shareService.revokeShareLink(token);
    res.json({ revoked: true });
  } catch (err) {
    res.status(404).json({ error: 'Invalid or expired link' });
  }
}

module.exports = { createShareLink, downloadByToken, revokeShareLink };
