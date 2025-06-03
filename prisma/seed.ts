import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Hash du mot de passe admin et user
  const hashedAdminPassword = await bcrypt.hash('Admin123!', 10)
  const hashedUserPassword = await bcrypt.hash('User123!', 10)

  // Création d’un utilisateur admin
  await prisma.user.upsert({
    where: { email: 'admin@deadangle.com' },
    update: {},
    create: {
      email: 'admin@deadangle.com',
      password: hashedAdminPassword,
      role: 'ADMIN',
      name: 'Admin Dead Angle',
    },
  })

  // Création d’un utilisateur normal
  await prisma.user.upsert({
    where: { email: 'user@deadangle.com' },
    update: {},
    create: {
      email: 'user@deadangle.com',
      password: hashedUserPassword,
      role: 'USER',
      name: 'User Dead Angle',
    },
  })

  console.log('Seed done ✅')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
