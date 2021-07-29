import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  console.log(props.title)
  return (
    <Card Card className='expense-item' >
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={() => props.titleChangeBtnClicked(props)}>Change Title</button>
    </Card >
  );
}

export default ExpenseItem;
