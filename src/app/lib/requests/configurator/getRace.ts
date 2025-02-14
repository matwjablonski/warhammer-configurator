import { AnswerResponseType } from '.';

export const getRace = async (diceRoll: number): Promise<AnswerResponseType> => {
  const res = await fetch(`/api/configurator/race`, { method: 'POST', body: JSON.stringify({ diceRoll }) });
  const data = await res.json();

  return data;
}
