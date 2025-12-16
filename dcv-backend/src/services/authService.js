const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const SALT_ROUNDS = 12;
const JWT_SECRET = process.env.JWT_SECRET;

async function registerUser(email, password) {
  // Validate email format
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    throw new Error('Invalid email format');
  }
  if (!password || password.length < 8) {
    throw new Error('Password must be at least 8 characters');
  }
  // Check for duplicate email
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    throw new Error('Email already registered');
  }
  // Hash password
  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
  // Create user
  await prisma.user.create({
    data: { email, passwordHash },
  });
  return { message: 'Registration successful' };
}

async function loginUser(email, password) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error('Invalid credentials');
  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) throw new Error('Invalid credentials');
  // Generate JWT
  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });
  return { token };
}

module.exports = { registerUser, loginUser };
