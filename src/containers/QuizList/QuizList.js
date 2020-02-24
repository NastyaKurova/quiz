import React, {Component} from 'react';
import {NavLink} from "react-router-dom"
import classes from './QuizList.module.css'
import axios from '../../axios/axios-quiz'
import Loader from "../../components/UI/Loader/Loader";

class QuizList extends Component {
  state = {
    quizes: [],
    loading: true
  };

  renderList() {
    return this.state.quizes.map(q => {
      return (
        <li key={q.id}>
          <NavLink to={'/quiz/' + q.id}>
            {q.name}
          </NavLink>
        </li>
      )
    })
  }

  async componentDidMount() {
    try {
      const response = await axios.get('/quizes.json');
      const quizes = [];
      Object.keys(response.data).map((key, index) => {
        quizes.push({
          id: key,
          name: `Тест № ${index + 1}`
        });
        return this.setState({
          quizes,
          loading: false
        })
      });
    } catch (e) {

    }
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Список тестов</h1>
          {
            this.state.loading ? <Loader/> :
              <ul>
                {this.renderList()}
              </ul>
          }

        </div>
      </div>
    );
  }
}

export default QuizList;