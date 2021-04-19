import React from 'react';
import { editExpense, removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {

    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    onRemove = () => {
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1>Edit Expense</h1>
                <p>id: {this.props.expense.id}</p>
                <ExpenseForm
                    expense={this.props.expense}
                    editForm={true}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchtoProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (data) => { dispatch(removeExpense(data)) }
});

export default connect(mapStateToProps, mapDispatchtoProps)(EditExpensePage);