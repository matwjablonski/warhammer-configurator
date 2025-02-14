import { db } from '@/db';

export const getAllRaces = async () => {
  return await db.race.findMany();
}

export const getRaceByDiceRoll = async (diceRoll: number) => {
  try {
    const race = await db.race.findFirst({
      where: {
        AND: [
          { minDiceRoll: { lte: diceRoll } },
          { maxDiceRoll: { gte: diceRoll } },
        ],
      },
    })
    return race
  } catch (error) {
    console.error('Database query error:', error)
    throw error
  }
}
