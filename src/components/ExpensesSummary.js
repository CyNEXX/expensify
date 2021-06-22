import React from 'react';
import numeral from 'numeral';
import selectAllExpenses from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const ExpensesSummary = ({ count, total }) => {
    return (<div className='px-3 bg-light py-4'>
        <div className='content-container py-2'>
            {count == 0 ?
                <h2 className='font-weight-light content-container p-0'>No expenses within range</h2> :
                <h2 className='font-weight-light content-container p-0'>Viewing <span className='font-weight-bold'>{count}</span> {count !== 1 ? 'expenses' : 'expense'} totalling <span className='font-weight-bold'>{numeral(total).format('$0,0.00')}</span></h2>}
                <div>
                    <Link className='btn btn-primary mt-3' to='/create'>Add Expense</Link>
                </div>
        </div>
    </div>);
};

const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters);
    return {
        count: expenses.length,
        total: selectAllExpenses(expenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary);

