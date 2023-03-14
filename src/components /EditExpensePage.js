import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  let { id } = useParams();
  const expenses = useSelector((state) => state.expenses);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const expense = expenses.find((expense) => expense.id === id);

  return (
    <div>
      <ExpenseForm
        expense={expense}
        onSubmit={(expense) => {
          dispatch(editExpense(id, expense));
          navigate('/');
        }}
      />
      <button
        onClick={(expense) => {
          dispatch(removeExpense({ id: id }));
          navigate('/');
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default EditExpensePage;
