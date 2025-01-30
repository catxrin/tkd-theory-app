import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { kyuQuestions } from "../store";

import Answers from "./Answers";

export default function Questionnaire() {
  const currenKyuQuestions = useRecoilValue(kyuQuestions);
  const [questions, setQuestions] = useState(currenKyuQuestions);
  const [disabled, setDisabled] = useState(true);

  const [questionIndex, setQuestionIndex] = useState(0);

  const currentQuestion = questions[questionIndex];
  const currentQuestionNum = questionIndex + 1;

  const nextQuestion = () => {
    setQuestionIndex((prev) => prev + 1);
    setDisabled(true);
  };

  useEffect(() => {
    setQuestions(currenKyuQuestions);
  }, currenKyuQuestions);

  return (
    <div className="flex z-20 justify-center items-center h-full m-auto">
      <div className="py-6 px-20 rounded bg-white border-[1px] border-gray-400 shadow-md">
        {!currentQuestion && <p className="">Няма повече въпроси</p>}
        {currentQuestion && (
          <div className="flex flex-col items-end gap-5 text-gray-800">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-center font-bold">
                  {questions[0]?.kyu} гуп - {currentQuestionNum}/
                  {currenKyuQuestions.length}
                </p>
                <p className="font-bold text-center text-lg">
                  {currentQuestion?.question}
                </p>
              </div>
              <div className="flex text-gray-900 flex-col gap-2  font-semibold">
                {currentQuestion?.answers.map(({ id, text, correct }) => (
                  <div
                    key={id}
                    onClick={() => correct && setDisabled(!disabled)}
                  >
                    <Answers correct={correct} text={text} />
                  </div>
                ))}
              </div>
            </div>
            <button
              disabled={disabled}
              onClick={() => nextQuestion()}
              className={`btn-primary transition duration-700 ease-in-out ${
                disabled && "!bg-gray-800/40"
              }`}
            >
              Следващ
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
