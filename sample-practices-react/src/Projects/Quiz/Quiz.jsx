import "./style.css";

import React, { Component } from "react";

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [
        {
          questionsTitle: "Capital of Iran?",
          answerQuestions: [
            { answerText: "Tehran", isCorrect: false },
            { answerText: "Tabriz", isCorrect: true },
            { answerText: "Zanjan", isCorrect: false },
            { answerText: "Qom", isCorrect: false },
          ],
        },
        {
          questionsTitle: "Iran Capital of ?",
          answerQuestions: [
            { answerText: "Zanjan", isCorrect: false },
            { answerText: "Qom", isCorrect: false },
            { answerText: "Tehran", isCorrect: false },
            { answerText: "Tabriz", isCorrect: true },
          ],
        },
        {
          questionsTitle: "Capital Iran? of",
          answerQuestions: [
            { answerText: "Tabriz", isCorrect: true },
            { answerText: "Zanjan", isCorrect: false },
            { answerText: "Tehran", isCorrect: false },
            { answerText: "Qom", isCorrect: false },
          ],
        },
        {
          questionsTitle: "of Capital Iran?",
          answerQuestions: [
            { answerText: "Zanjan", isCorrect: false },
            { answerText: "Tehran", isCorrect: false },
            { answerText: "Tabriz", isCorrect: true },
            { answerText: "Qom", isCorrect: false },
          ],
        },
      ],
      currentQuestions: 0,
      showScore: false,
      score: 0,
    };
  }

  handleClick(isCorrect) {
    if (isCorrect) {
      this.setState((prevState) => {
        return {
          score: prevState.score + 1,
        };
      });
    }

    if (this.state.currentQuestions === 3) {
      this.setState({ showScore: true });
    } else {
      this.setState((prevState) => {
        return {
          currentQuestions: prevState.currentQuestions + 1,
        };
      });
    }
  }

  render() {
    return (
      <div className="container mt-sm-5 my-1">
        {this.state.showScore ? (
          <div>
            تعداد جواب درست {this.state.score} از {this.state.questions.length}
          </div>
        ) : (
          <div className="question ml-sm-5 pl-sm-5 pt-2">
            <div className="py-2 h5">
              <b>
                {
                  this.state.questions[this.state.currentQuestions]
                    .questionsTitle
                }
              </b>
            </div>
            <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
              {this.state.questions[
                this.state.currentQuestions
              ].answerQuestions.map((answer) => (
                <label className="options">
                  {answer.answerText}
                  <input
                    onClick={this.handleClick.bind(this, answer.isCorrect)}
                    type="radio"
                    name="radio"
                  />
                  <span className="checkmark"></span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Quiz;
