import { PrismaClient } from 'database'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      email: 'hello@prisma.com',
    },
  })

  const allUsers = await prisma.user.findMany()
  console.dir(allUsers, { depth: null })
}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })