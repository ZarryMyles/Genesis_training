import React, { useState, useEffect } from "react";
import axios from "axios";
import API from "./services/API";
import { useHistory } from "react-router-dom";
// css
import "./css/quiz.css";
import Preloader from "./Preloader";

export default function Quiz(props) {
  // state variables
  const [userId, setUserId] = useState(localStorage.getItem("user_id"));
  const [userInfo, setUserInfo] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState();
  const [loading, setLoading] = useState(true);
  const [displayDone, setdisplayDone] = useState(false);
  const history = useHistory();
  let userPath = API.userProfile + "/" + userId;

  useEffect(() => {
    getData(props.courseId);
    setLoading(false);
  }, []);
  let getData = async (id) => {
    const { data: info } = await axios.get(API.quizzes);
    setQuestions(info[id].questions);
    const { data: user } = await axios.get(userPath);
    setUserInfo(user);
  };

  const handleButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    function toTitleCase(text) {
      let rg = /(^\w{1}|\.\s*\w{1})/gi;
      let title = text.replaceAll("_", " ");
      title = title.replace(rg, (toReplace) => {
        return toReplace.toUpperCase();
      });
      return title;
    }
    const postScore = async (score) => {
      let newScore = {
        name: toTitleCase(props.courseName),
        courseId: props.courseId,
        score: (score / questions.length) * 10,
        completed: true,
      };
      userInfo.completedCourseId.push(parseInt(props.courseId));
      userInfo.completedCourses.push(newScore);
      axios.put(userPath, userInfo);
    };
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      setdisplayDone(true);
      postScore(score + 1);
    }
  };

  return loading ? (
    <Preloader size={"small"} color={"purple"} />
  ) : (
    <div className="quizContainer d-flex flex-lg-row flex-column">
      <div className="quizBody d-flex flex-lg-row flex-column">
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
              <div className="question-text text-lg-center ml-2">
                {questions
                  ? questions[currentQuestion].questionText
                  : "Please wait... "}
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
                : ""}
            </div>
          </>
        )}
      </div>
      <div className="quizButtons p-1">
        {displayDone && (
          <button
            className="btn btn-primary btn-block qB2"
            onClick={history.goBack}
          >
            Done
          </button>
        )}
      </div>
    </div>
  );
}
