const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createVaultItem({ ownerId, type, title, description, filePath, fileHash }) {
  return prisma.vaultItem.create({
    data: {
      ownerId,
      type,
      title,
      description,
      filePath,
      fileHash,
    },
  });
}

async function listVaultItems(ownerId) {
  return prisma.vaultItem.findMany({
    where: { ownerId },
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      type: true,
      title: true,
      description: true,
      filePath: true,
      fileHash: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}

async function getVaultItemById(id) {
  return prisma.vaultItem.findUnique({ where: { id } });
}

module.exports = { createVaultItem, listVaultItems, getVaultItemById };
