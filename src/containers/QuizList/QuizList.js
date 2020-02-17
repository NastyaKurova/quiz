import React, {Component} from 'react';
import {NavLink} from "react-router-dom"
import classes from './QuizList.module.css'

class QuizList extends Component {

  renderList() {
    return [1, 2, 3].map((q, index) => {
      return (
        <li key={index}>
          <NavLink to={'/quiz/' + q}>
            Тест {q}
          </NavLink>
        </li>
      )
    })
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Список тестов</h1>
          <ul>
            {this.renderList()}
          </ul>
        </div>
      </div>
    );
  }
}

export default QuizList;