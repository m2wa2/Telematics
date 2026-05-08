const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'admin@matrixtelematic.co.ke' },
    update: {},
    create: {
      email: 'admin@matrixtelematic.co.ke',
      name: 'Super Admin',
      password: 'adminpassword123',
      role: 'ADMIN'
    }
  });
  console.log('Admin user seeded:', admin.email);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
