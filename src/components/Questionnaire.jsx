import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { kyuQuestions } from "../store";

import Button from "./Button";
import Answers from "./Answers";

export default function Questionnaire() {
  const currenKyuQuestions = useRecoilValue(kyuQuestions);
  const [questions, setQuestions] = useState(currenKyuQuestions);

  let randomIndex = Math.round(Math.random() * (questions.length - 1));
  const currentQuestionNum = currenKyuQuestions.length - questions.length + 1;

  const nextQuestion = () => {
    setQuestions(
      questions.filter((question) => question !== questions[randomIndex])
    );
    randomIndex = Math.round(Math.random() * (questions.length - 1));
  };

  useEffect(() => {
    setQuestions(currenKyuQuestions);
  }, currenKyuQuestions);

  return (
    <div className="flex z-20 justify-center items-center h-full m-auto">
      <div className="py-6 px-20 rounded bg-white border-[1px] border-gray-400 shadow-md">
        {!questions[0] && <p className="">Няма повече въпроси</p>}
        {questions[0] && (
          <div className="flex flex-col items-end gap-5 text-gray-800">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-center font-bold">
                  {questions[0]?.kyu} гуп - {currentQuestionNum}/
                  {currenKyuQuestions.length}
                </p>
                <p className="font-bold text-center text-lg">
                  {questions[randomIndex]?.question}
                </p>
              </div>
              <div className="flex text-gray-900 flex-col gap-2  font-semibold">
                {questions[randomIndex]?.answers.map(
                  ({ id, text, correct }) => {
                    return <Answers correct={correct} key={id} text={text} />;
                  }
                )}
              </div>
            </div>
            <Button label="Следващ" action={() => nextQuestion()} />
          </div>
        )}
      </div>
    </div>
  );
}
