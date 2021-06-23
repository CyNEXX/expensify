import React from 'react';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className='px-3 bg-light py-4'>
                    <div className='content-container py-2'>
                        <h1>Edit Expense</h1>

                    </div>
                </div>
                <div className='content-container my-4'>
                    <div className='d-flex flex-column'>
                        <div>
                            <ExpenseForm
                                expense={this.props.expense}
                                editForm={true}
                                onSubmit={this.onSubmit}
                            />
                        </div>
                        <div className='col-sm-12 col-xl-3'>
                            <button className='btn btn-darkred w-100' onClick={this.onRemove}>Remove Expense</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchtoProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => { dispatch(startRemoveExpense(data)) }
});

export default connect(mapStateToProps, mapDispatchtoProps)(EditExpensePage);