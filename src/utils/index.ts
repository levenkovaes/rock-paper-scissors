import { ChoicesEnum, ResultEnum } from "../types";

export const getRandomChoice = (): ChoicesEnum => {
  const choices = Object.values(ChoicesEnum);
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

export const determineWinner = (
  user: ChoicesEnum,
  computer: ChoicesEnum
): ResultEnum => {
  if (user === computer) {
    return ResultEnum.Draw;
  } else if (
    (user === ChoicesEnum.Rock && computer === ChoicesEnum.Scissors) ||
    (user === ChoicesEnum.Scissors && computer === ChoicesEnum.Paper) ||
    (user === ChoicesEnum.Paper && computer === ChoicesEnum.Rock)
  ) {
    return ResultEnum.Win;
  } else {
    return ResultEnum.Lose;
  }
};
