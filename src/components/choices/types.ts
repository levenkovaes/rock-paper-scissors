import { ChoicesEnum } from "../../types";

export interface ChoicesProps {
  onUserChoice: (choice: ChoicesEnum) => void;
}
