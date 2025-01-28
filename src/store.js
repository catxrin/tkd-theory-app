import { atom, selector } from "recoil";
import questions from "./data/questions.json";

export const kyuState = atom({
  key: "kyu",
  default: 10,
});

export const kyuQuestions = selector({
  key: "kyuQuestions",
  get: ({ get }) => {
    const currentKyu = get(kyuState);
    return questions.filter((question) => question.kyu === currentKyu);
  },
});
