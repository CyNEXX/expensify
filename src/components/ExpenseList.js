import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div className='fieldgroup col-12 flex-column'>
        <div className='fieldgroup col-12 bg-dark basic-input border text-light py-3'>
            <div className='pl-1 my-auto d-none d-sm-block d-xl-none'>Expenses</div>
            <div className='pl-1 my-auto d-sm-none d-xl-block'>Expense</div>
            <div className='pr-1 my-auto d-sm-none d-xl-block'>Amount</div>
        </div>
        <div className='fieldarray mb-5'>
            {
                props.expenses.length === 0 ? (
                    <div className='d-flex py-3 font-italic text-muted justify-content-center'>
                        <h5>No expense</h5>
                    </div>) : (
                    props.expenses.map((expense, i) => {
                        return <ExpenseListItem
                            key={expense.id}
                            count={i + 1}
                            {...expense} />
                    })
                )
            }
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);