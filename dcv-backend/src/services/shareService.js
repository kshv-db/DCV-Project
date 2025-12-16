const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createShareLink({ vaultItemId, expiresAt }) {
  const token = require('../utils/generateToken')();
  const shareLink = await prisma.shareLink.create({
    data: {
      vaultItemId,
      token,
      expiresAt: expiresAt || null,
      revoked: false,
    },
  });
  return shareLink;
}

async function getShareLinkByToken(token) {
  return prisma.shareLink.findUnique({
    where: { token },
    include: { vaultItem: true },
  });
}

async function revokeShareLink(token) {
  return prisma.shareLink.update({
    where: { token },
    data: { revoked: true },
  });
}

module.exports = { createShareLink, getShareLinkByToken, revokeShareLink };
