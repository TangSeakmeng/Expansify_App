import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpenses } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/dashboard');
    }

    onClick = () => {
        this.props.startRemoveExpenses({ id: this.props.expense.id })
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <div>
                <h1>Edit Expense</h1>
                <ExpenseForm expense={this.props.expense} buttonTitle='Edit Expense' onSubmit={this.onSubmit} />
                <button onClick={this.onClick}>Remove</button>
            </div>
        );
    };
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => {
        dispatch(startEditExpense(id, expense))
    },
    startRemoveExpenses: (data) => {
        dispatch(startRemoveExpenses(data))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);