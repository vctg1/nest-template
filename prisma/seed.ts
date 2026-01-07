import { PrismaClient } from '../src/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import * as bcrypt from 'bcrypt';
import 'dotenv/config';

const roundsOfHashing = 12;

// Initialize Prisma Client with adapter for Prisma 7
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  // Validate environment variables
  if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
    throw new Error('ADMIN_EMAIL and ADMIN_PASSWORD must be set in .env file');
  }

  console.log('🌱 Starting seed...');

  // Hash the admin password
  const hashedPassword = await bcrypt.hash(
    process.env.ADMIN_PASSWORD,
    roundsOfHashing
  );

  // Create or update admin user
  const admin = await prisma.user.upsert({
    where: { email: process.env.ADMIN_EMAIL },
    update: {
      password: hashedPassword,
      role: 'ADMIN',
    },
    create: {
      email: process.env.ADMIN_EMAIL,
      name: 'Admin',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });

  console.log('✅ Admin user created/updated:', {
    id: admin.id,
    email: admin.email,
    name: admin.name,
    role: admin.role,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
    console.log('🎉 Seed completed successfully');
  })
  .catch(async (e) => {
    console.error('❌ Error seeding database:', e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });