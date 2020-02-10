import React, {Component} from "react"
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/AcriveQuiz/AcriveQuiz";

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        id: 1,
        question: "Какого цвета небо?",
        rightAnswer: 2,
        answers: [
          {text: 'черный', id: 1},
          {text: 'синий', id: 2},
          {text: 'зеленый', id: 3},
          {text: 'желтый', id: 4}
        ]
      },
      {
        id: 2,
        question: "Какого цвета солнце?",
        rightAnswer: 4,
        answers: [
          {text: 'черный', id: 1},
          {text: 'синий', id: 2},
          {text: 'зеленый', id: 3},
          {text: 'желтый', id: 4}
        ]
      }
    ]
  };
  onAnswerClickHandler = answerId => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === 'success') {
        return;
      }
    }
    const question = this.state.quiz[this.state.activeQuestion];
    if (question.rightAnswer === answerId) {
      this.setState({
        answerState: {[answerId]: 'success'}
      })
      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {

        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }
        window.clearTimeout(timeout)
      }, 1000)

    } else {
      this.setState({
        answerState: {[answerId]: 'error'}
      })
    }

  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>ОТВЕТЬТЕ НА ВОПРОСЫ</h1>
          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
            state={this.state.answerState}
          />
        </div>
      </div>
    )
  }
}

export default Quiz