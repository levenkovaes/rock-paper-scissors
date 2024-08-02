import { ChoicesEnum } from "../../types";

export interface ResultProps {
  userChoice: ChoicesEnum;
  computerChoice: ChoicesEnum;
  result: string | null;
  winCount: number;
  loseCount: number;
  handleReset: () => void;
}
