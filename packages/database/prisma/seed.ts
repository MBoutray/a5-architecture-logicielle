import { PrismaClient, Prisma } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  // USERS
  const user = await prisma.user.upsert({
    where: { username: 'user1' },
    update: {},
    create: {
      username: 'user1',
      email: 'user1@example.com',
      password: await hash('password', 10),
      ownedCharacters: {
        create: [
          {
            name: 'Character 1',
            profession: 'Profession 1',
            clearance: 'ROOKIE',
            statistics: {
              create: {
                physical: 3,
                mental: 3,
                social: 1,
                physicalAdjectives: ['FAST', 'MUSCULAR', 'TOUGH'],
                mentalAdjectives: ['CALM', 'CLEVER', 'INTUITIVE'],
                socialAdjectives: ['INTIMIDATING'],
              },
            },
            skills: {
              create: {
                drivingSkills: ['CAR', 'PLANE'],
                fightingSkills: ['FISTS', 'PISTOL'],
                languageSkills: ['ENGLISH', 'SPANISH'],
              },
            },
          },
          {
            name: 'Character 2',
            profession: 'Profession 2',
            clearance: 'JUNIOR',
            statistics: {
              create: {
                physical: 2,
                mental: 3,
                social: 2,
                physicalAdjectives: ['SHORT', 'TOUGH'],
                mentalAdjectives: ['KNOWLEDGEABLE', 'OBSERVATIVE', 'METHODICAL'],
                socialAdjectives: ['PATIENT', 'PERSUASIVE'],
              },
            },
            skills: {
              create: {
                drivingSkills: ['BOAT', 'HELICOPTER'],
                fightingSkills: ['SNIPER', 'SWORD'],
                languageSkills: ['FRENCH', 'GERMAN'],
              },
            },
          },
        ],
      },
    },
    include: {
      ownedCharacters: true,
    },
  })

  const gameMaster = await prisma.user.upsert({
    where: { username: 'gamemaster' },
    update: {},
    create: {
      username: 'gamemaster',
      email: 'gamemaster@example.com',
      password: await hash('password', 10),
      ownedMissions: {
        create: [
          {
            title: 'Mission 1',
            scenario: 'Scenario 1',
            playerCharacters: {
              connect: { id: user.ownedCharacters[0].id },
            },
            places: {
              create: {
                name: 'Place 1',
                description: 'Description 1',
                owner: { connect: { username: 'gamemaster' } },
              },
            },
            nonPlayerCharacters: {
              create: {
                name: 'NPC 1',
                background: 'Description 1',
                clearance: 'ROOKIE',
                owner: { connect: { username: 'gamemaster' } },
                statistics: {
                  create: {
                    physical: 3,
                    mental: 3,
                    social: 1,
                    physicalAdjectives: ['FAST', 'MUSCULAR', 'TOUGH'],
                    mentalAdjectives: ['CALM', 'CLEVER', 'INTUITIVE'],
                    socialAdjectives: ['INTIMIDATING'],
                  },
                },
                skills: {
                  create: {
                    drivingSkills: ['CAR', 'PLANE'],
                    fightingSkills: ['FISTS', 'PISTOL'],
                    languageSkills: ['ENGLISH', 'SPANISH'],
                  },
                },
              },
            }
          },
          {
            title: 'Mission 2',
            scenario: 'Scenario 2',
            playerCharacters: {
              connect: { id: user.ownedCharacters[0].id },
            },
            places: {
              create: {
                name: 'Place 2',
                description: 'Description 2',
                owner: { connect: { username: 'gamemaster' } },
              },
            },
            nonPlayerCharacters: {
              create: {
                name: 'NPC 2',
                background: 'Description 2',
                clearance: 'MASTER',
                owner: { connect: { username: 'gamemaster' } },
                statistics: {
                  create: {
                    physical: 3,
                    mental: 3,
                    social: 1,
                    physicalAdjectives: ['FAST', 'MUSCULAR', 'TOUGH'],
                    mentalAdjectives: ['CALM', 'CLEVER', 'INTUITIVE'],
                    socialAdjectives: ['INTIMIDATING'],
                  },
                },
                skills: {
                  create: {
                    drivingSkills: ['CAR', 'PLANE'],
                    fightingSkills: ['FISTS', 'PISTOL'],
                    languageSkills: ['ENGLISH', 'SPANISH'],
                  },
                },
              },
            }
          }
        ],
      },
    },
    include: {
      ownedMissions: true,
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