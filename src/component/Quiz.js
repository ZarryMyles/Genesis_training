import React, { useState, useEffect } from "react";
import axios from "axios";
import API from "./API";
// css
import "./css/quiz.css";
import Preloader from "./Preloader";

export default function Quiz(props) {
  // state variables
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // console.log);
    console.log(props.courseId);
    getData(props.courseId);
    setLoading(false);
  }, []);
  let getData = async (id) => {
    console.log(id);
    const { data: info } = await axios.get(API.quizzes);
    setQuestions(info[id - 1].questions);
  };

  // const questions = [
  //   {
  //     questionText: "What is the capital of France?",
  //     answerOptions: [
  //       { answerText: "New York", isCorrect: false },
  //       { answerText: "London", isCorrect: false },
  //       { answerText: "Paris", isCorrect: true },
  //       { answerText: "Dublin", isCorrect: false },
  //     ],
  //   },
  //   {
  //     questionText: "Who is CEO of Tesla?",
  //     answerOptions: [
  //       { answerText: "Jeff Bezos", isCorrect: false },
  //       { answerText: "Elon Musk", isCorrect: true },
  //       { answerText: "Bill Gates", isCorrect: false },
  //       { answerText: "Tony Stark", isCorrect: false },
  //     ],
  //   },
  //   {
  //     questionText: "The iPhone was created by which company?",
  //     answerOptions: [
  //       { answerText: "Apple", isCorrect: true },
  //       { answerText: "Intel", isCorrect: false },
  //       { answerText: "Amazon", isCorrect: false },
  //       { answerText: "Microsoft", isCorrect: false },
  //     ],
  //   },
  //   {
  //     questionText: "How many Harry Potter books are there?",
  //     answerOptions: [
  //       { answerText: "1", isCorrect: false },
  //       { answerText: "4", isCorrect: false },
  //       { answerText: "6", isCorrect: false },
  //       { answerText: "7", isCorrect: true },
  //     ],
  //   },
  // ];

  const handleButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return loading ? (
    <Preloader size={"small"} color={"purple"} />
  ) : (
    <div className="quizContainer">
      <div className="quizBody">
        {showScore ? (
          <div className="score-section">
            You scored {score ? score : 0} out of{" "}
            {questions ? questions.length : 0}
          </div>
        ) : (
          <>
            <div className="question-section">
              {/* Counts the number of questions */}
              <div className="question-count">
                <span>
                  Question {currentQuestion ? currentQuestion + 1 : 1}
                </span>
                /{questions ? questions.length : 0}
              </div>
              {/* Displays the current question */}
              <div className="question-text">
                {questions
                  ? questions[currentQuestion].questionText
                  : "Is the question laoding? "}
              </div>
            </div>

            <div className="answer-section">
              {questions
                ? questions[currentQuestion].answerOptions.map(
                    (answerOptions) => (
                      <button
                        className="buttonQuiz"
                        onClick={() =>
                          handleButtonClick(answerOptions.isCorrect)
                        }
                      >
                        {answerOptions.answerText}
                      </button>
                    )
                  )
                : "Yes"}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
