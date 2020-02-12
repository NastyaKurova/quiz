import React from "react"
import classes from './FinishedQuiz.module.css'
import Button from '../UI/Button/Button'

const FinishedQuiz = props => {
  const successCount = Object.keys(props.results).filter(key => (props.results[key])).length;

  return (
    <div className={classes.FinishQuiz}>
      ИСТОРИЯ ОТВЕТОВ
      <ul>
        {props.quiz.map((quizItem, index) => {
          const cls = [
            'fa',
            props.results[quizItem.id] ? `fa-check ${classes.success}` : `fa-times ${classes.error}`
          ];
          return (
            <li key={index}>
              <strong>{index + 1}</strong>.&nbsp;
              {quizItem.question}
              <i className={cls.join(' ')}></i>

            </li>)
        })}
      </ul>
      <p>Правильно {successCount} из {props.quiz.length}</p>
      <div>
        <Button onClick={props.onRetry} type="primary">повторить</Button>
        <Button onClick={props.onRetry} type="success">перейти в список тестов</Button>
      </div>
    </div>
  )
}


export default FinishedQuiz