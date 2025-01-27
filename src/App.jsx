import { useEffect, useState } from "react";

import questions from "./data/questions.json";

import Header from "./components/Header";
import Answers from "./components/Answers";

function App() {
  const [questionsLeft, setQuestionsLeft] = useState(questions);
  const [currentQuestion, setCurrentQuestion] = useState(
    Math.round(Math.random() * (questionsLeft.length - 1))
  );

  const nextQuestion = () => {
    setQuestionsLeft(
      questionsLeft.filter(
        (question) => question !== questionsLeft[currentQuestion]
      )
    );
  };

  useEffect(() => {
    setCurrentQuestion(Math.round(Math.random() * (questionsLeft.length - 1)));
  });

  return (
    <div className="h-screen overflow-hidden bg-blue-100">
      <Header />
      <div className="flex justify-center items-center min-h-full m-auto">
        {!questionsLeft[0] && <p>No more questions left</p>}
        {questionsLeft[0] && (
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <p className="font-mono font-semibold text-center text-lg">
                {questionsLeft[currentQuestion]?.question}
              </p>
              <div className="flex flex-col gap-2 text-gray-800 font-semibold">
                {questionsLeft[currentQuestion]?.answers.map(
                  ({ id, text, correct }) => {
                    return <Answers correct={correct} key={id} text={text} />;
                  }
                )}
              </div>
            </div>

            <div>
              <button
                className="py-1 px-4 rounded-full cursor-pointer bg-gray-500 text-white font-semibold drop-shadow-sm"
                onClick={() => nextQuestion()}
              >
                Следващ
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
