import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Add Expense</h1>
      <Link to='/'>Go Home</Link>
      <ExpenseForm
        onSubmit={(expense) => {
          props.dispatch(addExpense(expense));
          navigate('/');
        }}
      />
    </div>
  );
};

export default connect()(AddExpensePage);
