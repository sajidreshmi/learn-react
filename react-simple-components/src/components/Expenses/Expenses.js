import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const initialState = [
    ...props.items
  ]
  const [state, setstate] = useState(initialState)
  const changeTitle = (exp) => {
    console.log(state);

    setstate((prevState) => {
      let newData = prevState.map(element => {
        if (element.title == exp.title) {
          element.title = 'sajid'
        }
        return element
      });
      return newData
    });
  }
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        titleChangeBtnClicked={changeTitle}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        titleChangeBtnClicked={changeTitle}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        titleChangeBtnClicked={changeTitle}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
        titleChangeBtnClicked={changeTitle}
      />
    </Card>
  );
}

export default Expenses;
