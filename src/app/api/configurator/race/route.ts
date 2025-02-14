import { getRaceByDiceRoll } from '@/db/queries/races';
import { NextRequest, NextResponse } from 'next/server';

const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
  
    const race = await getRaceByDiceRoll(body.diceRoll);

    if (!race) {
      throw new Error('Błąd podczas pobierania rasy.');
    }

    return NextResponse.json({
      race: {
        name: race.name,
        id: race.id,
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

export { POST }
