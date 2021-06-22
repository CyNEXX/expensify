import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    }
    render() {
        return (<div>
            <div className='px-3 bg-light py-4'>
                <div className='content-container py-2'>
                    <h1>Add Expense</h1>
                </div>
            </div>
            <div className='content-container my-4'>
                <ExpenseForm
                    /*                     editForm={false} */
                    onSubmit={this.onSubmit}
                />
            </div>
        </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);